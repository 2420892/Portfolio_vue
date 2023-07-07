<template>
  <div id="resume" v-if="skills">
    <div class="skills-container">
      <h1> Skills</h1>
      <div class="card-container">
        <div class="card" v-for="skill in skills" :key="skill.id" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">
              {{ skill.name }}
            </h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ skill.place }}</h6>
            <template v-if="Array.isArray(skill.icons)">
              <i v-for="icon in skill.icons" :key="icon" :class="icon"></i>
            </template>
            <template v-else>
              <i :class="skill.icons"></i>
            </template>
            <p class="card-text">{{ skill.para }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline">
      <div class="row">
        <h1>Education and Work Experience</h1>
        <div class="col sm-6">
          <h3>Education</h3>
          <div class="card">
            <div class="card-body" v-for="Edu in Education" :key="Edu.id">
              <h5 class="card-title">{{ Edu.institute }}</h5>
              <p>{{ Edu.year }}</p>
              <p class="card-text">{{ Edu.descr }}</p>
            </div>
          </div>
        </div>
        <div class="col sm-6">
          <h3>Work Experience</h3>
          <div class="card">
            <div class="card-body work-card" v-for="wrk in work" :key="wrk.id">
              <h5 class="card-title">{{ wrk.institute }}</h5>
              <p>{{ wrk.year }}</p>
              <p class="card-text">{{ wrk.descr }}</p>
            </div>
          </div>
        </div>
        <div class="btn d-flex">
          <a href="https://docs.google.com/document/d/1XLnjZpM4oPXYxstX2VB3hExUnOX-k8qs951Vt5y0Ovc/edit"
            target="blank">Download CV</a>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      return this.$store.state.skills
    },
    Education() {
      return this.$store.state.Education
    },
    work() {
      return this.$store.state.work
    }

  },
  mounted() {
    this.$store.dispatch('fetchSkills');
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchWork')
  }

}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  margin: 10px;
  background-color: rgba(222, 227, 229, 255);
  font-size: 18px;
  border: 1px solid black;
}

h5 {
  font-size: 22px;
}

.timeline-container {
  display: flex;
  justify-content: center;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
}

.col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.col .card {
  flex: 1;
}

.col .card-body {
  border-bottom: 2px dotted black;
}

.card-body:last-child {
  border-bottom: none;
}

a {
  flex: 1;
  border: 1px solid black;
  background-color: #e7ded9 !important;
  box-shadow: 5px 10px 0px black;
  color: black;
  text-decoration: none;
  padding: 8px;
  border-radius: 12px;
  margin-bottom: 12px;
}
</style>