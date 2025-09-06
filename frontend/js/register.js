import Db from '../../backend/db.js'
import User from '../../backend/userModel.js'

const database = Db.dataBase
const addUser = Db.addToDb

console.log(database)

const inputFirstName = document.querySelector('.input-register-firstname')
const inputLastName = document.querySelector('.input-register-lastname')
const inputUserName = document.querySelector('.input-register-username')
const inputEmail = document.querySelector('.input-register-email')
const inputPassword = document.querySelector('.input-register-password')
const inputConfirmPassword = document.querySelector('.input-register-confirmpassword')
const buttonRegister = document.querySelector('.button-register-submit')

function uniqueId(){
    const newId = Math.floor(Math.random() * 9999999999999)
    return newId
}

buttonRegister.addEventListener('click', (e)=>{

    e.preventDefault()

    if(inputFirstName.value === ''){
        inputFirstName.style.border = '1px solid red'
        buttonRegister.style.border = '1px solid red'
    }
    if(inputLastName.value === ''){
        inputLastName.style.border = '1px solid red'
        buttonRegister.style.border = '1px solid red'
    }
    if(inputUserName.value === ''){
        inputUserName.style.border = '1px solid red'
        buttonRegister.style.border = '1px solid red'
    }
    if(inputEmail.value === ''){
        inputEmail.style.border = '1px solid red'
        buttonRegister.style.border = '1px solid red'
    }
    if(inputPassword.value === ''){
        inputPassword.style.border = '1px solid red'
        buttonRegister.style.border = '1px solid red'
    }
    if(inputConfirmPassword.value === ''){
        inputConfirmPassword.style.border = '1px solid red'
        buttonRegister.style.border = '1px solid red'
    }

    if (inputPassword.value !== inputConfirmPassword.value) {
        inputPassword.style.border = '1px solid red'
        inputConfirmPassword.style.border = '1px solid red'
        alert('As senhas não coincidem!')
        return
    }
    if (
        !inputFirstName.value ||
        !inputLastName.value ||
        !inputUserName.value ||
        !inputEmail.value ||
        !inputPassword.value ||
        !inputConfirmPassword.value
    ) {
    alert('Preencha todos os campos!')
        return
    }

    const id = uniqueId()

    const emailRegistered = database.find(user => user.email === inputEmail.value)
    const userNameRegistered = database.finc(user => user.userName === inputUserName.value)

    if(emailRegistered){
        console.log(`The user e-mail is already registered!`)
    }else if(userNameRegistered){
        console.log(`The username is already in use!`)
    }else{
        const newUser = new User(
            id, 
            inputFirstName.value.trim(), 
            inputLastName.value.trim(), 
            inputUserName.value.trim(), 
            inputEmail.value.trim(), 
            inputConfirmPassword.value.trim()
        )
        addUser(newUser)
        console.log(`The user ${newUser.email} was added to database successful ✔`)
    }

    console.log(database)
})
