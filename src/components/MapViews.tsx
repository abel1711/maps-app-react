import { Map } from "mapbox-gl";
import { useContext, useLayoutEffect, useRef } from "react"
import { MapsContext, PlacesContext } from "../context"
import { Loading } from "./";



export const MapViews = () => {

    const { isLoading, userLocation } = useContext( PlacesContext );
    const { setMap } = useContext( MapsContext );
    const mapDivRef = useRef<HTMLDivElement>(null);

    
    useLayoutEffect(() => {
        if( !isLoading ){
            
            const map = new Map({
                container: mapDivRef.current! , // container ID
                style: 'mapbox://styles/mapbox/dark-v10', // style URL
                center: userLocation , // starting position [lng, lat]
                zoom: 14 // starting zoom
                });
                
            setMap( map );
        }

    }, [ isLoading ])
    
    if (isLoading){
        return <Loading />
    };

    return (
        <div
            ref={ mapDivRef }
            style={{
                height: '100vh',
                left: '0',
                position: 'fixed',
                top: '0',
                width: '100vw'
            }}
        >
        </div>
    )
}
