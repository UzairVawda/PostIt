<template>
  <div class="hero">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-12">
          <div class="hero-content">
            <h1 class="hero-title">
              Post ~ IT
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              numquam tempora, iure delectus totam minus quam aperiam ratione
              dolores magni voluptates ut necessitatibus odio ipsum fuga,
              voluptas ab praesentium nihil?
            </p>
            <div class="hero-btn mt-5">
              <button class="btn custom-btn btn-info mr-4">Explore</button>
              <button class="btn custom-btn btn-outline-secondary">
                Products
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-7">
          <div class="graphic">
            <img src="@/assets/images/logoDesign.svg" alt="" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHero"
};
</script>

<style lang="scss" scoped>
.hero {
  padding-top: 7rem;
  width: 100%;
  height: 500px;
  text-align: left;
}
</style>
