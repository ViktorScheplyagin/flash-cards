import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor() {}

  @ViewChild('card') ref!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    fromEvent(this.ref.nativeElement, 'click').subscribe(this.toggleRotated);
  }

  toggleRotated = () => this.ref.nativeElement.classList.toggle('rotated');

  @Input() sideA = '';
  @Input() sideB = '';
}
