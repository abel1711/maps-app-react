import { Map } from "mapbox-gl";
import { createContext } from "react";

interface MapsContextProps {
    isMapReady: boolean;
    map?: Map;
    setMap: ( map: Map )=> void;
}


export const MapsContext = createContext({} as MapsContextProps );