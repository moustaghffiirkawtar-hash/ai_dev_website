import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! (Simulation, pas de backend)");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-slate-800">Contactez-nous</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        <div className="mb-6">
          <label className="block text-slate-700 font-bold mb-2">Nom</label>
          <input 
            type="text" name="name" value={form.name} onChange={handleChange} required 
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors bg-slate-50" 
            placeholder="Votre nom complet"
          />
        </div>
        <div className="mb-6">
          <label className="block text-slate-700 font-bold mb-2">Email</label>
          <input 
            type="email" name="email" value={form.email} onChange={handleChange} required 
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors bg-slate-50" 
            placeholder="votre.email@exemple.com"
          />
        </div>
        <div className="mb-8">
          <label className="block text-slate-700 font-bold mb-2">Message</label>
          <textarea 
            name="message" value={form.message} onChange={handleChange} required rows="5" 
            className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors bg-slate-50 resize-none" 
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/30 transform hover:scale-[1.02]"
        >
          Envoyer le message
        </button>
      </form>
      
    </div>
  );
}