import { Component, OnInit } from '@angular/core';
import {Measurement} from "../Models/measurementmodel";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public allMeasurements: Array<Measurement>;


  constructor(private httpClient: HttpClient) {
    this.allMeasurements = [];
  }

  ngOnInit(): void {
    let getCatch:Observable<Array<Measurement>> = this.httpClient.get<Array<Measurement>>("http://127.0.0.1:3001/measurements");
      getCatch.subscribe((response:Array<Measurement>) => {
        console.log(response);
        this.allMeasurements = response;
    });
  }

}
