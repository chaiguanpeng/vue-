<template>
  <div class="box">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <p> Loading...</p>
  </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style scoped>
  .box{
    width: 300px;
    height: 130px;
    border: 1px solid #000;
    margin: 200px auto 0;
  }

  .box p{
    text-align: center;
    width: 100%;
    float: left;
    margin: 0;
    padding: 0;
  }

  .box div{
    width: 30px;
    height: 70px;
    float: left;;
    background-color: gold;
    margin:15px;
    border-radius: 12%;
  }

  .box div:nth-child(1){
    background-color: #cecece;
    animation: loading 500ms ease 0s  infinite alternate;
  }

  .box div:nth-child(2){
    background-color: pink;
    animation: loading 500ms ease 100ms  infinite alternate;
  }

  .box div:nth-child(3){
    background-color: orange;
    animation: loading 500ms ease 200ms  infinite alternate;
  }

  .box div:nth-child(4){
    background-color: red;
    animation: loading 500ms ease 300ms  infinite alternate;
  }

  .box div:nth-child(5){
    background-color: green;
    animation: loading 500ms ease 400ms  infinite alternate;
  }

  @keyframes loading{
    from{
      transform: scaleY(1.2);
    }

    to{
      transform: scaleY(0.2);
    }
  }
</style>
