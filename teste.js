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


      function detectaTeclasPressionadas(event) {
        console.log("Tecla pressionada:", event.key);

        // Verifica se a tecla pressionada é um número
        if (!isNaN(event.key) && event.key !== " ") {
            event.preventDefault(); // Impede a inserção da tecla no campo de entrada
            console.log("Tecla bloqueada:", event.key);
            document.getElementById("texto5").innerHTML = "Você precionou uma tecla numérica, o nº:  " + event.key + ".  A tecla está bloqueada. " ;
        } else {
            // Se a tecla não é um número, exibe a mensagem com a tecla pressionada
            document.getElementById("texto5").innerHTML = "Você pressionou uma tecla dentro do campo de entrada - A chave era: " + event.key;
        
       }
      }