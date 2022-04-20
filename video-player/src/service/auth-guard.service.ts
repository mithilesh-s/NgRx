import { Injectable } from '@angular/core';
import { CanLoad, Route} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor() { }
  canLoad(route: Route): boolean {
    
    let url= route.path;
    console.log('Url:'+ url);
    if (url=='') {
      alert('You are not authorised to visit this page');
      return false;
    }  
    return true; 
  }
}
