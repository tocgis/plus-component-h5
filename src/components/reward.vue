<template>
  <transition name='pop'>
    <div v-if='show' class="m-box-model m-pos-f" style="background-color: #f4f5f6">
      <header class="m-box m-aln-center m-head-top m-main m-bb1">
        <div class="m-flex-grow1">
          <svg class="m-style-svg m-svg-def" @click="cancel">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#base-back"></use>
          </svg>
        </div>
        <div class="m-flex-grow1 m-text-c m-head-top-title">
          <span>打赏</span>
        </div>
        <div class="m-flex-grow1 m-text-r">
          <a @click.stop.prevent="resetProps">重置</a>
        </div>
      </header>
      <main class="m-box-model m-aln-center m-justify-center">
        <div class="m-box-model m-lim-width m-main">
          <div class="m-pinned-amount-btns">
            <p class="m-pinned-amount-label">选择打赏金额</p>
            <div class="m-box m-aln-center ">
                <button 
                  :key="item"
                  v-for="item in items"
                  class="m-pinned-amount-btn"
                  :style="{ width: `${1 / items.length * 100}%` }"
                  :class="{ active: ~~amount === ~~item &&  !customAmount }"
                  @click="chooseDefaultAmount(item)">{{((~~item) / 100).toFixed(2) }} 元</button>

            </div>
          </div>
          <div class="m-box m-aln-center m-justify-bet m-bb1 m-bt1 m-pinned-row plr20 m-pinned-amount-customize">
            <span>自定义金额</span>
            <div class="m-box m-aln-center">
              <input type="number" v-model="customAmount" placeholder="输入金额" dir="rtl">
              <span>元</span>
            </div>
          </div>
        </div>
        <div class="plr20 m-lim-width" style="margin-top: 0.6rem">
          <button
          :disabled="disabled || loading"
          class="m-long-btn m-signin-btn"
          @click="handleOk">
            <svg v-if="loading" class="m-style-svg m-svg-def rotate">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#base-loading"></use>
            </svg>
            <span v-else>确定</span>
          </button>
        </div>
      </main>
    </div>
  </transition>
</template>
<script>
import bus from "@/bus.js";
const noop = () => {};
export default {
  name: "reward",
  data() {
    return {
      show: false,
      amount: null,
      loading: false,
      customAmount: null,
      rewardType: ""
    };
  },
  computed: {
    items() {
      return this.$store.state.CONFIG.site.reward.amounts.split(",") || [];
    },
    disabled() {
      return !this.amount > 0;
    }
  },
  watch: {
    customAmount(val) {
      this.amount = ~~val * 100;
    }
  },
  created() {
    bus.$on("reward", () => {
      this.open();
    });
    bus.$on("reward:feed", feedID => {
      this.rewardType = "feed";
      this.open();
      this.rewardFeed = () => {
        if (this.loading) return;
        this.loading = true;
        this.$http
          .post(`/feeds/${feedID}/new-rewards`, {
            amount: this.amount
          })
          .then(({ data = {} }) => {
            this.loading = false;
            this.$Message.success(data);
            this.$nextTick(this.cancel);
          });
      };
    });
  },
  methods: {
    rewardFeed() {},
    handleOk() {
      this.rewardType === "feed" ? this.rewardFeed() : "";
    },
    chooseDefaultAmount(amount) {
      this.customAmount && (this.customAmount = null);
      this.amount = amount;
    },
    resetProps() {
      this.amount = null;
    },
    open() {
      this.show = true;
      this.scrollable = false;
    },
    cancel() {
      this.show = false;
      this.rewardType = "";
      this.rewardFeed = noop;
      this.scrollable = true;
    }
  }
};
</script>

<style>
.m-pinned-row {
  font-size: 0.3rem;
  height: 1rem;
}
.plr20 {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
