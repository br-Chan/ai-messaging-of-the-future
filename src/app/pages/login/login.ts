import { Component, inject, Input } from "@angular/core";
import { AuthService } from "../../services/auth-service";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login {
  private auth = inject(AuthService);
  loginForm!: FormGroup;
  private fb = inject(FormBuilder);

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ["", Validators.required],
    });
  }

  onSubmit() {
    const formValue = this.loginForm.value.name;
    console.log(formValue);

    this.auth.signInAnonymously(formValue);
  }
}
