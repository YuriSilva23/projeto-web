<?php include ("cabecalho.php");
 include ("conecta.php");
 include ("banco-produto.php");
 include ("logica-usuario.php");
verificaUsuario();
 ?>
 
 <?php if (array_key_exists("removido", $_GET) && $_GET['removido']=='true'){ ?>
<p class="alert-success">Produto apagado com sucessso.</p>
 <?php } ?>

 <?php if (array_key_exists("alterado", $_GET) && $_GET['alterado']=='true'){ ?>
<p class="alert-success">Produto alterado.</p>
 <?php } ?>



<table class="table table-striped table-bordered">

<td><h3>Produto</h3></td>
<td><h3>Preço</h3></td> 
<td><h3>Descrição</h3></td>
<td><h3>Categoria</h3></td>
<td><h3>Alterar</h3></td>
<td><h3>Excluir</h3></td>

<?php
//$resultado= mysqli_query($conexao, "select * from produtos");
//while ($produto=mysqli_fetch_assoc ($resultado)){

//	echo $produto['nome']." | "; 
//	echo $produto['preco']."<br/>";
$produtos = listaProdutos($conexao);
foreach($produtos as $produto): 
?>
<tr>

<td><h3><?= $produto['nome']?></h3></td>
<td><?=$produto['preco']?></td>
<td><?=substr($produto['descricao'], 0, 200)?></td>
<td><?=$produto['categorias_nome']?></td>
<td><a class="btn btn-primary" href="produto-altera-formulario.php?id=<?=$produto['id']?>">Alterar</a></td>
<td><a href="remove-produto.php?id=<?=$produto['id']?>"class="btn btn-danger">Deletar</a></tr>

<?php
endforeach
?>
<?php include ("rodape.php");?>