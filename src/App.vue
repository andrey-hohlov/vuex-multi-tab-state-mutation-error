<template>
  <div id="app">
    <pre>{{ $store.state.user }}</pre>
    <input
      :value="$store.state.user.name"
      type="text"
      @input="$store.dispatch('user/setName', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
