import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Styles } from '../styles';
import { getInfosString } from '../app.article-prototype';

@Component({
  selector: 'app-une',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './une.component.html',
  styleUrls: ['./une.component.css',  '../articles.css']
})
export class UneComponent{
  @Input() article !: any;
  @Input() configs !: any;

  ngOnInit(){
    let uneFont = this.configs.uneFont;
    this.titleStyles = 
    {'color': uneFont.color, 
    'font-size': uneFont.size+'px', 
    'font-family': uneFont.fontType};
    
    let uneSubtitleFont = this.configs.uneSubtitleFont;
    this.subtitleStyles = 
    {'color': uneSubtitleFont.color, 
    'font-size': uneSubtitleFont.size+'px', 
    'font-family': uneSubtitleFont.fontType
    };

    this.infos = getInfosString(this.configs.infosContentType, this.article)
  }
  
  infos !: string;
  titleStyles !: Styles
  subtitleStyles !: Styles
}
