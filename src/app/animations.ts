import { trigger, transition, animate, style, state, keyframes } from '@angular/animations';

export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition(':enter, :leave', [
        animate(2000)
    ])
]);

export let slide = trigger('slide', [
    transition(':enter', [
        style({ transform: 'translateX(-10px)' }),
        animate('0.5s ease-out')
    ]),
    transition(':leave', [
        animate('0.5s ease-in', keyframes([
            style({ offset: .2, opacity: 1, transform: 'translateX(20px)' }),
            style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' })
        ]))
    ])

]);
