<template>
  <div id="home">
    <img class="img img-fluid" src="https://i.postimg.cc/FzK60sm4/Office-Design-Tips.jpg" alt="">
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col" id="text">
          <h1> Hello, I'm Siyamanga</h1>
          <h3> An aspiring <span>full stack developer</span></h3>
          <a href="">connect with me</a>
          <fa :icon="['fab', 'github']" />
        </div>
        <div class="col img-fluid" id="profile">
          <img src="https://i.postimg.cc/mgYypRZd/Whats-App-Image-2023-07-01-at-20-02-10-removebg-preview-1.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <section id="aboutSection">
    <h1>About Siyamanga</h1>
    <p>
      I am a 22 year old female from Mfuleni, Cape Town.I am currently studying coding at Life Choices Academy. I posses
      Public Speaking skills under Department of Water and Sanitation (DWS),and am a former Constitution Reviewer of
      Metanoia Residence in Stellenbosch University.In addition, I am an attentive, intuitive,flexible learner with strong
      leadership skills. I excel in teams while showcasing my individuality.
    </p>
    <p>
      Call me : +27 63 485 4531 OR <br>
      email : zwenisiyamanga@gmail.com
    </p>
    <a href="">Download CV</a>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
#home img {
  width: 100%;
  height: 30%;
}

#profile img {
  width: 300px;
  height: 200px;
  border-radius: 50%;
  transform: translateY(-70px);
}

#text {
  font-weight: bold;
}

#text h1 {
  font-size: 60px;
}

#text a {
  text-decoration: none;
  border: 2px solid black;
  padding: 8px;
  background-color: black;
  color: white;

}

p {
  font-size: 20px;
}

#aboutSection {
  background-color: black;
  color: white;
  height: 70vh;
  width: 180vh;
  margin-left: 100px;
  box-shadow: 0 0 9px 9px grey;
  transform: translateY(-200px);
  border-radius: 5%;
}</style>
