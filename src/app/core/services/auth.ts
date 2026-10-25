import { Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly users: readonly User[] = [
    {
      id: 'u-1',
      name: 'Dr. Aris Thorne',
      role: 'doctor',
      specialty: 'Cardiology',
    },
    {
      id: 'u-2',
      name: 'Dr. Elena Rostova',
      role: 'doctor',
      specialty: 'Pulmonology',
    },
    { id: 'u-3', name: 'Nurse Jordan Lee', role: 'nurse', ward: 'ICU-North' },
    {
      id: 'u-4',
      name: 'Supervisor Sarah Chen',
      role: 'supervisor',
      ward: 'ICU-All',
    },
  ];

  private readonly currentUserSignal = signal<User | null>(null);
  readonly currentUser = this.currentUserSignal.asReadonly();

  login(user: User): void {
    this.currentUserSignal.set(user);
  }
}
