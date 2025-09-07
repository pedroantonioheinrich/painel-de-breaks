import Db from '../../backend/db.js'

const database = Db.dataBase

console.log(database)


const imgProfile = document.querySelector('.idebar-img')
const usernameProfile = document.querySelector('.sidebar-username-p')


const userLogged = database.find(user => user.isLogged === true)

userLogged.isLogged = true

if(userLogged.isLogged === true){
    imgProfile.src = '/frontend/asset/bg-login.png'

    
// //TODO
// adicionar o estado true de logado do usuario no localstorage