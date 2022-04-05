import { Map, Marker, Popup } from "mapbox-gl";
import { MapsContext } from "./MapsContext"
import { useReducer } from 'react';
import { mapsReducer } from "./mapsReducer";

export interface MapsState {
    isMapReady: boolean;
    map?: Map;
};

const INITIAL_STATE : MapsState = {
    isMapReady: false,
    map: undefined
};

interface Props{
    children: JSX.Element | JSX.Element [];
}

export const MapsProvider = ({ children }: Props ) => {

    const [state, dispatch] = useReducer(mapsReducer, INITIAL_STATE );

    const setMap = ( map: Map )=>{

        const myPopup = new Popup().setHTML(`<h6>Aquí estoy!</h6>`);

        new Marker().setLngLat( map.getCenter()).setPopup(myPopup).addTo( map );

        dispatch({ type: 'setMap', payload: map});

    }

    return (
        <MapsContext.Provider value={{
            ...state,
            //Methods
            setMap
        }}>
            { children }
        </MapsContext.Provider>
    )
}
