navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
    .then(function (Stream) {
        const video = document.querySelector("#camera");
        video.srcObject = Stream;
    })
    .catch(function (erro) {
        console.log("Erro ao acessar a câmera:", erro);
    })