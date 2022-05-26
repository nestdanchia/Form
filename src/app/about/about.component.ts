import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { debounceTime } from "rxjs/operators";
import * as _ from 'lodash';
import { debounce } from 'lodash';
// https://www.concretepage.com/angular/angular-formarray-validation
// https://bobbyhadz.com/blog/typescript-object-is-possibly-null#:~:text=The%20%22Object%20is%20possibly%20'null,not%20null%20before%20accessing%20properties.
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  copy!:FormGroup;
 skillsForm!:FormGroup;
 //personas
 arryForm!:FormGroup;
 personaForm!:FormGroup ;
 //persForm!:FormGroup;
 separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  title = 'angular-datatable';
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates,
  CountryISO.UnitedKingdom];
  persForm:FormGroup=this.datoBuilder.group(
    {
      nombre:['', Validators.required],
      apellidos:['', Validators.required],
      edad:['', Validators.required],
    }
  );
  //para ver valido invalido
// formArray = new FormArray([], [Validators.required]);
// para 
//genteArray=new FormArray([], [Validators.required]);

  teamForm = this.fb.group({
	teamName: ['', Validators.required],
	employees: this.fb.array(
		[this.createEmpFormGroup()],
		[Validators.required, Validators.maxLength(5)])
});
// arryForm define una clave FormArray


 // skills = new FormArray([]);
//formGroup!: FormGroup
 // arrayName!: any;
 personForm: FormGroup = this.formBuilder.group({
  pname: ['', Validators.required],
  isIndian: ['', Validators.required],
  isEmp: ['', Validators.required],
  favBookEntry: ''
});

companyFG: FormGroup = this.formBuilder.group({
  compName: ['', Validators.required],
  compLocation: ['', Validators.required],
  profile: ['', Validators.required]
});
  constructor(private personas:FormBuilder,private persona:FormBuilder,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,private cdr: ChangeDetectorRef,private datoBuilder:FormBuilder) { 
    
    
    
  }

  ngOnInit(): void {
    
    this.handleNationality();
    this.handleEmploymentStatus();
    this.handleFavoriteBooks();
    // https://www.concretepage.com/angular/angular-formgroup-addcontrol-removecontrol
    // https://medium.com/aubergine-solutions/add-push-and-remove-form-fields-dynamically-to-formarray-with-reactive-forms-in-angular-acf61b4a2afe
//this.cdr.markForCheck();
//this.cdr.detectChanges();
    // al iniciar nombre formarray vacio
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
    
  this.arryForm=this.personas.group({
    gente: this.personas.array([]) 
  })

  this.arryForm.
  valueChanges.pipe(debounceTime(300)).
  subscribe((x: any)=>{
    let nombre=x.gente[0].nombre;
    this.persForm?.get("nombre")?.patchValue(nombre);
    console.log('nombre:',nombre);
    let apellidos=x.gente[0].apellidos;
    this.persForm?.get("apellidos")?.patchValue(apellidos);
    let edad=x.gente[0].edad;
    this.persForm?.get("edad")?.patchValue(edad);
  })

    
 


  }
  get edad() {
    return this.persForm?.get('edad') as FormControl;
  }
  
  get apellidos() {
    return this.persForm?.get('apellidos') as FormControl;
  }
  
  get nombre() {
    return this.persForm?.get('nombre') as FormControl;
  }
  
  get pname() {
    return this.personForm.get('pname') as FormControl;
  }
  get isIndian() {
    return this.personForm.get('isIndian') as FormControl;
  }
  get isEmp() {
    return this.personForm.get('isEmp') as FormControl;
  }
  get favBookEntry() {
    return this.personForm.get('favBookEntry') as FormControl;
  }
  get favBooks() {
    return this.personForm.get('favBooks') as FormArray;
  }

  handleNationality() {
    this.isIndian.valueChanges.subscribe(res => {
      if (res === 'false') {
        this.personForm.addControl('nationality',
          this.formBuilder.control('', [Validators.required]));
      } else {
        this.personForm.removeControl('nationality');
      }
    });
  }
  handleEmploymentStatus() {
    this.isEmp.valueChanges.subscribe(val => {
      if (val === 'true' && !this.personForm.contains('company')) {
        this.personForm.addControl('company', this.companyFG);
      } else {
        this.personForm.removeControl('company');
      }
    });
  }
  handleFavoriteBooks() {
    this.favBookEntry.valueChanges.subscribe(fbEntry => {
      if (fbEntry && !this.personForm.contains('favBooks')) {
        this.personForm.addControl('favBooks',
          this.formBuilder.array([new FormControl('', [Validators.required])]));
      } else {
        this.personForm.removeControl('favBooks');
      }
    });
  }
  deleteBook(index: number) {
    
    this.favBooks.removeAt(index);
  }
  addMoreBooks() {
    this.favBooks.push(new FormControl('', [Validators.required]));
  }
  onFormSubmit() {
    if (this.personForm.valid) {
      this.savePerson(this.personForm);
    }
    
  }

  savePerson(person:FormGroup){
    console.log(person.value)
  }



  createEmpFormGroup() {
    return this.fb.group({
      empName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(21)]],
      skill: ['', [Validators.required]],
    })
  } 
  
// le decimos cuales son las claves del objeto a agregar
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
 }
 // para personas
 nuevaPersona():FormGroup{
   return this.personas.group({
    nombre:'',
    apellidos:'',
    edad:'',
  })
 }
 addPersona(){
   // ahora copy es un objeto totalmente independiente con el mismo 
   const clonedForm = _.cloneDeep(this.persForm);

//let clone=Object.assign(this.copy,this.persForm);
//console.log('clone',clone,this.persForm)
   //this.arryForm.removeControl('gente')
//this.arryForm.addControl('gente', this.persForm);
this.gente.push(clonedForm)
//this.gente.push(this.nuevaPersona())
 }
// agrego objeto vacio lo llenara el formarray por binding
 addSkills() {
  this.skills.push(this.newSkill());
}
   get gente():FormArray{
     return this.arryForm.get('gente')as FormArray
   }
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }
   
  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
  onPers(){
    console.log(this.persForm?.value)
  }
  clear(){
    

 

   // this.persForm?.get("nombre")?.setValue("", { emitEvent: false });
   // ,emitViewToModelChange:   emitModelToViewChange:false emitViewToModelChange:false
//this.persForm?.get("nombre")?.reset(null, { onlySelf:true,emitEvent: false,emitViewToModelChange:false});
//this.persForm?.get("nombre")?.disable({onlySelf:true, emitEvent:false});
//this.personForm.reset()
this.persForm?.get("nombre")?.patchValue("", {onlySelf:true});
this.persForm?.get("apellidos")?.setValue("", { emitEvent: false });
    this.persForm?.get("edad")?.setValue("", { emitEvent: false });

  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
  update(idx:number){
    const name=this.gente.at(idx).get('nombre')?.value;
    let apellidos=this.gente.at(idx).get('apellidos')?.value;
    let edad =this.gente.at(idx).get('edad')?.value;
this.persForm?.get("nombre")?.patchValue(name);
    this.persForm?.get('apellidos')?.patchValue(apellidos);
    this.persForm?.get('edad')?.patchValue(edad);
    this.gente?.get('nombre')?.valueChanges.subscribe((x: any)=>{
  console.log('x:',x);
  this.persForm?.get("nombre")?.patchValue(name)
}
  )
    console.log('name:',name)
    
  }
  deletePersona(idx: number) {
    
    console.log('Se elimino a:',this.gente.at(idx).get('nombre')?.value);
		this.gente.removeAt(idx);
	}
 onPersona(){
   console.log(this.arryForm.value)
 }


}






  /*
  genteArray=new FormArray([], [Validators.required]);

 arryForm!:FormGroup;
 personaForm!:FormGroup

  this.arryForm=this.personas.group({
      gente: this.personas.array([]) 
    })
   this.personForm =this.persona.group(
      {
        nombre:['', Validators.required],
        apellidos:['', Validators.required],
        edad:['', Validators.required],
      }
    );
addGente(){
      return this.gente.push(this.nuevaPersona());
    }
 get gente(){
   return this.arryForm.get("gente") as FormArray
 }
//this.genteArray.push(new FormControl);

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


