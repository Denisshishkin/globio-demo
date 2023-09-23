<template>
  <h1>How Globio works <span>Demo</span></h1>
  <div v-if="breadcrumbs[2].active" class="caption" style="text-align:center;">You did it! 🎉 Take your stress-free
    adaptation to Spain 🇪🇸
  </div>
  <div v-if="breadcrumbs[2].active" class="btns">
    <button class="restart" @click="restart">Restart</button>
    <button class="join" @click="restart">Join waitlist</button>
  </div>

  {{countriesWithDisabledChips}}
  <div class="breadcrumbs">
    <div
        v-for="(item, index ) in breadcrumbs"
        :key="item.id"
        :class="item.active ? 'breadcrumbs__item__active' : ''"
        class="breadcrumbs__item"
    >
      <div class="step" @click="handleBreadCrumbs(item)">{{ index + 1 }}</div>
      <div class="info">
        <h3>{{ item.title }}</h3>
        <div class="caption">{{ item.caption }}</div>
      </div>

      <svg v-if="index !== 2" width="21" height="43" viewBox="0 0 21 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L18.6716 18.6716C20.2337 20.2337 20.2337 22.7663 18.6716 24.3284L1 42" stroke="#C7DCCD" stroke-width="1.5"/>
      </svg>

    </div>
  </div>


  <div class="globio_content">
    <svg v-if="breadcrumbs[0].active" class="arrow1" width="151" height="150" viewBox="0 0 151 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3569_9783)">
        <path d="M56.9934 59.0807C52.4769 48.3567 50.6547 36.9872 53.5886 26.1072C53.6899 25.7309 53.4658 25.3433 53.0895 25.242C52.7132 25.1407 52.3272 25.3637 52.2259 25.74C49.2113 36.9207 51.0518 48.6088 55.693 59.6282C62.6105 76.0498 75.748 90.9899 88.1249 100.526C92.0055 103.517 95.7551 105.381 99.6378 107.016C101.021 107.599 102.421 108.152 103.849 108.717C106.432 109.738 109.108 110.796 111.95 112.13C112.301 112.297 112.723 112.144 112.887 111.792C113.053 111.439 112.901 111.019 112.548 110.853C109.723 109.526 107.061 108.479 104.493 107.468C103.096 106.918 101.726 106.379 100.373 105.811C96.5319 104.202 92.8225 102.365 88.9867 99.4087C76.7798 90.0034 63.8146 75.2758 56.9934 59.0807Z" fill="black" stroke="black" stroke-width="0.00165138"/>
        <path d="M113.677 113.374L113.677 113.374L113.678 113.374C113.94 113.584 114.182 113.581 114.361 113.521C114.541 113.461 114.659 113.343 114.676 113.325L114.676 113.325L114.676 113.325C114.71 113.287 114.802 113.178 114.846 113.023C114.89 112.867 114.886 112.665 114.731 112.439C114.717 112.419 114.678 112.374 114.624 112.313C114.569 112.253 114.5 112.178 114.427 112.1C114.281 111.943 114.119 111.773 114.028 111.68C112.204 109.794 110.314 107.981 108.394 106.193C104.32 102.403 101.582 98.2774 99.4851 93.0789L99.4851 93.0789C99.3405 92.7179 98.928 92.5423 98.5679 92.6884L98.5679 92.6884C98.2069 92.8331 98.0313 93.2456 98.1774 93.6056C100.355 99.0069 103.201 103.289 107.433 107.226C108.903 108.594 110.354 109.975 111.77 111.395L111.77 111.396L111.769 111.397L111.769 111.397L111.77 111.397C111.127 111.264 110.381 111.131 109.557 111.002C106.48 110.525 102.289 110.144 98.0914 110.299C93.8938 110.453 89.6903 111.143 86.59 112.807C86.2465 112.991 86.1193 113.418 86.3035 113.762C86.4877 114.105 86.9147 114.235 87.2582 114.051C90.2383 112.452 94.2803 111.809 98.3165 111.68C102.353 111.552 106.383 111.938 109.34 112.396C111.103 112.671 112.482 112.971 113.248 113.213C113.411 113.263 113.595 113.339 113.658 113.366C113.667 113.37 113.674 113.372 113.677 113.374ZM114.52 112.241L114.52 112.24L114.52 112.24C114.526 112.245 114.531 112.248 114.536 112.252C114.547 112.261 114.557 112.269 114.566 112.277L114.565 112.277L114.565 112.278L114.565 112.278C114.557 112.271 114.549 112.265 114.542 112.259L114.538 112.257C114.532 112.252 114.525 112.247 114.519 112.242L114.519 112.242L114.52 112.241Z" fill="black" stroke="black" stroke-width="0.00165138"/>
      </g>
      <defs>
        <clipPath id="clip0_3569_9783">
          <rect width="107.929" height="107.929" fill="white" transform="matrix(-0.834383 0.551185 0.551185 0.834383 90.5527 0.208008)"/>
        </clipPath>
      </defs>
    </svg>

    <div
        v-if="breadcrumbs[0].active"
        class="chips_block"
    >
      <div class="chips_block__row">
        <button
            v-for="chip in chips"
            :key="chip.id"
            :disabled="chip.disabled"
            class="chips_block__item"
            @click="chooseChip(chip)"
        >
          {{ chip.label }}
        </button>
      </div>

      <div class="chips_block__input">
        <div
            v-for="chip in tempChips"
            :key="chip.id"
            class="active_chip"
        >
          {{ chip.label }}
          <svg @click="removeActiveChip(chip)" width="25" height="24" viewBox="0 0 25 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5 9L9.5 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 9L15.5 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <div class="skip" @click="onSkip">Skip, I already know the country for my relocation</div>
      <button :disabled="tempChips.length < 1" class="next" @click="toNextStep(1)">Next</button>
    </div>


    <div v-if="breadcrumbs[1].active && breadcrumbs[1].loading" class="loader">Globio generating 3 countries for
      you...
    </div>
    <div v-if="breadcrumbs[2].active && breadcrumbs[2].loading" class="loader">Globio generating adaptation list for
      you...
    </div>


    <div
        v-if="breadcrumbs[1].active && !breadcrumbs[1].loading"
        class="second"
    >
      <div v-if="skip" class="skip_counties">
        <div class="caption">There are many countries, but we are ready to show only 5 countries in the demo.<br>
          Please,
          select one of it
        </div>
        <div class="countries_row">
          <div
              class="country"
              v-for="country in countries"
              :key="country.id"
              :class="country.active ? 'country__active' : ''"
          >
            <div class="country__title">
              {{ country.flag }}
              {{ country.name }}
            </div>
            <button class="country__button" @click="selectCountry(country)">Select</button>
          </div>
        </div>
      </div>
      <div class="second_grid">
        <ul class="counties">
          <li v-for="country in displayedCountries" :key="country.id">
            <div class="title">
              {{ country.flag }}
              {{ country.name }}
            </div>
          </li>
        </ul>

      </div>
      <button
          v-if="skip"
          :disabled="!countries.some(item => item.active === true)"
          class="next"
          @click="toNextStep(2)"
      >
        Next
      </button>

      <div v-if="!skip" class="not_skip">
        <button
            :disabled="tempChips.length < 1 "
            class="next"
            @click="toNextStep(2)"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, watch} from "vue";
import type {BreadcrumbsItem, ChipItem, CountryItem} from "@/types/types";

const skip = ref(false);
const chips = ref([
  {
    label: "Sunny Weather",
    id: 0,
    disabled: false,
  },
  {
    label: "Good for Kids",
    id: 1,
    disabled: false,
  },
  {
    label: "Friendly Locals",
    id: 2,
    disabled: false,
  },
  {
    label: "Rich Cultural Heritage",
    id: 3,
    disabled: false,
  },
  {
    label: "Beautiful Nature",
    id: 4,
    disabled: false,
  },
  {
    label: "Delicious Cuisine",
    id: 5,
    disabled: false,
  },
  {
    label: "Healthcare Quality",
    id: 6,
    disabled: false,
  },
  {
    label: "High Safety",
    id: 7,
    disabled: false,
  },
  {
    label: "Affordable Living",
    id: 8,
    disabled: false,
  },
  {
    label: "Nice Nature",
    id: 9,
    disabled: false,
  },
  {
    label: "􀎡 Many more",
    id: 10,
    disabled: false,
  },
])

const breadcrumbs = ref<Array<BreadcrumbsItem>>([
  {
    title: "Set Parameters",
    caption: "Pick up to 5 parameters, and we'll generate 3 countries based on them",
    active: true,
    id: 0,
    loading: false,
  },
  {
    title: "Choose a Country",
    caption: "Choose one of the countries you'd be interested in relocating to",
    active: false,
    id: 1,
    loading: false,
  },
  {
    title: "Adapt easily",
    caption: "We generated a special adaptation list for selected country",
    active: false,
    id: 2,
    loading: false,
  },
])
const tempChips = ref<Array<ChipItem>>([]);
const countries = ref<Array<CountryItem>>([
  {
    name: "Portugal",
    flag: "🇵🇹",
    id: 0,
    active: false,
    chips: [
      {
        label: "Sunny Weather",
        id: 0,
        disabled: false,
      },
      {
        label: "Rich Cultural Heritage",
        id: 3,
        disabled: false,
      },
      {
        label: "Beautiful Nature",
        id: 4,
        disabled: false,
      },
      {
        label: "Delicious Cuisine",
        id: 5,
        disabled: false,
      },
      {
        label: "Affordable Living",
        id: 8,
        disabled: false,
      },
    ],
    selectedChips: [],
  },
  {
    name: "Malta",
    flag: "🇲🇹",
    id: 1,
    active: false,
    chips: [
      {
        label: "Good for Kids",
        id: 1,
        disabled: false,
      },
      {
        label: "Friendly Locals",
        id: 2,
        disabled: false,
      },
      {
        label: "Rich Cultural Heritage",
        id: 3,
        disabled: false,
      },
      {
        label: "High Safety",
        id: 7,
        disabled: false,
      },
      {
        label: "Nice Nature",
        id: 9,
        disabled: false,
      },
    ],
    selectedChips: [],
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    id: 2,
    active: false,
    chips: [
      {
        label: "Sunny Weather",
        id: 0,
        disabled: false,
      },
      {
        label: "Good for Kids",
        id: 1,
        disabled: false,
      },
      {
        label: "Beautiful Nature",
        id: 4,
        disabled: false,
      },
      {
        label: "Delicious Cuisine",
        id: 5,
        disabled: false,
      },
      {
        label: "Affordable Living",
        id: 8,
        disabled: false,
      },
    ],
    selectedChips: [],
  },
  {
    name: "Greece",
    flag: "🇬🇷",
    id: 3,
    active: false,
    chips: [
      {
        label: "Friendly Locals",
        id: 2,
        disabled: false,
      },
      {
        label: "Beautiful Nature",
        id: 4,
        disabled: false,
      },
      {
        label: "Delicious Cuisine",
        id: 5,
        disabled: false,
      },
      {
        label: "Healthcare Quality",
        id: 6,
        disabled: false,
      },
      {
        label: "Affordable Living",
        id: 8,
        disabled: false,
      },
    ],
    selectedChips: [],
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    id: 4,
    active: false,
    chips: [
      {
        label: "Sunny Weather",
        id: 0,
        disabled: false,
      },
      {
        label: "Friendly Locals",
        id: 2,
        disabled: false,
      },
      {
        label: "Rich Cultural Heritage",
        id: 3,
        disabled: false,
      },
      {
        label: "Delicious Cuisine",
        id: 5,
        disabled: false,
      },
      {
        label: "High Safety",
        id: 7,
        disabled: false,
      },
    ],
    selectedChips: [],
  },
])

const filteredCountries = computed(() => {
  // Get an array of selected chip IDs
  const selectedChipIds = chips.value.filter(chip => chip.disabled).map(chip => chip.id);

  // Use the selected chip IDs to filter the countries
  return countries.value.filter(country =>
      country.chips.some(chip => selectedChipIds.includes(chip.id))
  );
});

const maxCountriesToShow = 3;

const displayedCountries = computed(() => {
  return filteredCountries.value.slice(0, maxCountriesToShow);
});

const handleBreadCrumbs = (item: BreadcrumbsItem) => {
  console.log('click to:', item)
  if (item.id === 0 && breadcrumbs.value[1].active === true) {
    item.active = false;
    breadcrumbs.value[0].active = true;
  }
}

const onSkip = () => {
  skip.value = true;
  chips.value.forEach(c => c.disabled = false);
  toNextStep(1);
}

const selectCountry = (country: CountryItem) => {
  countries.value.forEach(c => {
    c.active = false;
  })
  country.active = true;
}

// Create a new array to store country objects
const countriesWithDisabledChips = ref<Array<CountryItem>>([]);

// Iterate through the countries array
for (const country of countries.value) {
  // Check if any chip in the country's chips array has disabled === true
  if (country.chips.some(chip => chip.disabled === true)) {
    // Add the country object to the new array
    countriesWithDisabledChips.value.push(country);
  }
}

const chooseChip = (chip: ChipItem) => {
  chip.disabled = true;
  tempChips.value.push(chip);
};

const removeActiveChip = (chip: ChipItem) => {
  chip.disabled = false;
  tempChips.value = tempChips.value.filter((item: ChipItem) => item.id !== chip.id);
};

const toNextStep = (step: number) => {
  breadcrumbs.value.forEach(b => {
      b.loading = b.id === step;
    setTimeout(function () {
      b.loading = false;
    }, 2000)
    b.active = b.id === step;
  })
}

const restart = () => {
  breadcrumbs.value.forEach(b => {
    tempChips.value = [];
    chips.value.forEach(i => i.disabled = false)
    countries.value.forEach(c => c.active = false)
    skip.value = false;
    b.active = b.id === 0;
  })
}

watch(() => tempChips.value.length, (value) => {
  if (value >= 5) {
    chips.value.forEach(c => c.disabled = true);
  } else {
    chips.value.forEach(c => c.disabled = false);
    tempChips.value.forEach(c => c.disabled = true);
  }
});
</script>

<style lang="scss" scoped>

h1 {
  text-align: center;
  color: #000;
  font-size: 62px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 72px;
  position: relative;
  span {
    color: #315C52;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    position: absolute;
    border-radius: 1000px;
    background: rgba(199, 220, 205, 0.30);
    padding: 3px 5px 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    right: 0;
    left: 0;
    top: -13px;
    margin: auto;
    transform: translateX(57px);
  }
}

button {
  cursor: pointer;
}

.btns {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  margin-top: 30px;
}


.breadcrumbs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 133px;
  max-width: 1230px;
  margin: 57px auto 60px;

  &__item {
    opacity: .6;
    pointer-events: none;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 17px;
    align-items: flex-start;
    position: relative;

    .info {
      h3 {
        margin: 0 0 10px;
        color: #000;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .caption {
        color: #315C52;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px; /* 135.714% */
      }
    }

    .step {
      border: 1px solid rgba(0, 0, 0, 0.10);
      border-radius: 50%;
      width: 50px;
      min-width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &__active {
      opacity: 1;
      pointer-events: auto;

      .step {
        background: #CDF765;
        border: 0;
      }
    }

    svg {
      position: absolute;
      right: -86px;
    }
  }
}

.chips_block {
  //border-radius: 20px;
  //border: 1px solid rgba(199, 220, 205, 0.60);
  //background: rgba(199, 220, 205, 0.30);
  //padding: 56px 0 27px;
  //width: 100%;

  &__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 10px;
    max-width: 940px;
    margin: 0 auto;
  }

  &__item {
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 2px 1px 0 #C7D7CB;
    white-space: nowrap;
    padding: 10px;
    cursor: pointer;
    border: 0;
    outline: none;
    font-size: 16px;
  }

  &__input {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
    min-height: 72px;
    width: 100%;
    margin: 32px auto 0;
    max-width: 887px;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 10px;
    align-items: center;
    padding: 17px 14px;

    .active_chip {
      border-radius: 10px;
      background: #CDF765;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 7px 10px;
      grid-gap: 10px;
      cursor: pointer;
    }
  }


  .skip {
    text-decoration: underline;
    text-align: center;
    margin-top: 37px;
    cursor: pointer;
    color: #315C52;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px; /* 135.714% */
  }

}

.next {
  background: #CDF765;
  outline: none;
  border-radius: 300px;
  border: 0;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 49px;
  max-width: 164px;
  width: 100%;
  margin: 40px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
}

.globio_content {
  border-radius: 20px;
  border: 1px solid rgba(199, 220, 205, 0.60);
  background: rgba(199, 220, 205, 0.30);
  padding: 20px 0;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .arrow1 {
    position: absolute;
    top: -52px;
    transform: translateX(-537px);
  }

}

.loader {
  color: #248459;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px; /* 135.714% */
}

.second {
  width: 100%;
  //border-radius: 20px;
  //border: 1px solid rgba(199, 220, 205, 0.60);
  //background: rgba(199, 220, 205, 0.30);
  //padding: 70px 0 27px;

  ul.counties {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 1070px;
    margin: 0 auto;
    grid-gap: 20px;
    padding: 0;

    li {
      background: #fff;
      padding: 16px 16px 0;
      overflow-y: auto;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.10);
      min-height: 292px;

      .title {
        margin-bottom: 30px;
        color: #000;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }

  .skip_counties {
    max-width: 850px;
    margin: 0 auto;

    .caption {
      color: #315C52;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 19px; /* 135.714% */
      max-width: 680px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
    }

    .countries_row {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(5, 1fr);

      .country {
        border-radius: 10px;
        background: #FFF;
        padding: 10px;
        border: 3px solid transparent;

        &__active {
          border: 3px solid #B1E530;
        }

        &__title {
          color: #000;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-bottom: 30px;
        }

        &__button {
          color: #000;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          display: flex;
          width: 90px;
          padding: 12px 58px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          background: #B1E530;
          border-radius: 300px;
          border: 0;
          outline: none;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}
</style>
