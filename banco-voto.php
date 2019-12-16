<?php
	
	function quantidadeExcelente($conexao){
		$query="update votosusuarios set quantidade = quantidade+1 where nome = 'excelente' ";
		return mysqli_query($conexao, $query);
		
	}
	
	function quantidadeBom($conexao){
		$query="update votosusuarios set quantidade = quantidade+1 where nome = 'bom' ";
		return mysqli_query($conexao, $query);
	}
	function quantidadeRegular($conexao){
		$query="update votosusuarios set quantidade = quantidade+1 where nome = 'regular' ";
		return mysqli_query($conexao, $query);
	}
	function quantidadeRuim($conexao){
		$query="update votosusuarios set quantidade = quantidade+1 where nome = 'ruim' ";
		return mysqli_query($conexao, $query);
	}

	function insereIp($conexao, $ip){
		$query= ("INSERT into participantes (ip) values ('{$ip}')");
		return mysqli_query($conexao, $query);
	}

	function bloqIp ($conexao, $ip){
		$query = mysqli_query($conexao, "select ip from participantes where ip = ('{$ip}')");
		if(mysqli_num_rows($query)>0){
			header("Location: bloqueio.php");
			die();
		}
	}

	function exibirExcelente($conexao){
		$query=("select quantidade from votosusuarios where nome = 'excelente' ");
		$resultado = mysqli_query($conexao, $query);
		$cont = mysqli_fetch_assoc($resultado);
		echo $cont['quantidade'];
	}

	function exibirBom($conexao){
		$query=("select quantidade from votosusuarios where nome = 'bom' ");
		$resultado = mysqli_query($conexao, $query);
		$cont = mysqli_fetch_assoc($resultado);
		echo $cont['quantidade'];
	}

	function exibirRegular($conexao){
		$query=("select quantidade from votosusuarios where nome = 'regular' ");
		$resultado = mysqli_query($conexao, $query);
		$cont = mysqli_fetch_assoc($resultado);
		echo $cont['quantidade'];
	}

	function exibirRuim($conexao){
		$query=("select quantidade from votosusuarios where nome = 'ruim' ");
		$resultado = mysqli_query($conexao, $query);
		$cont = mysqli_fetch_assoc($resultado);
		echo $cont['quantidade'];
	}

?>