import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { TeamManagementService } from './team-management.service';
import { Team } from './team';
//import { Employee } from './employee';

@Component({
	selector: 'app-team',
	templateUrl: './team-management.component.html',
	styleUrls: ['./team-management.component.css']

})

export class TeamManagementComponent implements OnInit {
	teamForm = {} as FormGroup;
	//isValidFormSubmitted: boolean | null = null;
	allSkills: Observable<any[]>;
	constructor(
		private formBuilder: FormBuilder,
		private teamMngService: TeamManagementService) {
		this.allSkills = this.teamMngService.getSkills();
	}
	ngOnInit() {
		this.teamForm = this.formBuilder.group({
			teamName: ['', Validators.required],
			nombre: ['', Validators.required],
			edad: ['', Validators.required],
			employees: this.formBuilder.array([])
				
		});
	}
	// teamForm.teamName.errors
	get formControls() { return this.teamForm.controls; }
	get teamName() {
		return this.teamForm.get('teamName');
	}
	get employees(): FormArray {
		return this.teamForm.get('employees') as FormArray;
	}
	//[disabled]="!teamForm.valid"
	onFormSubmit() {
		
	
	
		if (this.teamForm.valid) {
			console.log('form submitted');
		  }
		let team: Team = this.teamForm.value;
		this.teamMngService.saveTeam(team);
		this.teamForm.reset();
	}
	resetTeamForm() {
		this.teamForm.reset();
	}
}








/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
