import { Component, OnInit } from '@angular/core';
import { Cafe } from '../../cafe.model';
import { CafeService } from '../../services/cafe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-cafe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-cafe.component.html',
  styleUrl: './listar-cafe.component.css'
})
export class ListarCafeComponent implements OnInit{
  
  cafes: Cafe[] = [];
  cafesOrigen: number = 0;
  cafesBlend: number = 0;

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((data) => {
      this.cafes = data;
      this.contarCafes(); 
    });
  }

  contarCafes(): void {
    this.cafesOrigen = this.cafes.filter(cafe => cafe.tipo === 'Café de Origen').length;
    this.cafesBlend = this.cafes.filter(cafe => cafe.tipo === 'Blend').length;
  }
}
