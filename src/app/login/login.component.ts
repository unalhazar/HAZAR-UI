import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const loginData = { email: this.email, password: this.password };
    this.http.post('http://localhost:5116/api/user/login', loginData)
      .subscribe((response: any) => {
        console.log('API Response:', response);  // API yanıtını kontrol edin
        
        if (response.flag) {  // Yanıt başarılıysa
          // Token'ı localStorage'a kaydet
          localStorage.setItem('token', response.accessToken);  // accessToken doğru alınıyor mu kontrol edin
          // Başarılı mesajı göster
          alert('Login successful!');
          // Kullanıcıyı başka bir sayfaya yönlendir (örneğin, ana sayfa)
          this.router.navigate(['/']);
        } else {
          alert(response.message);  // Yanıt başarısızsa mesajı göster
        }
      }, error => {
        alert('Login failed!');
        console.error('Login error', error);
      });
  }
}
