import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  form: FormGroup;

  name: string;
  age: string;
  personality: string;

  buttonDisabled = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formInit();
  }


  formInit() {
    console.log('ran forminit');
    this.form = this.fb.group({
      name: [this.name],
      age: [this.age],
      personality: [this.personality]
    });
  }

  onSubmit() {
    console.log('form submitted');
    console.log('form', this.form);
  }

  enableSubmit() {
    let arrayOfInputValues = [];

    for(const key in this.form.controls) {
      console.log(key);
      if(this.form.controls[key].value) {
        console.log(key, 'has a value', this.form.controls[key].value);
        arrayOfInputValues.push(this.form.controls[key].value);
      }
    }
    if(arrayOfInputValues.length === 0) {
      this.buttonDisabled = true;
    }else {
      this.buttonDisabled = false;
    }
    console.log('inputArray', arrayOfInputValues);
  }

}
