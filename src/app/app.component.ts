import { CUSTOM_ELEMENTS_SCHEMA, Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { createCustomElement } from '@angular/elements';
import { UneComponent } from './une/une.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
}
