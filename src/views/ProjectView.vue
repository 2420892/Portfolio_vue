<template>
  <div class="container">
    <h1>This is a products page</h1>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="project in projects" :key="project.id">
        <div class="card">
          <img :src="project.image" class="card-img-top img-fluid"  :alt="project.name" style="height:200px; width:18rem">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <a :href="project.github" target="blank" class="card-link">View Code</a>
            <a :href="project.netlify" target="blank" class="card-link">Go Live</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



  <script>
  export default{
    computed:{
      projects(){
        return this.$store.state.projects
      }
    },
    mounted(){
      this.$store.dispatch('fetchProjects')
    }
   
  }
  </script>
  <style scoped>
  
  .card{
    background-color:rgba(222,227,229,255);
      transition: transform .2s; /* Animation */
    
    
    
  }
  .card:hover {
    transform: scale(1.1); 
  }
  </style>
  