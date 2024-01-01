<template>
  <div class="w-full h-full main-page">
    <audio ref="audioRef" loop>
      <source src="@/assets/images/bgm.mp3" type="audio/mpeg" />
      您的浏览器不支持 audio 标签。
    </audio>
    <div class="desktop">
      <img
        class="notice w-16% absolute left-25% top-6% cursor-pointer"
        src="@/assets/images/update.png"
        @click="showModal = true"
      />
      <img
        class="notice w-16% absolute left-55% top-6% cursor-pointer"
        src="@/assets/images/Announcements.png"
        @click="showNoticeModal = true"
      />
    </div>
    <video src="@/assets/images/Hamsterbuilding.mp4" class="squirrel absolute" muted autoplay loop></video>
    <div class="absolute left-30px top-30px" @click="playAudio">
      <svg-icon
        v-if="volume === 0"
        icon="material-symbols:volume-off-rounded"
        class="text-48px cursor-pointer color-#fff"
      ></svg-icon>
      <svg-icon v-else icon="material-symbols:volume-up" class="text-48px cursor-pointer color-#fff"></svg-icon>
    </div>
    <div class="absolute w-48px h-48px right-30px top-30px cursor-pointer color-#fff" @click="showSettingModal = true">
      <img class="" src="@/assets/images/setting.png" @click="showSettingModal = true" />
      <!-- <svg-icon icon="material-symbols:settings-outline" class="text-48px cursor-pointer color-#fff"></svg-icon> -->
    </div>

    <n-modal
      v-model:show="showModal"
      style="
        width: 30vw;
        height: 41vw;
        background: url('/src/assets/images/StampPaper.png') no-repeat center center/100% 100%, #fff;
      "
    >
      <div class="pt-30 pl-20px pr-20px">
        <div class="text-6 text-center mb-20px">建设进度</div>
        <p class="mb-16px">2023-12-30: 宣传栏开工，新建进度表</p>
        <p class="mb-16px">2023-12-31: 公告栏开工</p>
      </div>
    </n-modal>
    <n-modal
      v-model:show="showNoticeModal"
      style="
        width: 30vw;
        height: 41vw;
        background: url('/src/assets/images/StampPaper.png') no-repeat center center/100% 100%, #fff;
      "
    >
      <div class="pt-30 pl-20px pr-20px">
        <div class="text-6 text-center mb-20px">公告</div>
        <p class="mb-16px">快乐森林的居民们，你们好！</p>
        <p class="mb-16px">
          我们正在建造一座叫“无限宣传栏”的设施，这个宣传栏在建成之后可以无限地延展下去吗这样就不用担心没有地方贴上你们的烦恼啦
        </p>
      </div>
    </n-modal>
    <n-modal v-model:show="showSettingModal" style="width: 40vw; height: 20vw; background-color: #fff">
      <div class="pt-10 pl-20px pr-20px">
        <div class="text-6 text-center mb-20px">{{ t('message.common.setting') }}</div>
        <div class="toggle-lang flex mb-16px">
          <span class="w-120px">{{ t('message.common.langChange') }}</span>
          <toggle-lang hover-bg="hover:bg-transparent" />
        </div>
        <div class="toggle-lang flex items-center justify-start">
          <span class="w-120px">{{ t('message.common.volumeChange') }}</span>
          <n-slider
            v-model:value="volume"
            show-tooltip
            :step="0.1"
            :min="0"
            :max="1"
            class="w-60%"
            placement="bottom"
            @update:value="changeVolume"
          />
        </div>
        <div class="absolute bottom-10px flex-center w-full left--20px">
          <n-button type="primary" @click="logout">{{ t('message.common.logout') }}</n-button>
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store';
import { t } from '@/locales';
import ToggleLang from '@/layouts/common/global-header/components/toggle-lang.vue';
const auth = useAuthStore();
const showModal = ref(false);
const showNoticeModal = ref(false);
const showSettingModal = ref(false);
const volume = ref(0);
const audioRef = ref();
// 音量调节
function changeVolume(value: number) {
  audioRef.value.play();
  audioRef.value.volume = value;
}
// 播放音乐
function playAudio() {
  if (volume.value === 0) {
    audioRef.value.volume = 1;
    volume.value = 1;
    audioRef.value.play();
  } else {
    audioRef.value.volume = 0;
    volume.value = 0;
    audioRef.value.pause();
  }
  console.log(audioRef.value.pause);
}
// 退出登录
function logout() {
  auth.resetAuthStore();
}
</script>

<style scoped lang="scss">
.main-page {
  background: url('@/assets/images/Background.png') no-repeat center center/100% 100%;
  position: relative;
  .desktop {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 28vw;
    background: url('@/assets/images/Bulleten.png') no-repeat center center/100% 100%;
  }
  .squirrel {
    top: 70%;
    left: calc(50% + 35vw);
    transform: translate(-50%, -50%);
    width: 20vw;
    height: 20vw;
    object-fit: cover;
  }
}
</style>
