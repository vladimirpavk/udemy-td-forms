import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('fElemRef') formElemRef : ElementRef;
  @ViewChild('f') ngForm : NgForm;

  public answerToQuestion:string;
  public genders:string[] = ['male', 'female'];

  suggestUserName() {
    console.log("clicked");
    const suggestedName = 'Superuser';
    this.ngForm.form.patchValue(
      { userdata : 
        {username : suggestedName}
      });
  }
  onFormSubmit(form: any){
    //console.log(form);
    console.log(this.ngForm);
    //console.log(this.ngForm.controls['username'].invalid);
  }
}
