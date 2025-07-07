
function ClassificarPagamento (precoEtiqueta, formaDePagamento){
    if (formaDePagamento === 1 ) {
        return(precoEtiqueta - (precoEtiqueta * 0.1));
    } else if ( formaDePagamento === 2 ){
        return(precoEtiqueta - (precoEtiqueta * 0.15));
    } else if (formaDePagamento === 4){
        return(precoEtiqueta + (precoEtiqueta * 0.1))
    }else{
        return(precoEtiqueta)
    }
}


function main() {
    const precoEtiqueta = 100; 
    const formaDePagamento = 4;

    const resultado = ClassificarPagamento(precoEtiqueta, formaDePagamento);

    console.log(resultado);
}

main();


