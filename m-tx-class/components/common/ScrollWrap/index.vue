<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollWrap",

  mounted() {
    const BetterScroll = new require("better-scroll").default;
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      preventDefault: false,
      scrollX: true,
      pullDownRefresh: {
        thresshold: 50,
        stop: 50,
      },
    });

    this.scroll.on("pullingDown", () => {
      this.$emit("pullingDown", this.scroll);
    });
  },
  methods: {
    refresh(cb) {
      setTimeout(() => {
        this.scroll.refresh();
        cb && cb();
      }, 20);
    },
  },
};
</script>

<style>
.scroll-wrapper {
  flex: 1;
  overflow-y: hidden;
}
</style>