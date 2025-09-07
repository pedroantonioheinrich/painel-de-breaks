import Db from '../../backend/db.js'

const database = Db.dataBase

console.log(database)


const imgProfile = document.querySelector('.sidebar-img')
const usernameProfile = document.querySelector('.sidebar-username-p')
const logoutButton = document.querySelector('.main-nav-button-logout')


const userLogged = database.find(user => user.isLogged === true)

const savedUser = JSON.parse(localStorage.getItem('userLogged'))

if (savedUser && savedUser.isLogged) {
    imgProfile.src = savedUser.userImg;
    usernameProfile.textContent = savedUser.userName;
}


logoutButton.addEventListener('click',()=>{
    if (userLogged) {
        userLogged.isLogged = false;
    }
    localStorage.removeItem('userLogged')
    window.location.href = '/frontend/html/login.html'
})

