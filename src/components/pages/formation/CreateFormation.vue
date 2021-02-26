<template>
  <div class="app">
    <header class="app-header">
      <div class="navBar">
        <img
          src="https://fontmeme.com/permalink/210202/b945f0e9f64093815a159c180d95b46b.png"
          alt="polices-gothiques"
        />
        <h1>| Curriculum Vitae - Make Application Great Again</h1>
        <div class="btn_actions_footer">
          <div
            class="btn_actions_delete"
            title="Supprimer la formation de la personne"
          >
            <router-link to="/dFormation">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
          <div
            class="btn_actions_update"
            title="Modifier la formation de la personne"
          >
            <router-link to="/uFormation">
              <i class="fa fa-edit fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="nav_menu_crud">
          <nav class="navla">
            <ul class="nav">
              <li class="menu_prhpeofc">
                <a href="/cPersonne">Personne</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cReseau"> Reseaux</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cHobbie">Hobbies</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cPoste">Poste</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cExperiencePro">Expériences Pro</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cOutil">Outils</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cFormation">Formations</a>
              </li>
              <li class="menu_prhpeofc cv">
                <a href="/admin">See Your CV</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="app-main">
      <div class="container">
        <section class="card card-marketing">
          <div class="media">
            <div class="media_body">
              <h2 class="media_title">
                Rentrer les informations de la formation
              </h2>
              <div>
                <form
                  class="media_formulaire"
                  method="POST"
                  @submit.prevent="submit"
                >
                  <div class="form">
                    <label class="form_lab" for="annee">Année : </label>
                    <input
                      type="number"
                      min="1900"
                      name="annee"
                      placeholder="XXXX"
                      v-model="formation.annee"
                      required
                    />
                    <label class="form_lab" for="nom"
                      >Intitulé de la formation :
                    </label>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Baccalauréat"
                      v-model="formation.nom"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="etablissement"
                      >Nom de l'établissement</label
                    >
                    <input
                      type="text"
                      name="etablissement"
                      placeholder="Lycée exemple"
                      v-model="formation.etablissement"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="ville">Ville :</label>
                    <input
                      type="text"
                      name="ville"
                      placeholder="Paris"
                      v-model="formation.ville"
                      required
                    />
                    <label class="form_lab" for="departement"
                      >Département :</label
                    >
                    <input
                      type="text"
                      name="departement"
                      placeholder="XXXXXXX"
                      v-model="formation.departement"
                      required
                    />
                  </div>
                  <div>
                    <button class="favorite styled" type="submit">
                      Ajouter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer class="app-footer">
      <p class="footer_cop">© Clément ISELIN <span id="year"> </span></p>
    </footer>
  </div>
</template>
<script>
import app from "@/services/app";

export default {
  name: "CreateFormation",
  data() {
    return {
      formation: {
        nom: null,
        etablissement: null,
        ville: null,
        departement: null,
        annee: 0
      }
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("nom", this.formation.nom);
      params.append("etablissement", this.formation.etablissement);
      params.append("ville", this.formation.ville);
      params.append("departement", this.formation.departement);
      params.append("annee", this.formation.annee);
      app
        .maj("createFormation", params)
        .then(promise => {
          console.log(promise);
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
