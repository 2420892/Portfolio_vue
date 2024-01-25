<template>
  <div id="home">
    <img class="img img-fluid" src="https://i.ibb.co/9N4s8Y4/1697465607897-e-1710979200-v-beta-t-Ue-BD3dg453n-X191-Gy-OSi-QR3n29-TWim-UMBj3-Oxk-Gf-A74.jpg" alt="firstimg" />
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col-md-6" id="text">
          <h1 class="animate">Hello, I'm Siyamanga</h1>
          <h3 class="right">An aspiring <span>full stack developer</span></h3>
          <a href="/about">More about me</a>
        </div>
        <div class="col-md-6 mt-4 mt-md-0" id="profile">
          <img class="https://i.ibb.co/JQmZfbj/Whats-App-Image-2023-09-26-at-15-04-23-removebg-preview.png" alt="" loading="lazy"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#home {
  margin: 0;
  background-color: rgba(222, 227, 229, 255);
}

.animate {
  animation: backInLeft;
  animation-duration: 2s;
}

.right {
  animation: backInRight;
  animation-duration: 2s;

}

#home img {
  width: 100%;
  height: 40%;
  object-fit: center;
  object-position: center;
}

#profile img {
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid black;
  transform: translateY(-70px);
}

#text {
  font-weight: bold;
  color: black;
}

#text h1 {
  font-size: 50px;
}

#text h3 {
  font-size: 30px;
}

#text a {
  text-decoration: none;
  border: 2px solid#999fa0;
  padding: 8px;
  background-color: #e7ded9;
  color: black;
  border-radius: 12px;
  box-shadow: 5px 10px 0px black;
}

p {
  font-size: 20px;
}

@media(width < 770px) {
  #home img {
    width: 100%;
    height: 30%;
    object-fit: center;
    object-position: center;
  }

  #home {
    margin: 0;
    background-color: rgba(222, 227, 229, 255);

  }

  #profile img {
    object-fit: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 3px solid black;
    transform: translateY(-70px);
  }

  #profile img {
    transform: translateY(3px)
  }
}
</style>
