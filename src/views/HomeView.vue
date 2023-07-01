<template>
  <div id="home">
    <img class="img img-fluid" src="https://i.postimg.cc/FzK60sm4/Office-Design-Tips.jpg" alt="">
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col" id="text">
         <h1> Hello, I'm Siyamanga</h1>
         <h3> An aspiring <span>full stack developer</span></h3>
         <a href="">connect with me</a>
         <fa :icon="['fab','github']"/>
        </div>
        <div class="col img-fluid" id="profile">
          <img src="https://i.postimg.cc/1zSD9y6H/C12-C2-Siyamanga-Zweni-1-removebg-preview.png" alt="">
        </div>
      </div>
    </div>
  </div>
  <section id="about">
yoyo
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#home img{
width:100%;
height:30%;
}
#profile img{
width: 300px;
height:200px;
border-radius:50%;
transform: translateY(-70px);
}
#text{
  font-weight:bold;
}
#text h1{
  font-size:50px;
}
#text a{
  text-decoration: none;
  border:2px solid black;
  padding:8px;
  background-color:black;
  color:white;

}
</style>
