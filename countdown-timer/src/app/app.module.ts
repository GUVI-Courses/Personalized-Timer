import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TimerComponent } from "./components/timer/timer.component";
import { TimerListComponent } from "./components/timer-list/timer-list.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from "../environments/environment";
@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
