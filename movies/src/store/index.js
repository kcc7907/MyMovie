import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const baseUrl = "https://api.themoviedb.org/3";
const m = "a54618fe0fbb1c35737e9a35ec28e5de";
const requests = {
  fetchTrending: "/trending/all/week?api_key=".concat(m, "&language=zh-TW"),
  fetchNetflixOriginals: "/discover/tv?api_key=".concat(m, "&with_network=213&language=zh-TW"),
  fetchTopRated: "/movie/top_rated?api_key=".concat(m, "&language=en-US"),
  fetchActionMovies: "/discover/movie?api_key=".concat(m, "&with_genres=28&language=zh-TW"),
  fetchComedyMovies: "/discover/movie?api_key=".concat(m, "&with_genres=35&language=zh-TW"),
  fetchHorrorMovies: "/discover/movie?api_key=".concat(m, "&with_genres=27&language=zh-TW"),
  fetchRomanceMovies: "/discover/movie?api_key=".concat(m, "&with_genres=10749&language=zh-TW"),
  fetchDocumentaries: "/discover/movie?api_key=".concat(m, "&with_genres=99&language=zh-TW"),
  nowPlaying: `${baseUrl}/movie/now_playing?api_key=${m}&language=zh-TW`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${m}&language=zh-TW`,
  latest: `${baseUrl}/movie/upcoming?api_key=${m}&language=zh-TW`
};
const kind =
  [
    {
      id: 0,
      title: '動作',
      api: `/discover/movie?api_key=${m}&with_genres=28&language=zh-TW`
    },
    {
      id: 1,
      title: '冒險',
      api: `/discover/movie?api_key=${m}&with_genres=12&language=zh-TW`
    },
    {
      id: 2,
      title: '動畫',
      api: `/discover/movie?api_key=${m}&with_genres=16&language=zh-TW`
    },
    {
      id: 3,
      title: '喜劇',
      api: `/discover/movie?api_key=${m}&with_genres=35&language=zh-TW`
    },
    {
      id: 4,
      title: '犯罪',
      api: `/discover/movie?api_key=${m}&with_genres=80&language=zh-TW`
    },
    {
      id: 5,
      title: '紀錄片',
      api: `/discover/movie?api_key=${m}&with_genres=99&language=zh-TW`
    },
    {
      id: 6,
      title: '劇情',
      api: `/discover/movie?api_key=${m}&with_genres=18&language=zh-TW`
    },
    {
      id: 7,
      title: '家庭',
      api: `/discover/movie?api_key=${m}&with_genres=10751&language=zh-TW`
    },
    {
      id: 8,
      title: '奇幻',
      api: `/discover/movie?api_key=${m}&with_genres=14&language=zh-TW`
    },
    {
      id: 9,
      title: '歷史',
      api: `/discover/movie?api_key=${m}&with_genres=36&language=zh-TW`
    },
    {
      id: 10,
      title: '恐怖',
      api: `/discover/movie?api_key=${m}&with_genres=27&language=zh-TW`
    },
    {
      id: 11,
      title: '音樂',
      api: `/discover/movie?api_key=${m}&with_genres=10402&language=zh-TW`
    },
    {
      id: 12,
      title: '懸疑',
      api: `/discover/movie?api_key=${m}&with_genres=9648&language=zh-TW`
    },
    {
      id: 13,
      title: '愛情',
      api: `/discover/movie?api_key=${m}&with_genres=10749&language=zh-TW`
    },
    {
      id: 14,
      title: '科幻',
      api: `/discover/movie?api_key=${m}&with_genres=878&language=zh-TW`
    },
    {
      id: 15,
      title: '電視電影',
      api: `/discover/movie?api_key=${m}&with_genres=10770&language=zh-TW`
    },
    {
      id: 16,
      title: '驚悚',
      api: `/discover/movie?api_key=${m}&with_genres=53&language=zh-TW`
    },
    {
      id: 17,
      title: '戰爭',
      api: `/discover/movie?api_key=${m}&with_genres=10752&language=zh-TW`
    },
    {
      id: 18,
      title: '西部',
      api: `/discover/movie?api_key=${m}&with_genres=37&language=zh-TW`
    },
  ];

export default new Vuex.Store({
  state: {
    kind: kind,
    requests: requests,
    baseUrl: baseUrl,
    key: m,
    imgSrc: "https://image.tmdb.org/t/p/w500"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
