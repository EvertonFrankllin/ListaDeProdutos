document,addEventListener('DOMContentLoaded', ()=>{
    var itens = [];
    document.querySelector('input[type=submit]')
    .addEventListener('click', ()=>{
        var nomeProduto = document.querySelector('input[name=Produto]').value;
        var precoProduto = document.querySelector('input[name=price]').value;

        itens.push({
            Nome: nomeProduto,
            valor: precoProduto,
        });

/* 
    <div class="valor-adicionado">
        <h3>Budwise</h3><span>R$20,00</span>
    </div>
    
*/
       let produto = document.querySelector('.produtos');
       let total = document.querySelector('.total');
       let soma =0;
       itens.map((val)=>{

        soma += parseFloat(val.valor);

        produto.innerHTML += produto=
        `
            <div class="valor-adicionado">
                <h3>${nomeProduto}</h3><span>R$ ${precoProduto} ,00 KG</span>
            </div>
        ` 
       });

       document.querySelector('input[name=Produto]').value="";
       document.querySelector('input[name=price]').value="";

       total.innerHTML = 
       `
       <div class="valor">
            <h1>Total: R$${soma}</h1>
        </div>
       `
       
// alert(soma)
    });
    document.querySelector('button[name=limpar]')
    .addEventListener('click', ()=>{
        itens=[];

        document.querySelector('.produtos')
        .innerHTML='';

        document.querySelector('.total h1')
        .innerHTML = 'Total: R$ 00';

//alert( 'sumiu')
    });

    //Evento de scroll Para o topo da page
    var element = document.querySelectorAll('.alinea img');

    element.forEach((item, index)=>{
        document.querySelectorAll('.alinea img')[index]
        .addEventListener('click', ()=>{
           //alert('Deu certo');
            window.scroll({
                top:0,
                behavior:'smooth',
            });
        });
    });

});





























































































































































































































































































































































































































































































