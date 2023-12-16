// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import MapView, {Marker} from 'react-map-gl';
import styled from 'styled-components';

export function Map() {
    return (
        <MapView
            style={{width: '100%', height: '700px', overflow: 'hidden'}}
            mapboxAccessToken='pk.eyJ1IjoiamVkaXlvemgiLCJhIjoiY2xxNmthaWUwMDk1djJ2czl1NHVscWJhZiJ9.2MgJzeCIeEaT7lJPq04kfw'
            initialViewState={{
                latitude: 31.0461,
                longitude: 34.8516,
                zoom: 7,
            }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
        >
            <StyledMarker
                longitude={34.97520}
                latitude={31.90166}
                anchor='bottom'
            ><div>{'Home 🏠'}️</div></StyledMarker>
            <StyledMarker
                longitude={34.79153}
                latitude={32.07386}
                anchor='bottom'
            ><div>{'Work 💼'}️</div></StyledMarker>
        </MapView>
    );
}

const StyledMarker = styled(Marker)`
    padding: 4px 8px;
    background-color: black;
    color: white;
    border-radius: 8px;
    font-size: 10px;
`;
