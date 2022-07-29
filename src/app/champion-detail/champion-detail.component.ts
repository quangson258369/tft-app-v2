import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Popover, Tooltip } from 'antd';
import { Observable } from 'rxjs';
import { Champion } from '../share/model/champion';
import { DataService } from '../share/service/data.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit {

  constructor(private dataService:DataService,private router: Router, private route: ActivatedRoute) { }
championId='';
champion!:Champion[];
trails:any[]=[];
trait!:any[];
relativeChampion:any[]=[];
trailsRelative:Champion[]=[];
  ngOnInit(): void {
    this.championId=this.route.snapshot.params['id'];
    this.champion=this.dataService.getChampionbyId(this.championId);
   this.trait=this.dataService.getChampionbyId(this.championId).map((c:Champion)=>c.traits)
    for (var i=0; i<this.trait[0].length; i++){
      this.trails.push(this.dataService.getTrailsInfo(this.trait[0][i]));
    }
   this.router.routeReuseStrategy.shouldReuseRoute=()=>{
    return false;
   }
   
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
  getTraitsChampion(champion:string){
    let temp;
    temp=this.dataService.getChampionbyId(champion).map((c:Champion)=>c.traits) ;
    console.log(temp);
    return temp;
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
  return`url(../../assets/champions/tft7_${Name.toLowerCase().replace(/ /g,"").trim()}.tft_set7.png)`
  }
  OnchangePage(id:string){
this.router.navigateByUrl(`Champion/ChampionDetails/${id}`);
  }
  getUrlTrails(trails:string){
    
    if(trails=="Scalescorn"){
      trails = "dragonbane"
    }
   if(trails==null||trails==""){
    return null
   }
   else{return `../../assets/traits/trait_${trails.toLowerCase().replace(" ","")}.png`}
    
  }
  getUrlSkill(skill:string){
    return `../../assets/champions/${skill.replace(" ","")}.png`
  }
  getBorderSet(set:string){
    var option;
var bronze="1px solid rgb(215, 150, 123)";
var silver="1px solid #cccaca";
var gold="1px solid #e5a109";
var chromatic="1px solid white"

if(set=="bronze"){
  option= bronze;
}
if(set=="silver"){
  option= silver;
}
if(set=="gold"){
  option= gold;
}
if(set=="chromatic"){
  option= chromatic;
}
return option;
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
    return `url(../../../../assets/champions/${Name.toLowerCase().replace(" ","")}.png`
   }

getBackgroundSet(set:string){
  var option;
    var bronze="#6f4939";
    var silver="#858585";
    var gold="#a27207";
    var chromatic="conic-gradient(from 180deg at 50% 50%, rgb(181, 249, 177) -25.61deg, rgb(174, 167, 248) 0.63deg, rgb(185, 232, 188) 27.2deg, rgb(246, 254, 216) 56.21deg, rgb(199, 251, 247) 83.01deg, rgb(154, 240, 254) 109.35deg, rgb(245, 236, 255) 129.56deg, rgb(248, 153, 248) 154.85deg, rgb(182, 252, 227) 181.24deg, rgb(126, 147, 242) 210.86deg, rgb(225, 164, 253) 244.3deg, rgb(175, 230, 240) 264.6deg, rgb(243, 241, 199) 287.41deg, rgb(233, 159, 126) 306.52deg, rgb(181, 249, 177) 334.39deg, rgb(174, 167, 248) 360.63deg)";
    if(set=="bronze"){
      option=bronze;
    }
    if(set=="silver"){
      option= silver;
    }
    if(set=="gold"){
      option= gold;
    }
    if(set=="chromatic"){
      option= chromatic;
    }
    return option;
  }


  getChampionByTraits(trait:string){
console.log(trait) 
this.relativeChampion=(this.dataService.getChampionbyTrait(trait))
console.log(this.relativeChampion);
  return this.relativeChampion;
  }
}
