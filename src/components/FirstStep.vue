<template>
  <div :style="breadcrumbs[2].active ? 'padding-bottom: 133px;' : ''">
    <div v-if="breadcrumbs[2].active" class="caption" style="text-align:center;">You did it! 🎉 Take your stress-free
      adaptation to {{ selectedCountry[0]?.name }} {{ selectedCountry[0]?.flag }}
    </div>
    <div v-if="breadcrumbs[2].active" class="final_caption">Join the waitlist for the Beta version with the ability to
      personalise results.
    </div>

    <div v-if="breadcrumbs[2].active" class="btns">
      <svg v-if="finish" class="final_arrow" width="146" height="146" viewBox="0 0 146 146" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3849_6216)">
          <path
              d="M86.8738 50.9339C88.4051 38.5568 86.9693 26.2994 80.7711 15.9337C80.5568 15.5752 80.6749 15.1101 81.0335 14.8958C81.3921 14.6816 81.8553 14.7991 82.0695 15.1577C88.4387 25.81 89.9485 38.4013 88.3748 51.1194C86.0285 70.0729 76.8352 89.3121 66.8509 102.756C63.7205 106.972 60.3969 109.988 56.8693 112.807C55.6128 113.811 54.3304 114.79 53.0216 115.789C50.6558 117.594 48.2038 119.466 45.6626 121.671C45.3488 121.945 44.8692 121.911 44.597 121.596C44.323 121.28 44.357 120.802 44.6726 120.528C47.1995 118.336 49.6393 116.479 51.9936 114.688C53.2742 113.713 54.5295 112.758 55.7598 111.778C59.2518 108.998 62.5419 106.022 65.636 101.855C75.4834 88.5954 84.5608 69.6257 86.8738 50.9339Z"
              fill="black" stroke="black" stroke-width="0.00165138"/>
          <path
              d="M44.2438 123.456L44.2437 123.456L44.2436 123.457C44.0339 123.75 43.7842 123.817 43.5813 123.808C43.3784 123.798 43.2223 123.711 43.1998 123.697L43.1993 123.698L43.1998 123.697C43.1529 123.668 43.0268 123.583 42.9361 123.435C42.8454 123.288 42.7901 123.078 42.8847 122.8C42.893 122.775 42.9203 122.717 42.9586 122.639C42.997 122.561 43.0464 122.463 43.099 122.361C43.204 122.157 43.3216 121.934 43.3879 121.811C44.7198 119.334 46.1401 116.914 47.5992 114.51C50.6956 109.413 52.3166 104.36 52.9634 98.387L52.9634 98.387C53.0073 97.9724 53.3816 97.671 53.7956 97.7167L53.7956 97.7167C54.2102 97.7606 54.5115 98.1349 54.4658 98.5489C53.795 104.754 52.1084 110.001 48.891 115.295C47.774 117.135 46.6807 118.982 45.6337 120.86L45.6344 120.86L45.6351 120.861L45.6353 120.861L45.6348 120.861C46.2593 120.537 46.9897 120.182 47.802 119.809C50.8356 118.419 55.0475 116.805 59.4218 115.74C63.796 114.676 68.3324 114.161 72.0151 114.973C72.4231 115.063 72.679 115.467 72.5892 115.875C72.4993 116.283 72.0967 116.541 71.6887 116.451C68.149 115.671 63.7927 116.187 59.5925 117.231C55.3922 118.275 51.3479 119.848 48.4319 121.183C46.6943 121.981 45.359 122.693 44.6392 123.165C44.4858 123.265 44.3189 123.397 44.261 123.443C44.2531 123.449 44.2473 123.454 44.2438 123.456ZM43.0447 122.534L43.044 122.533L43.044 122.533C43.0398 122.539 43.0356 122.545 43.0316 122.55C43.0223 122.562 43.014 122.573 43.0078 122.584L43.0085 122.584L43.0092 122.585L43.0092 122.585C43.0151 122.576 43.0213 122.567 43.0275 122.559L43.0302 122.555C43.0354 122.548 43.0405 122.541 43.0454 122.534L43.0453 122.534L43.0447 122.534Z"
              fill="black" stroke="black" stroke-width="0.00165138"/>
        </g>
        <defs>
          <clipPath id="clip0_3849_6216">
            <rect width="115.676" height="115.676" fill="white" transform="translate(35.0957) rotate(17.662)"/>
          </clipPath>
        </defs>
      </svg>
      <button class="restart" @click="restart">
        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3849_6202)">
            <path d="M1.25 3V7.5H5.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.75 15V10.5H13.25" stroke="black" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path
                d="M15.8675 6.75018C15.4871 5.67527 14.8407 4.71423 13.9884 3.95674C13.1361 3.19925 12.1059 2.67 10.9938 2.41837C9.88167 2.16674 8.72393 2.20093 7.62861 2.51776C6.53328 2.83458 5.53606 3.42371 4.73 4.23018L1.25 7.50018M17.75 10.5002L14.27 13.7702C13.4639 14.5766 12.4667 15.1658 11.3714 15.4826C10.2761 15.7994 9.11833 15.8336 8.00621 15.582C6.8941 15.3304 5.86385 14.8011 5.0116 14.0436C4.15935 13.2861 3.51288 12.3251 3.1325 11.2502"
                stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_3849_6202">
              <rect width="18" height="18" fill="white" transform="translate(0.5)"/>
            </clipPath>
          </defs>
        </svg>

        Restart
      </button>
      <button class="join" data-tf-popup="mNjD6YTw" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Globio Lead Generation Form" data-tf-auto-close="1000" data-tf-transitive-search-params data-tf-medium="snippet">Join Waitlist</button>
<!--      <button class="join" @click="restart">Join waitlist</button>-->
    </div>

    <div v-if="!breadcrumbs[2].active" class="breadcrumbs">
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

        <svg v-if="index !== 2" width="21" height="43" viewBox="0 0 21 43" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L18.6716 18.6716C20.2337 20.2337 20.2337 22.7663 18.6716 24.3284L1 42" stroke="#C7DCCD"
                stroke-width="1.5"/>
        </svg>

      </div>
    </div>


    <div class="mob_titles">
      <h3 v-if="!breadcrumbs[2].active">
        <template v-if="breadcrumbs[1].active">Choose a Country</template>
        <template v-else>Set You Basics</template>
      </h3>
      <div v-if="!breadcrumbs[2].active" class="caption">
        <template v-if="breadcrumbs[1].active">We generated a special adaptation list for selected country</template>
        <template v-else>Pick up to 5 parameters, and we'll generate 3 countries based on them</template>
      </div>
    </div>

    <div
        class="globio_content"
        :class="finish ? 'finished_step' : ''"
        :style="finish ? `background-image: url(${selectedCountry[0].bg});background-size: contain;background-position: center;background-repeat: no-repeat;`: ''"
    >
      <svg v-if="breadcrumbs[0].active" class="arrow1" width="151" height="150" viewBox="0 0 151 150" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3569_9783)">
          <path
              d="M56.9934 59.0807C52.4769 48.3567 50.6547 36.9872 53.5886 26.1072C53.6899 25.7309 53.4658 25.3433 53.0895 25.242C52.7132 25.1407 52.3272 25.3637 52.2259 25.74C49.2113 36.9207 51.0518 48.6088 55.693 59.6282C62.6105 76.0498 75.748 90.9899 88.1249 100.526C92.0055 103.517 95.7551 105.381 99.6378 107.016C101.021 107.599 102.421 108.152 103.849 108.717C106.432 109.738 109.108 110.796 111.95 112.13C112.301 112.297 112.723 112.144 112.887 111.792C113.053 111.439 112.901 111.019 112.548 110.853C109.723 109.526 107.061 108.479 104.493 107.468C103.096 106.918 101.726 106.379 100.373 105.811C96.5319 104.202 92.8225 102.365 88.9867 99.4087C76.7798 90.0034 63.8146 75.2758 56.9934 59.0807Z"
              fill="black" stroke="black" stroke-width="0.00165138"/>
          <path
              d="M113.677 113.374L113.677 113.374L113.678 113.374C113.94 113.584 114.182 113.581 114.361 113.521C114.541 113.461 114.659 113.343 114.676 113.325L114.676 113.325L114.676 113.325C114.71 113.287 114.802 113.178 114.846 113.023C114.89 112.867 114.886 112.665 114.731 112.439C114.717 112.419 114.678 112.374 114.624 112.313C114.569 112.253 114.5 112.178 114.427 112.1C114.281 111.943 114.119 111.773 114.028 111.68C112.204 109.794 110.314 107.981 108.394 106.193C104.32 102.403 101.582 98.2774 99.4851 93.0789L99.4851 93.0789C99.3405 92.7179 98.928 92.5423 98.5679 92.6884L98.5679 92.6884C98.2069 92.8331 98.0313 93.2456 98.1774 93.6056C100.355 99.0069 103.201 103.289 107.433 107.226C108.903 108.594 110.354 109.975 111.77 111.395L111.77 111.396L111.769 111.397L111.769 111.397L111.77 111.397C111.127 111.264 110.381 111.131 109.557 111.002C106.48 110.525 102.289 110.144 98.0914 110.299C93.8938 110.453 89.6903 111.143 86.59 112.807C86.2465 112.991 86.1193 113.418 86.3035 113.762C86.4877 114.105 86.9147 114.235 87.2582 114.051C90.2383 112.452 94.2803 111.809 98.3165 111.68C102.353 111.552 106.383 111.938 109.34 112.396C111.103 112.671 112.482 112.971 113.248 113.213C113.411 113.263 113.595 113.339 113.658 113.366C113.667 113.37 113.674 113.372 113.677 113.374ZM114.52 112.241L114.52 112.24L114.52 112.24C114.526 112.245 114.531 112.248 114.536 112.252C114.547 112.261 114.557 112.269 114.566 112.277L114.565 112.277L114.565 112.278L114.565 112.278C114.557 112.271 114.549 112.265 114.542 112.259L114.538 112.257C114.532 112.252 114.525 112.247 114.519 112.242L114.519 112.242L114.52 112.241Z"
              fill="black" stroke="black" stroke-width="0.00165138"/>
        </g>
        <defs>
          <clipPath id="clip0_3569_9783">
            <rect width="107.929" height="107.929" fill="white"
                  transform="matrix(-0.834383 0.551185 0.551185 0.834383 90.5527 0.208008)"/>
          </clipPath>
        </defs>
      </svg>

      <!-- step 1   -->
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

          <button class="chips_block__item" disabled>
            <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.75781 15.3281C0.609375 15.3281 0 14.7031 0 13.4688V8.08594C0 7 0.476562 6.39062 1.36719 6.25781V4.36719C1.36719 1.42969 3.28906 0 5.32812 0C7.375 0 9.29688 1.42969 9.29688 4.36719V6.25781C10.1953 6.39062 10.6641 7 10.6641 8.08594V13.4688C10.6641 14.7031 10.0547 15.3281 8.90625 15.3281H1.75781ZM2.60938 4.19531V6.23438H8.0625V4.19531C8.0625 2.22656 6.78906 1.17969 5.32812 1.17969C3.86719 1.17969 2.60938 2.22656 2.60938 4.19531Z" fill="#707070" fill-opacity="0.8"/>
            </svg>
            Many more
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
              <path d="M15.5 9L9.5 15" stroke="black" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M9.5 9L15.5 15" stroke="black" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <div class="skip" @click="onSkip">Skip, I know my relocation country</div>
        <button :disabled="tempChips.length < 1" class="next" @click="toNextStep(1)">Next</button>
      </div>

      <div v-if="breadcrumbs[1].active && breadcrumbs[1].loading" class="loader">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             style="margin: auto; display: block;" width="164px" height="164px"
             viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="36" cy="50" r="4" fill="#43825c">
            <animate attributeName="cy" values="47;53;47" times="0;0.5;1" dur="0.6711409395973155s" calcMode="spline"
                     keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animate>
          </circle>
          <circle cx="45" cy="53" r="4" fill="#57a876">
            <animate attributeName="cy" values="47;53;47" times="0;0.5;1" dur="0.6711409395973155s" calcMode="spline"
                     keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.16778523489932887s"
                     repeatCount="indefinite"></animate>
          </circle>
          <circle cx="54" cy="50" r="4" fill="#6cc08f">
            <animate attributeName="cy" values="47;53;47" times="0;0.5;1" dur="0.6711409395973155s" calcMode="spline"
                     keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.33557046979865773s"
                     repeatCount="indefinite"></animate>
          </circle>
          <circle cx="63" cy="47" r="4" fill="#85cca4">
            <animate attributeName="cy" values="47;53;47" times="0;0.5;1" dur="0.6711409395973155s" calcMode="spline"
                     keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.5033557046979866s"
                     repeatCount="indefinite"></animate>
          </circle>
        </svg>
        Globio generating 3 countries for you...
      </div>
      <div v-if="breadcrumbs[2].active && breadcrumbs[2].loading" class="loader">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             style="margin: auto; display: block;" width="164px" height="164px"
             viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="36" cy="50" r="4" fill="#43825c">
            <animate attributeName="cy" values="47;53;47" times="0;0.5;1" dur="0.6711409395973155s" calcMode="spline"
                     keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animate>
          </circle>
          <circle cx="45" cy="53" r="4" fill="#57a876">
            <animate attributeName="cy" values="47;53;47" times="0;0.5;1" dur="0.6711409395973155s" calcMode="spline"
                     keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.16778523489932887s"
                     repeatCount="indefinite"></animate>
          </circle>
          <circle cx="54" cy="50" r="4" fill="#6cc08f">
            <animate attributeName="cy" values="47;53;47" times="0;0.5;1" dur="0.6711409395973155s" calcMode="spline"
                     keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.33557046979865773s"
                     repeatCount="indefinite"></animate>
          </circle>
          <circle cx="63" cy="47" r="4" fill="#85cca4">
            <animate attributeName="cy" values="47;53;47" times="0;0.5;1" dur="0.6711409395973155s" calcMode="spline"
                     keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.5033557046979866s"
                     repeatCount="indefinite"></animate>
          </circle>
        </svg>
        Globio generating adaptation list for
        you...
      </div>


      <div
          v-if="breadcrumbs[1].active && !breadcrumbs[1].loading"
          class="second"
      >

        <!--   If skip   -->
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

        <!--   2 step   -->
        <div class="second_grid">
          <ul class="counties">
            <li
                v-for="country in displayedCountries"
                :key="country.id"
                :class="country.active ? 'country__active' : ''"
            >
              <div class="head">
                <div class="title">
                  {{ country.flag }}
                  {{ country.name }}
                </div>
                <button
                    class="btn"
                    @click="selectCountry(country)"
                >
                  Select
                </button>
              </div>

              <div
                  class="chip"
                  v-for="chip in country.chips"
              >
                <template v-if="chip.active">
                  <p><b>{{ chip.label }}:</b> {{ chip.caption }}</p>
                </template>
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
              :disabled="tempChips.length < 1  || !selectedCountry.length"
              class="next"
              @click="toNextStep(2)"
          >
            Next
          </button>
        </div>
      </div>

      <!--  3 step  -->
      <div v-if="breadcrumbs[2].active && !breadcrumbs[2].loading" class="third">
        <div
            class="app"
            :style="selectedTip[0].active ? `background-color: ${selectedTip[0].color}` : 'background-color: #fff;'"
        >
          <Transition name="slide-left">
            <div v-if="!selectedTip[0].active" class="parent_tips">
              <h2>Relocation to {{ selectedCountry[0]?.name }} {{ selectedCountry[0]?.flag }}</h2>
              <div class="progress">
                <div
                    class="bar"
                    :style="`width: ${progressBarPercentage(childTipsLength)}%`"
                ></div>
              </div>


              <div class="tips">
                <div
                    class="tip"
                    v-for="tip in selectedCountry[0].tips"
                    :style="`background: ${tip.color};`"
                    @click="setActiveTip(tip)"
                >
                  <!--              <div-->
                  <!--                  class="tip__radio"-->
                  <!--                  @click="checkedTip(tip)"-->
                  <!--                  :class="tip.checked ? 'checked' : ''"-->
                  <!--                  :style="`background: ${tip.color};box-shadow: 0px 0px 0px 2px ${tip.color};`"-->
                  <!--              >-->
                  <!--                <svg v-if="tip.checked" width="30" height="30" viewBox="0 0 30 30" fill="none"-->
                  <!--                     xmlns="http://www.w3.org/2000/svg">-->
                  <!--                  <circle cx="15" cy="15" r="12.75" fill="#141414" stroke="#141414" stroke-width="3.5"/>-->
                  <!--                  <circle cx="15" cy="15" r="10.25" fill="#141414" stroke="#141414" stroke-width="1.5"/>-->
                  <!--                  <path d="M9 14.9797L12.4904 19L20 11" stroke="#CDF765" stroke-width="1.5" stroke-linecap="round"-->
                  <!--                        stroke-linejoin="round"/>-->
                  <!--                </svg>-->
                  <!--              </div>-->

                  <div class="percent">
                    <svg>
                      <circle :style="`stroke: ${tip.progressColor};`" cx="15" cy="15" r="15"></circle>
                      <circle
                          cx="15"
                          cy="15"
                          r="15"
                          :style="`stroke-dashoffset: calc(90 - (90 * ${tip.progress}) / 100);stroke: ${tip.progressBar};`"
                      >

                      </circle>
                    </svg>
                    <div class="number">
                      <h2>{{ tip.progress.toFixed(0) }}<span>%</span></h2>
                    </div>
                  </div>

                  <div class="tip__title">{{ tip.title }}</div>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" transform="matrix(-1 0 0 1 40 0)" fill="white"/>
                    <path d="M17 26L23 20L17 14" stroke="#141414" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>

                </div>
              </div>
            </div>

            <div
                v-else
                class="child_tips"
            >
              <div class="child_tip__head">
                <h2 class="title" @click="backToTips">
                  <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="40" height="40" rx="20" fill="white"/>
                    <path d="M23 26.5L17 20.5L23 14.5" stroke="#141414" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>

                  {{ selectedTip[0].title }}
                </h2>

                <div class="percent">
                  <svg>
                    <circle :style="`stroke: ${selectedTip[0].progressColor};`" cx="15" cy="15" r="15"></circle>
                    <circle
                        cx="15"
                        cy="15"
                        r="15"
                        :style="`stroke-dashoffset: calc(90 - (90 * ${selectedTip[0].progress}) / 100);stroke: ${selectedTip[0].progressBar};`"
                    >

                    </circle>
                  </svg>
                  <div class="number">
                    <h2>{{ selectedTip[0].progress.toFixed(0) }}<span>%</span></h2>
                  </div>
                </div>
              </div>


              <div class="child_tips__row">
                <div
                    class="child_tip"
                    v-for="childTip in selectedTip[0].childTips"
                >
                  <div class="child_tip__title">
                    <div
                        class="child_tip__radio"
                        :class="childTip.checked ? 'checked' : ''"
                        @click="setActiveChildTip(childTip)"
                    >
                      <svg v-if="childTip.checked" width="30" height="30" viewBox="0 0 30 30" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="12.75" fill="#141414" stroke="#141414" stroke-width="3.5"/>
                        <circle cx="15" cy="15" r="10.25" fill="#141414" stroke="#141414" stroke-width="1.5"/>
                        <path d="M9 14.9797L12.4904 19L20 11" stroke="#CDF765" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                    </div>
                    {{ childTip.title }}
                  </div>

                  <div
                      class="child_tip__scroll"
                      :style="`grid-template-columns: repeat(${childTip.userTips.length}, 243px)`"
                  >
                    <div
                        class="user_tip"
                        v-for="userTip in childTip.userTips"
                    >
                      <div class="head">
                        <img
                            width="49"
                            height="49"
                            :src="userTip.ava"
                            :alt="userTip.name"
                        >

                        <div class="name">{{ userTip.name }}</div>
                      </div>

                      <div class="user_tip__caption">
                        {{ userTip.caption }}
                      </div>

                      <div class="user_tip__date">{{ userTip.date }}</div>
                    </div>
                  </div>

                </div>

                <div class="end_text"><div>🎉</div>
                  <div>Now You Know All About</div>
                  <b>Renting an apartment in {{selectedCountry[0].name}}</b>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, watch} from "vue";
import type {BreadcrumbsItem, ChildTip, ChipItem, CountryItem, tipItem} from "@/types/types";
import {tipColors} from "@/types/types";

const skip = ref(false);
const selectedCountry = ref<Array<CountryItem>>([])
const selectedTip = ref<Array<tipItem>>([
  {
    title: '',
    color: '',
    progressColor: '',
    progressBar: '',
    active: false,
    checked: false,
    progress: 0,
    childTips: [
      {
        title: '',
        checked: false,
        userTips: []
      }
    ],
  }
]);
const finish = ref(false);
const chips = ref([
  {
    label: "Sunny Weather",
    caption: "",
    active: false,
    id: 0,
    disabled: false,
  },
  {
    label: "Kid-Friendly",
    caption: "",
    active: false,
    id: 1,
    disabled: false,
  },
  {
    label: "Rich Cultural Heritage",
    caption: "",
    active: false,
    id: 2,
    disabled: false,
  },
  {
    label: "Friendly Locals",
    caption: "",
    active: false,
    id: 3,
    disabled: false,
  },
  {
    label: "Beautiful Nature",
    caption: "",
    active: false,
    id: 4,
    disabled: false,
  },
  {
    label: "Delicious Cuisine",
    caption: "",
    active: false,
    id: 5,
    disabled: false,
  },
  {
    label: "Healthcare Quality",
    caption: "",
    active: false,
    id: 6,
    disabled: false,
  },
  {
    label: "Affordable Living",
    caption: "",
    active: false,
    id: 7,
    disabled: false,
  },
  {
    label: "High Safety Level",
    caption: "",
    active: false,
    id: 8,
    disabled: false,
  },
  {
    label: "Economic Stability",
    caption: "",
    active: false,
    id: 9,
    disabled: false,
  },
])

const breadcrumbs = ref<Array<BreadcrumbsItem>>([
  {
    title: "Set You Basics",
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
    bg: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a8386d472cd1d3098_portugal_bg.png",
    id: 0,
    active: false,
    chips: [
      {
        label: "Sunny Weather",
        caption: "Portugal enjoys an average of 300 sunny days a year, with the Algarve region known for its year-round sun, making it a haven for beach enthusiasts.",
        id: 0,
        disabled: false,
        active: false,
      },
      {
        label: "Kid-Friendly",
        caption: "Family-friendly activities abound, from the Lisbon Zoo to the interactive World of Discoveries museum in Porto.",
        id: 0,
        disabled: false,
        active: false,
      },
      {
        label: "Rich Cultural Heritage",
        caption: "Portugal's historic city centers like Porto's Ribeira and Lisbon's Belém showcase centuries of architectural marvels and cultural landmarks.",
        id: 3,
        disabled: false,
        active: false,
      },
      {
        label: "Friendly Locals",
        caption: "Portuguese locals are known for their warm hospitality, readily offering help and smiles to visitors.",
        id: 4,
        disabled: false,
        active: false,
      },
      {
        label: "Beautiful Nature",
        caption: "The Azores' lush landscapes, the Douro Valley's terraced vineyards, and the stunning beaches of the Alentejo coast showcase Portugal's diverse natural beauty.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Delicious Cuisine",
        caption: "Savor iconic Portuguese dishes like pastéis de nata, fresh seafood, and traditional bacalhau (codfish) dishes.",
        id: 6,
        disabled: false,
        active: false,
      },
      {
        label: "Healthcare Quality",
        caption: "Portugal's healthcare system ranks among the best in the world, ensuring high-quality medical services.",
        id: 7,
        disabled: false,
        active: false,
      },
      {
        label: "Affordable Living",
        caption: "Portugal offers a lower cost of living compared to many European countries, making it budget-friendly.",
        id: 8,
        disabled: false,
        active: false,
      },
      {
        label: "High Safety Level",
        caption: "Portugal maintains low crime rates, ensuring a safe environment for residents and visitors.",
        id: 9,
        disabled: false,
        active: false,
      },
      {
        label: "Economic Stability",
        caption: "The country's stable economy provides opportunities for expatriates seeking employment.",
        id: 10,
        disabled: false,
        active: false,
      },
    ],
    selectedChips: [],
    tips: [
      {
        title: "Rent an apartment",
        color: tipColors.RENTAPPARTMENTbackground,
        progressColor: tipColors.RENTAPPARTMENTprogress,
        progressBar: tipColors.RENTAPPARTMENTbar,
        active: false,
        checked: false,
        progress: 0,
        childTips: [
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Malta",
    flag: "🇲🇹",
    bg: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a39cd4128ec0b9593_malta_bg.png",
    id: 1,
    active: false,
    chips: [
      {
        label: "Sunny Weather",
        caption: "Malta basks in sunshine nearly year-round, with warm Mediterranean summers and mild winters.",
        id: 1,
        disabled: false,
        active: false,
      },
      {
        label: "Kid-Friendly",
        caption: "Family-friendly attractions like Popeye Village and the Playmobil FunPark cater to young visitors.",
        id: 2,
        disabled: false,
        active: false,
      },
      {
        label: "Rich Cultural Heritage",
        caption: "The ancient Megalithic Temples, a UNESCO World Heritage site, showcase Malta's deep historical roots.",
        id: 3,
        disabled: false,
        active: false,
      },
      {
        label: "Friendly Locals",
        caption: "Maltese people are known for their friendliness and their willingness to share their culture with visitors.",
        id: 7,
        disabled: false,
        active: false,
      },
      {
        label: "Beautiful Nature",
        caption: "The Blue Grotto's stunning sea caves and Gozo's picturesque beaches display Malta's natural beauty.",
        id: 9,
        disabled: false,
        active: false,
      },
      {
        label: "Delicious Cuisine",
        caption: "Maltese cuisine blends Mediterranean flavors, with pastizzi (savory pastries) and rabbit stew as local favorites.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Healthcare Quality",
        caption: "Malta boasts a modern healthcare system with well-regarded medical facilities.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Affordable Living",
        caption: "Compared to many European countries, Malta offers an affordable cost of living.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "High Safety Level",
        caption: "Malta ranks as one of the safest countries in Europe, ensuring peace of mind.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Economic Stability",
        caption: "The nation's resilient economy provides stability and employment opportunities.",
        id: 5,
        disabled: false,
        active: false,
      },
    ],
    selectedChips: [],
    tips: [
      {
        title: "Rent an apartment",
        color: tipColors.RENTAPPARTMENTbackground,
        progressColor: tipColors.RENTAPPARTMENTprogress,
        progressBar: tipColors.RENTAPPARTMENTbar,
        active: false,
        checked: false,
        progress: 0,
        childTips: [
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "he average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "he average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
        ]
      }
    ]
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    bg: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a4a697111470b5239_thailand_bg.png",
    id: 2,
    active: false,
    chips: [
      {
        label: "Sunny Weather",
        caption: "Thailand's tropical climate ensures sun-filled days, whether you're on the bustling streets of Bangkok or the serene beaches of Phuket. It's a paradise for sun worshippers.",
        id: 0,
        disabled: false,
        active: false,
      },
      {
        label: "Kid-Friendly",
        caption: "Thailand offers a plethora of family-friendly activities, from exploring vibrant street markets to visiting wildlife sanctuaries and water parks.",
        id: 1,
        disabled: false,
        active: false,
      },
      {
        label: "Rich Cultural Heritage",
        caption: "Explore ancient temples in Ayutthaya and experience Thai traditions at the Yi Peng Lantern Festival in Chiang Mai.",
        id: 1,
        disabled: false,
        active: false,
      },
      {
        label: "Friendly Locals",
        caption: "Thais are known for their warm hospitality and welcoming smiles, making visitors feel at home.",
        id: 1,
        disabled: false,
        active: false,
      },
      {
        label: "Beautiful Nature",
        caption: "Thailand's natural beauty is breathtaking. Explore lush jungles, visit stunning waterfalls like Erawan Falls, and snorkel in the crystal-clear waters of the Phi Phi Islands.",
        id: 4,
        disabled: false,
        active: false,
      },
      {
        label: "Delicious Cuisine",
        caption: "Thai food is famous worldwide for its bold flavors. Enjoy dishes like green curry, pad Thai, and mango sticky rice from street vendors and local eateries.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Healthcare Quality",
        caption: "Thailand's internationally accredited hospitals provide high-quality medical services at affordable prices.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Affordable Living",
        caption: "Thailand is known for its affordability. You can find budget-friendly accommodations, delicious street food, and affordable transportation options.",
        id: 8,
        disabled: false,
        active: false,
      },
      {
        label: "High Safety Level",
        caption: "Thailand is generally a safe country with welcoming locals. Tourists can explore its cities and countryside with confidence.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Economic Stability",
        caption: "Thailand's economy is robust, with a growing tourism sector and opportunities in industries like hospitality, technology, and manufacturing.",
        id: 5,
        disabled: false,
        active: false,
      },
    ],
    selectedChips: [],
    tips: [
      {
        title: "Rent an apartment",
        color: tipColors.RENTAPPARTMENTbackground,
        progressColor: tipColors.RENTAPPARTMENTprogress,
        progressBar: tipColors.RENTAPPARTMENTbar,
        active: false,
        checked: false,
        progress: 0,
        childTips: [
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
        ]
      },
      {
        title: "Apply for a residence permit",
        color: tipColors.RESIDENCEPERMITbackgound,
        progressColor: tipColors.RESIDENCEPERMITprogress,
        progressBar: tipColors.RESIDENCEPERMITbar,
        active: false,
        checked: false,
        progress: 0,
        childTips: [
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
        ]
      },
      {
        title: "Kindergarten & school",
        color: tipColors.SCHOOLbackground,
        progressColor: tipColors.SCHOOLprogress,
        progressBar: tipColors.SCHOOLbar,
        active: false,
        checked: false,
        progress: 0,
        childTips: [
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Greece",
    flag: "🇬🇷",
    bg: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a382f45925434ba68_greece_bg.png",
    id: 3,
    active: false,
    chips: [
      {
        label: "Sunny Weather",
        caption: "Greece is blessed with approximately 250 sunny days per year, making it an ideal destination for sun-seekers. Islands like Santorini are renowned for their crystal-clear waters and stunning sunsets, attracting travelers from around the world.",
        id: 2,
        disabled: false,
        active: false,
      },
      {
        label: "Kid-Friendly",
        caption: "Greece offers a wealth of family-friendly experiences. Athens has interactive museums like the Hellenic Children's Museum, while islands like Crete feature water parks and safe, sandy beaches perfect for young ones.",
        id: 4,
        disabled: false,
        active: false,
      },
      {
        label: "Rich Cultural Heritage",
        caption: "Greece's cultural heritage is nothing short of legendary. The Acropolis in Athens, ancient theaters like Epidaurus, and historical sites on Crete showcase millennia of history and architectural brilliance.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Friendly Locals",
        caption: "Greek hospitality is renowned globally. Locals often greet visitors with a warm 'kalimera' (good morning) and are eager to share their culture, whether through traditional dance or inviting you to savor their delicious cuisine.",
        id: 6,
        disabled: false,
        active: false,
      },
      {
        label: "Beautiful Nature",
        caption: "Greece's landscapes range from dramatic mountains to idyllic beaches. The Samaria Gorge in Crete, the Meteora rock formations, and the turquoise waters of Navagio Beach are just a few examples of its natural beauty.",
        id: 8,
        disabled: false,
        active: false,
      },
      {
        label: "Delicious Cuisine",
        caption: "Greek cuisine is a gastronomic delight. Try moussaka, souvlaki, and baklava, and savor fresh seafood by the sea. Olive oil and feta cheese are staples, contributing to the country's tasty offerings.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Healthcare Quality",
        caption: "Greece boasts a robust healthcare system with modern facilities. The country's healthcare standards meet international expectations, ensuring quality medical care.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Affordable Living",
        caption: "Compared to many Western European nations, Greece offers a more affordable cost of living, including reasonably priced meals, accommodations, and entertainment.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "High Safety Level",
        caption: "Greece maintains a relatively low crime rate, creating a safe environment for residents and travelers to explore its treasures.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Economic Stability",
        caption: "While the country faced economic challenges in recent years, Greece's economy has been recovering steadily, providing opportunities for expatriates.",
        id: 5,
        disabled: false,
        active: false,
      },
    ],
    selectedChips: [],
    tips: [
      {
        title: "Rent an apartment",
        color: tipColors.RENTAPPARTMENTbackground,
        progressColor: tipColors.RENTAPPARTMENTprogress,
        progressBar: tipColors.RENTAPPARTMENTbar,
        active: false,
        checked: false,
        progress: 0,
        childTips: [
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
        ]
      }
    ]
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    bg: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a3b4af9b3a337d39b_spain_bg.png",
    id: 4,
    active: false,
    chips: [
      {
        label: "Sunny Weather",
        caption: "Spain enjoys abundant sunshine, particularly along its Mediterranean coastline. Cities like Barcelona and Valencia benefit from mild, sunny weather year-round, enticing outdoor enthusiasts.",
        id: 0,
        disabled: false,
        active: false,
      },
      {
        label: "Kid-Friendly",
        caption: "Spain is exceptionally welcoming to families. Attractions like Park Güell in Barcelona, Warner Bros. Park in Madrid, and child-friendly beaches ensure unforgettable experiences for children.",
        id: 2,
        disabled: false,
        active: false,
      },
      {
        label: "Rich Cultural Heritage",
        caption: "Spain's cultural richness is evident in its historic sites like the Alhambra in Granada, Sagrada Família in Barcelona, and the royal palaces in Madrid. Flamenco music and dance add to its vibrant culture.",
        id: 3,
        disabled: false,
        active: false,
      },
      {
        label: "Friendly Locals",
        caption: "Spaniards are known for their friendliness and openness. It's easy to strike up conversations with locals at tapas bars, where they're happy to share recommendations.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Beautiful Nature",
        caption: "Spain's diverse landscapes encompass the Pyrenees mountains, pristine beaches in the Canary Islands, and the picturesque countryside of Andalusia.",
        id: 7,
        disabled: false,
        active: false,
      },
      {
        label: "Delicious Cuisine",
        caption: "Spanish cuisine is a feast for the senses. Savor paella in Valencia, tapas in Seville, and pintxos in San Sebastián, all accompanied by world-class wines.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Healthcare Quality",
        caption: "Spain boasts a top-tier healthcare system, with modern hospitals and well-trained medical professionals ensuring excellent medical care.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Affordable Living",
        caption: "While living costs vary by region, Spain offers affordable living options, including reasonably priced accommodations and dining.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "High Safety Level",
        caption: "Spain maintains a safe environment for residents and travelers, with a low crime rate and efficient law enforcement.",
        id: 5,
        disabled: false,
        active: false,
      },
      {
        label: "Economic Stability",
        caption: "Spain's stable economy provides opportunities for expatriates, particularly in sectors like tourism, technology, and finance.",
        id: 5,
        disabled: false,
        active: false,
      },
    ],
    selectedChips: [],
    tips: [
      {
        title: "Rent an apartment",
        color: "#EFE4DC",
        progressColor: "",
        progressBar: "",
        active: false,
        checked: false,
        progress: 0,
        childTips: [
          {
            title: "Determine your budget and length of stay in apartments",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
          {
            title: "Select type of accommodation",
            checked: false,
            userTips: [
              {
                ava: "https://uploads-ssl.webflow.com/64d15b8bef1b2f28f40b4f1e/651c607a0e526422624e8031_ava.png",
                name: "Jenna A.",
                caption: "The average housing in Alanya varies from $800-1,000",
                date: "3d ago",
              },
            ]
          },
        ]
      }
    ]
  },

])

const currentPercent = ref(0);

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
  selectedCountry.value = [];
  selectedCountry.value.push(country);
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
      if (step === 2) {
        finish.value = true;
      }
    }, 1000)
    b.active = b.id === step;
  })
}

const restart = () => {
  selectedTip.value[0].active = false;
  selectedTip.value[0].progress = 0;
  selectedCountry.value[0].tips.map(t => t.progress = 0);
  selectedTip.value[0].childTips.map(t => t.checked = false);
  currentPercent.value = 0;
  breadcrumbs.value.forEach(b => {
    tempChips.value = [];
    chips.value.forEach(i => i.disabled = false)
    countries.value.forEach(c => c.active = false)
    skip.value = false;
    b.active = b.id === 0;
    finish.value = false;
  })

  countries.value.forEach((c) => {
    c.chips.forEach((c) => {
      c.active = false;
    })
  })
  selectedCountry.value = [];
}

const backToTips = () => {
  selectedTip.value[0].active = false
  // selectedTip.value = [];
}

const checkedTip = (tip: tipItem) => {
  tip.checked = !tip.checked;
  if (tip.checked) {
    tip.childTips.map(c => c.checked = true)
  } else {
    tip.childTips.map(c => c.checked = false)
  }
}

const setActiveTip = (tip: tipItem) => {
  tip.active = true;
  // selectedTip.value = [];
  selectedTip.value = [tip];
}

const setActiveChildTip = (tip: ChildTip) => {
  tip.checked = !tip.checked;
}

const progressBarPercentage = (val: number | undefined) => {
  // return (selectedCountry.value[0].tips.length - (selectedCountry.value[0].tips.length - val)) * 10 * val;
  // return (100 / selectedCountry.value[0].tips.length) * val;
  if (val === undefined) {
    return 0;
  }

  return (100 / childTotalTipsLength.value) * val;
};

// const progressBarChildsPercentage = (val) => {
//   console.log(val)
//   // return (selectedCountry.value[0].tips.length - (selectedCountry.value[0].tips.length - val)) * 10 * val;
//   return (100 / selectedTip.value[0].childTips.length) * val;
// };

watch(() => tempChips.value.length, (value) => {
  if (value >= 5) {
    chips.value.forEach(c => c.disabled = true);
  } else {
    chips.value.forEach(c => c.disabled = false);
    tempChips.value.forEach(c => c.disabled = true);
  }
});

watch(() => tempChips.value.length, () => {
  console.log(tempChips.value)
  tempChips.value.forEach((tempChip) => {
    filteredCountries.value.forEach((country) => {
      const matchingChip = country.chips.find((chip) => chip.label === tempChip.label);

      console.log('matchingChip', matchingChip)

      if (matchingChip) {
        matchingChip.active = true;
      }
    })
  })
});

watch(() => selectedCountry.value[0]?.tips.filter(i => i.childTips.filter(i => i.checked === true)), (value) => {
  console.log('****', value);
});


const childTipsLength = computed(() => {
  return selectedCountry.value[0]?.tips.reduce((count, tip) => {
    // Filter childTips with checked: true and add their length to count
    return count + tip.childTips.filter(childTip => childTip.checked).length;
  }, 0);
})

const childTotalTipsLength = computed(() => {
  return selectedCountry.value[0]?.tips.reduce((count, tip) => {
    // Filter childTips with checked: true and add their length to count
    return count + tip.childTips.length;
  }, 0);
})


watch(() => selectedCountry.value[0]?.tips.filter(i => i.progress === 100).length, (value) => {
  selectedCountry.value[0]?.tips.forEach((t) => {
  })
  console.log('currentPercent', value)
  // currentPercent.value = value;
});

watch(() => selectedTip.value[0]?.childTips.filter(i => i.checked), (value) => {
  console.log('child click', value)
  if (breadcrumbs.value[2].active) {
  currentPercent.value = currentPercent.value + value.length;
  let percentItem = 100 / selectedTip.value[0]?.childTips.length;
  if (value) {
    selectedCountry.value[0].tips.forEach(t => {
      if (t.title === selectedTip.value[0].title) {
        console.log(t)
        // t.checked = true
        t.progress = selectedTip.value[0]?.childTips.filter(i => i.checked).length * percentItem;
      }
    })
  }
  }
  // if (selectedTip.value[0]?.childTips.filter(i => i.checked).length === selectedTip.value[0]?.childTips.length) {
  //   console.log('selecte all')
  //   selectedCountry.value[0].tips.forEach(t => {
  //     if (t.title === selectedTip.value[0].title) {
  //       // t.checked = true
  //       t.progress = 100;
  //     }
  //   })
  // } else {
  //   selectedCountry.value[0].tips.forEach(t => {
  //     if (t.title === selectedTip.value[0].title) {
  //       t.checked = false
  //       t.progress = 0;
  //     }
  //   })
  // }
  // currentPercent.value = value;
});

</script>

<style lang="scss" scoped>
@import "src/assets/styles/app";
</style>


