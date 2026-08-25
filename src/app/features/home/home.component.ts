import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CardGridComponent, CardData } from './components/card-grid/card-grid.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    CardGridComponent,
    BannerComponent,
    InfoBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardsData: CardData[] = [
    {
      title: 'Asistencia vial',
      description: 'Solicita asistencia rápida y eficiente en carretera.',
      icon: 'headphones',
      color: 'purple',
      link: 'https://www.qualitas.com.mx/asistencia-vial'
    },
    {
      title: 'Reporta un siniestro',
      description: 'Reporta tu siniestro de forma rápida y sencilla.',
      icon: 'car',
      color: 'aqua',
      link: 'https://www.qualitas.com.mx/reporta-siniestro'
    },
    {
      title: 'Condiciones generales',
      description: 'Consulta tus condiciones generales.',
      icon: 'shield-check',
      color: 'purple',
      link: 'https://www.qualitas.com.mx/web/qmx/condiciones-generales'
    },
    {
      title: 'Paga tu póliza',
      description: 'Realiza el pago de tu póliza.',
      icon: 'file-text',
      color: 'aqua',
      link: 'https://www.qualitas.com.mx/web/qmx/pago-de-poliza'
    },
    {
      title: 'Paga tu deducible',
      description: 'Paga el deducible de tu siniestro.',
      icon: 'car',
      color: 'purple',
      link: 'https://www.qualitas.com.mx/web/qmx/pago-de-deducible'
    },
    {
      title: 'Contacta a tu agente',
      description: 'Contáctanos por WhatsApp.',
      icon: 'whatsapp',
      color: 'aqua',
      link: 'https://wa.me/525579627125'
    }
  ];
}