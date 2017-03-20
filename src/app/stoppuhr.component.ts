/**
 * Created by Hanousek on 17.03.2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'stoppuhr',
  templateUrl: './stoppuhr.component.html',
  styleUrls: ['./stoppuhr.component.css']
})
export class StoppUhrComponent {

  time_min: number;
  time_ms: number;
  time_s: number;
  displaytime: string;
  Timearray: string[];
  runflag: boolean;

  start(){

    runflag = true;

    var TIME_INTERRUPT = setInterval( a -> function(a){

      time_ms += 10;
      if(time_ms == 1000){
        time_s += 1;
        time_ms = 0;
      }
      if(time_s > 59){
        time_s = 1;
        time_min += 1;
      }

      displaytime = "" + time_min + ":" + time_s + "," + (time_ms / 10);

    }, 10);

  }


  stop(){

    clearInterval(TIME_INTERRUPT);
    runflag = false;
    displaytime = "" + time_min + ":" + time_s + "," + time_ms;

  }


  grablap(){

    temp_str = "" + time_min + ":" + time_s + "," + time_ms;
    Timearray.push(temp_str);

  }



}
