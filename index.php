<?php 
include("cabecalho.php");
 include ("logica-usuario.php");
?>
<?php 
 
 if(isset($_GET["login"]) && $_GET["login"]== true){
?>

<p class="alert-success">Logado com sucesso!</p>

<?php 
}
?>


<?php 
if(isset($_GET["login"]) && $_GET["login"]== false){
?>

<p class="alert-danger">USUARIO OU SENHA INVALIDA!</p>

<?php 
}
?>



<?php 

if (isset($_GET["falhaDeSeguranca"]) && $_GET["falhaDeSeguranca"]==true) {

	?>
<p class="alert-danger">Você não tem acesso a esta funcionalidade!</p>


<?php
}

?>
<h1>Bem vindo</h1><br>

<?php 
if (usuarioEstaLogado()){

?>
<p class="text-success"> Você está logado como <?=usuarioLogado()?>.</p>

<?php

} else {

?>

       <h1>git github</h1><br>
	     <form action="login.php" method="post">
		 <table class="table">
			<tr>
				<td><b>Email:</b></td>
				<td><input class="form-control" type="email" name="email"></td>
			</tr>
			<tr>
				<td><b>Senha:</b></td>
				<td><input class="form-control" type="password" name="senha"></td>
			</tr>
			<tr>
				<td><button type="submit" class="btn btn-primary">Login:</button></td>
			</tr>			
		</table>
	</form>
	<?php
	}
    ?>
<?php include("rodape.php")?>