'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="py-10 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl">✓</div><h2 className="mt-5 text-2xl font-black">Message received</h2><p className="mt-2 text-slate-500">Thanks — this demo form has successfully captured your message in the UI.</p><button onClick={() => setSent(false)} className="mt-6 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-bold">Send another</button></div>;
  return <form onSubmit={submit}><h2 className="text-xl font-black">Send a message</h2><div className="mt-6 grid gap-5 sm:grid-cols-2"><label><span className="field-label">Name</span><input required className="field" placeholder="Your name" /></label><label><span className="field-label">Email</span><input required type="email" className="field" placeholder="you@example.com" /></label></div><label className="mt-5 block"><span className="field-label">Subject</span><input required className="field" placeholder="How can we help?" /></label><label className="mt-5 block"><span className="field-label">Message</span><textarea required rows={6} className="field resize-none" placeholder="Tell us a little more..." /></label><button className="mt-5 rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-black text-white hover:bg-violet-600">Send message</button><p className="mt-3 text-xs text-slate-400">Demo only — no email is actually sent.</p></form>;
}
