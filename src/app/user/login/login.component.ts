import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthModalComponent } from '../auth-modal/auth-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public signInForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AuthModalComponent>
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signInForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      this.dialogRef.close();
      this.snackBar.open('Авторизация успешно пройдена!', '', {
        duration: 3000,
      });
    }
  }
}
