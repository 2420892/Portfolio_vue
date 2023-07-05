<template>
  <div id="home">
    <img
      class="img img-fluid"
      src="https://i.postimg.cc/FzK60sm4/Office-Design-Tips.jpg"
      alt="firstimg"
    />
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col-md-6" id="text">
          <h1 class="animate">Hello, I'm Siyamanga</h1>
          <h3  class="right">An aspiring <span >full stack developer</span></h3>
          <a href="/contact">Connect with me</a>
        </div>
        <div class="col-md-6 mt-4 mt-md-0" id="profile">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/tJ032gG6/profileee-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#home{
  background-color: rgba(222,227,229,255);
}
.animate{
  animation: backInLeft; 
  animation-duration: 2s; 
}
.right{
  animation:backInRight; 
  animation-duration: 2s; 
}
#home img {
  width: 100%;
  height: 30%;
}

#profile img {
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border:3px solid black;
  transform: translateY(-70px);
}

#text {
  font-weight: bold;
  color: black;
}

#text h1 {
  font-size: 60px;
}

#text a {
  text-decoration: none;
  border: 2px solid#999fa0;
  padding: 8px;
  background-color: #999fa0;
  color: black;
}

p {
  font-size: 20px;
}
</style>
