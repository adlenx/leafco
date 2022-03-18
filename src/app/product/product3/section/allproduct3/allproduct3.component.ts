import { Component, OnInit } from '@angular/core';
import { GetAPIService } from 'src/app/get-api.service';

@Component({
  selector: 'app-allproduct3',
  templateUrl: './allproduct3.component.html',
  styleUrls: ['./allproduct3.component.css']
})
export class Allproduct3Component implements OnInit {

  jewelerys : any;

  constructor(private http:GetAPIService) { }

  ngOnInit() {
    let resp= this.http.getApi();
    resp.subscribe((data)=>this.jewelerys=data);
  }

}
