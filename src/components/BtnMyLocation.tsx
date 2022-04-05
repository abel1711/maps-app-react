import { useContext } from 'react';
import { PlacesContext, MapsContext } from '../context';


export const BtnMyLocation = () => {

    const { map } = useContext(MapsContext);
    const { userLocation } = useContext(PlacesContext);

    const onClick = ()=>{
        if(!map){ throw new Error('No existe el mapa')};
        if(!userLocation){ throw new Error('No hay geolocalizacion del usuario')};

        map.flyTo({
            center: userLocation,
            zoom: 14
        })
    }
    return (
        <button 
            className="btn btn-primary"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 999
            }}
            onClick={ onClick }
        >
            Mi ubicación
        </button>
    )
}
