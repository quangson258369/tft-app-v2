import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ChampionComponent } from './champion/champion.component';
import { ItemComponent } from './item/item.component';
import { MetaDetailComponent } from './meta-detail/meta-detail.component';
import { MetaComponent } from './meta/meta.component';

const routes: Routes = [
  {path:'',redirectTo:'/Home',pathMatch: 'full'},
  {path:'Home', component:MetaComponent},
  {path:'Champion', component:ChampionComponent},
  {path:'Home/details/:id', component:MetaDetailComponent},
  {path:'Champion/ChampionDetails/:id', component:ChampionDetailComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
