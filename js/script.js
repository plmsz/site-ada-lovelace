document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  nomeUser = document.getElementById("nome").value;
  mail = document.getElementById("email").value;
  phone = document.getElementById("telefone").value;

  if (nomeUser != "" && mail !="" && phone != ""){
    alert("Prontinho, "+ nomeUser +"! Você receberá as novidades por e-mail.");
  }else{
    alert("Por favor, insira: nome, e-mail e número de telefone.");
  } 
}