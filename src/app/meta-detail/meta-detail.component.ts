import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { traitActive } from '../share/model/traitActive';
import { DataService } from '../share/service/data.service';

@Component({
  selector: 'app-meta-detail',
  templateUrl: './meta-detail.component.html',
  styleUrls: ['./meta-detail.component.css']
})
export class MetaDetailComponent implements OnInit {
public c="mystic"
  meta!:any
  traitActive!:traitActive[]
  Id!:string
  constructor(private dataService:DataService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id=this.route.snapshot.params['id'];
   this.meta=this.dataService.getMetaById(this.Id);
   this.traitActive=this.dataService.getActiveTrait(this.Id);
   
  }
  champion!:string
 
  getBorderSet(number:number,set:string){
    let trait:any[];
    let style;
    trait=this.dataService.getTrailsInfo(set)
    for(let i of trait){
for(let j=0;j<i.sets.length;j++){
if(number>=i.sets[j].min && number<=i.sets[j].max){
  style=i.sets[j].style;
}
    }
  }
    var option;
var bronze="1px solid rgb(215, 150, 123)";
var silver="1px solid #cccaca";
var gold="1px solid #e5a109";
var chromatic="1px solid white"

if(style=="bronze"){
  option= bronze;
}
if(style=="silver"){
  option= silver;
}
if(style=="gold"){
  option= gold;
}
if(style=="chromatic"){
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
  
getChampImage(x:number,y:number){
  var link="";
 for(let m of this.meta){
for(let i=0;i<m.map.length;i++){
  if(m.map[i].pos.x==x && m.map[i].pos.y==y){
    link= `/assets/champions/${m.map[i].data.champion_id.replace("TFT7_","").toLowerCase()}.png`
  }
  
}
 }
 return link
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
getBackgroundSet(number:number,set:string){
  var option;
  let trait:any[];
    let style;
    trait=this.dataService.getTrailsInfo(set)
    for(let i of trait){
for(let j=0;j<i.sets.length;j++){
if(number>=i.sets[j].min && number<=i.sets[j].max){
  style=i.sets[j].style;
}
    }
  }
    var bronze="#6f4939";
    var silver="#858585";
    var gold="#a27207";
    var chromatic="conic-gradient(from 180deg at 50% 50%, rgb(181, 249, 177) -25.61deg, rgb(174, 167, 248) 0.63deg, rgb(185, 232, 188) 27.2deg, rgb(246, 254, 216) 56.21deg, rgb(199, 251, 247) 83.01deg, rgb(154, 240, 254) 109.35deg, rgb(245, 236, 255) 129.56deg, rgb(248, 153, 248) 154.85deg, rgb(182, 252, 227) 181.24deg, rgb(126, 147, 242) 210.86deg, rgb(225, 164, 253) 244.3deg, rgb(175, 230, 240) 264.6deg, rgb(243, 241, 199) 287.41deg, rgb(233, 159, 126) 306.52deg, rgb(181, 249, 177) 334.39deg, rgb(174, 167, 248) 360.63deg)";
    if(style=="bronze"){
      option=bronze;
    }
    if(style=="silver"){
      option= silver;
    }
    if(style=="gold"){
      option= gold;
    }
    if(style=="chromatic"){
      option= chromatic;
    }
    return option;
  }
}

