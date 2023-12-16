// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

import type {DispatchFunc} from 'mattermost-redux/types/actions';

import {Map} from './map';

import {closeModal} from '../../actions/views/modals';
import {ModalIdentifiers} from '../../utils/constants';

export const MapWidgetModal = () => {
    const dispatch = useDispatch<DispatchFunc>();
    return (
        <Modal
            id='mapWidgetModal'
            dialogClassName='a11y__modal settings-modal'
            show={true}
            onHide={() => dispatch(closeModal(ModalIdentifiers.MAP_WIDGET))}
            role='dialog'
            aria-label='map-widget-modal'
        >
            <Modal.Header
                id='mapWidgetModal'
                closeButton={true}
            >
                <Modal.Title
                    componentClass='h1'
                    id='mapWidgetModalLabel'
                >
                    {'Map Widget'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Map/>
            </Modal.Body>
        </Modal>
    );
};
