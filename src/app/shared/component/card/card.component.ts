import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardIcon } from '../../../features/home/components/card-grid/card-grid.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon: CardIcon = 'headphones';
  @Input() color: 'purple' | 'aqua' = 'purple';
  @Input() link = '#';
  @Input() flipBack?: string;

  isFlipped = false;

  onCardClick(event: Event): void {
    if (this.flipBack) {
      event.preventDefault();
      this.isFlipped = !this.isFlipped;
    }
  }
}