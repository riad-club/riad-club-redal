import { useState } from "react";

const PhotoSlot = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  if (loaded) {
    return (
      <img src={src} alt={alt} className="h-52 w-full rounded-2xl object-cover" />
    );
  }

  return (
    <img
      src={src}
      alt=""
      className="hidden"
      aria-hidden
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  );
};

const EliteTraining = () => (
  <section id="centre-elite" className="bg-white py-20 border-y border-slate-200/70">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Notre Centre d'Entraînement Élite
      </h2>

      <div className="mt-6 max-w-3xl space-y-4 text-slate-700 leading-relaxed">
        <p>
          Le Riad Club s'impose aujourd'hui comme l'un des centres d'entraînement de référence au Maroc, en
          accompagnant des joueurs de haut niveau ainsi qu'une nouvelle génération de jeunes talents prometteurs.
        </p>
        <p>
          Parmi les meilleurs joueurs du club, Taha Baadi, actuel numéro 1 national, représente fièrement le club
          sur les plus grandes compétitions internationales, notamment lors du Grand Prix Hassan II.
        </p>
        <p>
          Le club accompagne également Samy Iraqi, classé 390 mondial junior, symbole de la qualité de la formation
          et du suivi sportif proposés par le Riad Club.
        </p>
        <p>
          Notre école de tennis et notre programme compétition permettent à de nombreux jeunes joueurs de progresser
          dans un environnement structuré, encadré par une équipe technique expérimentée. Les récents résultats de nos
          jeunes, notamment les vainqueurs du tournoi zonal, illustrent la dynamique et l'ambition du centre de formation.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <PhotoSlot src="/elite-1.jpg" alt="Taha Baadi au Grand Prix Hassan II" />
        <PhotoSlot src="/elite-2.jpg" alt="Samy Iraqi" />
        <PhotoSlot src="/elite-3.jpg" alt="Jeunes joueurs vainqueurs du zonal" />
        <PhotoSlot src="/elite-4.jpg" alt="École de tennis et entraînements" />
      </div>
    </div>
  </section>
);

export default EliteTraining;
