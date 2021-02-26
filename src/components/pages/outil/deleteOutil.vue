<template>
  <div class="app">
    <header class="app-header">
      <div class="navBar">
        <img
          src="https://fontmeme.com/permalink/210202/b945f0e9f64093815a159c180d95b46b.png"
          alt="polices-gothiques"
        />
        <h1>| Curriculum Vitae - Make Application Great Again</h1>
      </div>
    </header>
    <main class="app-main">
      <div class="container">
        <section class="card card-marketing">
          <div class="media">
            <div class="media_body">
              <h2 class="media_title">
                Êtes-vous sur de vouloir supprimer l'outil ?
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
                      placeholder="Developpement"
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
                    <button class="favorite1 styled1" type="submit">
                      Annuler
                    </button>
                    <button class="favorite1 styled1" type="submit">
                      Supprimer la selection
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
      <p class="footer_cop">Clément ISELIN &copy; 2021</p>
    </footer>
  </div>
</template>
<script>
import app from "@/services/app";

export default {
  name: "DeleteOutil",
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
        .maj("deleteOutil", params)
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
