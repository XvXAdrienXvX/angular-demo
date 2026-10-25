import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="flex items-center justify-between bg-white px-4 py-3 shadow">
      <span class="font-semibold text-gray-900">navbar works</span>
    </nav>
  `,
})
export class Navbar {}
