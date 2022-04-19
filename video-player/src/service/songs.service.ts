import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService implements OnInit {

  constructor(private http:HttpClient ) { }
  private baseUrl="http://localhost:3000/videos"
  ngOnInit(): void {
    
  }


  getSongs(){
   return this.http.get(this.baseUrl)
  }




}
