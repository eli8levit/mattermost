// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

import type {DispatchFunc} from 'mattermost-redux/types/actions';

import {NetworkDiagram} from './network_diagram';

import {closeModal} from '../../actions/views/modals';
import {ModalIdentifiers} from '../../utils/constants';

export const NetworkDiagramModal = () => {
    const dispatch = useDispatch<DispatchFunc>();
    return (
        <Modal
            id='networkDiagramModal'
            dialogClassName='a11y__modal settings-modal'
            show={true}
            onHide={() => dispatch(closeModal(ModalIdentifiers.NETWORK_DIAGRAM_WIDGET))}
            role='dialog'
            aria-label='network-diagram-widget-modal'
        >
            <Modal.Header
                id='networkDiagramModal'
                closeButton={true}
            >
                <Modal.Title
                    componentClass='h1'
                    id='networkDiagramModalLabel'
                >
                    {'Network Diagram Widget'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <NetworkDiagram/>
            </Modal.Body>
        </Modal>
    );
};
