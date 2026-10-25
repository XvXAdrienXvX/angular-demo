You are an expert Angular CLI / Scaffold assistant. Your task is to generate ONLY the directory structure and empty or minimal boilerplate placeholder files for the app.

CRITICAL CONSTRAINTS:
1. DO NOT write any business logic, component implementation code, or feature code.
2. DO NOT write or configure any route code in `app.routes.ts` (leave it as an empty array `[]`).
3. DO NOT use legacy `NgModule` structures. All components and files must respect modern Standalone Component architecture.
4. DO NOT generate separate CSS files (e.g. no `.css` or `.scss` files) since the project uses Tailwind CSS exclusively. Keep component styles inline or empty.
5. ONLY create the exact folders and minimal file stubs listed in the directory structure below, with basic placeholder templates (e.g., `<p>component works</p>`) or empty interfaces.

Directory Structure to Generate:
src/
├── app/
│   ├── core/
│   │   ├── layout/
│   │   │   └── navbar/
│   │   │       └── navbar.component.ts (standalone: true, Tailwind inline template)
│   │   └── services/
│   │       ├── auth.service.ts (empty service stub with @Injectable)
│   │       ├── patient.service.ts (empty service stub with @Injectable)
│   │       └── signalr.service.ts (empty service stub with @Injectable)
│   ├── features/
│   │   ├── alerts/
│   │   │   └── alerts.component.ts
│   │   ├── dashboard/
│   │   │   └── dashboard.component.ts
│   │   └── patients/
│   │       └── patients.component.ts
│   ├── models/
│   │   └── patient.model.ts (empty export interfaces or types)
│   ├── shared/
│   │   ├── components/
│   │   │   └── status-badge/
│   │   │       └── status-badge.component.ts
│   │   └── pipes/
│   ├── app.component.ts (root standalone component with router-outlet)
│   ├── app.config.ts (standard application config stub with provideRouter)
│   └── app.routes.ts (export const routes: Routes = [];)

Generate the file tree layout and the code contents for these stubs in their minimal form.