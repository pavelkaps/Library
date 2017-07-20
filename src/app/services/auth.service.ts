import { Injectable } from '@angular/core';

const STORAGE_KEY = 'users';
const CURRENT_USER_KEY = 'current';


@Injectable()
export class AuthService {

  constructor() {
    const users = [{
      email: 'admin@admin.com',
      password: 'admin'
    }]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }

  register(email, password){
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const newUser = {
      email,
      password
    }
    let result = false;
    if(!this.ckeckUserLogin(email)){
      this.saveCurrentUser(newUser);
      this.saveUsers(users.concat(newUser));
      result = true;
    };
    return result;
}

  login(email, password){
    let result = false;
    if(this.ckeckUserInfo(email, password)){
      this.saveCurrentUser({
        email, 
        password
      });
      result = true;
    };
    console.log(result);
    return result;
  }

  ckeckUserInfo(email, password){
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return users.some((user) => user.email === email && user.password === password);
  }

  ckeckUserLogin(email){
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return users.some((user) => user.email === email);
  }

  saveUsers(users){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
  }

  saveCurrentUser(user){
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  }

  signOut(){
    this.saveCurrentUser({});
  }

  checkUserAuth(){
    return !!this.getCurrentUser();
  }
}
