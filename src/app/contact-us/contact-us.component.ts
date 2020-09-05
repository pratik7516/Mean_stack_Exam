import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {

  }

  ngOnInit(): void { }

  /*async submithere() {
    const data = this.id.value;
    const url = 'http://localhost:3000/connect';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);

  }*/

}
