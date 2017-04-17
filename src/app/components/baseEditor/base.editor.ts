import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';

export abstract class BaseEditor implements ControlValueAccessor {
	@Input() label: string;
	@Input() value;


	private changed = new Array<(value) => void>();
	private touched = new Array<() => void>();


	get Value() {
		return this.value;
	}


	set Value(value) {
		if (this.value !== value) {
			this.value = value;
			this.changed.forEach(f => f(value));
		}
	}


	touch() {
		this.touched.forEach(f => f());
	}


	writeValue(value) {
		this.value = value;
	}


	registerOnChange(fn: (value) => void) {
		this.changed.push(fn);
	}


	registerOnTouched(fn: () => void) {
		this.touched.push(fn);
	}
}