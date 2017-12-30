import {
    Component, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
    DoCheck, OnChanges, OnDestroy, OnInit, Input, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-simple',
    template: `
 <h5>Child Component, Hooks shows in the browser's console debugger</h5>
 ` ,
    styleUrls: ['./app.component.css']
})
export class SimpleComponent implements OnChanges, OnInit, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() message = '';

    constructor() {
        console.log('Child Component = Constructor');
    }

    ngOnChanges() {
        console.log('Child Component = OnChanges');
    }


    ngOnInit() {
        console.log('Child Component = OnInit');
    }

    ngDoCheck() {
        console.log('Child Component = DoCheck');
    }

    ngAfterContentInit() {
        console.log('Child Component = AfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('Child Component = AfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('Child Component = AfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('Child Component = AfterViewChecked');
    }

    ngOnDestroy() {
        console.log('Child Component = OnDestroy');
    }

}

