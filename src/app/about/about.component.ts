import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// https://www.concretepage.com/angular/angular-formarray-validation
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 skillsForm:FormGroup
 formArray = new FormArray([], [Validators.required]);
  teamForm = this.fb.group({
	teamName: ['', Validators.required],
	employees: this.fb.array(
		[this.createEmpFormGroup()],
		[Validators.required, Validators.maxLength(5)])
}); 



 // skills = new FormArray([]);
//formGroup!: FormGroup
 // arrayName!: any;
  
  constructor(private fb: FormBuilder) { 
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
    
  }

  ngOnInit(): void {
    console.log(this.formArray.status);
	this.formArray.push(new FormControl());
	console.log(this.formArray.status);
//this.createForm()
  }
  createEmpFormGroup() {
    return this.fb.group({
      empName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(21)]],
      skill: ['', [Validators.required]],
    })
  } 
  
  

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
 }

 addSkills() {
  this.skills.push(this.newSkill());
}


  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
   
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
  onSubmit() {
    console.log(this.skillsForm.value);
  }






  /*
  addSkill() {
    const group = new FormGroup({
      level: new FormControl(''),
      name: new FormControl('')
    });

    this.skills.push(group);
  }

  createForm(){
    this.formGroup = this.fb.group({
      arrayName: this.fb.array([])
    });
  }
  get formArray():FormArray {
    return this.formGroup.controls["arrayName"] as FormArray;
  }
  //Every time we call addItem we will generate a FormGroup with 2 fields:

  delete(indice:number){
    this.arrayName.removeAt(indice);
  }

  addItem() {
    
const some=this.fb.group({
      diagnosis: ['', Validators.required],
      year: ['2022', Validators.required]
    })
    this.arrayName.push(some)
    
  }
*/

}
