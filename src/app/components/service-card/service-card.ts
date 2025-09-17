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
    // Replace with your actual WhatsApp number (include country code, no + sign)
    const phoneNumber = '919479966498'; // Replace with your number like: 919876543210 for India
    const message = `Hi! I'm interested in your ${this.service.title} service. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
