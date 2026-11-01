let nomesProdutos = [];
let precosProdutos = [];
let totaisVendas = [];

function cadastrarProduto() {
    let nome = prompt("Digite o nome do produto:");
    if(nome == "" || nome == null){
        alert("Digite um nome válido!");
    }else{
        let existe = false;
        for(let i = 0; i < nomesProdutos.length; i++){
            if(nomesProdutos[i] == nome){
                existe = true;
            }
        }
        if(existe == true){
            alert("Produto já cadastrado!");
        }else{
            let preco = Number(prompt("Digite o preço do produto:"));
            if (preco <= 0){
                alert("O preço deve ser maior que zero!");
            }else{
                nomesProdutos.push(nome);
                precosProdutos.push(preco);
                alert("Produto cadastrado com sucesso!");
            }
        }
    }
}

function listarProdutos(){
    if(nomesProdutos.length == 0){
        alert("Nenhum produto cadastrado!");
    }else{
        let mensagem = "PRODUTOS CADASTRADOS:\n\n";
        for (let i = 0; i < nomesProdutos.length; i++){
            mensagem += "Código: " + (i + 1) + "\n";
            mensagem += "Nome: " + nomesProdutos[i] + "\n";
            mensagem += "Preço: R$ " + precosProdutos[i] + "\n\n";
        }
        alert(mensagem);
    }
}

function calcularTotalVenda(preco, quantidade){
    let total = preco * quantidade;
    return total;
}

function calcularDesconto(total){
    let desconto = 0;
    if(total > 50){
        desconto = total * 0.10;
    }
    return desconto;
}

function exibirResumoVenda(nome, preco, quantidade, subtotal, desconto) {
    let total = subtotal - desconto;
    alert(
        "RESUMO DA VENDA\n" +
        "Produto: " + nome + "\n" +
        "Preço: R$ " + preco + "\n" +
        "Quantidade: " + quantidade + "\n" +
        "Subtotal: R$ " + subtotal + "\n" +
        "Desconto: R$ " + desconto + "\n" +
        "Total: R$ " + total
    );
}

function realizarVenda() {
    if(nomesProdutos.length == 0){
        alert("Cadastre um produto primeiro!");
    }else{
        listarProdutos();
        let codigo = Number(prompt("Digite o código do produto:"));
        if (codigo < 1 || codigo > nomesProdutos.length){
            alert("Código inválido!");
        }else{
            let quantidade = Number(prompt("Digite a quantidade:"));
            if(quantidade <= 0){
                alert("Quantidade inválida!");
            }else{
                let indice = codigo - 1;
                let nome = nomesProdutos[indice];
                let preco = precosProdutos[indice];
                let subtotal = calcularTotalVenda(preco, quantidade);
                let desconto = calcularDesconto(subtotal);
                let total = subtotal - desconto;
                exibirResumoVenda(nome, preco, quantidade, subtotal, desconto);
                let confirmar = confirm("Deseja confirmar a venda?");
                if(confirmar == true){
                    totaisVendas.push(total);
                    alert("Venda realizada com sucesso!");
                }else{
                    alert("Venda cancelada!");
                }
            }
        }
    }
}

function obterTotalVendasDia(){
    let total = 0;
    for (let i = 0; i < totaisVendas.length; i++){
        total = total + totaisVendas[i];
    }
    return total;
}

function exibirTotalVendasDia(){
    let total = obterTotalVendasDia();
    alert(
        "VENDAS DO DIA\n\n" +
        "Quantidade de vendas: " + totaisVendas.length + "\n" +
        "Total arrecadado: R$ " + total
    );
}

function exibirMenu(){
    let opcao = prompt(
        "SISTEMA DE CAIXA - DONUTERIA\n" +
        "1 - Cadastrar produto\n" +
        "2 - Listar produtos\n" +
        "3 - Realizar venda\n" +
        "4 - Total de vendas do dia\n" +
        "5 - Sair\n\n" +
        "Escolha uma opção:"
    );
    return opcao;
}

function controlarMenu(){
    let opcao = "";
    while (opcao != "5" && opcao != null){
        opcao = exibirMenu();
        if (opcao == "1"){
            cadastrarProduto();
        } else if (opcao == "2"){
            listarProdutos();
        } else if (opcao == "3"){
            realizarVenda();
        } else if (opcao == "4"){
            exibirTotalVendasDia();
        } else if (opcao == "5"){
            alert("Sistema encerrado!");
        } else if (opcao != null){
            alert("Opção inválida!");
        }
    }
}

controlarMenu();