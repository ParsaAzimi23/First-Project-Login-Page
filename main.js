const email = document.querySelector(".email");
const password = document.querySelector(".password");
const emailErr = document.querySelector(".emailErr");
const passwordErr = document.querySelector(".passwordErr");
const loginMsg = document.querySelector(".loginMsg");

document.querySelector(".login").addEventListener("click", loginProccess);

function loginProccess(){
    emailErr.innerText = "";
    passwordErr.innerText = "";
    loginMsg.innerText = "";
    let sendToServer = true
    if(email.value === ""){
        emailErr.innerText = "Please enter an email address";
        setTimeout(clear, 5000);
        sendToServer = false;
        
    }else if(password.value === ""){
        passwordErr.innerText = "Please enter a password";
        setTimeout(clear, 5000);
        sendToServer = false;
        
    }else if((password.value).length <= 4){
        passwordErr.innerText = "Your Password is too short";
        setTimeout(clear, 5000);
        sendToServer = false;

    }
    else if(email.value === ""|| (email.value).indexOf("@") === -1 || (email.value).indexOf(".") === -1){
        emailErr.innerText = "Please enter an email address";
        setTimeout(clear, 5000);
        sendToServer = false;
        
    }else if(sendToServer){
        const body = JSON.stringify({
            email : email.value,
            password : password.value
        });
        const headers = {
            "Content-Type" : "application/json"
        };
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:"POST",
            body:body,
            headers:headers
        })
            .then(response => {
                if(response.ok === true){
                    loginMsg.innerText = "You've Logedin Successfully!";
                    setTimeout(clear, 5000);
                }else{
                    loginMsg.innerText = "Your Email or Password is not Correct!";
                    loginMsg.style.color = "red";
                }
            })
    }
    email.value = "";
    password.value = "";
}

function clear(){
    emailErr.innerText = "";
    passwordErr.innerText = "";
    loginMsg.innerText = "";
}
