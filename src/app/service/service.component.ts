import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-service',
  standalone: true, 
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule], 
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  shorten: { [key: number]: boolean } = {};
  services = [
    { 
      id: 1,
      title: 'Registration System',
      description: 'Our team has successfully built and deployed Business Registration System and Business Liense Management',
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-03.f0b2cda8.svg',
      traits: ['charming', 'graceful', 'sassy']
    },
    { 
      id: 2,
      title: 'Micro Loan System',
      description: 'With partnership from a local microfinance, we design and develop a microloan system that manages and process loan requests & approvals, all onthe system.',
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-05.445952e2.svg',
      traits: ['intelligent', 'active', 'friendly']
    },
    { 
      id:3,
      title: 'Bontub - Property Management System',
      description: 'The Bontub Property Management System facilitates comprehensive oversight for managers enabling meticulous control overall operationa facets associated with apartments and Borey.',
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-05.445952e2.svg',
      traits: ['brave', 'loyal', 'strong']
    },
    { 
      id: 4,
      title: 'Project Administratio Suite',
      description: 'A comprehensive set of tools and features for managing various aspects of projects such as: Mission Management System, Document Management System,  Project Tracking System,  Archive Management System, And More+', 
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-07.925cd898.svg',
      traits: ['loyal', 'friendly', 'gentle']
    },
    { 
      id: 5,
      title: 'E-Learning Platform & TVET eRPL System',
      description: 'Our team has design, developed and deployed E-Learning Platform and TVET eRPL (electronicrecognition of prior learning) systems for Ministry of Labour and Vocational Training that are used by thousands of students everyday.',
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-08.33585890.svg',
      traits: ['curious', 'friendly', 'cheerful']
    },
    { 
      id: 6,
      title: 'Human Resource Management System',
      description: 'Comprehensive HRMS solution tailored to meet the diverse needs of modem businesses. Our HRMS is designed to streamline and elevate every aspect of human resource management, fostering amore efficient, collaborative, and engaged workplace.',
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-09.8c30ee51.svg',
      traits: ['curious', 'friendly', 'cheerful']
    },
    { 
      id: 7,
      title: 'Waste Mangement System',
      description: 'Our software is meticulously crafted to streamlin and optimize waste management operations for businesses of all sizes.',
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-011.998f2af1.svg',
      traits: ['curious', 'friendly', 'cheerful']
    },
    { 
      id: 8,
      title: 'INSURA - Core Insurance Solution',
      description: 'INSURA is a cutting-edge core insurance solution, streamlining policy administration, facilitatin efficient sales and marketing, and ensurin regulatory compliant for insurance companies of all sizes. With user-friendly features and advanced analytics, INSURA empowers insurers with flexibility and innovation.',
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-010.0b3fc068.svg',
      traits: ['curious', 'friendly', 'cheerful']
    },
    { 
      id: 9,
      title: 'National Social Securit Funds',
      description: 'NSSFis probably the biggest “insuranc organization” in Cambodia. Our team has successfully redesigned and developed the whole system for NSSF that covers their business process from member and enterprise registration payment management, to claim management.',
      imageUrl: 'https://www.polygram-solutions.com/_next/static/media/project-img-01.dfee43b2.svg',
      traits: ['curious', 'friendly', 'cheerful']
    },
  ];

  toggleDescription(serviceId: number, event: Event) {
    event.preventDefault(); 
    this.shorten[serviceId] = !this.shorten[serviceId];
  }
}
