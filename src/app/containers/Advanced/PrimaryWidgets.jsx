import classNames from 'classnames';
import _ from 'lodash';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Sortable from 'react-sortablejs';
import confirm from '../../lib/confirm';
import i18n from '../../lib/i18n';
import store from '../../store';
import Widget from '../../widgets';
import styles from './widgets.styl';


// Widget container on the left of workspace.
class PrimaryWidgets extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        defaultWidgets: PropTypes.array.isRequired,

        toggleToDefault: PropTypes.func.isRequired,
        onRemoveWidget: PropTypes.func.isRequired,
        onDragStart: PropTypes.func.isRequired,
        onDragEnd: PropTypes.func.isRequired
    };

    // avoid using nested state or props in purecomponent
    state = {
        primaryWidgets: store.get('developerPanel.widgets')
    };

    componentDidUpdate() {
        const { primaryWidgets } = this.state;

        // Calling store.set() will merge two different arrays into one.
        // Remove the property first to avoid duplication.
        store.replace('developerPanel.widgets', primaryWidgets);
    }

    removeWidget = (widgetId) => () => {
        confirm({
            title: i18n._('Remove Widget'),
            body: i18n._('Are you sure you want to remove this widget?')
        }).then(() => {
            const primaryWidgets = _.slice(this.state.primaryWidgets);
            _.remove(primaryWidgets, (n) => (n === widgetId));
            this.setState({ primaryWidgets });

            if (widgetId.match(/\w+:[\w-]+/)) {
                // Remove forked widget settings
                store.unset(`widgets["${widgetId}"]`);
            }

            this.props.onRemoveWidget(widgetId);
        });
    };

    render() {
        const { className = '', defaultWidgets } = this.props;
        const widgets = this.state.primaryWidgets
            .map(widgetId => (
                <div
                    data-widget-id={widgetId}
                    key={widgetId}
                    style={{ display: _.includes(defaultWidgets, widgetId) ? 'block' : 'block' }}
                >
                    <Widget
                        widgetId={widgetId}
                        onRemove={this.removeWidget(widgetId)}
                        onToggle={this.props.toggleToDefault(widgetId)}
                        sortable={{
                            handleClassName: 'sortable-handle',
                            filterClassName: 'sortable-filter'
                        }}
                    />
                </div>
            ));

        return (
            <Sortable
                className={classNames(className, styles.widgets)}
                options={{
                    animation: 150,
                    delay: 0, // Touch and hold delay
                    group: {
                        name: 'primary',
                        pull: true,
                        put: ['secondary']
                    },
                    handle: '.sortable-handle', // Drag handle selector within list items
                    filter: '.sortable-filter', // Selectors that do not lead to dragging
                    chosenClass: 'sortable-chosen', // Class name for the chosen item
                    ghostClass: 'sortable-ghost', // Class name for the drop placeholder
                    dataIdAttr: 'data-widget-id',
                    onStart: this.props.onDragStart,
                    onEnd: this.props.onDragEnd
                }}
                onChange={(order) => {
                    this.setState({
                        primaryWidgets: order
                    });
                }}
            >
                {widgets}
            </Sortable>
        );
    }
}

export default PrimaryWidgets;
