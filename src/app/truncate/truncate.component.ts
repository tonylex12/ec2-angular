import { Component } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';

@Component({
  selector: 'app-truncate',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './truncate.component.html',
  styleUrls: ['./truncate.component.css'],
})
export class TruncateComponent {
  text: string = 'Este es un texto largo que será truncado usando nuestro nuevo pipe personalizado';
}
