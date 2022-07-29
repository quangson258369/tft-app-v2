import { Injectable } from '@angular/core';
import { Champion } from '../model/champion';
import championJson from '../../../assets/champions.json';
import trailsJson from '../../../assets/traits.json'
import { trails } from '../model/trails';
import { BehaviorSubject, Observable } from 'rxjs';
import metaJson from '../../../assets/meta.json'
import { traitActive } from '../model/traitActive';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  myMethod$: Observable<any>;
  private myMethodSubject = new BehaviorSubject<any>("");
 
champion:Champion[]=championJson;
meta:any[]=metaJson;
trails:any[]=trailsJson
relativeChampion:Champion[]=[];
  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
   }
  getChampion() { 
    console.log(this.champion)
    return this.champion }
    // this.getChampionbyTrait('Astral')
   
    getChampionbyId(championId:string){
      return (this.champion.filter((a:Champion) => a.championId === championId))
    }
 
getSearch(search:string){
  let temp=search;
return this.myMethodSubject.next(temp);
}

   getChampionbyTrait(trait: string){
    let Heroes=[]
    for(let hero of this.champion){
      for(let i=0; i<hero.traits.length; i++){
        if(hero.traits[i]==trait){
            Heroes.push(hero);
        }
      }
    }
    console.log(Heroes);
    return Heroes;
    
   }


    getTrailsInfo(trails:string){
return (this.trails.filter((a:any)=>a.name===trails));
    }

    getMetaById(id:string){
      console.log(this.meta.filter((a:any)=>a._id==id))
      return this.meta.filter((a:any)=>a._id==id);
    }
  getCount(source:any[],target:any[]){
   let traitActive:traitActive[]=[]
   let count=0;
for(let i=0;i<target.length;i++){
for(let j=0;j<source.length;j++){
  if(target[i]==source[j]){
count++;
  }
}
traitActive.push({
  traitName:target[i],
  number:count
})
count=0
}

console.log(traitActive)
traitActive.sort((a,b)=>b.number-a.number)
return traitActive
  }
    getActiveTrait(id:string){
      let trait=[];
      let traitFilter=[];
      let meta=[]
    meta=this.meta.filter((a:any)=>a._id===id)
      for(let m of meta){
        for(let i=0;i<m.map.length;i++){       
for(let c of this.getChampionbyId(m.map[i].data.champion_id)){
  for(let j=0;j<c.traits.length;j++){
trait.push(c.traits[j])
  }
}
        }
      }
    traitFilter=trait.filter((el, i, a) => i === a.indexOf(el));
  return  this.getCount(trait,traitFilter);
    
    }

    getMeta(){return this.meta}
}


