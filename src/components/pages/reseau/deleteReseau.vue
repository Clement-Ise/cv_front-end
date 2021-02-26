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
                Êtes-vous sur de vouloir supprimer le réseaux ?
              </h2>
              <div class="reseau">
                <form
                  class="media_formulaire"
                  method="POST"
                  @submit.prevent="submit"
                >
                  <div>
                    <div class="form">
                      <label class="form_lab" for="nom">Identifiant :</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        placeholder="Exemple-ex"
                        v-model="reseau.nom"
                        required
                      />
                    </div>
                    <div class="form">
                      <label class="form_lab" for="lien">Url :</label>
                      <input
                        type="text"
                        id="lien"
                        name="lien"
                        placeholder="https://www.exemple.com/"
                        v-model="reseau.lien"
                        required
                      />
                    </div>
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
  name: "DeleteReseau",
  data() {
    return {
      reseau: {
        id: 0,
        nom: null,
        lien: null
      }
    };
  },
  created() {
    // get id reseau via route
    this.reseau.id = this.$route.params.id;
    // Object FormData to set parameters
    let params = new FormData();
    params.append("id", this.reseau.id);
    app
      .get("getReseau", params)
      .then(promise => {
        this.reseau = promise;
      })
      .catch(error => console.log(error));
  },
  methods: {
    submit: function() {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", this.reseau.id);
      params.append("nom", this.reseau.nom);
      params.append("lien", this.reseau.lien);
      // Call Ajax service
      app
        .maj("deleteReseau", params)
        .then(promise => {
          this.reseau = promise;
          // Redirect to admin page
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
