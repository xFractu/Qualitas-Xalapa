import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../shared/component/card/card.component';

export type CardIcon = 'headphones' | 'car' | 'shield-check' | 'file-text' | 'whatsapp';

export interface CardData {
  title: string;
  description: string;
  icon: CardIcon;
  color: 'purple' | 'aqua';
  link: string;
  flipBack?: string;
}

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss'
})
export class CardGridComponent {
  @Input() cards: CardData[] = [];
}