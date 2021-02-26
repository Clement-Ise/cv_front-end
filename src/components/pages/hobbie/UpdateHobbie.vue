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
                Modifier le Hobbie
              </h2>
              <div>
                <form
                  class="media_formulaire"
                  method="POST"
                  @submit.prevent="submit"
                >
                  <div class="form">
                    <label class="form_lab" for="nom">Nom :</label>
                    <input
                      type="text"
                      name="nom"
                      v-model="hobbie.nom"
                      required
                    />
                    <label for="msg">Explication :</label>
                    <textarea
                      name="msg"
                      v-model="hobbie.info"
                      required
                    ></textarea>
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
      <p class="footer_cop">Clément ISELIN &copy; 2021</p>
    </footer>
  </div>
</template>
<script>
import app from "@/services/app";

export default {
  name: "UpdateHobbie",
  data() {
    return {
      hobbie: {
        id: 0,
        nom: null,
        info: null
      }
    };
  },
  created() {
    // get id hobbie via route
    this.hobbie.id = this.$route.params.id;
    // Object FormData to set parameters
    let params = new FormData();
    params.append("id", this.hobbie.id);
    app
      .get("getHobbie", params)
      .then(promise => {
        this.hobbie = promise;
      })
      .catch(error => console.log(error));
  },
  methods: {
    submit: function() {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", this.hobbie.id);
      params.append("nom", this.hobbie.nom);
      params.append("info", this.hobbie.info);
      // Call Ajax service
      app
        .maj("updateHobbie", params)
        .then(promise => {
          this.hobbie = promise;
          // Redirect to admin page
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
