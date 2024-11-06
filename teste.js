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


      function voltaPagina(){

        let length = history.length;
        document.getElementById("texto3").innerHTML = "Número de URLs na lista de histórico: " + length;
        
        if (length > 1) {
            history.back(); 
        } else {
            alert("Não há uma página anterior no histórico.");
        }
    
      }

      function verificaCookies(){

        if (navigator.cookieEnabled) {
          alert("Cookies estão habilitados.");
          document.getElementById("texto4").innerHTML = "Cookies estão habilitados no navegador.";
      } else {
          alert("Cookies não estão habilitados.");
          document.getElementById("texto4").innerHTML = "Cookies não estão habilitados no navegador.";
      }
    }


        function mudarCor() {
            document.getElementById("caixa").style.backgroundColor = "blueviolet";
        }

        function restaurarCor() {
          document.getElementById("caixa").style.backgroundColor = "Khaki";
      }