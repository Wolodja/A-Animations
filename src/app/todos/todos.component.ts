import { Component } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    trigger('fade', [

      state('void', style({ opacity: 0 })),

      transition('void <=> *', [
        animate(2000)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    console.log(item);
    let index = this.items.indexOf(item);
    console.log(this.items);
    console.log(index);
    this.items.splice(index, 1);
    console.log(this.items);
  }
}
