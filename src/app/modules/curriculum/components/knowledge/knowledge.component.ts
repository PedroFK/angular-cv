import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SIGNAL } from '@angular/core/primitives/signals';
import { knowLedge } from '../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<knowLedge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'ícone html'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone css'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone angular'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'ícone sass'
    },
  ])
}
