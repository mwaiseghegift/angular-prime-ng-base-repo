import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestBlockComponent } from "./pages/test-block/test-block.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TestBlockComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-prime-ng-base';
}
