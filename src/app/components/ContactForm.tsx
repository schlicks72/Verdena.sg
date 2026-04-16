import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const API_URL = import.meta.env.PROD ? '/api/contact' : 'http://localhost:3000/api/contact';

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', company: '', country: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) return;

    setStatus('sending');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ firstName: '', lastName: '', company: '', country: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
        <p className="text-2xl font-bold text-white mb-2">Message sent</p>
        <p className="text-white/80">I'll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-white/60 hover:text-white text-sm underline transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
            placeholder="Your last name"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
            Company
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
            placeholder="Your company (optional)"
          />
        </div>
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-white/80 mb-2">
          Country
        </label>
        <input
          id="country"
          type="text"
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors text-sm"
          placeholder="Your country (optional)"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors text-sm resize-none"
          placeholder="What can I help with?"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-300 text-sm">Something went wrong. Please try again or email me directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-white text-[#53354a] px-8 py-4 rounded-full hover:bg-white/90 transition-all font-bold text-sm inline-flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
