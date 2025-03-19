import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  totalSales = 12500; // Example total sales
  totalOrders = 250; // Example total orders
  totalProducts = 100; // Example total products in stock

  recentTransactions = [
    { id: 1, product: 'Laptop', amount: 1200, date: '2025-03-19' },
    { id: 2, product: 'Mouse', amount: 25, date: '2025-03-18' },
    { id: 3, product: 'Keyboard', amount: 50, date: '2025-03-17' },
  ];

}
