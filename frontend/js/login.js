import Db from '../../backend/db.js'

const database = Db.dataBase


console.log(Db)

// ------------------------------------------------------------------------------------------

const userNameLogin = document.querySelector('.input-username')
const passwordLogin = document.querySelector('.input-password')
const buttonLogin = document.querySelector('.button-login')
const spanLogin =document.querySelector('.form-span')


buttonLogin.addEventListener('click', (e)=>{
    e.preventDefault()

    if(userNameLogin.value === ''){
        userNameLogin.style.border = '1px solid red'
        buttonLogin.style.border = '1px solid red'
    }

    if(passwordLogin.value === ''){
        passwordLogin.style.border = '1px solid red'
        buttonLogin.style.border = '1px solid red'
    }

    if(userNameLogin.value === '' && passwordLogin.value === ''){
        spanLogin.textContent = 'Username and Password is empty 🙄'
        buttonLogin.style.border = '1px solid red'
        
    }else{
        const userFound = database.find(user => user.userName === userNameLogin.value)

        console.log(userFound)
        console.log(userFound.userName)
        console.log(userFound.password)
    
        if(userFound.userName === userNameLogin.value){
            buttonLogin.style.border = '1px solid green'
            console.log(`User found in database`)
        }else{
            passwordLogin.style.border = '1px solid red'
            buttonLogin.style.border = '1px solid red'
            spanLogin.textContent = 'User not found in database ❌'
            console.log('User not found in database ❌')
        }
    
        
        if(userFound.password === Number(passwordLogin.value)){
            passwordLogin.style.border = '1px solid green'
            buttonLogin.style.border = '1px solid green'
            console.log("Password match ✔")
        }else{
            buttonLogin.style.border = '1px solid red'
            passwordLogin.style.border = '1px solid red'
            spanLogin.textContent = "Password doesn't match ❌"
            console.log("Password doesn't match ❌")
            passwordLogin.value = ''
        }

        if(userFound.userName === userNameLogin.value && userFound.password === Number(passwordLogin.value)){
            spanLogin.textContent =  `Login is successful ✔`
            userFound.setIsLogged(true)
            console.log(userFound)
            setInterval(()=>{
                window.location.href = '/frontend/html/userPanel.html'
            },2000)
            
        }
    }


})
