<template>
  <div class="container text-center">
    <div class="row align-items-start" id="cont">
      <h1>Connect with me Here</h1>
      <div class="col-md-6">
        <form action="https://formspree.io/f/xjvqvbdn" method="post" ref="myForm" @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">First name</label>
            <input type="text" class="form-control" name="name" id="exampleFormControlInput1" v-model="firstName"
              :class="{ 'is-invalid': formSubmitted && !firstName }"
              :placeholder="getPlaceholder('Please enter your name', formSubmitted && !firstName)">
            <div v-if="formSubmitted && !firstName" class="invalid-feedback">Please enter your name</div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">Last name</label>
            <input type="text" class="form-control" name="name" id="exampleFormControlInput2" v-model="lastName"
              :class="{ 'is-invalid': formSubmitted && !lastName }"
              :placeholder="getPlaceholder('Please enter your surname', formSubmitted && !lastName)">
            <div v-if="formSubmitted && !lastName" class="invalid-feedback">Please enter your surname</div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">Email address</label>
            <input type="email" class="form-control" name="name" id="exampleFormControlInput3" v-model="email"
              :class="{ 'is-invalid': formSubmitted && !email }"
              :placeholder="getPlaceholder('Please enter your email', formSubmitted && !email)">
            <div v-if="formSubmitted && !email" class="invalid-feedback">Please enter your email</div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Write your message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="textareaContent"
              :class="{ 'is-invalid': formSubmitted && !textareaContent }"
              :placeholder="getPlaceholder('Please enter your message', formSubmitted && !textareaContent)"></textarea>
            <div v-if="formSubmitted && !textareaContent" class="invalid-feedback">Please enter your message</div>
          </div>
          <div class="btn d-flex">
            <button type="submit">Submit</button>
            <button type="button" @click="clearForm">Clear Form</button>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <p>call me:0634854531</p>
        <p>email: zwenisiyamanga@gmail.com</p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/siyamanga-zweni-20099b1aa/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-linkedin"
              viewBox="0 0 16 16">
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <svg class="bi bi-github" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.49-.94-.84-1.13-.29-.14-.71-.49-.01-.5.66-.01 1.13.61 1.28.87.75 1.26 1.95.9 2.43.68.07-.52.29-.9.53-1.11-1.86-.21-3.82-.93-3.82-4.13 0-.91.32-1.65.85-2.23-.09-.21-.37-1.05.08-2.19 0 0 .69-.22 2.27.85.66-.18 1.37-.27 2.08-.27s1.42.09 2.08.27c1.58-1.07 2.27-.85 2.27-.85.45 1.14.17 1.98.08 2.19.53.58.85 1.32.85 2.23 0 3.2-1.96 3.92-3.83 4.13.3.26.57.77.57 1.56 0 1.13-.01 2.04-.01 2.31 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram"
              viewBox="0 0 16 16">
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
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
<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

#cont {
  background-color: #e7ded9;

  border-radius: 8px;
}

.is-invalid {
  border-color: red !important;
}

.is-invalid::placeholder {
  color: red !important;
}

.btn {
  justify-content: space-between;
  padding: 8px;
  border-radius: 10px;
}

button {
  border: 1px solid#999fa0;
  padding: 2px;
  background-color: #e7ded9;
  color: black;
  border-radius: 12px;
  box-shadow: 5px 10px 0px black;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  animation: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.social-icons a {
  display: inline-block;
  margin: 0 0.5rem;
  color: #000;
  transition: color 0.3s ease;
}
@media(width<770px){
  .container{
    margin-top: 20px;
    margin-bottom: 40px;
    
  }
}
</style>