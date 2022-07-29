import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../share/service/data.service';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.css']
})
export class MetaComponent implements OnInit {
meta!:any[]
  constructor(private dataService:DataService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.meta=this.dataService.getMeta()
  }
  getBackgroundImage(name:string) {
    
    return `url(../../assets/team-comp/${name.substring(0, name.indexOf(' ')).toLowerCase()}.png)`
  }
  getChampionIcon(Name:string){
    if(Name=="Shi Oh Yu"){
      Name="shiohyu";
    }
    if(Name=="Sy'fen"){
      Name="syfen";
    }
   
    if(Name=="Nunu & Willump"){
      Name="nunu";
    }
    return `url(../../../../assets/champions/${Name.replace("TFT7_","").toLowerCase()}.png`
   }
   OnchangePage(id:string){
    this.router.navigateByUrl(`Champion/ChampionDetails/${id}`);
      }
}
