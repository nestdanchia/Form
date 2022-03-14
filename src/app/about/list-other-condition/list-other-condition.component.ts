import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TeamManagementService } from '../empleados/team-management.service';

@Component({
  selector: 'app-list-other-condition',
  templateUrl: './list-other-condition.component.html',
  styleUrls: ['./list-other-condition.component.css']
})
export class ListOtherConditionComponent implements OnInit {
  @Input()
  formGroup!:FormGroup
  
  @Input()
  employees!:  FormArray
  allSkills!: Observable<any[]>;
  constructor(private fbchild: FormBuilder,private teamMngService: TeamManagementService, private fb: FormBuilder, private readonly cdr: ChangeDetectorRef){
    this.allSkills = this.teamMngService.getSkills()
  }
  
  ngOnInit(): void {
    if (this.employees.length === 0)
    this.addEmployee();

  }
  get age() { return this.employees.get('age'); }

  get empName() { return this.employees.get('empName'); }
 
	addEmployee() {
		let fg = this.createEmpFormGroup();
		this.employees.push(fg);
	}
  deleteEmployee(idx: number) {
		this.employees.removeAt(idx);
	}
  
  public errorHandling = (control: string, error: string) => {
    return this.formGroup.controls[control].hasError(error);
  }

  createEmpFormGroup() {
		return this.fb.group({
			//empName: ['', [Validators.required]],
      empName:this.fbchild.control(null, Validators.required),
		//	age: ['', [Validators.required,Validators.min(21)]],
    age:this.fbchild.control(null, [Validators.required,Validators.min(21)]),
		//	skill: ['', [Validators.required]],
    skill:this.fbchild.control(null, Validators.required),
		})}

}
/*
  <!-- error -->
   <mat-error *ngIf="errorHandling('name', 'required')">
      You must provide a<strong>name</strong>
   </mat-error>
  */
 /*
,Validators.minLength(4)]
<mat-error *ngIf="myError('empName','required')">empName is required</mat-error>
    public myError = (controlName: any, errorName: string) =>{
      return this.employees.controls[controlName].hasError(errorName)
      }
      
*/