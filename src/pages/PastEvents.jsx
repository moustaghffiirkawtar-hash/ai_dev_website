import { clubInfo } from '../data/clubData';

export default function PastEvents() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-slate-800">Nos Réalisations & Événements Passés</h1>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Une première année marquante caractérisée par une augmentation rapide de nos effectifs et des réalisations notables.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubInfo.pastEvents.map(event => (
          <div key={event.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 flex flex-col">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h2>
              <span className="inline-block bg-gradient-to-r from-cyan-100 to-blue-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-bold">
                📅 {event.date}
              </span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed flex-grow">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}