// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {SigmaContainer, useLoadGraph} from '@react-sigma/core';
import {useLayoutRandom} from '@react-sigma/layout-random';
import {MultiDirectedGraph} from 'graphology';
import React, {useEffect} from 'react';
import '@react-sigma/core/lib/react-sigma.min.css';

const randomNames = [
    'Zephyr', 'Athena', 'Orion', 'Juno', 'Apollo', 'Calypso', 'Phoenix', 'Artemis', 'Atlas', 'Circe',
    'Echo', 'Helios', 'Iris', 'Kronos', 'Luna', 'Morpheus', 'Nyx', 'Oceanus', 'Pandora', 'Perseus',
    'Rhea', 'Selene', 'Thanatos', 'Uranus', 'Vesta', 'Zeus', 'Hermes', 'Gaia', 'Hestia', 'Demeter',
    'Persephone', 'Hera', 'Ares', 'Aphrodite', 'Hephaestus', 'Dionysus', 'Eros', 'Hebe', 'Poseidon', 'Hades',
    'Hypnos', 'Nike', 'Janus', 'Nemesis', 'Tyche', 'Hecate', 'Triton', 'Boreas', 'Zelus', 'Doris',
];

const createGraphData = () => {
    const graph = new MultiDirectedGraph({multi: true}); // Enable multi-graph

    randomNames.forEach((name) => {
        graph.addNode(name, {label: name, size: 10, x: 1, y: 0});
    });

    const addedEdges = new Set();
    randomNames.forEach((name) => {
        let attempts = 0;
        while (graph.degree(name) < 5 && attempts < 15) { // Attempt to add up to 5 edges per node
            const targetIndex = Math.floor(Math.random() * randomNames.length);
            const targetName = randomNames[targetIndex];
            if (name !== targetName && !addedEdges.has(name + '-' + targetName)) {
                graph.addEdge(name, targetName);
                addedEdges.add(name + '-' + targetName); // Track added edges
            }
            attempts++;
        }
    });

    return graph;
};

const MySigmaComponent = () => {
    const loadGraph = useLoadGraph();
    const {assign} = useLayoutRandom();

    useEffect(() => {
        const graph = createGraphData();
        loadGraph(graph);
        assign();
    }, [loadGraph, assign]);

    return null;
};

export const NetworkDiagram = () => {
    return (
        <div style={{height: '500px'}}>
            <SigmaContainer>
                <MySigmaComponent/>
            </SigmaContainer>
        </div>
    );
};
