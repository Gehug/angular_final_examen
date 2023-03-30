import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {


  public formType: string;
  public formValue: number;
  public formDate: Date;
  public formTime: string;


  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }


  public add() {
    console.log(`${this.formType} ${this.formValue} ${this.formDate} ${this.formTime} `);

    let postCatch: Observable<any> = this.httpClient.post<any>("http://127.0.0.1:3001/measurements", {
      "formType": this.formType,
      "formValue": this.formValue,
      "formDate": this.formDate,
      "formTime": this.formTime
    });
    postCatch.subscribe(() => {
      console.log("Added to server");

    });

    this.remove();

  }

  public remove() {

  this.formType = "";
  this.formValue = 0;
  this.formDate = new Date();
  this.formTime = "";

  }

}
