<template>
  <div>
    <Navbar />
    <HomeHero />
    <div class="container">
      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="@/assets/images/product.svg" alt="" width="400" />
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam
              reprehenderit, reiciendis ex? Libero quasi natus veniam
              voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
            <button class="btn custom-btn btn-outline-primary mr-4">
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </div>
    <UserLS />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import UserLS from "@/components/UserLS";
export default {
  name: "Home",
  components: {
    Navbar,
    HomeHero,
    UserLS
  }
};
</script>

<style lang="scss" scoped></style>
