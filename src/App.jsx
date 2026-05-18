import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Installations from "./components/Installations";
import Tarifs from "./components/Tarifs";
import ActivityPage from "./components/ActivityPage";
import WhyChoose from "./components/WhyChoose";
import ClubLife from "./components/ClubLife";
import EliteTraining from "./components/EliteTraining";
import Footer from "./components/Footer";

export default function App() {
  const [activeCardId, setActiveCardId] = useState(null);

  const scrollToActivity = (activityId) => {
    // Forcer l'animation en déclenchant un événement personnalisé
    const event = new CustomEvent(`forceAnimation_${activityId}`, { detail: Date.now() });
    window.dispatchEvent(event);
    
    // Scroll smooth vers la section
    const scrollToElement = () => {
      const element = document.getElementById(activityId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      } else {
        // Si l'élément n'est pas trouvé, réessayer après un court délai
        setTimeout(scrollToElement, 100);
      }
    };
    
    // Essayer immédiatement puis après un court délai
    scrollToElement();
    setTimeout(scrollToElement, 100);
  };

  const handleCardClick = (cardId) => {
    setActiveCardId(activeCardId === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4f7fb] via-[#fbfaf7] to-[#f4f4ff] text-slate-900">
      <Header />

      <Hero />

      <Installations onMore={scrollToActivity} activeCardId={activeCardId} onCardClick={handleCardClick} />

      <Tarifs />

      {/* Pages dédiées pour chaque activité */}
      <ActivityPage
        id="activity-tennis"
        title="Tennis"
        icon="🏆"
        desc="7 courts en terre battue dans un cadre arboré, adaptés à la pratique loisir comme à la compétition."
        bullets={[
          "Courts entretenus quotidiennement",
          "Éclairage nocturne pour le jeu après le travail",
          "Tournois internes et inter-entreprises",
        ]}
        images={["/tennis1.jpg", "/tennis2.jpg", "/tennis3.jpg"]}
        heroImage="/tenniss.jpg"
      />

      <ActivityPage
        id="activity-padel"
        title="Padel"
        icon="🎾"
        desc="4 courts de padel dernière génération, dont 3 panoramiques et 1 court classique, pour découvrir ce sport dynamique en équipe."
        bullets={[
          "Revêtement de qualité et éclairage LED",
          "Location simple par créneaux horaires",
          "Cours collectifs et coaching individuel",
        ]}
        images={["/padel1.jpg", "/padel2.jpg"]}
        heroImage="/padell.jpg"
      />

      <ActivityPage
        id="activity-piscine"
        title="Piscine"
        icon="🌊"
        desc="Un bassin semi-olympique idéal pour l'entraînement, la remise en forme et la détente en famille."
        bullets={[
          "Piscine 25 m avec lignes de nage",
          "Espace transats et zone enfants",
          "Surveillance par maître-nageur diplômé",
        ]}
        images={["/pool1.jpg", "/pool2.jpg"]}
        heroImage="/pooll.jpg"
      />

      <ActivityPage
        id="activity-restaurant"
        title="Restaurant"
        icon="🍽️"
        desc="Un espace de restauration chaleureux mêlant cuisine marocaine et internationale."
        bullets={[
          "Terrasse avec vue sur les courts",
          "Menus adaptés aux familles et aux sportifs",
          "Organisation de soirées et événements d'entreprise",
        ]}
        images={["/restaurant1.jpg", "/restaurant2.jpg"]}
        heroImage="/restaurantt.jpg"
      />

      <WhyChoose />

      <EliteTraining />

      <ClubLife />

      <Footer />
    </div>
  );
}
