export const getMainMessage = (compatibilityScore) => {
  if (compatibilityScore >= 95) {
    return (
      <>
        Vous ne cherchez pas un simple fournisseur, vous cherchez un{" "}
        <strong className="font-semibold">partenaire</strong> qui partage votre vision.
        <br /><br />
        Quelqu’un qui comprend que chaque <strong className="font-semibold">détail</strong> compte,
        que la <strong className="font-semibold">qualité</strong> n’est pas négociable,
        et que la beauté d’un projet se construit dans la passion du travail bien fait.
      </>
    );
  } else if (compatibilityScore >= 90) {
    return (
      <>
        Vous cherchez un <strong className="font-semibold">partenaire</strong> qui vibre autant que vous
        pour donner du volume à vos idées.
        <br /><br />
        Vous aimez quand c’est beau, quand c’est <strong className="font-semibold">bien pensé</strong>.
        <br /><br />
        Ça tombe bien. Chez Kontfeel, notre moteur, c’est l’{" "}
        <strong className="font-semibold">amour du travail bien fait</strong> pour sublimer votre marque en magasin.
      </>
    );
  } else {
    return (
      <>
        Vous avez l’œil pour reconnaître la <strong className="font-semibold">qualité</strong> et vous savez
        que derrière chaque belle PLV se cache un <strong className="font-semibold">vrai savoir-faire</strong>.
        <br /><br />
        Chez Kontfeel, nous mettons notre <strong className="font-semibold">passion</strong> au service de vos projets
        pour créer des présentoirs qui ne laissent personne indifférent.
      </>
    );
  }
};
