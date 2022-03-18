import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetAPIService } from 'src/app/get-api.service';

@Component({
  selector: 'app-allproduct1',
  templateUrl: './allproduct1.component.html',
  styleUrls: ['./allproduct1.component.css']
})
export class Allproduct1Component implements OnInit {

  mens : any;

  constructor(private http:GetAPIService) { }

  ngOnInit() {
    let resp= this.http.callsApi();
    resp.subscribe((data)=>this.mens=data);
  }

}
