<template>
  <div>
    <HeaderArea></HeaderArea>
    <div class="container">
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
