import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  private gifService = inject( GifsService );
  public gifs = signal<Gif[]>([])

  term = signal("")

  onSearch( term:string ){
    this.gifService.searchGifs(term).subscribe( (resp) => {
      this.gifs.set(resp)
    } )
  }
}
