import { Map } from "mapbox-gl";
import { MapsState } from "./MapsProvider";

type MapsActions = {
    type: 'setMap', payload: Map,
}

export const mapsReducer = ( state: MapsState, action: MapsActions): MapsState =>{


    switch (action.type) {
        
        case 'setMap':
            return {
                ...state,
                isMapReady: true,
                map: action.payload
            }
    
        default:
            return state;
    }

}