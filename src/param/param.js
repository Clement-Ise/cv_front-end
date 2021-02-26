// Serveur fournisseur de données
const host = "http://localhost:8888/PERSO/cv/back_end/";

export default {
  // les différentes adresses des programme

  //Personne
  listePersonne: host + "listePersonne.php",
  getPersonne: host + "CRUD/personne/getPersonne.php",
  updatePersonne: host + "CRUD/personne/updatePersonne.php",

  //Reseau
  listeReseau: host + "listeReseau.php",
  createReseau: host + "CRUD/reseau/createReseau.php",
  getReseau: host + "CRUD/reseau/getReseau.php",
  updateReseau: host + "CRUD/reseau/updateReseau.php",
  deleteReseau: host + "CRUD/reseau/deleteReseau.php",

  //Hobbie
  listeHobbie: host + "listeHobbie.php",
  createHobbie: host + "CRUD/hobbie/createHobbie.php",
  getHobbie: host + "CRUD/hobbie/getHobbie.php",
  updateHobbie: host + "CRUD/hobbie/updateHobbie.php",
  deleteHobbie: host + "CRUD/hobbie/deleteHobbie.php",

  //Poste
  listePoste: host + "listePoste.php",
  createPoste: host + "CRUD/poste/createPoste.php",
  getPoste: host + "CRUD/poste/getPoste.php",
  updatePoste: host + "CRUD/poste/updatePoste.php",
  deletePoste: host + "CRUD/poste/deletePoste.php",

  //Experience Pro
  listeExperiencePro: host + "listeExperiencePro.php",
  createExperiencePro: host + "CRUD/experience_pro/createExperiencePro.php",
  getExperiencePro: host + "CRUD/experience_pro/getExperiencePro.php",
  updateExperiencePro: host + "CRUD/experience_pro/updateExperiencePro.php",
  deleteExperiencePro: host + "CRUD/experience_pro/deleteExperiencePro.php",

  //Outil
  listeOutil: host + "listeOutil.php",
  createOutil: host + "CRUD/outil/createOutil.php",
  getOutil: host + "CRUD/outil/getOutil.php",
  updateOutil: host + "CRUD/outil/updateOutil.php",
  deleteOutil: host + "CRUD/outil/deleteOutil.php",

  //Formation
  listeFormation: host + "listeFormation.php",
  createFormation: host + "CRUD/formation/createFormation.php",
  getFormation: host + "CRUD/formation/getFormation.php",
  updateFormation: host + "CRUD/formation/updateFormation.php",
  deleteFormation: host + "CRUD/formation/deleteFormation.php"
};
