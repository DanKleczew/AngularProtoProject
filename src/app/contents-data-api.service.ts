import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentsDataApiService {

  constructor() { }

    async getContentData(){
      const data = await fetch('https://api.goodbarber.net/front/get_items/3840966/64004701/?local=1');
      return (await data.json());
    }
  }
