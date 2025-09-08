import Db from '../../backend/db.js'

const database = Db.dataBase

console.log(database)


const imgProfile = document.querySelector('.sidebar-img')
const firstNameProfile = document.querySelector('.sidebar-firstname-p')
const lastNameProfile = document.querySelector('.sidebar-lastname-p')
const usernameProfile = document.querySelector('.sidebar-username-p')
const logoutButton = document.querySelector('.main-nav-button-logout')


const xpCurrentDisplay = document.querySelector('.current-xp')
const xpTotalDisplay = document.querySelector('.total-xp')

const xpAtual = 500
const xpTotal = 3200
const xpFill = document.querySelector('.sidebar-xpbar-xpfill')


xpCurrentDisplay.textContent = xpAtual 
xpTotalDisplay.textContent = xpTotal

const porcentagem = (xpAtual / xpTotal) * 100;
xpFill.style.width = `${porcentagem}%`;


const userLogged = database.find(user => user.isLogged === true)

const savedUser = JSON.parse(localStorage.getItem('userLogged'))

if (savedUser && savedUser.isLogged) {
    imgProfile.src = savedUser.userImg;
    usernameProfile.textContent = savedUser.userName;
    imgProfile.id = savedUser.id
    usernameProfile.id = savedUser.id
    firstNameProfile.textContent = savedUser.firstName
    lastNameProfile.textContent = savedUser.lastName
}


logoutButton.addEventListener('click',()=>{
    if (userLogged) {
        userLogged.isLogged = false;
    }
    localStorage.removeItem('userLogged')
    window.location.href = '/frontend/html/login.html'
})

