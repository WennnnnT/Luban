import { useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import renderRecoveryModal from './renderRecoveryModal';

import { actions as projectActions } from '../../flux/project';

// this is an example of hooks plugin
export function useRecoveringProject(headType) {
    const findLastEnvironment = useSelector(state => state?.project[headType].findLastEnvironment, shallowEqual);
    // const openedFile = useSelecto`r(state => state?.project[headType].openedFile, shallowEqual);
    // UniApi.Window.setOpenedFile(o`penedFile ? openedFile.name : undefined);

    const [recoveringProject, setRecoveringProject] = useState(findLastEnvironment);

    useEffect(() => {
        if (findLastEnvironment) {
            setRecoveringProject(true);
        }
    }, [findLastEnvironment]);

    return [recoveringProject, setRecoveringProject];
}
export function useRenderRecoveryModal(page) {
    const dispatch = useDispatch();
    const [recoveringProject, setRecoveringProject] = useRecoveringProject(page);
    const returnModal = renderRecoveryModal(
        page,
        async () => {
            await dispatch(projectActions.clearSavedEnvironment(page));
            setRecoveringProject(false);
        }
    );
    if (recoveringProject) {
        return returnModal;
    } else {
        return null;
    }
}

export default {
    useRecoveringProject,
    useRenderRecoveryModal
};
