<?php include ("cabecalho.php");
  include ("conecta.php");
  ?>

<?php
$empresa=$_POST["codemp"];
$senha=$_POST["senha"];

if ( $empresa==["codemp"] &&  $senha==["senha"]) { 
?>
 <p class="alert-success"> Produto <?= $empresa; ?>, <?= $senha; ?> Empresa cadastrada!</p>

<?php
} else {
	?>
   <p class="alert-danger"> ?> ?>Empresa cadastrada! </p>
    
    <?php
   }
    mysqli_close($conexao);
    ?>


     <?php include ("rodape.php");?>