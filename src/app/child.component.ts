import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() sendChildValue: EventEmitter<string> = new EventEmitter<string>();
  childValue: string;

  sendValueToParent() {
    this.sendChildValue.emit(this.childValue);
  }
}