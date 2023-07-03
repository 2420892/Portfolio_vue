<template>
 <div id="Testimonials" class="container">
  <h1 class="text-center">Testimonials</h1>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <div
      class="col mb-4"
      v-for="testimonial in testimonials"
      :key="testimonial.id"
    >
      <div class="card h-100">
        <div class="card-body d-flex flex-column align-items-center">
          <div class="text-center mb-4 d-flex">
            <img
              :src="testimonial.photo"
              class="img-fluid rounded-circle"
              :alt="testimonial.name"
              style="max-height: 100px"
            />
            <div class="class">
            <h5 class="card-title text-center">{{ testimonial.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted text-center">
              {{ testimonial.description }}
            </h6>
          </div>
          </div>
         
          <p class="card-text text-center"><i class="bi bi-quote"></i>{{ testimonial.paragraph }}</p>
        </div>
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
