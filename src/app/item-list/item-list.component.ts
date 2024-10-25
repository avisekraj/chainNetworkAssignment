import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@Component({
  selector: 'app-item-list',
  standalone: true,  // Make this component standalone
  imports: [CommonModule, FormsModule, HttpClientModule],  // Include HttpClientModule here
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  filteredItems: any[] = [];
  filterText: string = '';
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (response) => {
          this.items = response;
          this.filteredItems = [...this.items];
        },
        (error) => {
          this.error = 'Failed to load items from the API.';
          console.error(error);
        }
      );
  }

  sortItems(order: 'asc' | 'desc'): void {
    this.filteredItems.sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return order === 'asc' ? comparison : -comparison;
    });
  }

  applyFilter(): void {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
