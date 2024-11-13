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
  isLoading: boolean = false; // Kullanıcıya işlem durumunu göstermek için

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    // Kullanıcıdan gelen veriyi hazırlayın
    const loginData = { email: this.email, password: this.password };

    // İşlem durumunu göstermek için isLoading'i true yap
    this.isLoading = true;

    // API isteği gönder
    this.http.post('http://localhost:5116/api/user/login', loginData)
      .subscribe({
        next: (response: any) => {
          console.log('API Response:', response); // API yanıtını kontrol et

          // Başarılı yanıt durumunu kontrol et
          if (response.flag) {
            // Token'ı localStorage'a kaydet
            localStorage.setItem('token', response.accessToken);

            // Kullanıcıyı yönlendir
            alert('Login successful!');
            this.router.navigate(['/']); // Ana sayfaya yönlendirme
          } else {
            alert(response.message); // Başarısızlık mesajını göster
          }
        },
        error: (error) => {
          console.error('Login error', error);
          alert('An error occurred during login. Please try again.'); // Genel hata mesajı
        },
        complete: () => {
          // İşlem tamamlandığında isLoading'i false yap
          this.isLoading = false;
        }
      });
  }
}
