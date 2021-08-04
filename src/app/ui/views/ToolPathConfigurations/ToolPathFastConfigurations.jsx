import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import modal from '../../../lib/modal';
import i18n from '../../../lib/i18n';
import { actions as editorActions } from '../../../flux/editor';
import { actions as cncActions } from '../../../flux/cnc';
import Anchor from '../../components/Anchor';
// import CncParameters from './cnc/CncParameters';
import { toHump } from '../../../../shared/lib/utils';
import ToolParameters from './cnc/ToolParameters';
import ToolSelector from './cnc/ToolSelector';

import {
    CNC_DEFAULT_GCODE_PARAMETERS_DEFINITION,
    LASER_DEFAULT_GCODE_PARAMETERS_DEFINITION,
    HEAD_CNC,
    HEAD_LASER
} from '../../../constants';

function getFastEditSettingsKeys(toolPath) {
    const { headType, type: toolPathType, gcodeConfig } = toolPath;

    if (headType === HEAD_CNC) {
        if (toolPathType === 'vector') {
            return [
                'pathType', 'targetDepth', 'work_speed', 'plunge_speed', 'step_down', 'step_over'
            ];
        }
        if (toolPathType === 'image') {
            return [
                'targetDepth', 'work_speed', 'plunge_speed', 'step_down', 'step_over'
            ];
        }
        if (toolPathType === 'sculpt') {
            if (toolPath.materials.isRotate) {
                return [
                    'sliceMode', 'work_speed', 'plunge_speed', 'step_down', 'step_over'
                ];
            } else {
                return [
                    'targetDepth', 'work_speed', 'plunge_speed', 'step_down', 'step_over'
                ];
            }
        }
    }
    if (headType === HEAD_LASER) {
        if (toolPathType === 'vector') {
            const multiPasses = gcodeConfig?.multiPasses;
            const fillEnabled = gcodeConfig?.fillEnabled;
            // Todo
            const isMethodFill = (fillEnabled === 'true' || fillEnabled === true);

            if (isMethodFill) {
                return ['fillEnabled', 'fillInterval', 'workSpeed', 'fixedPower'];
            }
            if (multiPasses === 1) {
                return [
                    'fillEnabled', 'workSpeed', 'multiPasses', 'fixedPower'
                ];
            } else {
                return [
                    'fillEnabled', 'workSpeed', 'multiPasses', 'multiPassDepth', 'fixedPower'
                ];
            }
        }
        if (toolPathType === 'image') {
            const movementMode = gcodeConfig?.movementMode;
            if (movementMode === 'greyscale-line') {
                return [
                    'movementMode', 'fillInterval', 'workSpeed', 'fixedPower'
                ];
            }
            if (movementMode === 'greyscale-dot') {
                return [
                    'movementMode', 'fillInterval', 'dwellTime', 'fixedPower'
                ];
            }
        }
    }
    return [];
}


function ToolPathFastConfigurations(props) {
    const activeToolListDefinition = useSelector(state => state[props.headType]?.activeToolListDefinition, shallowEqual);
    const toolpath = props.toolpath;
    const toolDefinitions = useSelector(state => state[props.headType]?.toolDefinitions, shallowEqual);

    const dispatch = useDispatch();
    const [toolPath, setToolPath] = useState(toolpath);
    const [currentToolDefinition, setCurrentToolDefinition] = useState(activeToolListDefinition);
    const [fastSettings, setFastSettings] = useState({});

    async function handleToolSelectorChange(value) {
        setCurrentToolDefinition(value);
        if (props.headType === HEAD_CNC && value?.definitionId !== activeToolListDefinition?.definitionId) {
            await dispatch(cncActions.changeActiveToolListDefinition(value?.definitionId, value?.name, true));
        }
    }
    const saveToolPath = async () => {
        const toolParams = {};
        const gcodeConfig = {
            ...toolPath.gcodeConfig
        };
        const definition = currentToolDefinition;
        if (definition) {
            toolParams.definitionId = definition.definitionId;
            toolParams.definitionName = definition.name;
            toolParams.toolDiameter = definition.settings.diameter.default_value;
            toolParams.toolAngle = definition.settings.angle.default_value;
            toolParams.toolShaftDiameter = definition.settings.shaft_diameter.default_value;

            for (const key of Object.keys(definition.settings)) {
                if (['diameter', 'angle', 'shaft_diameter'].includes(key)) {
                    continue;
                }
                gcodeConfig[toHump(key)] = definition.settings[key].default_value;
            }
        }
        console.log('saveToolPath dddddddd', currentToolDefinition.settings, toolPath?.gcodeConfig);

        const newToolPath = {
            ...toolPath,
            gcodeConfig,
            toolParams
        };
        await dispatch(editorActions.saveToolPath(props.headType, newToolPath));
    };


    useLayoutEffect(() => {
        const newDefinition = _.cloneDeep(activeToolListDefinition);
        setCurrentToolDefinition(newDefinition);
        const fastEditSettings = {};
        if (toolPath && newDefinition) {
            const cncGcodeDefinition = CNC_DEFAULT_GCODE_PARAMETERS_DEFINITION;
            const { gcodeConfig } = toolPath;
            let allDefinition = {};
            if (props.headType === HEAD_CNC) {
                Object.keys(cncGcodeDefinition).forEach((key) => {
                    cncGcodeDefinition[key].default_value = gcodeConfig[key];
                    // isGcodeConfig is true means to use updateGcodeConfig, false means to use updateToolConfig
                    cncGcodeDefinition[key].isGcodeConfig = true;
                });
                if (newDefinition?.shouldSaveToolpath) {
                    allDefinition = {
                        ...cncGcodeDefinition,
                        ...newDefinition?.settings
                    };
                } else {
                    allDefinition = {
                        ...cncGcodeDefinition
                    };
                }
            }
            if (props.headType === HEAD_LASER) {
                allDefinition = LASER_DEFAULT_GCODE_PARAMETERS_DEFINITION;
                Object.keys(allDefinition).forEach((key) => {
                    allDefinition[key].default_value = gcodeConfig[toHump(key)];
                    allDefinition[key].isGcodeConfig = true;
                });
            }
            const fastEditSettingsKeys = getFastEditSettingsKeys(toolPath);
            fastEditSettingsKeys.forEach((key) => {
                if (allDefinition[key]) {
                    fastEditSettings[key] = allDefinition[key];
                }
            });
            console.log('fastEditSettings', gcodeConfig, fastEditSettings);
            setFastSettings(fastEditSettings);
            if (activeToolListDefinition?.shouldSaveToolpath === true) {
                saveToolPath();
            }
        }
    }, [activeToolListDefinition]);

    const updateCncActiveToolDefinition = async (currentToolPath) => {
        const { toolParams, gcodeConfig } = currentToolPath;
        const activeToolDefinition = _.cloneDeep(activeToolListDefinition);

        const oldTooldefinition = toolDefinitions.find((d) => {
            return d.name === toolParams.definitionName && d.definitionId === toolParams.definitionId;
        });
        if (oldTooldefinition) {
            activeToolDefinition.definitionId = oldTooldefinition.definitionId;
            activeToolDefinition.name = oldTooldefinition.name;
            activeToolDefinition.settings.angle.default_value = toolParams?.toolAngle;
            activeToolDefinition.settings.diameter.default_value = toolParams?.toolDiameter;
            activeToolDefinition.settings.shaft_diameter.default_value = toolParams?.toolShaftDiameter;
            activeToolDefinition.settings.jog_speed.default_value = gcodeConfig?.jogSpeed;
            activeToolDefinition.settings.plunge_speed.default_value = gcodeConfig?.plungeSpeed;
            activeToolDefinition.settings.work_speed.default_value = gcodeConfig?.workSpeed;
            activeToolDefinition.settings.step_down.default_value = gcodeConfig?.stepDown;
            activeToolDefinition.settings.step_over.default_value = gcodeConfig?.stepOver;
        }
        if (currentToolDefinition?.definitionId !== activeToolDefinition?.definitionId) {
            await dispatch(cncActions.changeActiveToolListDefinition(activeToolDefinition?.definitionId, activeToolDefinition?.name));
        }
        await dispatch(cncActions.changeActiveToolListDefinition(activeToolDefinition.definitionId, activeToolDefinition.name));
        setCurrentToolDefinition(activeToolDefinition);
    };

    useEffect(() => {
        const newToolPath = _.cloneDeep(toolpath);
        setToolPath(newToolPath);
        console.log('saveToolPath cccccccc', newToolPath);
        if (!_.isNull(toolpath) && props.headType === HEAD_CNC) {
            updateCncActiveToolDefinition(newToolPath);
        }
    }, [toolpath]);

    const actions = {
        updateToolConfig: async (settingName, value) => {
            const option = {};
            option[toHump(settingName)] = value;
            const newToolPath = {
                ...toolPath,
                gcodeConfig: {
                    ...toolPath.gcodeConfig,
                    ...option
                }
            };
            dispatch(editorActions.saveToolPath(props.headType, newToolPath));
        },
        checkIfDefinitionModified() {
            if (props.headType === HEAD_CNC) {
                return !Object.entries(activeToolListDefinition.settings).every(([key, setting]) => {
                    return currentToolDefinition && currentToolDefinition.settings[key].default_value === setting.default_value;
                });
            } else {
                return false;
            }
        },
        cancelUpdateToolPath() {
            props.onClose && props.onClose();
        },
        updateToolPath(option) {
            setToolPath({
                ...toolPath,
                ...option
            });
        },
        onDuplicateToolNameDefinition: async (inputValue) => {
            const newToolDefinition = {
                ...currentToolDefinition,
                name: inputValue
            };
            await dispatch(cncActions.duplicateToolListDefinition(newToolDefinition));
            await dispatch(cncActions.changeActiveToolListDefinition(newToolDefinition.definitionId, newToolDefinition.name));
        },
        setCurrentValueAsProfile: () => {
            const activeToolDefinition = currentToolDefinition;
            const definitionsWithSameCategory = toolDefinitions.filter(d => d.category === activeToolDefinition.category);
            // make sure name is not repeated
            while (definitionsWithSameCategory.find(d => d.name === activeToolDefinition.name)) {
                activeToolDefinition.name = `#${activeToolDefinition.name}`;
            }

            const popupActions = modal({
                title: i18n._('Create Profile'),
                body: (
                    <React.Fragment>
                        <p>{i18n._('Enter Tool Name')}</p>
                    </React.Fragment>

                ),
                defaultInputValue: activeToolDefinition.name,
                footer: (
                    <button
                        type="button"
                        className="sm-btn-large sm-btn-primary"
                        onClick={async () => {
                            await actions.onDuplicateToolNameDefinition(popupActions.getInputValue());
                            popupActions.close();
                        }}
                    >
                        {i18n._('OK')}
                    </button>
                )
            });
        },
        updateGcodeConfig: (option) => {
            if (props.headType === HEAD_LASER) {
                if (!option.fixedPower) {
                    if (option.movementMode === 'greyscale-line') {
                        option.fixedPower = 50;
                    }
                    if (option.movementMode === 'greyscale-dot') {
                        option.fixedPower = 30;
                    }
                }
            }
            const newToolPath = {
                ...toolPath,
                gcodeConfig: {
                    ...toolPath.gcodeConfig,
                    ...option
                }
            };
            console.log('updateGcodeConfig', newToolPath);
            dispatch(editorActions.saveToolPath(props.headType, newToolPath));
        }
    };
    if (!toolPath) {
        return null;
    }
    // const isModifiedDefinition = actions.checkIfDefinitionModified();
    // console.log('isModifiedDefinition', isModifiedDefinition);
    return (
        <React.Fragment>
            <div className={classNames(
                'border-default-grey-1',
                'margin-top-16',
                'border-radius-8',
                'clearfix'
            )}
            >
                <div className="sm-flex height-40 border-bottom-normal padding-horizontal-16">
                    <span className="sm-flex-width heading-3">{i18n._('General Parameters')}</span>
                </div>
                <div className="padding-horizontal-16 padding-vertical-16">
                    {toolPath.headType === HEAD_CNC && currentToolDefinition && (
                        <ToolSelector
                            toolDefinition={currentToolDefinition}
                            setCurrentToolDefinition={handleToolSelectorChange}
                            toolDefinitions={toolDefinitions}
                            isModifiedDefinition={() => {
                                return !Object.entries(currentToolDefinition.settings).every(([key, setting]) => {
                                    return fastSettings && fastSettings[key].default_value === setting.default_value;
                                });
                            }}
                            setCurrentValueAsProfile={() => {}}
                        />
                    )}
                    <ToolParameters
                        styleSize="middle"
                        settings={fastSettings}
                        updateToolConfig={actions.updateToolConfig}
                        updateGcodeConfig={actions.updateGcodeConfig}
                        toolPath={toolPath}
                    />
                    <Anchor
                        className={classNames(
                            'float-r',
                            'link-text',
                            'margin-bottom-16'
                        )}
                    >
                        {i18n._('More')}
                    </Anchor>
                </div>
            </div>
        </React.Fragment>
    );
}
ToolPathFastConfigurations.propTypes = {
    onClose: PropTypes.func,
    headType: PropTypes.string,
    toolpath: PropTypes.object.isRequired
};
export default ToolPathFastConfigurations;
