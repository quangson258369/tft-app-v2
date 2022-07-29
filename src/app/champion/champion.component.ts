import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../share/model/champion';
import { DataService } from '../share/service/data.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {
 searchText!:string
  champion!:Champion[];
  constructor(private dataService:DataService,private router: Router, private route: ActivatedRoute){
    this.dataService.myMethod$.subscribe((data) => {
      this.searchText = data; 
  }
);
  }
  ngOnInit(): void {
    this.champion=this.dataService.getChampion();
  }
  
  getUrlChampion(Name:string){
  
    if(Name=="Shi Oh Yu"){
      Name="shiohyu";
    }
    if(Name=="Sy'fen"){
      Name="syfen";
    }
   
    if(Name=="Nunu & Willump"){
      Name="nunu";
    }
  return`url(../../assets/champions/tft7_${Name.toLowerCase().replace(" ","")}.tft_set7.png)`

  }
  getUrlTrails(trails:string){
    
    if(trails=="Scalescorn"){
      trails = "dragonbane"
    }
    
    return `../../assets/traits/trait_${trails.toLowerCase().replace(" ","")}.png`
  }
  getRedirect(id:string){
return this.router.navigate(['details']);
  }
}
