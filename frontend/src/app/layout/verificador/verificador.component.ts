import { Component } from '@angular/core';
import { DomainCheckService } from '../../domain-check.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-verificador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verificador.component.html',
  styleUrl: './verificador.component.css'
})
export class VerificadorComponent{
  domain: string = '';                // Property to hold the input domain
  domainAvailability: any;            // Property to hold the API response

  constructor(private domainCheckService: DomainCheckService) {}

  checkDomain(domain: string) {
    if (!domain) return;               // Prevent empty domain check

    this.domainCheckService.checkDomain(domain)
      .then(data => {
        this.domainAvailability = data; // Store the API response
        console.log('Domain availability:', this.domainAvailability);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}