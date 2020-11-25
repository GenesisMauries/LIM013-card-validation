import validator from './validator.js';
document.getElementById('btnValid').addEventListener('click',(e)=>{
    const cardNumber = document.getElementById('cardNumber').value;
    let validation = validator.isValid(cardNumber);
    console.log(validation)
    const textAlert = document.getElementById('textAlert');
    if(cardNumber === '' || cardNumber.length < 16){
        e.preventDefault();
        textAlert.classList.remove('hide');
        textAlert.innerHTML = 'Ingresa tu número de Tarjeta';
    }else{
        //mostrar y ocultar contenedores
        document.getElementById('containerResult').classList.add('evince');
        document.getElementById('container').classList.remove('evince');
        document.getElementById('container').classList.add('hide');
      
    }
});
