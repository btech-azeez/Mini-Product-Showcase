import type { Metadata } from 'next';
import LoginForm from '@/components/LoginForm';
export const metadata: Metadata = { title: 'Login', description: 'Demo login and guest-user handling for the Lumora product showcase.' };
export default function LoginPage() { return <main className="container-shell py-14"><div className="mx-auto max-w-lg"><LoginForm /></div></main>; }
