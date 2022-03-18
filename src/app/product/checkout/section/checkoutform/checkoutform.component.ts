import { Component, OnInit } from '@angular/core';
import { GetAPIService } from 'src/app/get-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {

  item1 : any;
  id: any;

  constructor(private http:GetAPIService, private rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.rout.snapshot.params['id']; //rout untuk panggil id
    let resp= this.http.getProduct(this.id);
    resp.subscribe((data)=>{this.item1=data;
    console.log(this.id);
    });
  }

}
