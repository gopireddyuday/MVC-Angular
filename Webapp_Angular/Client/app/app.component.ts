import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}!</h1> <input type="text" [(ngModel)]="name"/> 
<mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
<button mat-button>Click me!</button>
<mat-checkbox>Check me!</mat-checkbox>`,
})
export class AppComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        // Make the HTTP request:
        //this.http.get('https://api.github.com/zen').subscribe(data => {
        //    // Read the result field from the JSON response.
        //    alert(data['results']);
        //    this.results = data['results'];
        //});
    }
    results = "data";
    name = 'Uday';
}
