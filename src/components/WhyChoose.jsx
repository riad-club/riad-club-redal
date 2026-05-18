const WhyChoose = () => (
  <section className="bg-slate-50 py-20">
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Pourquoi le Riad Club pour les agents REDAL ?
          </h2>
          <ul className="mt-6 space-y-3 text-slate-700">
            {[
              "Un club de référence à Rabat, partenaire historique de REDAL",
              "Des installations sportives adaptées aux collaborateurs et à leurs familles",
              "Un environnement sécurisé et convivial après la journée de travail",
              "Des événements sportifs et associatifs réguliers pour renforcer le lien social",
              "Une équipe encadrante expérimentée et à l'écoute des adhérents",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="h-6 w-6 rounded-full bg-emerald-50 border border-emerald-200 grid place-items-center text-emerald-700">
                  ✓
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-[#0f172a] text-slate-100 p-10 shadow-lg shadow-slate-900/30">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Chiffres clés
          </div>
          <div className="mt-3 text-5xl font-extrabold text-white">50+</div>
          <div className="text-sm text-slate-300">Années d'excellence sportive</div>

          <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="font-bold text-white text-xl">800+</div>
              <div className="text-slate-300">Membres</div>
            </div>
            <div>
              <div className="font-bold text-white text-xl">7</div>
              <div className="text-slate-300">Courts tennis</div>
            </div>
            <div>
              <div className="font-bold text-white text-xl">4</div>
              <div className="text-slate-300">Courts padel</div>
            </div>
            <div>
              <div className="font-bold text-white text-xl">1972</div>
              <div className="text-slate-300">Fondation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChoose;



