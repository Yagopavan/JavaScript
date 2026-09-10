const canvas = document.querySelector("#canva");
const contexto = canvas.getContext("2d");

//Desenha uma linha 
contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50, 200);
contexto.lineTo(50, 10);
contexto.fillRect(60 , 50, 150, 100);
contexto.strokeRect(250 , 50, 150, 100);
contexto.stroke();

contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);
contexto.stroke();

