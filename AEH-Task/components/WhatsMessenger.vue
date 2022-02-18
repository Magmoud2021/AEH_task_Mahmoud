<template>
  <div>
    <div class="fixed-left">
      <div>
        <a
          :href="`https://api.whatsapp.com/send?phone=${socialMedia.whatsapp}`"
          target="_blank"
          ><img src="~assets/images/icons/whatsapp-fixed.png" alt="whatsapp"
        /></a>
      </div>

      <div>
        <a :href="socialMedia.messenger" target="_blank"
          ><i class="fab fa-facebook-messenger"></i
        ></a>
      </div>
    </div>

    <div class="fixed-right d-none">
      <div>
        <a href="#" target="_blank"
          ><img src="~assets/images/icons/message-fixed.png" alt="message"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchStore } from '~/mixin/fetchStore'

export default {
  name: 'WhatsMessenger',
  mixins: [
    fetchStore([
      {
        stateName: 'socialMedia',
        single: true,
      },
    ]),
  ],
}
</script>

<style scoped lang="scss">
.fixed-left {
  position: fixed;
  border-radius: 2em;
  z-index: 99999;
  left: 40px;
  bottom: 50px;

  .fa-facebook-messenger {
    color: #007bff !important;
    font-size: 3.2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.9rem;
    }
  }

  @media screen and (max-width: 768px) {
    top: auto;
    bottom: 10px;
    left: 10px;
  }

  div {
    margin: 20px 0;

    img {
      &:hover {
        transform: scale(0.8);
        transition: all 0.9s ease 0s;
      }

      @media screen and (max-width: 768px) {
        width: 60%;
      }
    }
  }
}

.fixed-right {
  position: fixed;
  z-index: 99999;
  right: 40px;
  bottom: 50px;

  @media screen and (max-width: 768px) {
    top: auto;
    bottom: 50px;
    right: 10px;
    text-align: right;
  }
}

html:lang(ar) {
  .fixed-left {
    right: 40px;
    left: auto;

    @media screen and (max-width: 768px) {
      top: auto;
      bottom: 50px;
      right: 10px;
      left: auto;
    }
  }

  .fixed-right {
    left: 40px;
    right: auto;

    @media screen and (max-width: 768px) {
      left: 10px;
      right: auto;
      text-align: left;
    }
  }
}
</style>
