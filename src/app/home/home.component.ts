import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  secureData: any;  // secureData propertysini tanımladık

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getSecureData();
  }

  getSecureData() {
    const token = localStorage.getItem('token');  // Token'ı localStorage'dan alıyoruz
    this.http.get('http://localhost:5116/api/brand/secure-data', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .subscribe(data => {
      this.secureData = data;  // API'den gelen veriyi secureData'ya atıyoruz
      console.log('Secure data:', this.secureData);
      console.log(token);
    }, error => {
      console.error('Error fetching secure data', error);
    });
  }
}
