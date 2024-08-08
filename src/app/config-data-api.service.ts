import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigDataApiService {

  constructor() { }

  async getConfigData() : Promise<any>{
    const data = await fetch('https://testapp111.goodbarber.app/apiv4/getLocalSettings/?v=1');
    return (await data.json());
  }
}
