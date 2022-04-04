import { PlacesState } from './PlacesProvider';

type PlacesAction = { 
    type: 'userSetLocation', payload: [number, number ]
};

export const placesReducer = ( state: PlacesState, action: PlacesAction ):PlacesState=>{

    switch (action.type) {
        case 'userSetLocation':
            return{
                ...state,
                isLoading: false,
                userLocation: action.payload
            }        
    
        default:
            return state
    }
    
}