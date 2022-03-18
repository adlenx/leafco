import { Component, OnInit } from '@angular/core';
import { GetAPIService } from 'src/app/get-api.service';

@Component({
  selector: 'app-allproduct4',
  templateUrl: './allproduct4.component.html',
  styleUrls: ['./allproduct4.component.css']
})
export class Allproduct4Component implements OnInit {

  electronics : any;

  constructor(private http:GetAPIService) { }

  ngOnInit() {
    let resp= this.http.callApi();
    resp.subscribe((data)=>this.electronics=data);
  }

}
