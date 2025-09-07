export default class User{
    
    constructor(id, firstName, lastName, userName, email, password){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.userImg = '';
        this.pointsEarned = 0;
        this.daysWorked = 0;
        this.daysOnRightTime = 0;
        this.isLogged = false;
    }

    setUserName(newUsername){
        return this.userName = newUsername
    }
    setEmail(newEmail){
        return this.email = newEmail
    }
    setPassword(newPassword){
        return this.password = newPassword
    }
    setIgm(newImg){
        return this.userImg = newImg
    }
    setPointsEarned(newPoints){
        return this.pointsEarned = newPoints
    }
    setDaysWorked(newDays){
        return this.daysWorked = newDays
    }
    setDaysOnRightTime(daysOnTime){
        return this.setDaysOnRightTime = daysOnTime
    }
    setIsLogged(bool){
        return this.isLogged = bool
    }

    getId(){
        return this.id
    }
    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getUserName(){
        return this.userName
    }
    getEmail(){
        return this.email
    }
    getUserImg(){
        return this.userImg
    }
    getPointsEarned(){
        return this.pointsEarned
    }
    getDaysWorked(){
        return this.daysWorked
    }
    getDaysOnRightTime(){
        return this.daysOnRightTime
    }
    getIsLogged(){
        return this.isLogged
    }
}
