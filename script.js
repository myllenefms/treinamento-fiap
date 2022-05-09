
function pegaDados(){    
    
    $.ajax({
        url: "https://iot.14mob.com/lista.json",
        data: "",
        success: function(retorno){
            tratarDados(retorno);
        },
        dataType: "html"
    })


}

function tratarDados(dados){

    dados = JSON.parse(dados);

    var lista = $('.listaItens')
    
    $(dados).each(function(index,valor){
        
       let conteudo = `<div class="col-md-4">
                <div class="card" >
                    <img src="${valor.imagem}" class="card-img-top" onclick="abrirModal('${valor.imagem}', '${valor.nome}', '${valor.descricao}')" alt="tertertert">
                    <div class="card-body">
                    <h5 class="card-title">${valor.nome}</h5>
                    <p class="card-text">${valor.descricao}</p>
                    <button type="button" class="btn btn-primary" onclick="abrirModal('${valor.imagem}', '${valor.nome}', '${valor.descricao}')" >
                        Detalhes
                    </button>

                    </div>
                </div>
            </div>`;

        lista.append(conteudo);
    

    })

    

}


function abrirModal(imagem, nome, descricao){

    let conteudo = `<div class="col-md-12">
                <div class="card" >
                    <img src="${imagem}" class="card-img-top"  alt="tertertert">
                    <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text">${descricao}</p>
                </div>
                </div>
            </div>`;

    $('.detalheItem').html(conteudo)   

    $('#exampleModal').modal('show');

}


$(function(){
    pegaDados();
})


