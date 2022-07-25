const email = document.getElementById('email')
const form = document.getElementById('form')
const errorMessage = document.getElementById('error-message')



let timeout;

email.addEventListener('input',()=> {
    timeout = setTimeout(()=>{
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email.value.match(pattern)){
            errorMessage.innerText ='Please check your email';
            email.style.borderColor = "rgb(239, 72, 119)";

        }else{
            errorMessage.innerText ='';
            email.style.borderColor = "rgb(7, 4, 59)";
        }
    },900);
});

form.addEventListener('submit', (event)=> {
    let message = []
    if(email.value === '' || email.value == null){
       message.push('Email is required')
       event.preventDefault()
    }

    if(message.length > 0){
        event.preventDefault()
        errorMessage.innerText = message.join(',');
        email.style.borderColor = "rgba(239, 72, 119, 1)";
    }
});

const email2 = document.getElementById('email-2')
const form2 = document.getElementById('form-2')
const errorMessage2= document.getElementById('error-message-2')

email2.addEventListener('input',()=> {
    timeout = setTimeout(()=>{
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email2.value.match(pattern)){
            errorMessage2.innerText ='Please check your email';
            email2.style.borderColor = "rgb(239, 72, 119)";
        }else{
            errorMessage2.innerText ='';
            email2.style.borderColor = "rgb(7, 4, 59)";
        }
    },900);
});

form2.addEventListener('submit', (event)=> {
    let message = []
    if(email2.value === '' || email2.value == null){
       message.push('Email is required')
       event.preventDefault()
    }

    if(message.length > 0){
        event.preventDefault()
        errorMessage2.innerText = message.join(',');
        email2.style.borderColor = "rgba(239, 72, 119, 1)";
    }
});