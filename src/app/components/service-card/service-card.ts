import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css'
})
export class ServiceCard {
  @Input() service!: Service; // The '!' tells TypeScript it will be provided

  onContactClick() {
    // You can customize this to open WhatsApp, email, or a contact form
    const message = `Hi! I'm interested in your ${this.service.title} service. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
