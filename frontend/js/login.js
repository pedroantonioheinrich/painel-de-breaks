import Db from '../../backend/db.js'

const database = Db.dataBase


console.log(Db)

// ------------------------------------------------------------------------------------------

const userName = document.querySelector('.input-username')
const passwordLogin = document.querySelector('.input-password')
const buttonLogin = document.querySelector('.button-login')
const spanLogin =document.querySelector('.form-span')


buttonLogin.addEventListener('click', (e)=>{
    e.preventDefault()

    if(userName.value === ''){
        userName.style.border = '1px solid red'
        buttonLogin.style.border = '1px solid red'
    }else{
        userName.style.border = '1px solid green'
    }

    if(passwordLogin.value === ''){
        passwordLogin.style.border = '1px solid red'
        buttonLogin.style.border = '1px solid red'
    }else{
        passwordLogin.style.border = '1px solid green'
    } 

    if(userName.value === '' && passwordLogin.value === ''){
        spanLogin.textContent = 'Username and Password is empty 🙄'
    }else{
        const searchingUserName = database.find(user => user.userName === userName.value)
    
        if(searchingUserName){
            spanLogin.textContent =  `Login is successful ✔`
            console.log(`Login is successful ✔`)
        }else{
            spanLogin.textContent = 'User not found in database ❌'
            console.log('User not found in database ❌')
        }
    
        const passwordConverted = Number(passwordLogin.value)
        
        if(passwordConverted){
            passwordLogin.style.border = '1px solid green'
            buttonLogin.style.border = '1px solid green'
            console.log("Password match ✔")
        }else{
            passwordLogin.style.border = '1px solid red'
            spanLogin.textContent = "Password doesn't match ❌"
            console.log("Password doesn't match ❌")
            passwordLogin.value = ''
        }
    }


})
