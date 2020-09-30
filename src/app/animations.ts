import { trigger, transition, animate, style, state } from '@angular/animations';

export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        animate(2000)
    ])
]);

export let slide = trigger('slide', [

    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate(500)
    ]),

    transition(':leave', [
        animate(300, style({transform: 'translateX(-100%)'}))
    ])

]);
