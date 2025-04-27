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

  constructor(private cafeService: CafeService) { }

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((data) => {
      this.cafes = data;
    });
  }
}
