const calcular =  document.getElementById("calcular");

function financiamento(){

    const renda = document.getElementById("renda").value;
    const bem = document.getElementById("bem").value;
    const entrada = document.getElementById("entrada").value;
    let i = document.getElementById("i").value;
    const n = document.getElementById("n").value;
    const resultado = document.getElementById("resultado")
    
    
    i = i / 100;

    if(renda !== "" && bem !== "" && entrada !== "" && i !== "" && n !== "" ){
        const pv = bem - entrada;
        const maxprestacao = renda * 0.3;

        const pmt = ((pv*(1+i)**n*(i))/((1 + i)**n-1)).toFixed(2);
        
        if(maxprestacao < pmt){
        resultado.textContent = `O financiamento esta acima da sua prestação maxima, que é de  ${maxprestacao} , por favor aumente o numero de parcelas`;
        }else{
            resultado.textContent = `Financiamento Aprovado, o valor mensal da prestação é de ${pmt}`;
        }
    }else{
        resultado.textContent = 'Para calcular a sua prestação, preencha todos os campos.';
    }

}

calcular.addEventListener('click', financiamento);