document.getElementById('texto').style.color = 'lime';

function alertaTexto(){

        alert("Bem-vinde ao nosso site!");
      }

    

function alteraCor() {
  if(  document.body.style.backgroundColor === "blue"){
    document.body.style.backgroundColor = "white"
    } else{
          document.body.style.backgroundColor = "blue";
        }
      }
      
      function exibeURLAtual(){
        alert("Mostrar URL");
        let origin = window.location.origin;

        let novoParagrafo = document.createElement("p");
        novoParagrafo.innerHTML = origin + ' - URL de Origem';
        novoParagrafo.style.color = "deeppink";

        document.body.appendChild(novoParagrafo);


      }
