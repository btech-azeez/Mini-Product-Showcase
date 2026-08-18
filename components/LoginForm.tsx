'use client';

import { FormEvent, useState, useSyncExternalStore } from 'react';
import { useRouter } from 'next/navigation';

function subscribeUser(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('lumora-auth', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('lumora-auth', callback);
  };
}

function getUserSnapshot() {
  return typeof window !== 'undefined' ? localStorage.getItem('lumora-user') : null;
}

function getUserServerSnapshot() {
  return null;
}

export default function LoginForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const user = useSyncExternalStore(subscribeUser, getUserSnapshot, getUserServerSnapshot);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = name.trim() || 'Guest';
    window.localStorage.setItem('lumora-user', clean);
    window.dispatchEvent(new Event('lumora-auth'));
    router.push('/');
  }

  function logout() {
    window.localStorage.removeItem('lumora-user');
    window.dispatchEvent(new Event('lumora-auth'));
  }

  if (user) {
    return (
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl">✓</div>
        <h1 className="mt-5 text-2xl font-black">You’re signed in as {user}</h1>
        <p className="mt-2 text-slate-500">This demo session is stored in your browser for the assignment.</p>
        <button onClick={logout} className="mt-6 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold hover:bg-slate-50">
          Sign out
        </button>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-600">Demo account</p>
      <h1 className="mt-2 text-3xl font-black">Welcome to Lumora</h1>
      <p className="mt-3 text-slate-500">Enter any name to simulate a signed-in customer. No password or real account is required.</p>
      <label className="mt-7 block">
        <span className="field-label">Your name</span>
        <input required value={name} onChange={(e) => setName(e.target.value)} className="field" placeholder="Abdul Azeez" />
      </label>
      <button className="mt-5 w-full rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-black text-white hover:bg-violet-600">Sign in</button>
      <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
        <strong>Guest mode:</strong> You can browse and build a cart without signing in.
      </div>
    </form>
  );
}

