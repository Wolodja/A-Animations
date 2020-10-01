import { trigger, state, transition, animate, style, group, query, useAnimation, animateChild, stagger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      })),

      transition('collapsed => expanded', [
        animate('200ms ease-out', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*'
        })),
        animate('1s', style({ opacity: 1}))
      ]),
      transition('expanded => collapsed', [
        animate('200ms ease-in')
      ])
    ])
  ]
})
export class ZippyComponent {
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
