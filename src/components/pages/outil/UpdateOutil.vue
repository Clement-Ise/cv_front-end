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
          <div class="btn_actions_add" title="Ajouter l'outil de la personne">
            <router-link to="/cOutil">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
          <div
            class="btn_actions_delete"
            title="Supprimer l'outil de la personne"
          >
            <router-link to="/dOutil">
              <i class="fa fa-times fa-lg faPave"></i>
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
                Modifier les informations de l'outil
              </h2>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="587.003"
                    height="3"
                    viewBox="0 0 587.003 3"
                  >
                    <line
                      id="Ligne_20"
                      data-name="Ligne 20"
                      x2="587"
                      y2="2"
                      transform="translate(0.002 0.5)"
                      fill="none"
                      stroke="#707070"
                      stroke-width="1"
                    />
                  </svg>
                  <fieldset>
                    <button class="favorite styled">
                      <router-link to="/admin">Annuler</router-link>
                    </button>
                    <button class="favorite styled" type="submit">
                      Mettre à jour
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer class="app-footer">
      <p class="footer_cop">© Clément ISELIN &copy; 2021</p>
    </footer>
  </div>
</template>
<script>
import app from "@/services/app";

export default {
  name: "UpdateOutil",
  data() {
    return {
      outil: {
        id: 0,
        genre: null,
        nom: null
      }
    };
  },
  created() {
    // get id reseau via route
    this.outil.id = this.$route.params.id;
    // Object FormData to set parameters
    let params = new FormData();
    params.append("id", this.outil.id);
    app
      .get("getOutil", params)
      .then(promise => {
        this.outil = promise;
      })
      .catch(error => console.log(error));
  },
  methods: {
    submit: function() {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", this.outil.id);
      params.append("genre", this.outil.genre);
      params.append("nom", this.outil.nom);
      // Call Ajax service
      app
        .maj("updateOutil", params)
        .then(promise => {
          this.outil = promise;
          // Redirect to admin page
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
