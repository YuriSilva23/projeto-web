<?php 
	include("cabecalho.php");
    include("conecta.php");
	include("banco-produto.php");
	include("banco-voto.php");
?>


<br><p class="alert-danger"> Você só pode votar uma vez! Obrigada por votar :)</p>

<table class="table">
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


<?php 
	include("rodape.php");
?>
