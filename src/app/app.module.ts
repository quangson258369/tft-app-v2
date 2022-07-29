import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionComponent } from './champion/champion.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ItemComponent } from './item/item.component';
import { MetaComponent } from './meta/meta.component';
import { MetaDetailComponent } from './meta-detail/meta-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    ChampionDetailComponent,
    ItemComponent,
    MetaComponent,
    MetaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
