// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage, useIntl} from 'react-intl';
import {useDispatch, useSelector} from 'react-redux';
import Constants, {ModalIdentifiers, RHSStates} from 'utils/constants';

import IconButton from '@mattermost/compass-components/components/icon-button'; // eslint-disable-line no-restricted-imports

import {getRhsState} from 'selectors/rhs';

import KeyboardShortcutSequence, {KEYBOARD_SHORTCUTS} from 'components/keyboard_shortcuts/keyboard_shortcuts_sequence';
import OverlayTrigger from 'components/overlay_trigger';
import Tooltip from 'components/tooltip';

import type {GlobalState} from 'types/store';

import {openModal} from '../../../../actions/views/modals';
import {NetworkDiagramModal} from '../../../network_diagram_widget/network_diagram_modal';

const MapWidgetButton = (): JSX.Element => {
    const {formatMessage} = useIntl();
    const dispatch = useDispatch();
    const rhsState = useSelector((state: GlobalState) => getRhsState(state));

    const mentionButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(openModal({modalId: ModalIdentifiers.NETWORK_DIAGRAM_WIDGET, dialogType: NetworkDiagramModal}));
    };

    const tooltip = (
        <Tooltip id='recentMentions'>
            <FormattedMessage
                id='mapModal'
                defaultMessage='Network Diagram Modal'
            />
            <KeyboardShortcutSequence
                shortcut={KEYBOARD_SHORTCUTS.navMentions}
                hideDescription={true}
                isInsideTooltip={true}
            />
        </Tooltip>
    );

    return (
        <OverlayTrigger
            trigger={['hover', 'focus']}
            delayShow={Constants.OVERLAY_TIME_DELAY}
            placement='bottom'
            overlay={tooltip}
        >
            <IconButton
                size={'sm'}
                icon={'chart-bar'}
                toggled={rhsState === RHSStates.MENTION}
                onClick={mentionButtonClick}
                inverted={true}
                compact={true}
                aria-expanded={rhsState === RHSStates.MENTION}
                aria-controls='searchContainer' // Must be changed if the ID of the container changes
                aria-label={formatMessage({id: 'channel_header.recentMentions', defaultMessage: 'Network Diagram Modal'})}
            />
        </OverlayTrigger>
    );
};

export default MapWidgetButton;
