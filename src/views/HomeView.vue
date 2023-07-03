<template>
  <div id="home">
    <img
      class="img img-fluid"
      src="https://i.postimg.cc/FzK60sm4/Office-Design-Tips.jpg"
      alt=""
    />
    <div class="container text-center">
      <div class="row align-items-start">
        <div class="col-md-6" id="text">
          <h1>Hello, I'm Siyamanga</h1>
          <h3>An aspiring <span>full stack developer</span></h3>
          <a href="#">Connect with me</a>
        </div>
        <div class="col-md-6 mt-4 mt-md-0" id="profile">
          <img
            class="img-fluid"
            src="https://i.postimg.cc/mgYypRZd/Whats-App-Image-2023-07-01-at-20-02-10-removebg-preview-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
#home {
  background-color: #e7ded9;
}
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
  color: #13292a;
}

#text h1 {
  font-size: 60px;
}

#text a {
  text-decoration: none;
  border: 2px solid#988780;
  padding: 8px;
  background-color: #988780;
  color: white;
}

p {
  font-size: 20px;
}
</style>
