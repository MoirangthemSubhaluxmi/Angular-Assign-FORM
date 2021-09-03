import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    mail: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    mobileNumber: ['', Validators.required],
    cityName: ['', Validators.required],
    family: this.fb.array([this.createFamilyGroup()])
  });
  count:number = 1;

  constructor(private fb: FormBuilder, private data: DataService, private router: Router) { }

  ngOnInit(): void {

  }
  createFamilyGroup() {
    return this.fb.group({
      relation: [''],
      name: ['']
    });
  }
  
  get family() {
    return this.registerForm.get('family') as FormArray;
  }
  get fullName() {
    return this.registerForm.get('fullName');
  }
  get mail() {
    return this.registerForm.get('mail');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get cityName() {
    return this.registerForm.get('cityName');
  }
  get mobileNumber() {
    return this.registerForm.get('mobileNumber');
  }
  get relation() {
    return this.registerForm.get('relation');
  }
  get name() {
    return this.registerForm.get('name');
  }
  onClick() {
    this.count++;
    this.family.push(this.createFamilyGroup());
  }
  remove(index: number) {
    this.family.removeAt(index);
  }
  submitForm() {
    console.log(this.registerForm)
    this.data.registerForm.fullName = this.registerForm.controls["fullName"].value;
    this.data.registerForm.mail = this.registerForm.controls["mail"].value;
    this.data.registerForm.password = this.registerForm.controls["password"].value;
    this.data.registerForm.mobileNumber = this.registerForm.controls["mobileNumber"].value;
    this.data.registerForm.cityName = this.registerForm.controls["cityName"].value;
    for (let i = 0; i < this.count; i++) {
      this.data.registerForm.family.push(this.registerForm.value.family.at(i));
    }
    
    this.router.navigate(['show-data']);

  }
}