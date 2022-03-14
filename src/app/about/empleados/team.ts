import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Employee } from './employee';
export interface Team {
	teamName: string;
	employees: Employee[];
} 
export declare class Validators {
    static min(min: number): ValidatorFn;
    static max(max: number): ValidatorFn;
    static required(control: AbstractControl): ValidationErrors | null;
    static requiredTrue(control: AbstractControl): ValidationErrors | null;
    static email(control: AbstractControl): ValidationErrors | null;
    static minLength(minLength: number): ValidatorFn;
    static maxLength(maxLength: number): ValidatorFn;
    static pattern(pattern: string | RegExp): ValidatorFn;
    static nullValidator(control: AbstractControl): ValidationErrors | null;
    static compose(validators: null): null;
    static compose(validators: (ValidatorFn | null | undefined)[]): ValidatorFn | null;
    static composeAsync(validators: (AsyncValidatorFn | null)[]): AsyncValidatorFn | null;
}
