import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy{

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input('name') name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes called');
    console.log(changes)
  }

  ngOnInit() {
    console.log('init called');
    console.log('text content ' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('do check called');
  }

  ngAfterContentInit() {
    console.log('ngAfter content init called0');
  }

  ngAfterContentChecked() {
    console.log('ngAfter content checked called0');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInitt called0');
    console.log('text content ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called0');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called0');
  }
}
