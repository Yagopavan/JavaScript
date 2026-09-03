const btnLocalizacao = document.querySelector("#btnLocalizacao");
const resultadoLocalizacao = document.querySelector("#resultadoLocalizacao");
const btnCamera = document.querySelector("#btnCamera");
const video = document.querySelector("#camera");
const mensagemCamera = document.querySelector("#mensagemCamera");

btnLocalizacao.addEventListener("click", function () {
    if (!navigator.geolocation) {
        resultadoLocalizacao.innerHTML = "Seu navegador não possui suporte à geolocalização.";
        return;
    }

    resultadoLocalizacao.innerHTML = "Buscando localização...";

    navigator.geolocation.getCurrentPosition(
        function (posicao) {
            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;
            const precisao = posicao.coords.accuracy;

            resultadoLocalizacao.innerHTML = `
                <strong>Latitude:</strong> ${latitude.toFixed(6)}<br>
                <strong>Longitude:</strong> ${longitude.toFixed(6)}<br>
                <strong>Precisão:</strong> ${precisao.toFixed(0)} metros
            `;
        },
        function () {
            resultadoLocalizacao.innerHTML = "Não foi possível obter sua localização. Verifique a permissão do navegador.";
        }
    );
});

btnCamera.addEventListener("click", function () {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
            video.srcObject = stream;
            mensagemCamera.textContent = "Câmera ativada com sucesso.";
            btnCamera.disabled = true;
            btnCamera.textContent = "Câmera aberta";
        })
        .catch(function () {
            mensagemCamera.textContent = "Não foi possível acessar a câmera. Verifique a permissão do navegador.";
        });
});
