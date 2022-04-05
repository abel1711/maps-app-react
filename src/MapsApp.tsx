import { MapsProvider, PlacesProvider } from "./context"
import { HomeScreen } from "./screens"

import './styles.css';


export const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapsProvider>
                <HomeScreen />
            </MapsProvider>
        </PlacesProvider>
    )
}
