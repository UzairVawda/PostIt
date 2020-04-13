<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">POST-IT</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <a
          class="btn btn-outline-success my-2 my-sm-0"
          data-toggle="modal"
          data-target="#login"
          >Get Started</a
        >
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped></style>
