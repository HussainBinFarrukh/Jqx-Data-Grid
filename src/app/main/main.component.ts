import { Component } from '@angular/core';
import data  from  './data.json';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  // Players: any = data;


/*
  private data = "https://jsonplaceholder.typicode.com/users";

  Players: any
    constructor(private http:HttpClient) {
      this.http.get( this.data)
        .subscribe(res => this.Players = res);
      console.log(this.Players);
      console.log(this.data);

    }
  
    ngOnInit() {
    }
    */
  

   private data = "https://jsonplaceholder.typicode.com/users";
   Players : any;
  constructor(private http:HttpClient) {}
  
  
    ngOnInit() {
      this.http.get( this.data).subscribe(res => {
        this.Players = res;
        console.log(this.Players);
      });
    }





  }




