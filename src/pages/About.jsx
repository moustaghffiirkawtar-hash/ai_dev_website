import { clubInfo } from '../data/clubData';

export default function About() {
  return (
    // Fond général sombre et tech
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 py-16">
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        
        {/* ========================================= */}
        {/* HERO SECTION: Effet Typographie Néon      */}
        {/* ========================================= */}
        <div className="text-center pt-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Discover the history, vision, and values of the AI & Dev Community Club.
          </p>
        </div>

        {/* ====================================================== */}
        {/* SECTION 1: Introduction & Godmother (Glassmorphism)    */}
        {/* ====================================================== */}
        <div className="relative bg-white/5 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-white/10 text-center overflow-hidden">
          {/* Effet de lumière floue en arrière-plan */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10 mb-10">
              <img 
            src="./img/SanaaElfilali.png" 
            alt="Sanaa El Filali" 
        style={{width:"200px",height:"200px",borderRadius:"70%"}}

            className="mx-auto w-48 h-48 bg-cyan-50 rounded-full p-3 mb-4 shadow-lg object-cover border-4 border-cyan-100"
          />
            <h3 className="text-2xl font-bold text-slate-200">Our Godmother</h3>
            <p className="text-cyan-400 font-extrabold text-2xl mt-3">{clubInfo.fondatrice}</p>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Our History</h2>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              The AI & Dev Community Club, founded and led by Professor Sanaa El Filali, experienced its first year of existence in 2023-2024, a remarkable year characterized by a rapid increase in its membership.
            </p>
            <p className="text-slate-300 leading-relaxed text-lg">
              From its very beginnings, the club has attracted passionate members, united by exceptional collaboration and a shared commitment to innovation. Together, they have put their talents and expertise to work to achieve notable accomplishments, both within the university and beyond.
            </p>
          </div>
        </div>

        {/* ============================================== */}
        {/* SECTION 2: Our Objectives (3D Hover Cards)     */}
        {/* ============================================== */}
        <div>
          <h2 className="text-5xl font-extrabold text-center text-white mb-16 tracking-tight">Our Objectives</h2>
          <div className="grid md:grid-cols-3 gap-10">
            
            {/* Carte IA */}
            <div className="group bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-indigo-500/20 text-center transition-all duration-500 hover:bg-indigo-600 hover:border-indigo-400 hover:shadow-[0_20px_50px_rgba(79,70,229,0.4)] hover:-translate-y-4">
              <div className="text-7xl mb-6 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Artificial Intelligence</h3>
              <p className="text-slate-300 group-hover:text-indigo-100 text-base leading-relaxed">Promote research and development in the field of AI and Machine Learning.</p>
            </div>

            {/* Carte Dev */}
            <div className="group bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-cyan-500/20 text-center transition-all duration-500 hover:bg-cyan-600 hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(34,211,238,0.4)] hover:-translate-y-4">
              <div className="text-7xl mb-6 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-slate-300 group-hover:text-cyan-100 text-base leading-relaxed">Master software development technologies and create concrete applications.</p>
            </div>

            {/* Carte Culture */}
            <div className="group bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-purple-500/20 text-center transition-all duration-500 hover:bg-purple-600 hover:border-purple-400 hover:shadow-[0_20px_50px_rgba(168,85,247,0.4)] hover:-translate-y-4">
              <div className="text-7xl mb-6 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Culture</h3>
              <p className="text-slate-300 group-hover:text-purple-100 text-base leading-relaxed">Encourage interdisciplinarity and cultural openness through scientific events.</p>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* SECTION 3: Our Vision (Neon Glow & Particle Effect)      */}
        {/* ======================================================== */}
        <div className="relative bg-slate-950 text-white p-14 rounded-3xl shadow-2xl text-center border border-indigo-500/30 overflow-hidden">
          {/* Effets de lumière Néon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600 rounded-full filter blur-[80px] opacity-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Our Vision
            </h3>
            <p className="italic text-slate-300 max-w-4xl mx-auto text-xl leading-relaxed mb-12 drop-shadow-md">
              "Our club is not just a meeting place, but a space where ideas come to life and where every member finds the inspiration to push their limits. Together, we have proven that learning and sharing can transform passions into concrete skills. Every project, every event has been an opportunity to grow and build a supportive and dynamic network."
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdu_abXzvs4gCvMcGVI3BvOTdo4Sn_tCop03G0CrhUkmEHYJA/viewform?urp=gmail_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-5 rounded-full font-extrabold text-xl transition-all duration-300 transform hover:scale-110 shadow-[0_0_40px_rgba(34,211,238,0.6)]"
            >
              <span>Join the Adventure</span>
              <span className="text-2xl">🚀</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}