 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
 
const email = document.querySelector('#email')
const mdp = document.querySelector('#mdp')
const btn = document.querySelector('#submit') 

 const firebaseConfig = {
//   
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig)

 const auth = getAuth(app);

function login(email, password) {
 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    // Signed
    console.log(user.uid)
    window.location.href = './index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
  });
}

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
 


function validatePassword(password){
    console.log(password.length)
    if(password.length >= 6){
       console.log()
        return true
    }
    return false
}



btn.addEventListener('click', () => {

    if(validateEmail(email.value) && validatePassword(mdp.value)){
        login(email.value,mdp.value)
    }

    else{
        console.log('TODO:erreur')
    }
    
})

//login("ahmed@gmail.com",'123456')