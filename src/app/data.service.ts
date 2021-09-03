import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  registerForm = {
    fullName: "",
    mail: '',
    password: '',
    mobileNumber: '',
    cityName: '',
    family: [{
      name: '',
      relation: ''
    }]
  }
  constructor() { }
  
}
