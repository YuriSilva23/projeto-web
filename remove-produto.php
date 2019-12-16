<?php include ("cabecalho.php");
  include ("conecta.php");
  include ("banco-produto.php");

$id= $_GET['id'];
removeProduto ($conexao, $id);
?>

"<script>location.href='produto-lista.php?altera=true'</script>";



	<?php
	include ("rodape.php");

	?>