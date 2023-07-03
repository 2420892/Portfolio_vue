<template>
  <div id="resume">
    <div class="skills-container">
        <h1> I have developed a diverse set of skills across the following  domains</h1>
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
        <div class="col-sm-6 mb-3 mb-sm-0">
          <h3>Education</h3>
          <div class="card">
            <div class="card-body" v-for="Edu in Education" :key="Edu.id">
              <h5 class="card-title">{{Edu.institute }}</h5>
              <p class="card-text">{{Edu.descr }}</p>
              <a href="#" class="btn btn-primary">{{Edu.year }}</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <h3>Work Experience</h3>
          <div class="card">
            <div class="card-body" v-for="wrk in work" :key="wrk.id">
              <h5 class="card-title">{{wrk.institute }}</h5>
              <p class="card-text">{{wrk.descr }}</p>
              <a href="#" class="btn btn-primary">{{wrk.year }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
           
    
          
 
    
    
</template>

<script>
     export default{
    computed:{
      skills(){
        return this.$store.state.skills
      },
   Education(){
          return this.$store.state.Education
        },
        work(){
          return this.$store.state.work
        }
      
    },
    mounted(){
      this.$store.dispatch('fetchSkills');
      this.$store.dispatch('fetchEducation');
      this.$store.dispatch('fetchWork')
    }
   
  }
</script>

<style scoped>
#resume{
  background-color:#988780;
}
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  background-color:#E7DED9;
}
h3{
  color:white;
}

.timeline{
margin-top:2px;
}





</style>