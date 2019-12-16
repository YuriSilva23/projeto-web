<?php include ("cabecalho.php");
 include ("conecta.php");
 include ("banco-produto.php");
 include ("banco-categorias.php");

$id=$_POST["id"];
$nome=$_POST["nome"];
$preco=$_POST["preco"];
$descricao=$_POST["descricao"];
$categorias_id=$_POST['categoria_id'];

if (array_key_exists('usado', $_POST)){

  $usado="true";
} 
else {
  $usado="false";
}

if (alteraProduto($conexao,$id,$nome,$preco,$descricao, $categorias_id,$usado)){ ?>
  <p class="text-success"> O produto <?= $nome; ?>, <?=$preco; ?> alterado com sucesso!</p>
  <?php header("Location: produto-lista.php?alterado=true"); ?>
<?php } else {

  $smg=mysqli_error($conexao);
  ?>

  <p class=" text-danger"> O produto <?=$nome; ?> não foi alterado: <?=$smg ?></p>
  <?php
}
?>

<?php include ("rodape.php"); ?>