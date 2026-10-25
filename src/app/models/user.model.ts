export type User = {
  id: string;
  name: string;
  role: 'doctor' | 'nurse' | 'supervisor';
  specialty?: string;
  ward?: string;
};
