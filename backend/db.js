import User from "./userModel.js"

let dataBase = []

function addToDb(obj){
    return dataBase.push(obj)
}

// test user
const newUserTest1 = new User(123, 'Rosa', 'Costa', 'rosadogsitter', 'rosadogsitter@gmail.com', 2323)
const newUserTest2 = new User(321, 'Pedro', 'Heinrich', 'streetegist', 'pedroheinrich03@gmail.com', 1234)

addToDb(newUserTest1)
addToDb(newUserTest2)


export default {dataBase, addToDb}