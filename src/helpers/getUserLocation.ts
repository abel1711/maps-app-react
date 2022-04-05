


export const getUserLocation = async (): Promise<[number, number]> =>{

    return new Promise(( resolve, reject )=>{

        navigator.geolocation.getCurrentPosition(
            ({coords})=>{
                resolve([ coords.longitude, coords.latitude])
            },
            ( err )=>{
                alert(`Error al obtener geolocalización: ${err.message}`);
                console.log(err);
                reject();
            })

    })

}