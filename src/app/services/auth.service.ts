import { Injectable } from '@angular/core';

const STORAGE_KEY = 'users';

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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users.concat(newUser)))
      result = true;
    };
    return result;
}

  login(email, password){
    return this.ckeckUserInfo(email, password);
  }

  ckeckUserInfo(email, password){
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return users.some((user) => user.email === email && user.password === password);
  }

  ckeckUserLogin(email){
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return users.some((user) => user.email === email);
  }

  log(){
    console.log(localStorage.getItem(STORAGE_KEY));
  }
}
