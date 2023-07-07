<template>
  <div id="about" class="container">

    <div class="text">
      <h1>About Siyamanga</h1>
      <p>
        I am a 22 year old female from Mfuleni, Cape Town.I am currently studying coding at Life Choices Academy. I posses
        Public Speaking skills under Department of Water and Sanitation (DWS),and am a former Constitution Reviewer of
        Metanoia Residence in Stellenbosch University.In addition, I am an attentive, intuitive,flexible learner with
        strong
        leadership skills. I excel in teams while showcasing my individuality.
      </p>
      <p>
        Call me : +27 63 485 4531 OR <br>
        email : zwenisiyamanga@gmail.com
      </p>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.text {
  width: 35rem;
  border: 1px solid #13292a;
  padding: 8px;
  box-shadow: 8px 16px 0px #13292a;
  border-radius: 12px;
  font-size: 25px;
}


@media (width < 570px) {
  .text {
    font-size: inherit;
    margin-top: 0px;
  }
}
</style>