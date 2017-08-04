import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }    from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule }            from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }          from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MusicComponent }        from './music/music.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    IntroductionComponent,
    MusicComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
