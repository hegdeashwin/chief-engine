<template>
  <div>
    <HeaderArea></HeaderArea>
    <div class="container">
      <slot></slot>
      <FooterArea></FooterArea>
    </div>
  </div>
</template>

<script>
import HeaderArea from './HeaderArea';
import FooterArea from './FooterArea';

export default {
  components: {
    HeaderArea,
    FooterArea
  }
}
</script>
