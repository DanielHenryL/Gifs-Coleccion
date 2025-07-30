import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { Gif } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private httpClient = inject( HttpClient );

  trendingGifs = signal<Gif[]>([]);
  trendingGifLoading = signal(true);

  constructor(){
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){
    this.httpClient.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
        params:{
          api_key: environment.giphyApiKey,
          limit:10,
        }
      }
    )
    .subscribe((resp) => {
      const gif = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gif);
      this.trendingGifLoading.set(false)
      console.log(gif);

      // const gif:Gif[] = resp.data.map( item => {
      //   return {
      //     id:item.id,
      //     title:item.title,
      //     url:item.images.original.url
      //   }
      // })
    })
  }
}
