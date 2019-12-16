		<?php 
			include("cabecalho.php");
		    include("conecta.php");
			include("banco-voto.php");
		?>
		<?php
		    $voto =$_POST["voto"];
			$ip=getenv("REMOTE_ADDR");
			insereIp($conexao, $ip);	


		if( $voto =='excelente'){
	    quantidadeExcelente($conexao);
?>
	<br><p class="alert-success"> O seu Voto foi realizado com sucesso!</p>


<?php }

	elseif( $voto =='bom'){
	quantidadeBom($conexao);
?>
	<br><p class="alert-success"> O seu Voto foi realizado com sucesso!</p>


<?php }

	else if( $voto =='regular'){
	quantidadeRegular($conexao);
?>
	<br><p class="alert-success"> O seu Voto foi realizado com sucesso!</p>

<?php }
	else if( $voto =='ruim'){
	quantidadeRuim($conexao);
?>
	<br><p class="alert-success"> O seu Voto foi realizado com sucesso!</p>


<?php }

else {

	$msg = mysqli_error($conexao);
?>

<br><p class="alert-danger">O seu voto nao foi realizado com sucesso! Erro:<?= $msg; ?> </p>

<?php 
	}

	echo $ip;
?>

		<table class="table table-striped table-bordered" stile="text-align:lefy">
			<h3>Votos computados:</h3>
					<tr>
					<td><b>Excelente: <?php exibirExcelente($conexao) ?> </b></td>
					</tr>

					<tr>
					<td><b>Bom: <?php exibirBom($conexao) ?></b></td>
					</tr>

					<tr>
					<td><b>Regular: <?php exibirRegular($conexao) ?> </b>
					</tr>

					<tr>
					<td><b>Ruim: <?php exibirRuim($conexao) ?></b></td>
					</tr> 
		</table>

		<a  class="btn btn-primary" href="satisfacao.php">Voltar a pagina de votação </a>

		<?php
		    mysqli_close($conexao);
		?>
		<?php include("rodape.php"); ?>