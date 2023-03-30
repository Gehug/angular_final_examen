import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Measurement} from "../Models/measurementmodel";
import {Average} from "../Models/averageMeasurementModel";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public averageTemp: number;
  public averagePrecipitation: number;
  public averageWind: number;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    let getCatch: Observable<Average> = this.httpClient.get<Average>("http://127.0.0.1:3001/average");
    getCatch.subscribe((response: Average) => {
      console.log(response);

      this.averageTemp = response.averageTemp;
      this.averagePrecipitation = response.averagePrecipitation;
      this.averageWind = response.averageWind;

    });
  }


}
