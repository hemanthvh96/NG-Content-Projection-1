import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  players = [
    { name: 'Virat Kohli', age: '32', country: 'India' },
    { name: 'Hemanth Sharma', age: '26', country: 'India' },
    { name: 'Eoin Morgan', age: '29', country: 'England' },
    { name: 'Kane Williamson', age: '32', country: 'New Zealand' },
  ];

  onDeletePlayer(index) {
    this.players.splice(index, 1);
  }
}
