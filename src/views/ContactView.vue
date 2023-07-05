<template>
    <div class="container">
      <form action="https://formspree.io/f/xjvqvbdn" method="post" ref="myForm" @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">First name</label>
          <input type="text" class="form-control" name="name" id="exampleFormControlInput1" v-model="firstName" :class="{ 'is-invalid': formSubmitted && !firstName }" :placeholder="getPlaceholder('Please enter your name', formSubmitted && !firstName)">
          <div v-if="formSubmitted && !firstName" class="invalid-feedback">Please enter your name</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label">Last name</label>
          <input type="text" class="form-control" name="name" id="exampleFormControlInput2" v-model="lastName" :class="{ 'is-invalid': formSubmitted && !lastName }" :placeholder="getPlaceholder('Please enter your surname', formSubmitted && !lastName)">
          <div v-if="formSubmitted && !lastName" class="invalid-feedback">Please enter your surname</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput3" class="form-label">Email address</label>
          <input type="email" class="form-control" name="name" id="exampleFormControlInput3" v-model="email" :class="{ 'is-invalid': formSubmitted && !email }" :placeholder="getPlaceholder('Please enter your email', formSubmitted && !email)">
          <div v-if="formSubmitted && !email" class="invalid-feedback">Please enter your email</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="textareaContent" :class="{ 'is-invalid': formSubmitted && !textareaContent }" :placeholder="getPlaceholder('Please enter your message', formSubmitted && !textareaContent)"></textarea>
          <div v-if="formSubmitted && !textareaContent" class="invalid-feedback">Please enter your message</div>
        </div>
        <button type="submit">Submit</button>
        <button type="button" @click="clearForm">Clear Form</button>
      </form>
    </div>
  </template>
  
  <style>
    .is-invalid {
      border-color: red!important;
    }
    .is-invalid::placeholder {
      color: red!important;
    }
  </style>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        textareaContent: '',
        formSubmitted: false,
      };
    },
    methods: {
      clearForm() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.textareaContent = '';
        this.formSubmitted = false;
        this.$refs.myForm.reset();
      },
      handleSubmit() {
        this.formSubmitted = true;
  
        if (!this.firstName || !this.lastName || !this.email || !this.textareaContent) {
          return;
        }
        // Form is valid, proceed with form submission
        this.$refs.myForm.submit();
      },
      getPlaceholder(defaultPlaceholder, isInvalid) {
        if (isInvalid) {
          return 'Please fill in the required field';
        } else {
          return defaultPlaceholder;
        }
      },
    },
  };
  </script>
  