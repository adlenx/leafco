import { Component, OnInit } from '@angular/core';
import { GetAPIService } from 'src/app/get-api.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent  implements OnInit {

  item1 : any;
  closeModal: any;
  id: any;
  products : any;

  constructor(private http:GetAPIService, private modalService: NgbModal, private rout:ActivatedRoute) { } //activated rout for rout id path

  triggerModal(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal=`Closed with: ${res}`;
    }, (res) => {
      this.closeModal=`Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.id=this.rout.snapshot.params['id']; //rout to call id from routerLink
    let resp= this.http.getProduct(this.id); //get api from all products with id
    resp.subscribe((data)=>{this.item1=data;
    console.log(this.id);
    //arrival from app-arrival
    let resp= this.http.getApi();
    resp.subscribe((data)=>this.products=data);
    });
  }


}
