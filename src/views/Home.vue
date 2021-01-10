<template>
  <div class="home">
    <!--顶部栏-->
    <TopMenu></TopMenu>
    <MidOne></MidOne>

  </div>
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/home/TopMenu'
import MidOne from "@/components/home/MidOne";

export default {
  name: 'Home',
  components: {
    TopMenu,
    MidOne
  }
}
</script>
