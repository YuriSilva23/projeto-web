
<?php include ("cabecalho.php");
  include ("conecta.php");
  include ("banco-produto.php");
include ("logica-usuario.php");
verificaUsuario();
  ?>

<?php
$nome=$_POST["nome"];
$preco=$_POST["preco"];
$descricao=$_POST['descricao'];
$categorias_id=$_POST['categorias_id'];

 ?>
<?php
if (array_key_exists('usado',$_POST)){
	$usado="true";
}
 else { $usado="false";

}

if (insereProduto($conexao, $nome, $preco, $descricao, $categorias_id, $usado)) { 
?>
 <p class="alert-success"> Produto <?= $nome; ?>, <?= $preco; ?> adicionado com sucesso!</p>

<?php
} else {
	?>
   <p class="alert-danger"> 0 Produto <?=$nome; ?> ?> Não foi adicionado </p>
    

    <?php
   }
    mysqli_close($conexao);
     ?>



 <?php include ("rodape.php");?>