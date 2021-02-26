<template>
  <div>
    <div class="container_cv" v-for="personne in liste" :key="personne.id">
      <div class="left_parter">
        <div class="btn_actions_personne">
          <div class="btn_actions_update" title="Modifier la personne ">
            <router-link
              :to="{
                name: 'UpdatePersonne',
                params: { id: 1 }
              }"
            >
              <i class="fa fa-edit fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
        <header class="personne_header">
          <h1>{{ personne.prenom }} {{ personne.nom }}</h1>
          <h2>{{ personne.qualification }}</h2>
        </header>
        <main class="personne_main">
          <h2>Contactez-moi</h2>
          <div class="infos_me">
            <div>
              <ul>
                <li>Adresse:</li>
                <li>
                  {{ personne.adresse }}, {{ personne.cp }} {{ personne.ville }}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Mobile:</li>
                <li>
                  <a href="tel:+33688502789">{{ personne.telephone }}</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Mail:</li>
                <li>
                  <a href="mailto:clement.iselin@gmail.com">{{
                    personne.mail
                  }}</a>
                </li>
              </ul>
            </div>
            <ul>
              <li class="move">
                {{ personne.permis }} et {{ personne.voiture }}
              </li>
            </ul>
          </div>
        </main>
        <div class="btn_actions_reseau">
          <div class="btn_actions_add" title="Ajouter un reseau">
            <router-link to="/cReseau">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
        <footer class="personne_footer">
          <h2>Me trouver</h2>
          <ul
            id="listerese"
            v-for="reseau in personne.lesReseaux"
            :key="reseau.id"
          >
            <div class="btn_actions_reseau">
              <div class="btn_actions_delete" title="Supprimer le reseau">
                <router-link
                  :to="{
                    name: 'DeleteReseau',
                    params: { id: reseau.id }
                  }"
                >
                  <i class="fa fa-times fa-lg faPave"></i>
                </router-link>
              </div>
              <div class="btn_actions_update" title="Modifier le reseau">
                <router-link
                  :to="{
                    name: 'UpdateReseau',
                    params: { id: reseau.id }
                  }"
                >
                  <i class="fa fa-edit fa-lg faPave"></i>
                </router-link>
              </div>
            </div>
            <li class="link_name">
              <a :href="reseau.lien"> {{ reseau.nom }}</a>
            </li>
          </ul>
        </footer>
        <div class="btn_actions_hobbie">
          <div class="btn_actions_add" title="Ajouter un hobbie">
            <router-link to="/cHobbie">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
        <div class="personne_hobbie">
          <h2 id="Hobbies">Mes hobbies</h2>
          <div>
            <div
              id="listehobb"
              v-for="hobbie in personne.lesHobbies"
              :key="hobbie.id"
            >
              <div class="btn_actions_hobbie">
                <div class="btn_actions_update" title="Modifier le hobbie">
                  <router-link
                    :to="{
                      name: 'UpdateHobbie',
                      params: { id: hobbie.id }
                    }"
                  >
                    <i class="fa fa-edit fa-lg faPave"></i>
                  </router-link>
                </div>
                <div class="btn_actions_delete" title="Supprimer le hobbie">
                  <router-link
                    :to="{
                      name: 'DeleteHobbie',
                      params: { id: hobbie.id }
                    }"
                  >
                    <i class="fa fa-times fa-lg faPave"></i>
                  </router-link>
                </div>
              </div>
              <h3>{{ hobbie.nom }}</h3>
              <p>
                {{ hobbie.info }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="main_parter">
        <div class="btn_actions_poste">
          <div class="btn_actions_add" title="Ajouter un poste">
            <router-link to="/cPoste">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
        <header
          class="poste_header"
          id="listepost"
          v-for="poste in personne.lesPostes"
          :key="poste.id"
        >
          <div class="btn_actions_poste">
            <div class="btn_actions_update" title="Modifier le poste">
              <router-link
                :to="{
                  name: 'UpdatePoste',
                  params: { id: poste.id }
                }"
              >
                <i class="fa fa-edit fa-lg faPave"></i>
              </router-link>
            </div>
            <div class="btn_actions_delete" title="Supprimer le poste">
              <router-link
                :to="{
                  name: 'DeletePoste',
                  params: { id: poste.id }
                }"
              >
                <i class="fa fa-times fa-lg faPave"></i>
              </router-link>
            </div>
          </div>
          <h2 class="title_poste">
            {{ poste.nom }}
          </h2>
          <p class="date_poste">
            Disponibilités: {{ poste.periode_deb }} à
            {{ poste.periode_fin }}
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
        <div class="btn_actions_experiencePro">
          <div
            class="btn_actions_add"
            title="Ajouter une experience professionnelle"
          >
            <router-link to="/cExperiencePro">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
        <section class="experiencePro">
          <h2 class="experiencePro_title">
            Expérience professionnelle
          </h2>
          <article
            id="listeexpe"
            v-for="experience in personne.lesExperiencesPros"
            :key="experience.id"
          >
            <div class="btn_actions_experiencePro">
              <div
                class="btn_actions_update"
                title="Modifier l'experience professionnelle"
              >
                <router-link
                  :to="{
                    name: 'UpdateExperiencePro',
                    params: { id: experience.id }
                  }"
                >
                  <i class="fa fa-edit fa-lg faPave"></i>
                </router-link>
              </div>
              <div
                class="btn_actions_delete"
                title="Supprimer l'experience professionnelle"
              >
                <router-link
                  :to="{
                    name: 'DeleteExperiencePro',
                    params: { id: experience.id }
                  }"
                >
                  <i class="fa fa-times fa-lg faPave"></i>
                </router-link>
              </div>
            </div>
            <h3>{{ experience.nom }}</h3>
            <div class="experiencePro_logo">
              <div>
                <p>
                  {{ experience.entreprise }}/ {{ experience.periode_deb }} à
                  {{ experience.periode_fin }}
                </p>
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
                {{ experience.activite }}
              </li>
            </ul>
          </article>
        </section>
        <div class="btn_actions_outils">
          <div class="btn_actions_add" title="Ajouter un outil">
            <router-link to="/cOutil">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
        <section class="outilCompetences">
          <div>
            <article class="outils_competences">
              <h3>COMPÉTENCES</h3>
              <div class="developpement">
                <h4>Développement:</h4>
                <ul
                  id="listeCompe"
                  v-for="outil in personne.lesOutils"
                  :key="outil.id"
                >
                  <div class="btn_actions_outils">
                    <div class="btn_actions_update" title="Modifier l'outil">
                      <router-link
                        :to="{
                          name: 'UpdateOutil',
                          params: { id: outil.id }
                        }"
                      >
                        <i class="fa fa-edit fa-lg faPave"></i>
                      </router-link>
                    </div>
                    <div class="btn_actions_delete" title="Supprimer l'outil">
                      <router-link
                        :to="{
                          name: 'DeleteOutil',
                          params: { id: outil.id }
                        }"
                      >
                        <i class="fa fa-times fa-lg faPave"></i>
                      </router-link>
                    </div>
                  </div>
                  <li>
                    {{ outil.nom }}
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
        <div class="btn_actions_footer">
          <div class="btn_actions_add" title="Ajouter une formation">
            <router-link to="/cFormation">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
        <footer>
          <h2 class="formations_title">HISTORIQUE DE FORMATION</h2>
          <div class="formations_footer">
            <ul
              id="listeForma"
              v-for="formation in personne.lesFormations"
              :key="formation.id"
            >
              <div class="btn_actions_footer">
                <div class="btn_actions_update" title="Modifier la formation">
                  <router-link
                    :to="{
                      name: 'UpdateFormation',
                      params: { id: formation.id }
                    }"
                  >
                    <i class="fa fa-edit fa-lg faPave"></i>
                  </router-link>
                </div>
                <div class="btn_actions_delete" title="Supprimer la Formation">
                  <router-link
                    :to="{
                      name: 'DeleteFormation',
                      params: { id: formation.id }
                    }"
                  >
                    <i class="fa fa-times fa-lg faPave"></i>
                  </router-link>
                </div>
              </div>
              <li>
                {{ formation.annee }} - {{ formation.etablissement }} |
                {{ formation.nom }}
              </li>
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
  name: "Admin",
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
.description_experiencePro {
  white-space: pre-line;
}
</style>
