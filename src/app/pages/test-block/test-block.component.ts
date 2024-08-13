import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-test-block',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './test-block.component.html',
  styleUrl: './test-block.component.css'
})
export class TestBlockComponent {

}
