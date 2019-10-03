import {Component} from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('header', [
      transition(':enter', [
        query('*', style({ opacity: 0, transform: 'translateY(-15%)' })),
        query('*', stagger('300ms', [
          animate('.3s ease-in', style({ opacity: 1, transform: 'translateY(0)'}))
        ]))
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'RushWebsite';

}
