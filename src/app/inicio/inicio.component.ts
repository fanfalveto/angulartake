import { Component, OnInit,Input } from '@angular/core';
import {Card} from '../model/card';
import {takeawayservice} from '../takeaway.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[takeawayservice]
})

export class InicioComponent implements OnInit {
 
public platos:Card[];
  constructor(private tkservice:takeawayservice) {
  
 
}
  ngOnInit() {
    this.listaplatos();
  }
 listaplatos(){
this.tkservice.getplatos().subscribe(
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
