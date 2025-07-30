import { Component, computed, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  private gifService = inject( GifsService );

  imageUrls = this.gifService.trendingGifs;

  gifss(){
    this.imageUrls.set([])
  }
}
