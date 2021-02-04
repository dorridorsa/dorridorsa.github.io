<template>
 <div>
  <div class="contact">
    <img src="../assets/dorsa-logo.png" class="logo" alt="Dorsa logo">
    <h1>Kontakta oss</h1>
</div>

    <b-form @submit="onSkicka" @reset="onAvbryt" v-if="show">
      <b-form-group
        id="input-group-1"
        label="* E-post"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.epost"
          type="epost"
          placeholder="info@.com"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="* Användarnamn" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.namn"
          placeholder="A B"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="* Ämne" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.subject"
          :options="subjects"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="min">Spara personuppgifter</b-form-checkbox>
          <b-form-checkbox value="det">Spara inte personuppgifter</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <input type="submit" @click="onSkicka" value="Skicka">

      <input type="reset" @click="onAvbryt" value="Avbryt">
    </b-form>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          epost: '',
          namn: '',
          subject: null,
          checked: []
        },
        subjects: [{ text: 'Välj', value: null }, 'Service', 'Produkt', 'Problem med inloggning', 'Betalning'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
       
        this.form.epost = ''
        this.form.namn = ''
        this.form.subject = null
        this.form.checked = []
       
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>




 <style scoped>

h1 {
  padding: 30px;
  margin: 30px;

}


</style>