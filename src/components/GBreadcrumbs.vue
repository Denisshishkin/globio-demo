<template>
<div class="breadcrumbs">
  <div
      v-for="(item, index ) in breadcRumbs"
      :key="item.id"
      :class="item.active ? 'breadcrumbs__item__active' : ''"
      class="breadcrumbs__item">
      <div class="step">{{index + 1}}</div>
      <div class="info">
        <h3>{{item.title}}</h3>
        <div class="caption">{{item.caption}}</div>
      </div>
  </div>
</div>
</template>

<script lang="ts" setup>
const breadcRumbs = [
  {
    title: "Set Parameters",
    caption: "Pick up to 5 parameters, and we'll generate 3 countries based on them",
    active: true,
    id: 0,
  },
  {
    title: "Choose a Country",
    caption: "Choose one of the countries you'd be interested in relocating to",
    active: false,
    id: 1,
  },
  {
    title: "Adapt easily",
    caption: "We generated a special adaptation list for selected country",
    active: false,
    id: 2,
  },
]
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 60px;

  &__item {
    opacity: .6;
    pointer-events: none;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 17px;
    align-items: flex-start;

    .step {
      border: 1px solid rgba(0, 0, 0, 0.10);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__active {
      opacity: 1;
      pointer-events: auto;

      .step {
        background: #CDF765;
        border: 0;
      }
    }
  }
}
</style>
