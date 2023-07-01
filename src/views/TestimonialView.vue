<template>
  <div id="Testimons" class="container">
    <h1>Testimonials</h1>
  <div class="testimonial-grid">
    <div
      class="card"
      v-for="testimonial in testimonials"
      style="width: 20rem"
      :key="testimonial.id"
    >
      <div class="card-body">
        <div class="container text-center">
          <div class="row align-items-start">
            <div class="col">
              <img
                :src="testimonial.photo"
                class="img-fluid"
                :alt="testimonial.name"
                style="height: 100px; border-radius: 50%"
              />
            </div>
            <div class="col">
              <h5 class="card-title">{{ testimonial.name }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                {{ testimonial.description }}
              </h6>
            </div>
          </div>
        </div>
        <p class="card-text"><i class="bi bi-quote"></i>{{ testimonial.paragraph }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns per row */
  gap: 20px; /* Adjust the gap between cards as needed */
}
</style>
