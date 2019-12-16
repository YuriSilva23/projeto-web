<?php 


function usuarioEstaLogado(){

return  isset($_COOKIE["usuario_logado"]); ?>
"<script>location.href='index.php?falhaDeSeguranca=true'</script>";
die();
<?php 

}




function verificaUsuario(){

  if (!usuarioEstaLogado()){

?>
"<script>location.href='index.php?falhaDeSeguranca=true'</script>";
  die(); <?php 
  
}

}


function usuarioLogado() 
{

  return  $_COOKIE["usuario_logado"];

}


function logaUsuario($email) {

   setcookie("usuario_logado", $email, time()+60);

}
