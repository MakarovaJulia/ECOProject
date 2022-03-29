import React from 'react';
import styles from './index.module.scss'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

export const Map = (props: any) => {
    const {
        children
    } = props;

    return (
        <>
            {/*<MapContainer*/}
            {/*    className={styles.map_container}*/}
            {/*    center={[51.0, 19.0]}*/}
            {/*    zoom={4}*/}
            {/*>*/}
            {/*    <TileLayer*/}
            {/*        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"*/}
            {/*        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'*/}
            {/*    />*/}
            {/*</MapContainer>*/}
        </>
    )
}