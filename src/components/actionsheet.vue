<template>
  <div @touchmove.prevent>
    <transition name='toast'>
      <div v-if='show' class="m-pop-box" @click='cancel'></div>
    </transition>
    <transition name='pop'>
      <div v-if='show' class="m-acbtn-box">
        <h2 v-if="tips" class="m-box m-text-box m-aln-center m-justify-center m-main m-acbtn-tips m-bb1">{{ tips }}</h2>
        <ul class="m-acbtn-list">
          <li v-for='(btn, index) in lists'
            v-if='btn.text'
            :key='btn.text'
            @click='btn.methods(btn, index)'
            :style="btn.style"
            class="m-acbtn" 
            ><a href="javascript:;">{{ btn.text }}</a></li>
        </ul>
        <ul class="m-acbtn-list">
          <li @click='cancel' class="m-acbtn"><a href="javascript:;">{{ cancelBtn }}</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import bus from "@/bus.js";
export default {
  name: "actionsheet",
  data() {
    return {
      lists: [],
      tips: null,
      show: false,
      scrollTop: 0,
      cancelBtn: "取消"
    };
  },
  created: function() {
    /**
     * Call actionSheet
     * @author jsonleex <jsonlseex@163.com>
     * @param  {Array}   btnLists   [{ text: "确定", method: () =>{ console.log("确定") } }, ...]
     * @param  {String}  cancelTxt  "取消"
     */
    bus.$on("actionSheet", (btnLists, cancelTxt, tips = null) => {
      this.tips = tips;
      this.call(btnLists, cancelTxt);
    });
  },
  methods: {
    call(btnLists, cancelTxt) {
      this.cancelBtn = cancelTxt || this.cancelBtn;
      if (btnLists.length > 0) {
        this.lists = btnLists.map(btn => {
          btn.method &&
            (btn.methods = (btn, index) => {
              btn.method(btn, index);
              this.show = false;
            });
          return btn;
        });
      }
      this.show = true;
      this.scrollable = false;
    },
    cancel() {
      this.lists = [];
      this.tips = null;
      this.show = false;
      this.scrollable = true;
    }
  }
};
</script>
