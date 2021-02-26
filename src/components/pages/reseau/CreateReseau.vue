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
                Rentrer les informations de votre réseau
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
                        name="nom"
                        v-model="reseau.nom"
                        required
                      />
                    </div>
                    <div class="form">
                      <label class="form_lab" for="lien">Url :</label>
                      <input
                        type="text"
                        name="lien"
                        v-model="reseau.lien"
                        required
                      />
                    </div>
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
      <p class="footer_cop">Clément ISELIN &copy; 2021</p>
    </footer>
  </div>
</template>
<script>
import app from "@/services/app";

export default {
  name: "CreateReseau",
  data() {
    return {
      reseau: {
        nom: null,
        lien: null
      }
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("nom", this.reseau.nom);
      params.append("lien", this.reseau.lien);
      app
        .maj("createReseau", params)
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
