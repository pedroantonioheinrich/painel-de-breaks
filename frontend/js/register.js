import User from '../../backend/userModel.js'
// import { v4 } from 'uuid';
import { addToDB, findUserByEmailOrUsername } from '../../backend/db.js';


const addUser = addToDB

const inputFirstName = document.querySelector('.input-register-firstname')
const inputLastName = document.querySelector('.input-register-lastname')
const inputUserName = document.querySelector('.input-register-username')
const inputEmail = document.querySelector('.input-register-email')
const inputPassword = document.querySelector('.input-register-password')
const inputConfirmPassword = document.querySelector('.input-register-confirmpassword')
const buttonRegister = document.querySelector('.button-register-submit')
const inputImg = document.querySelector('.input-register-img')
const divForm = document.querySelector('.div-register-form')
const h1 = document.querySelector('.h1-register-form')


buttonRegister.addEventListener('click', async (e)=>{

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

    const id = Math.floor(Math.random() * 999999999999)

    const existingUser = await findUserByEmailOrUsername(
        inputEmail.value.trim(),
        inputUserName.value.trim()
    );

    if (existingUser) {
        if (existingUser.email === inputEmail.value.trim()) {
            console.log('The user e-mail is already registered!');
            return;
        }
        if (existingUser.userName === inputUserName.value.trim()) {
            console.log('The username is already in use!');
            return;
        }
    }

    const imageFile = inputImg.files[0]
    const imagePath = imageFile ? `/uploads/${imageFile.name}` : '';

    const newUser = new User(
        id, 
        inputFirstName.value.trim(), 
        inputLastName.value.trim(), 
        inputUserName.value.trim(), 
        inputEmail.value.trim(), 
        inputConfirmPassword.value.trim(),
        imagePath
    )
    try{
        await addUser(newUser)
        console.log(`The user was added to database successful ✔`)
    } catch( err ) {
        console.error('Erro ao registrar usuário:', err);
    }
    divForm.style.display = 'none'
    h1.textContent = 'User Successful Registered 😁'
})
