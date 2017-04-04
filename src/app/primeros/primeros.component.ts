import { Component, OnInit,Input } from '@angular/core';
import {Card} from '../model/card';
 import {takeawayservice} from '../takeaway.service';
@Component({
  selector: 'app-primeros',
  templateUrl: './primeros.component.html',
  styleUrls: ['./primeros.component.css'],
  providers:[takeawayservice]
})

export class PrimerosComponent implements OnInit {
 
public platos:Card[];
public platoorden;
  constructor(private tkservice:takeawayservice) {
  this.platoorden="PRIMEROS";
 
}
  ngOnInit() {
    this.listaplatos();
  }
 listaplatos(){
this.tkservice.getensa().subscribe(
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