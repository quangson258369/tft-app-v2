import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './share/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tft-app-v2';
  path: any;
  constructor(private dataService:DataService,private router: Router, private route: ActivatedRoute){
  
  }
  searchText!:string;
  ngOnInit(){
    
  }
  Search(){
    this.dataService.getSearch(this.searchText);
  }
  checkUrl(){
    let URL=""
  }
}
