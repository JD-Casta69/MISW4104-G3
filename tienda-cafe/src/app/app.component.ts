import { Component } from '@angular/core';
import { ListarCafeComponent } from './cafe/components/listar-cafe/listar-cafe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    ListarCafeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda-cafe';
}
