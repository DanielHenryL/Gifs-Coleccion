import { Component, input } from '@angular/core';
import { GifsListItemComponent } from './gifs-list-item/gifs-list-item.component';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  gifs = input.required<string[]>();
 }
