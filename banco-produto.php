<?php
function listaProdutos($conexao){
	$produtos=array();
	$resultado=mysqli_query($conexao, "select p.*, c.nome as categorias_nome from produtos as p join categorias as c on p.categorias_id=c.id");

	while ($produto=mysqli_fetch_assoc($resultado)){
		array_push($produtos, $produto);
	}
   return $produtos;
}


function insereProduto($conexao, $nome, $preco, $descricao, $categorias_id, $usado) {
	$query="insert into produtos (nome, preco, descricao, categorias_id, usado) values ('{$nome}', {$preco},'{$descricao}',{$categorias_id}, {$usado})";
return mysqli_query($conexao, $query);
}


function removeProduto($conexao, $id) {

	$query="delete from produtos where id = {$id}";
	return mysqli_query($conexao, $query);
}


function buscaProduto($conexao, $id){
	$query="select * from produtos where id = {$id}";
	$resultado= mysqli_query($conexao, $query);
	return mysqli_fetch_assoc($resultado);
}


function buscaSatisfacao($conexao, $id){
	$query="select * from votosusuarios where id = {$id}";
	$resultado= mysqli_query($conexao, $query);
	return mysqli_fetch_assoc($resultado);
}


function alteraProduto($conexao,$id,$nome,$preco,$descricao,$categorias_id,$usado)
{
	$query = "update produtos set nome = '{$nome}',preco = {$preco},descricao = '{$descricao}',categorias_id = {$categorias_id},usado = {$usado} where id = '{$id}' ";
	return mysqli_query($conexao,$query);
}
