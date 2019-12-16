
	<?php 
	include ("cabecalho.php");
	include ("conecta.php");
	include ("banco-voto.php");
	?>

<?php
	$ip=getenv("REMOTE_ADDR");
	bloqIp ($conexao, $ip);
	echo $ip;
?>

<h1>Deixe sua opnião</h1><br>

<form action="voto.php" method="post" class="table  table-striped table-bordered" stile="text-align:lefy">

	<table class="table" style="text-align: left;">
		
		
		<tr class="table-success">
		<td><input type="radio" name="voto" value="excelente"> Excelente</td>
		</tr>
		
		<tr class="table-primary">
			
			<td><input type="radio" name="voto" value="bom"> Bom<br></td>
		</tr>

		<tr class="table-warning">
			
			<td><input type="radio" name="voto" value="regular"> Regular</td>
		</tr>

		<tr class="table-danger">
			
			<td><input type="radio" name="voto" value="ruim"> Ruim</td>
		</tr>

		<tr class="table-light">
			<td><button type="submit" class="btn btn-primary">Enviar</button></td>
		</tr>
		
	</table>
</form>		


