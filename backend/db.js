import { MongoClient } from "../node_modules/mongodb"
// import User from "./userModel.js"
import dotenv from "../node_modules/dotenv"

dotenv.config()
const pass = process.env.DB_PASSWORD
const url = `mongodb+srv://pedroheinrich03_db_user:${pass}@cluster0.wocgdv4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const client = new MongoClient(url)

export async function addToDB(user) {
  try {
    await client.connect();
    const appDb = client.db('cluster0');
    const coll = "users";
    const res = await appDb.collection(coll).insertOne(user);
    console.log('Usuário inserido com sucesso:', res);
  } catch (err) {
    console.error('Erro ao inserir usuário:', err);
  } finally {
    await client.close();
  }
}

export async function findUserByEmailOrUsername(email, username) {
  try {
    await client.connect();
    const db = client.db('cluster0');
    const coll = db.collection('users');

    const user = await coll.findOne({
      $or: [
        { email: email },
        { userName: username }
      ]
    });

    return user;
  } catch (err) {
    console.error('Erro ao buscar usuário:', err);
    return null;
  } finally {
    await client.close();
  }
}

// // // test user
// const newUserTest1 = new User(123, 'Rosa', 'Costa', 'rosadogsitter', 'rosadogsitter@gmail.com', 2323, '/frontend/asset/488887518_28996145400033810_8517235568485907430_n.jpg')

// const newUserTest2 = new User(321, 'Pedro', 'Heinrich', 'streetegist', 'pedroheinrich03@gmail.com', 1234, '/frontend/asset/524628611_10214616484561410_3181092352412127723_n.jpg')

// const newUserTest3 = new User(333, 'Penny', 'Lane', 'pennylane', 'penny@gmail.com', '123', '/frontend/asset/bg-login.png')

// addToDB(newUserTest1)
// addToDB(newUserTest2)
// addToDB(newUserTest3)

