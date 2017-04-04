import { Component, OnInit } from '@angular/core';
import {takeawayservice} from '../takeaway.service';
import {Card} from '../model/card';

@Component({
  selector: 'app-primeros',
  templateUrl: '../primeros/primeros.component.html',
  styleUrls: ['./segundos.component.css'],
   providers:[takeawayservice]
})
export class SegundosComponent implements OnInit {
 public platoorden;
public platos:Card[];
  constructor(private tkservice:takeawayservice) {
  this.platoorden="SEGUNDOS";
 
}
  ngOnInit() {
    this.listaplatos();
  }
 listaplatos(){
this.tkservice.getprime().subscribe(
  result =>{
    if (result.status=="success"){
this.platos=result.data;
}else {alert ("fallos en peticion sql")}
},
  error=>{
    alert("cagada");
  }
);
 }
}
