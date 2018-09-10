<template>
    <div class = 'new'>
        <h1>This is the New page!</h1>
        <p>Hey {{their_name}}, it worked!</p>
    </div>
</template>

<script>
export default {
  name: 'New',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>