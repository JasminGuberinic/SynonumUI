<template>
  <div class="Adding">
    <h1>{{ msg }}</h1>
    <form>
      <p>
        <input type="text" v-bind:value="postBody.word" v-on:input="postBody.word = $event.target.value" class="box" />
        <label for="taste_1" style="margin-left: 25px;">Word</label>
      </p>
      <p>
        <input type="text" v-bind:value="postBody.synonym" v-on:input="postBody.synonym = $event.target.value" class="box boxTwo" />
        <label for="taste_2" style="margin-left: 25px;">Synonym </label>
      </p>
      <p>
        <md-button class="md-raised md-primary" v-on:click="postSynonym()">Add Synonym</md-button>
      </p>
    </form>
    <h1>{{ message }}</h1>
    <div class="Geting">
      <form>
        <p>
          <input type="text" v-bind:value="findForWord" v-on:input="findForWord = $event.target.value" class="box" />
          <label for="taste_1"> Enter to get Synonyms</label>
        </p>
        <p>
          <md-button class="md-raised md-primary" v-on:click="getSynonyms()">Get Synonyms</md-button>
        </p>
      </form>
    </div>
    <ul id="example-1">
      <li v-for="sy in synonyms" :key="sy">{{ sy }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      postBody: {
        word: "",
        synonym: ""
      },
      synonyms: [],
      errors: [],
      message: "",
      findForWord: ""
    };
  },
  methods: {
    postSynonym() {
      this.$axios
        .post(
          `http://localhost:6600/Synonyms`,
          {
            Word:this.postBody.word, Synonym:this.postBody.synonym
          },
          {
            headers: {
              "Content-Type":"application/json",
              'Access-Control-Allow-Origin': '*'
            }
          }
        )
        .then(response => {
          this.message = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    getSynonyms() {
      this.$axios
        .get(`http://localhost:6600/Synonyms?word=` + this.findForWord)
        .then(response => {
          this.synonyms = response.data.synonyms;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  color: rgb(41, 116, 146);
  font-weight: bold;
  font-size: 20px;
}
.boxTwo {
  margin-left: 25px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 5px 10px;
  background-color: #EEEEEE;
  border: 1px solid #DDDDDD;
}
a {
  color: #42b983;
}
</style>
