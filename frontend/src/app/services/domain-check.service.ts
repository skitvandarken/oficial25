// src/app/domain-check.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DomainCheckService {
  private apiKey = 'YOUR_HOST_IO_API_KEY'; // Add your API key here

  constructor() {}

  async checkDomain(domain: string) {
    try {
      const response = await axios.get(`https://api.host.io/domain/${domain}`, {
        headers: {
          'Authorization': this.apiKey,
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error checking domain:', error);
      throw error;
    }
  }
}
