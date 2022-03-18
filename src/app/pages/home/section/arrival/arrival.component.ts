import { Component, OnInit } from '@angular/core';
import { GetAPIService } from 'src/app/get-api.service';

@Component({
  selector: 'app-arrival',
  templateUrl: './arrival.component.html',
  styleUrls: ['./arrival.component.css']
})
export class ArrivalComponent implements OnInit {

  products : any;

  constructor(private http:GetAPIService) { }

  ngOnInit() {
    let resp= this.http.getApi();
    resp.subscribe((data)=>this.products=data);
  }

}
