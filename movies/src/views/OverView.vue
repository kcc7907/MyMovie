<template>
  <div class="overview">
    <div class="poster container-fluid">
      <div class="row">
        <div class="poster col-3 d-flex align-items-center">
          <img
            :src="srcSmall + datas.poster_path"
            :alt="title"
            class="img-fluid"
          />
        </div>
        <div class="detail col-9">
          <h3 class="movieTitle text-center">{{ title }}</h3>
          <div class="facts"></div>
          <h5>電影簡介</h5>
          <p>{{ datas.overview ? datas.overview : empty }}</p>
          <h5>電影演員</h5>
          <ul class="cast d-flex p-0">
            <li
              class="actor bg-dark"
              v-for="(item, index) in cast"
              :key="index"
            >
              <div class="images">
                <img
                  :src="srcSmall + item.profile_path"
                  alt="圖片失效，請等待更新"
                  class="profile img-fluid"
                />
              </div>
              <div class="">
                <p class="">
                  {{ item.name }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <iframe
      class="container-fluid"
      :height="embedHeight"
      :src="ytEmbed"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "OverView",
  props: ["id", "title"],
  data() {
    return {
      datas: [],
      srcOriginal: this.$store.state.src,
      srcSmall: this.$store.state.imgSrc,
      baseUrl: this.$store.state.baseUrl,
      embedHeight: 0,
      cast: [],
      iframe: "",
      empty: "目前暫無簡介，請等待更新",
      ytID: "",
      video: "",
    };
  },
  computed: {
    movieApi() {
      //https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos
      return `https://api.themoviedb.org/3/movie/${this.id}?api_key=a54618fe0fbb1c35737e9a35ec28e5de&language=zh-TW&append_to_response=videos,images,credits`;
    },
    videoApi() {
      return `https://api.themoviedb.org/3/movie/${this.id}?api_key=a54618fe0fbb1c35737e9a35ec28e5de&language=en-US&append_to_response=videos`;
    },
    ytSearch() {
      return `https://www.googleapis.com/youtube/v3/search?&key=AIzaSyD2y-s2porfmEKilPnh-0rFp1MADnu1Tiw&maxResults=1&q=${this.title} 預告`;
    },
    ytEmbed() {
      return `https://www.youtube.com/embed/${this.video}`;
    },
  },
  methods: {
    getOverView() {
      this.$axios
        .get(this.movieApi)
        .then((res) => {
          this.datas = res.data;
        })
        .then(() => {
          this.cast = this.datas.credits.cast.slice(0, 20);
          this.iframe = this.datas.videos.results;
        });
    },
    widowSizeCheck() {
      // if(window.innerWidth < 900){
      // }else {
      // }
      if (this.video !== 0 && this.video) {
        console.log(this.video);
        // if (window.innerWidth < 900) {
        // }
      }
    },
    getYTID() {
      return this.$axios
        .get(this.ytSearch)
        .then((res) => {
          this.ytID = res.data.items.id.videoId;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getVideo() {
      return this.$axios.get(this.videoApi).then((res) => {
        this.video = res.data.videos.results[0].key;
      });
    },
  },
  mounted() {
    // window.onresize=()=>{
    //   if(window.innerWidth < 900){
    //     this.test = 100
    //     this.widowSizeCheck();
    //   }
    // }
    this.getOverView();
    this.getVideo();
    this.widowSizeCheck();

    // (async () => {
    //   await this.getYTID();
    //   await  (function(){
    //     return  new Promise((res) => {
    //     res();
    //   });
    //   })();
    // })();
  },
  watch: {
    embedHeight() {
      console.log("watch");
      this.widowSizeCheck();
    },
  },
};
</script>

<style lang="scss" >
* {
  color: white;
}
.overview {
  margin-top: 10px;
}
ul.cast {
  width: 100%;
  overflow: auto;
  list-style: none;
  text-align: center;
  margin-bottom: 10px;
  li.actor {
    margin-right: 10px;
    list-style: none;
    padding: 0;
    border-radius: 8px;
    margin-bottom: 8px;
  }
  p {
    margin: 15px 0 0;
  }
}
.images {
  overflow: hidden;
  border-radius: 8px;
  width: 150px;
}
</style>