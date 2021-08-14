import React, { useState, useEffect } from 'react';
// import { useSelector, shallowEqual } from 'redux';
import isElectron from 'is-electron';
import i18next from 'i18next';
import { gte } from 'lodash';
import { withRouter } from 'react-router-dom';
import styles from './styles.styl';
import { machineStore } from '../../../store/local-storage';

import { useRenderRecoveryModal, logPageView } from '../../utils';
import { HEAD_3DP, HEAD_CNC, HEAD_LASER } from '../../../constants';

// component
import Begin from './Begin';
import QuickStart from './QuickStart';
import MoreInfo from './MoreInfo';
import SettingGuideModal from './SettingGuideModal';
import MainToolBar from '../../layouts/MainToolBar';

const HomePage = (props) => { // Todo, what's the props ?
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        console.log('firsttime', machineStore, gte(machineStore.version, '3.16.0'), settingStore);
    }, []);
    useEffect(() => {
        const settingStore = machineStore.get('settings');
        console.log(machineStore, gte(machineStore.version, '3.16.0'), settingStore);
        document.querySelector('body').setAttribute('style', 'height: calc(100vh - 82px); background: #f5f5f7;');
        if (gte(machineStore?.version, '3.16.0') && (!settingStore || !settingStore?.finishGuide || settingStore?.guideVersion !== 1)) {
            setModalShow(true);
        } else {
            setModalShow(false);
        }
        if (isElectron()) {
            const ipc = window.require('electron').ipcRenderer;
            ipc.send('get-recent-file');
        }
        if (!props?.location?.state?.shouldNotLogPageView) {
            logPageView({
                pathname: '/'
            });
        }
    }, [machineStore.get('settings'), machineStore.version]);
    const printingModal = useRenderRecoveryModal(HEAD_3DP);
    const laserModal = useRenderRecoveryModal(HEAD_LASER);
    const cncModal = useRenderRecoveryModal(HEAD_CNC);

    return (
        <div className={styles.homepageContainer}>
            {props?.isPopup && (
                <MainToolBar
                    leftItems={[
                        {
                            title: 'Back',
                            name: 'MainToolbarBack',
                            action: () => props?.onClose()
                        }
                    ]}
                    mainBarClassName="background-transparent"
                />
            )}
            <Begin {...props} />
            <div className={styles.secondLine}>
                <QuickStart {...props} />
                <MoreInfo />
            </div>
            {modalShow
                && (
                    <SettingGuideModal
                        handleModalShow={setModalShow}
                        initLanguage={i18next.language}
                    />
                )
            }
            {props?.isPopup || printingModal || laserModal || cncModal}
        </div>
    );
};

export default withRouter(HomePage);
