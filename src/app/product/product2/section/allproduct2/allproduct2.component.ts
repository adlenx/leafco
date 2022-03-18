import { Component, OnInit } from '@angular/core';
import { GetAPIService } from 'src/app/get-api.service';

@Component({
  selector: 'app-allproduct2',
  templateUrl: './allproduct2.component.html',
  styleUrls: ['./allproduct2.component.css']
})
export class Allproduct2Component implements OnInit {

  womens : any;

  constructor(private http:GetAPIService) { }

  ngOnInit() {
    let resp= this.http.getsApi();
    resp.subscribe((data)=>this.womens=data);
  }

}
