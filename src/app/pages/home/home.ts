import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../models/service.model';
import { ServiceCard } from '../../components/service-card/service-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ServiceCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // Contact information - Replace with your actual details
  private phoneNumber = '919479966498'; // Replace with your WhatsApp number
  private email = 'sumitkushwahji@gmail.com'; // Replace with your email

   services: Service[] = [
    {
      id: 1,
      title: 'Windows Installation',
      description: 'Fast and clean OS installation with essential drivers and software. Just drop a message to us!',
      price: '₹300',
      icon: 'fa-brands fa-windows',
      category: 'Technical Support',
      features: ['Fresh OS Installation', 'Driver Setup', 'Essential Software', 'System Optimization']
    },
    {
      id: 2,
      title: 'Online Math Tutoring',
      description: 'Expert math tutoring for all levels. Master algebra, geometry, calculus and more with personalized sessions.',
      price: 'Starting at ₹500/month',
      icon: 'fa-solid fa-calculator',
      category: 'Education',
      features: ['One-on-one sessions', 'Practice problems', 'Exam preparation', 'Homework help']
    },
    {
      id: 3,
      title: 'Science Classes Online',
      description: 'Comprehensive science education covering Physics, Chemistry, and Biology with practical examples.',
      price: 'Starting at ₹600/month',
      icon: 'fa-solid fa-flask',
      category: 'Education',
      features: ['Interactive sessions', 'Lab experiments', 'Concept clarity', 'Board exam prep']
    },
    {
      id: 4,
      title: 'English Language Classes',
      description: 'Improve your English speaking, writing, and grammar skills with qualified instructors.',
      price: 'Starting at ₹450/month',
      icon: 'fa-solid fa-book-open',
      category: 'Education',
      features: ['Grammar basics', 'Conversation practice', 'Writing skills', 'Literature analysis']
    },
    {
      id: 5,
      title: 'Computer Online Classes',
      description: 'Learn computer fundamentals, MS Office, internet basics, and digital literacy skills.',
      price: 'Starting at ₹400/month',
      icon: 'fa-solid fa-desktop',
      category: 'Technology',
      features: ['Basic computer skills', 'MS Office suite', 'Internet usage', 'Digital safety']
    },
    {
      id: 6,
      title: 'C Programming Language',
      description: 'Master the fundamentals of C programming with hands-on coding exercises and projects.',
      price: 'Starting at ₹800/month',
      icon: 'fa-solid fa-code',
      category: 'Programming',
      features: ['Syntax and basics', 'Data structures', 'Algorithms', 'Real projects']
    },
    {
      id: 7,
      title: 'Java Programming',
      description: 'Learn object-oriented programming with Java from basics to advanced concepts.',
      price: 'Starting at ₹900/month',
      icon: 'fa-brands fa-java',
      category: 'Programming',
      features: ['OOP concepts', 'Java frameworks', 'GUI development', 'Database connectivity']
    },
    {
      id: 8,
      title: 'Doubt Clearing Sessions',
      description: 'Stuck on a problem? Get instant one-on-one help to understand complex topics across all subjects.',
      price: '₹150/hour',
      icon: 'fa-solid fa-headset',
      category: 'Support',
      features: ['Instant help', 'All subjects', 'Concept explanation', 'Problem solving']
    },
    {
      id: 9,
      title: 'Python Programming',
      description: 'Learn Python from scratch - the most popular programming language for beginners and professionals.',
      price: 'Starting at ₹850/month',
      icon: 'fa-brands fa-python',
      category: 'Programming',
      features: ['Basic to advanced', 'Data science intro', 'Web development', 'Automation scripts']
    },
    {
      id: 10,
      title: 'Web Development Basics',
      description: 'Create your first website! Learn HTML, CSS, and JavaScript fundamentals.',
      price: 'Starting at ₹1000/month',
      icon: 'fa-solid fa-globe',
      category: 'Web Development',
      features: ['HTML/CSS basics', 'JavaScript intro', 'Responsive design', 'Portfolio project']
    },
    {
      id: 11,
      title: 'PC Build & Upgrade Consultation',
      description: 'Expert advice on building custom PCs or upgrading your current setup for optimal performance.',
      price: 'Consultation Free',
      icon: 'fa-solid fa-computer',
      category: 'Technical Support',
      features: ['Hardware selection', 'Performance optimization', 'Budget planning', 'Assembly guidance']
    },
    {
      id: 12,
      title: 'Remote Tech Support',
      description: 'Troubleshoot software issues, remove viruses, and optimize your PC remotely with screen sharing.',
      price: '₹200/session',
      icon: 'fa-solid fa-screwdriver-wrench',
      category: 'Technical Support',
      features: ['Virus removal', 'Performance tuning', 'Software installation', 'System cleanup']
    },
    {
      id: 13,
      title: 'Digital Marketing Basics',
      description: 'Learn the fundamentals of digital marketing, social media, and online business promotion.',
      price: 'Starting at ₹700/month',
      icon: 'fa-solid fa-chart-line',
      category: 'Digital Skills',
      features: ['SEO basics', 'Social media marketing', 'Content creation', 'Analytics understanding']
    },
    {
      id: 14,
      title: 'Data Entry & Excel Training',
      description: 'Master data entry skills and advanced Excel functions for professional work.',
      price: 'Starting at ₹350/month',
      icon: 'fa-solid fa-table',
      category: 'Office Skills',
      features: ['Excel formulas', 'Data analysis', 'Chart creation', 'Professional formatting']
    },
    {
      id: 15,
      title: 'Mobile App Development Intro',
      description: 'Get started with mobile app development using modern frameworks and tools.',
      price: 'Starting at ₹1200/month',
      icon: 'fa-solid fa-mobile-screen',
      category: 'Mobile Development',
      features: ['App basics', 'UI/UX principles', 'Cross-platform development', 'Publishing guide']
    }
  ];

  // Contact Methods
  openWhatsApp() {
    const message = 'Hi! I would like to know more about your services. Can you help me?';
    const whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  openEmail() {
    const subject = 'Inquiry about your services';
    const body = 'Hi! I am interested in your services. Please provide more information.';
    const emailUrl = `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, '_blank');
  }

  callNow() {
    // This will try to initiate a call on mobile devices
    window.open(`tel:+${this.phoneNumber}`, '_self');
  }
}
