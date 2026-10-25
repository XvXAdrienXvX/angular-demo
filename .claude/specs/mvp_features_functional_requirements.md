# MVP Features & Functional Requirements

## Feature 1: Triage Command Center (Dashboard)
* **Summary Cards:** Display total active patients, critical alerts count, and stable patients count using computed signal states.
* **Triage Grid / Table:** Responsive list of patients showing demographics, room number, condition, and latest vitals (Heart Rate, Blood Pressure, $\text{SpO}_2$, Temperature).
* **Status Badges:** Color-coded status indicators ($\text{Stable}$ = Green, $\text{Warning}$ = Yellow, $\text{Critical}$ = Red with pulse animation).

## Feature 2: Real-time Telemetry Streaming (SignalR)
* **Live Updates:** Listen to a SignalR hub (`/vitalHub`) via an Angular service.
* **Reactive Binding:** When a live vital update arrives from the backend, update the respective patient's record in the signal store, causing UI metric cards and rows to instantly re-render without page refreshes.
* **Threshold Triggers:** Automatically re-evaluate patient status ($\text{stable} \rightarrow \text{critical}$) if heart rate or $\text{SpO}_2$ breaches clinical safety thresholds.

## Feature 3: Mock Persona Switcher & RBAC
* **User Context:** A global `AuthService` managing the currently logged-in user signal (Doctor vs. Nurse profiles).
* **Navbar Switcher:** A dropdown selector in the layout header allowing instant role/persona switching.
* **Scoped Views:** A toggle on the dashboard allowing doctors to filter between "All Hospital Patients" vs. "My Assigned Patients".

## Feature 4: Patient Detail & Vitals History
* **Drill-down View:** Select a patient to view historical vital sign logs and unacknowledged clinical alerts.