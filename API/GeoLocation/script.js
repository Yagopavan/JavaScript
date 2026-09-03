navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude: ",posicao.coords.Latitude);
        console.log("Longitude: ",posicao.coords.Longitude); 
        console.log("Precisão: ", posicao.coords.accuracy);
    },
    function (erro){
        console.log("Não foi possível obter sua localização")
    }
)