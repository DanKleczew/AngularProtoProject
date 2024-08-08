import { Component } from '@angular/core';
import { ContentsDataApiService } from '../contents-data-api.service';
import { ConfigDataApiService } from '../config-data-api.service';
import { UneComponent } from '../une/une.component';
import { ArticleComponent } from '../article/article.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [UneComponent, ArticleComponent, CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  contents : any = null;
  configs : any = null;

  constructor ( private contentsDataApiService : ContentsDataApiService, 
                private configDataApiService : ConfigDataApiService )
  {}

  ngOnInit() {
    this.contentsDataApiService.getContentData().then((data)=>this.contents = data.items)
    .then(()=>this.uneArticle = [this.contents[0]])
    .then(()=>this.allArticlesNoUne = this.contents.slice(1));

    this.configDataApiService.getConfigData().then((data)=>this.configs = data.gbsettings.sections[64004701]).then(()=>{
      this.backgroundStyle = {'background-color' : this.hexAndDecimalOpacityToHex(this.configs.listBackgroundOpacity, this.configs.listBackgroundColor) };
   })
  }
  uneArticle : any = null;
  allArticlesNoUne : Array<any> | null = null;

  backgroundStyle !: any;

  hexAndDecimalOpacityToHex(opacityValue : number, hexColor : string) : string{
    const hex = Math.round(opacityValue * 255).toString(16).padStart(2, '0').toUpperCase();
    return hexColor+ hex;
  }
}
