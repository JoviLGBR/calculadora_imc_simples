
var peso,altura,resultado,imc;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso/(altura*altura);

    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML = "<br/> O resultado do seu IMC foi de: "+imc.toFixed(2)+" <br/><b>Muito abaixo do peso<b>";
    }else if(imc <= 18.49){
        resultado.innerHTML = "<br/> O resultado do seu IMC foi de: "+imc.toFixed(2)+" <br/><b>Abaixo do peso<b>";
    }else if(imc <= 24.99){
        resultado.innerHTML = "<br/> O resultado do seu IMC foi de: "+imc.toFixed(2)+" <br/><b>Peso normal<b>";
    }else if(imc <= 29.99){
        resultado.innerHTML = "<br/> O resultado do seu IMC foi de: "+imc.toFixed(2)+" <br/><b>Acima do peso<b>";
    }else{
        resultado.innerHTML = "<br/> O resultado do seu IMC foi de: "+imc.toFixed(2)+" <br/><b>Muito acima do peso<b>";
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

}