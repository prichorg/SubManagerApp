import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubTileComponent } from './Components/sub-tile/sub-tile.component';
import { SubTileControllerComponent } from './Components/sub-tile-controller/sub-tile-controller.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MarketplaceComponent } from './Components/marketplace/marketplace.component';

@NgModule({
  declarations: [
    AppComponent,
    SubTileComponent,
    SubTileControllerComponent,
    NavbarComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
