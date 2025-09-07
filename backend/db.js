import User from "./userModel.js"

let dataBase = []

function addToDb(obj){
    return dataBase.push(obj)
}

// test user
const newUserTest1 = new User(123, 'Rosa', 'Costa', 'rosadogsitter', 'rosadogsitter@gmail.com', 2323, '/frontend/asset/488887518_28996145400033810_8517235568485907430_n.jpg')
const newUserTest2 = new User(321, 'Pedro', 'Heinrich', 'streetegist', 'pedroheinrich03@gmail.com', 1234, '/frontend/asset/524628611_10214616484561410_3181092352412127723_n.jpg')

const newUserTest3 = new User(333, 'Penny', 'Lane', 'pennylane', 'penny@gmail.com', '123', '/frontend/asset/bg-login.png')

addToDb(newUserTest1)
addToDb(newUserTest2)
addToDb(newUserTest3)


export default {dataBase, addToDb}