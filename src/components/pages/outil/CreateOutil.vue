<template>
  <div class="app">
    <header class="app-header">
      <div class="navBar">
        <img
          src="https://fontmeme.com/permalink/210202/b945f0e9f64093815a159c180d95b46b.png"
          alt="polices-gothiques"
        />
        <h1>| Curriculum Vitae - Make Application Great Again</h1>
        <div class="btn_actions_outils">
          <div
            class="btn_actions_delete"
            title="Supprimer l'outil de la personne"
          >
            <router-link to="/dOutil">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
          <div
            class="btn_actions_update"
            title="Modifier l'outil de la personne"
          >
            <router-link to="/uOutil">
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
              <h2 class="media_title">Rentrer les informations de l'outil</h2>
              <div>
                <form
                  class="media_formulaire"
                  method="POST"
                  @submit.prevent="submit"
                >
                  <div class="form">
                    <label class="form_lab" for="genre">Genre :</label>
                    <input
                      type="text"
                      name="genre"
                      placeholder="Maquettage"
                      v-model="outil.genre"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="nom">Nom : </label>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Adobe XD"
                      v-model="outil.nom"
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
  name: "CreateOutil",
  data() {
    return {
      outil: {
        genre: null,
        nom: null
      }
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("genre", this.outil.genre);
      params.append("nom", this.outil.nom);
      app
        .maj("createOutil", params)
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
