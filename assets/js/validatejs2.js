var nameError=document.getElementById('name-error')
var emailError=document.getElementById('email-error')
var phoneError=document.getElementById('phone-error')
var messageError=document.getElementById('message-error')
var submitError=document.getElementById('submit-error')

function validateName(){
	 nom = document.querySelector('.contact-name').value;
	if(nom.length == 0){
		nameError.innerHTML ='Name is required';
		return false;
	}
	if(!nom.match(/^[^\s]+( [^\s]+)+$/)){
        nameError.innerHTML='Write valid name';
	return false;
}
nameError.innerHTML='<i class="fa fa-check-circle"></i>';
return true;
}






function validatePhone(){
  phone= document.querySelector('.contact-phone').value;
    
    if (phone.length==0){
        phoneError.innerHTML='phone is required';
        return false;

    } 
    if (phone.length !== 10){
        phoneError.innerHTML=' should be 10 digits';
        return false;

    
}
if (!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML='only digits please';
    return false;
};
phoneError.innerHTML='<i class="fa fa-check-circle"></i>';
return true;
}

function validateEmail(){
  email= document.querySelector('.contact-email').value;
        if (email.length == 0){
    emailError.innerHTML='Email is required';
    return false;
}
if(!email.match('^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$')){
    
    emailError.innerHTML= 'Email Invalid';
   return false;
}
emailError.innerHTML='<i class="fa fa-check-circle"></i>';
return true;
}
function sendMail() {
	var tempParams ={
	from_name: document.getElementById ("fromName").value,
	to_name: document.getElementById("toName").value,
    phone: document.getElementById("phone").value,
    model: document.getElementById("model").value,
	message:document.getElementById("msg").value,	
     

	};
	emailjs.send('service_d40og8j','template_h48ybgh',tempParams)
	.then(function(res){
		console.log("succes",res.status);
        location.reload();

	})
}

function validateMessage(){
   message =document.querySelector('.contact-message').value;
    var required = 30;
    var left = required - message.length;
    
    if(left >0){
        messageError.innerHTML=left+'more charaters required';
        return false;
    }
    messageError.innerHTML='<i class="fa fa-check-circle"></i>';
    return true;
}
function validateForm(){
    if(!validateEmail() && !validateName() && !validatePhone() && !validateMessage()){
    
     setTimeout(function(){submitError.style.display='none';}, 3000);
    }
    else{
        sendMail();
alert("formulaire envoyé");
        


        
    }

    
}