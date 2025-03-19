import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router'; // Import Router

export interface Option {
  name: string;
}

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myControl = new FormControl<Option | null>(null); // Form control for gender
  usernameControl = new FormControl('sreymom'); // Pre-fill username
  passwordControl = new FormControl('123'); // Pre-fill password
  loggedIn = false; // Flag to track login status

  options: Option[] = [
    { name: 'Male' },
    { name: 'Female' },
    { name: 'Other' },
  ];

  filteredOptions: Observable<Option[]>;

  constructor(private router: Router) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(null),
      map((value) => this.filterOptions(value))
    );
  }

  ngOnInit(): void {
    // Auto-fill the gender field on page load
    this.myControl.setValue({ name: 'Female' }); // Set default value for gender
  }

  private filterOptions(value: Option | null): Option[] {
    const filterValue = value?.name.toLowerCase() || '';
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  displayFn(option: Option | null): string {
    return option ? option.name : '';
  }

  login() {
    const username = this.usernameControl.value;
    const password = this.passwordControl.value;
    const gender = this.myControl.value;

    // Sample credentials check
    if (username === 'sreymom' && password === '123' && gender?.name === 'Female') {
      console.log('Login successful!');
      this.loggedIn = true; // Set loggedIn flag to true

      // Redirect to the /product page upon successful login
      this.router.navigate(['/product']);
    } else {
      console.log('Invalid credentials');
      this.loggedIn = false; // Set loggedIn flag to false
    }
  }
}
