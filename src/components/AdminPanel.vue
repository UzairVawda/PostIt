<template>
  <div class="page-wrapper legacy-theme sidebar-bg bg1 toggled">
    <nav id="sidebar" class="sidebar-wrapper">
      <div class="sidebar-content">
        <!-- sidebar-brand  -->
        <div class="sidebar-item sidebar-brand">
          <a href="/admin">Admin Panel</a>
          <div class="toggle-sidebar" @click="toggleSidebar">
            <i class="fas fa-times fa-1x" style="color:#828282;"></i>
          </div>
        </div>
        <!-- sidebar-header  -->
        <div class="sidebar-item sidebar-header d-flex flex-nowrap">
          <div class="user-pic">
            <img
              class="img-responsive img-rounded"
              src="@/assets/logo.png"
              alt="User picture"
            />
          </div>
          <div class="user-info">
            <span class="user-name"
              >Jhon
              <strong>Smith</strong>
            </span>
            <span class="user-role">Administrator</span>
            <span class="user-status">
              <i class="fa fa-circle"></i>
              <span>Online</span>
            </span>
          </div>
        </div>
        <!-- sidebar-search  -->
        <div class="sidebar-item sidebar-search">
          <div>
            <div class="input-group">
              <input
                type="text"
                class="form-control search-menu"
                placeholder="Search..."
              />
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- sidebar-menu  -->
        <div class=" sidebar-item sidebar-menu">
          <ul>
            <li class="header-menu">
              <span>General</span>
            </li>
            <li>
              <router-link to="/admin/overview">
                <i class="fa fa-book"></i>
                <span class="menu-text">Overview</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/products">
                <i class="fa fa-calendar"></i>
                <span class="menu-text">Products</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/orders">
                <i class="fa fa-folder"></i>
                <span class="menu-text">Orders</span>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/logout">
                <i class="fa fa-folder"></i>
                <span class="menu-text">Logout</span>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- sidebar-menu  -->
      </div>
    </nav>
    <main class="page-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "AdminPanel",
  methods: {
    toggleSidebar() {
      if ($(".page-wrapper").hasClass("pinned")) {
        // unpin sidebar when hovered
        $(".page-wrapper").removeClass("pinned");
        $("#sidebar").unbind("hover");
      } else {
        $(".page-wrapper").addClass("pinned");
        $("#sidebar").hover(
          function() {
            console.log("mouseenter");
            $(".page-wrapper").addClass("sidebar-hovered");
          },
          function() {
            console.log("mouseout");
            $(".page-wrapper").removeClass("sidebar-hovered");
          }
        );
      }
    }
  }
};
</script>

<style scoped></style>
