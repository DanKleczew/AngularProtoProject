import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Styles } from '../styles';
import { getInfosString } from '../app.article-prototype';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css', '../articles.css']
})
export class ArticleComponent {
  @Input() articleRaw !: any;
  @Input() configs !: any;

  ngOnInit(){
    let titleFont = this.configs.titleFont;
    this.titleStyles = 
    {'color': titleFont.color, 
    'font-size': titleFont.size+'px', 
    'font-family': titleFont.fontType};
    
    let subtitleFont = this.configs.subtitleFont;
    this.subtitleStyles = 
    {'color': subtitleFont.color, 
    'font-size': subtitleFont.size+'px', 
    'font-family': subtitleFont.fontType
    };

    this.infos = getInfosString(this.configs.infosContentType, this.articleRaw);
  }
  
  infos !: string;
  titleStyles !: Styles
  subtitleStyles !: Styles
}
