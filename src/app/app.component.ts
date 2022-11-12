import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fly-modules-workspace';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  navigateToMfa() {
    this.router.navigate(['/mfa'])
  }

  try() {
    this.http.get(
      'http://localhost:3000/api/scheduler/getData',
      {
        // headers: new HttpHeaders({
        //   'Authorization': 'ODhDW-tWOd7Uo0-lpyIV1nWzLQmRHqjH5hYR18QfKM4qco7GSIhWpuValltHQZCm-KGgVYRRn8YktfFosXauGwfpYYBd9i6ZbgD4_ebFoIQj7I5tnfLktAhG4IPqYHYx',
        // })
      }
    ).subscribe(res => {
      console.log(res)
    })
  }

}
