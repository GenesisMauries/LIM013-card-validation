import validator from './validator.js';
let message;
document.getElementById('btnValid').addEventListener('click',(e)=>{
    const cardNumber = document.getElementById('cardNumber').value;
    let validation = validator.isValid(cardNumber);
    console.log(validation)
    const textAlert = document.getElementById('textAlert');
    if(cardNumber === '' || cardNumber.length < 16){
        e.preventDefault();
        textAlert.classList.remove('hide');
        textAlert.innerHTML = ' <img src="./img/warning-icon.png" alt="error" class="error" > Ingresa tu número de Tarjeta';
    }else{
        //mostrar y ocultar contenedores
        document.getElementById('containerResult').classList.add('evince');
        document.getElementById('container').classList.remove('evince');
        document.getElementById('container').classList.add('hide');
        if(validation ===true){ 
            message = '¡Tu Tarjeta es válida!';
            document.getElementById('return').classList.add('hide');
        }else{
            message= '¡Tu Tarjeta no es válida!';
            document.getElementById('return').classList.remove('hide');
        }
    }
    let numberMaskify = validator.maskify(cardNumber);
    document.getElementById('message').innerHTML = `${message}`
    document.getElementById('numberMaskify').innerHTML = `${numberMaskify}`
    document.getElementById('return').addEventListener('click',()=>{
        document.getElementById('container').classList.add('evince');
        document.getElementById('containerResult').classList.remove('evince');
        document.getElementById('cardNumber').value = "";
        textAlert.classList.add('hide');
        textAlert.innerHTML = "";
    })
});
