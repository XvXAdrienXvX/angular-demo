import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  template: `
    <main class="flex min-h-dvh items-center justify-center bg-gray-50 p-4">
      <section class="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 class="text-2xl font-semibold text-gray-900">Sign in</h1>
        <p class="mt-1 text-sm text-gray-500">
          Choose a demo account to continue.
        </p>

        <ul class="mt-6 space-y-3">
          @for (user of users; track user.id) {
            <li>
              <button
                type="button"
                (click)="signIn(user)"
                class="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 text-left transition hover:border-blue-500 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white"
                >
                  {{ initials(user.name) }}
                </span>
                <span class="flex-1">
                  <span class="block font-medium text-gray-900">{{
                    user.name
                  }}</span>
                  <span class="block text-sm capitalize text-gray-500">
                    {{ user.role }} · {{ user.specialty ?? user.ward }}
                  </span>
                </span>
              </button>
            </li>
          }
        </ul>
      </section>
    </main>
  `,
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly users = this.auth.users;

  protected signIn(user: User): void {
    this.auth.login(user);
    void this.router.navigateByUrl('/dashboard');
  }

  protected initials(name: string): string {
    return name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('');
  }
}
