import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
 


@Injectable()
export class takeawayservice {

  constructor(private _http:Http) { }
getplatos(){
	return this._http.get("http://localhost/tkaapi/api.php/getplatos").map(res=>res.json());
}
getensa(){
	return this._http.get("http://localhost/tkaapi/api.php/getensa").map(res=>res.json());
}
getprime(){
	return this._http.get("http://localhost/tkaapi/api.php/getprime").map(res=>res.json());
}
getpos(){
	return this._http.get("http://localhost/tkaapi/api.php/getpos").map(res=>res.json());
}
getbeb(){
	return this._http.get("http://localhost/tkaapi/api.php/getbeb").map(res=>res.json());
}
}
