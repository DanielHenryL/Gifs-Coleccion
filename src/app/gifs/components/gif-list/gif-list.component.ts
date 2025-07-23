import { Component } from '@angular/core';
import { GifsListItemComponent } from './gifs-list-item/gifs-list-item.component';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent { }
