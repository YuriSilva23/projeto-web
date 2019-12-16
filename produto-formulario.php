<?php include ("cabecalho.php");
 include ("conecta.php");
 include ("banco-produto.php");
 include ("banco-categorias.php");
 include ("logica-usuario.php");
verificaUsuario();

 $categorias = listaCategorias($conexao);
 ?>

 <h1> Formulário de Cadastro </h1>
 <form action="adiciona-produto.php" name="form" method="post">
 <table class="table" stile="text-align:lefy" > 
 <tr>
   <td> <h2>nome:</h2></td> 
   <td> <input class="form-control" type="text" name="nome"/></td>
<tr/>
  
  <tr>
   <td><h2>preco:</h2> </td>
   <td> <input class="form-control" type="number" name="preco"/></td>
 </tr>

<tr>
	<td><h3>Descrição<h3></td>
	<td><textarea name="descricao" class="form-control"></textarea></td>
</tr>
<tr>
 <td></td>
  <td> <input type="checkbox" name="usado" value="true">Usado</td>

</tr>

<tr>
	<td><b>Categoria:</b></td>
	<td class="text-left">
	<select name="categorias_id">
	<?php foreach($categorias as $categoria) : ?>
	<option value="<?=$categoria['id']?>"><?=$categoria['nome']?></option>

  <?php endforeach?>
   </select>
</td>
</tr>


 <tr>
   <td> <button class="btn btn-primary " type="submit" onclick="return validar()"> Cadastrar </button></td>
  </tr>
  </table>
 </form>
<?php include ("rodape.php");?>