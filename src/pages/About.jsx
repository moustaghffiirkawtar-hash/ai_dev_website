import { clubInfo } from '../data/clubData';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">À Propos de Nous</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Découvrez l'histoire, la vision et les valeurs du Club AI & Dev Community.
        </p>
      </div>

      {/* Section 1: Introduction & Fondatrice */}
      <div className="bg-white p-8 rounded-2xl shadow-lg mb-10 border-l-4 border-cyan-500 hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 text-center">
            <img 
              src="./img/SanaaElfilali.png" 
              alt="SanaeElfilali" 
              style={{width:"200px",height:"200px",borderRadius:"70%"}}
              className="mx-auto w-24 h-24 bg-cyan-50 rounded-full p-3 mb-4"
            />
            <h3 className="text-xl font-bold text-slate-800">Notre Marraine</h3>
            <p className="text-indigo-700 font-extrabold text-lg mt-2">{clubInfo.fondatrice}</p>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Notre Histoire</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Le Club AI & Dev Community, fondé et dirigé par le professeur Sanaa El Filali, a vécu sa première année d'existence en 2023-2024, une année marquante caractérisée par une augmentation rapide de ses effectifs.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dès ses débuts, le club a su attirer des membres passionnés, unis par une collaboration exceptionnelle et un engagement commun envers l'innovation. Ensemble, ils ont mis en œuvre leurs talents et expertises pour accomplir des réalisations notables, tant au sein de l'université qu'au-delà.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Nos Objectifs (Les 3 piliers du PDF) */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Nos Objectifs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl shadow-md border border-indigo-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-indigo-800 mb-2">Intelligence Artificielle</h3>
            <p className="text-slate-600 text-sm">Promouvoir la recherche et le développement dans le domaine de l'IA et du Machine Learning.</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-2xl shadow-md border border-cyan-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-cyan-800 mb-2">Développement Web</h3>
            <p className="text-slate-600 text-sm">Maîtriser les technologies du développement logiciel et créer des applications concrètes.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-md border border-purple-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Culture Numérique</h3>
            <p className="text-slate-600 text-sm">Encourager l'interdisciplinarité et l'ouverture culturelle à travers des événements scientifiques.</p>
          </div>
        </div>
      </div>

      {/* Section 3: Notre Vision (Conclusion dyal l-PDF) */}
      <div className="bg-gradient-to-r from-slate-800 to-indigo-900 text-white p-10 rounded-2xl shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Notre Vision</h3>
        <p className="italic text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
          "Notre club n’est pas seulement un lieu de rencontre, mais un espace où les idées prennent vie et où chaque membre trouve l’inspiration pour se dépasser. Ensemble, nous avons prouvé que l’apprentissage et le partage peuvent transformer des passions en compétences concrètes. Chaque projet, chaque événement a été l’occasion de grandir et de bâtir un réseau solidaire et dynamique."
        </p>
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSdu_abXzvs4gCvMcGVI3BvOTdo4Sn_tCop03G0CrhUkmEHYJA/viewform?urp=gmail_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/30 inline-block"
        >
          Rejoignez l'aventure
        </a>
      </div>

    </div>
  );
}