import { Component } from '@angular/core';
import { StoppUhrComponent } from './stoppuhr.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  timestop: StoppUhrComponent = {

    time_min: 0,
    time_s : 0,
    time_ms: 0,
    displaytime: "",
    Timearray: [],
    runflag: false

  };
}
