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
                Rentrer les informations de vos Hobbies
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
  name: "CreateHobbie",
  data() {
    return {
      hobbie: {
        nom: null,
        info: null
      }
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("nom", this.hobbie.nom);
      params.append("info", this.hobbie.info);
      app
        .maj("createHobbie", params)
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
