
import {
  Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  DoCheck, OnChanges, OnDestroy, OnInit, Input
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  simpleComponent: boolean;

  constructor() {
    console.log('Constructor');
  }

  change() {
    this.simpleComponent = !this.simpleComponent;
  }

  ngOnChanges() {
    console.log('OnChanges()');
  }


  ngOnInit() {
    console.log('OnInit()');
  }

  ngDoCheck() {
    console.log('DoCheck()');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit()');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked()');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit()');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked()');
  }

  ngOnDestroy() {
    console.log('OnDestroy()');
  }
}

