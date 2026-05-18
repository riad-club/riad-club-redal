import { useState, useRef } from "react";
import PriceCard from "./PriceCard";

const Tarifs = () => {
  const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
  const buttonRef = useRef(null);

  const handleCardClick = () => {
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });

      const isDesktop = window.innerWidth >= 768;
      const delay = isDesktop ? 0 : 800;

      setTimeout(() => {
        setIsButtonHighlighted(true);
        setTimeout(() => {
          setIsButtonHighlighted(false);
        }, 500);
      }, delay);
    }
  };

  return (
    <section id="tarifs" className="bg-white/90 border-y border-slate-200/70">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Rejoignez la communauté</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Découvrez nos formules d'adhésion adaptées à tous les profils et intégrez une communauté passionnée
            dans un environnement d'exception.
          </p>
        </div>

        <h3 className="text-center text-2xl font-bold mb-10">Tarifs d'Adhésion</h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PriceCard
            title="Adhérents REDAL"
            subtitle="Tarifs préférentiels pour les agents REDAL"
            accent
            rows={[
              { label: "Individuel", value: "900 DH/an" },
              { label: "Couple", value: "900 DH/an" },
              { label: "Enfant (6-24 ans)", value: "300 DH/an" },
            ]}
            onClick={handleCardClick}
          />
          <PriceCard
            title="Adhérents VEOLIA"
            subtitle="Tarifs préférentiels pour les agents VEOLIA"
            rows={[
              { label: "Individuel", value: "1 200 DH/an" },
              { label: "Couple", value: "1 200 DH/an" },
              { label: "Enfant (6-24 ans)", value: "300 DH/an" },
            ]}
            onClick={handleCardClick}
          />
          <PriceCard
            title="Adhérents Externes"
            subtitle="Frais de première adhésion + cotisation annuelle"
            rows={[
              { label: "Frais 1ère adhésion Individuel", value: "3 000 DH" },
              { label: "Frais 1ère adhésion Couple", value: "3 000 DH" },
              { label: "Cotisation annuelle", value: "3 600 DH" },
              { label: "Assurance obligatoire par personne", value: "100 DH" },
            ]}
            onClick={handleCardClick}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-700 mb-6">Choisissez votre formule et rejoignez le Riad Club.</p>
          <a
            ref={buttonRef}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFnsqyqym36GtmakQZwLWSV2V049fkZWfCCUOYrhy5xE_R9w/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center rounded-xl bg-emerald-700 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-emerald-800 transition-all duration-300 ease-in-out hover:scale-105 ${
              isButtonHighlighted ? "scale-110 shadow-2xl" : "scale-100"
            }`}
          >
            Adhérer maintenant
          </a>
        </div>

        <h3 className="mt-14 text-center text-2xl font-bold">Tarifs Padel</h3>
        <p className="mt-2 text-center text-slate-600">
          L'activité PADEL ne nécessite aucun frais d'abonnement supplémentaire
        </p>

        <div className="mt-8 mx-auto max-w-2xl space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-[#fbfaf7] overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-white/80">
              <h4 className="font-bold text-slate-900">Adhérents Club / Agents REDAL & VEOLIA</h4>
              <p className="mt-1 text-xs text-slate-600">
                Tarifs réservés aux adhérents du club ainsi qu'aux agents REDAL & VEOLIA adhérents
              </p>
            </div>
            {[
              { label: "Heure creuse", value: "50 DH / 1h30", cls: "text-emerald-700" },
              { label: "Heure pleine", value: "65 DH / 1h30", cls: "text-emerald-700" },
            ].map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between px-6 py-4 border-b border-slate-200 last:border-b-0"
              >
                <span className="text-sm text-slate-700">{r.label}</span>
                <span className={`font-bold ${r.cls}`}>{r.value}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#fbfaf7] overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 bg-white/80">
              <h4 className="font-bold text-slate-900">Non Adhérents</h4>
              <p className="mt-1 text-xs text-slate-600">Personnes externes au club</p>
            </div>
            {[
              { label: "Heure creuse", value: "75 DH / 1h30", cls: "text-blue-600" },
              { label: "Heure pleine", value: "90 DH / 1h30", cls: "text-orange-600" },
            ].map((r) => (
              <div
                key={r.label}
                className="flex items-center justify-between px-6 py-4 border-b border-slate-200 last:border-b-0"
              >
                <span className="text-sm text-slate-700">{r.label}</span>
                <span className={`font-bold ${r.cls}`}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
