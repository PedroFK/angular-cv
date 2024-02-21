import { Component, signal } from '@angular/core';
import { experience } from '../../../interface/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public arrayExperiences = signal<experience[]>([
    {
      summary: {
        strong: "Software Developer - Full Stack",
        
        p: "· Rede Incentive | jan de 2024 - o momento",
      },
      text: "<p>Projetei e criei aplicações com Laravel. Consultas no banco de dados relacional (MySQL). Desenvolvi interfaces de usuário responsivas e atraentes usando HTML, CSS e JavaScript. Trabalhei com BackEnd e FrontEnd. Identifiquei e corrigi gargalos de desempenho na plataforma, otimizando consultas de banco de dados e melhorando a eficiência do código.</p>" 
    },
    {
      summary: {
        strong: "Software Developer",
        p: "· Move Your Body | jul de 2023 - jan de 2024",
      },
      text: "<p>Construção de páginas responsivas e componentes dinâmicos. Criação de API Rest. Desenvolvimento de novos módulos e funcionalidades. Utilizando as linguagens: Javascript, PHP, Laravel e VUE</p>" 
    },
    {
      summary: {
        strong: "",
        p: "",
      },
      text: "<p></p>" 
    },
  ])
}
