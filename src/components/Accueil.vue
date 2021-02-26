<template>
  <div>
    <div class="container_cv"  v-for="liste in liste" :key="liste.id">
      <div class="left_parter">
        <router-link to=/admin>
          <div class="loggin_button" right>
            <button
              title="Connexion"
              type="dark" variant="primary">
                <i class="fa fa-power-off fa-lg" ></i>
            </button>
          </div>
        </router-link>
        <header class="personne_header">
          <h1>{{liste.prenom}} {{liste.nom}}</h1>
          <h2>{{liste.qualification}}</h2>
        </header>
        <main class="personne_main">
          <h2>Contactez-moi</h2>
          <div class="infos_me">
            <div>
              <ul>
                <li>Adresse:</li>
                <li>{{liste.adresse}}, {{liste.cp}} {{liste.ville}}</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Mobile:</li>
                <li><a href="tel:+33688502789">{{liste.telephone}}</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Mail:</li>
                <li>
                  <a href="mailto:clement.iselin@gmail.com"
                    >{{liste.mail}}</a
                  >
                </li>
              </ul>
            </div>
            <ul>
              <li class="move">{{liste.permis}} et {{liste.voiture}}</li>
            </ul>
          </div>
        </main>
        <footer class="personne_footer">
          <h2>Me trouver</h2>
          <ul id="listerese"
              v-for="reseau in liste.lesReseaux"
              :key="reseau.id">
            <li class="link_name">
              <a  :href="reseau.lien">
                {{reseau.nom}}</a
              >
            </li>
          </ul>
        </footer>
        <div class="personne_hobbie">
          <h2 id="Hobbies">Mes hobbies</h2>
          <div>
            <div id="listehobb"
              v-for="hobbie in liste.lesHobbies"
              :key="hobbie.id">
              <h3>{{hobbie.nom}}</h3>
              <p>
                {{hobbie.info}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="main_parter">
        <header class="poste_header" id="listepost"
              v-for="poste in liste.lesPostes"
              :key="poste.id">
          <h2 class="title_poste">
            {{poste.nom}}
          </h2>
          <p class="date_poste">
            Disponibilités: {{poste.periode_deb}} à {{poste.periode_fin}}
          </p>
        </header>
        <svg
          class="header_svg"
          xmlns="http://www.w3.org/2000/svg"
          width="650"
          height="30"
          viewBox="0 0 1206.5 30"
        >
          <line
            id="Ligne_2"
            data-name="Ligne 2"
            x2="1167"
            transform="translate(19.5 7.5)"
            fill="none"
            stroke="#363a4b"
            stroke-width="2"
          />
          <line
            id="Ligne_4"
            data-name="Ligne 4"
            x1="1186"
            transform="translate(20 21.5)"
            fill="none"
            stroke="#363a4b"
            stroke-width="2"
          />
          <rect
            id="Rectangle_2"
            data-name="Rectangle 2"
            width="20"
            height="15"
            fill="#363a4b"
          />
          <rect
            id="Rectangle_3"
            data-name="Rectangle 3"
            width="20"
            height="15"
            transform="translate(1206.5 30) rotate(180)"
            fill="#363a4b"
          />
        </svg>
        <section class="experiencePro" id="listeexpe"
              v-for="experience in liste.lesExperiencesPros"
              :key="experience.id">
          <h2 class="experiencePro_title">
            Expérience professionnelle
          </h2>
          <article>
            <h3>{{experience.nom}}</h3>
            <div class="experiencePro_logo">
              <div>
                <p>{{experience.entreprise}}/ {{experience.periode_deb}} à {{experience.periode_fin}}</p>
                <div class="article_experiencePro">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="650"
                    height="15"
                    viewBox="0 0 1186.5 15"
                  >
                    <line
                      id="Ligne_4"
                      data-name="Ligne 4"
                      x1="1186"
                      transform="translate(0 6.5)"
                      fill="none"
                      stroke="#363a4b"
                      stroke-width="2"
                    />
                    <rect
                      id="Rectangle_3"
                      data-name="Rectangle 3"
                      width="20"
                      height="15"
                      transform="translate(1186.5 15) rotate(180)"
                      fill="#363a4b"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <ul class="description_experiencePro">
              <li>
                {{experience.activite}}
              </li>
            </ul>
          </article>
        </section>
        <section class="outilCompetences">
          <div>
            <article class="outils_competences">
              <h3>COMPÉTENCES</h3>
              <div class="developpement">
                <h4>Développement:</h4>
                <ul id="listeCompe"
              v-for="outil in liste.lesOutils"
              :key="outil.id">
                  <li>{{outil.nom}}</li>
                </ul>
              </div>
            </article>
            </div>
        </section>
        <footer>
          <h2 class="formations_title">HISTORIQUE DE FORMATION</h2>
          <div class="formations_footer">
            <ul id="listeForma"
              v-for="formation in liste.lesFormations"
              :key="formation.id">
              <li>{{formation.annee}}</li>
              <li class="separator">-</li>
              <li>{{formation.etablissement}}</li>
              <li class="separator">|</li>
              <li>{{formation.nom}}</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import app from "@/services/app";

export default {
  name: "Accueil",
  data() {
    return {
      liste: []
    };
  },
  computed: {
    list() {
      return this.liste;
    }
  },
  created() {
    app
      .getListe("listePersonne")
      .then(promise => {
        this.liste = promise;
      })
      .catch(error => console.log(error));
  }
};

</script>

<style>
.description_experiencePro{
  white-space: pre-line;
}
.loggin_button{
  position: relative;
  top: -18rem;
  left: 2rem;
}
</style>
