import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const baseUrl= "https://api.themoviedb.org/3";
const m = "a54618fe0fbb1c35737e9a35ec28e5de";
const requests = {
  fetchTrending: "/trending/all/week?api_key=".concat(m, "&language=zh-TW"),
  fetchNetflixOriginals: "/discover/tv?api_key=".concat(m, "&with_network=213&language=zh-TW"),
  fetchTopRated: "/movie/top_rated?api_key=".concat(m, "&language=en-US"),
  fetchActionMovies: "/discover/movie?api_key=".concat(m, "&with_genres=28&language=zh-TW"),
  fetchComedyMovies: "/discover/movie?api_key=".concat(m, "&with_genres=35&language=zh-TW"),
  fetchHorrorMovies: "/discover/movie?api_key=".concat(m, "&with_genres=27&language=zh-TW"),
  fetchRomanceMovies: "/discover/movie?api_key=".concat(m,"&with_genres=10749&language=zh-TW"),
  fetchDocumentaries: "/discover/movie?api_key=".concat(m, "&with_genres=99&language=zh-TW"),
};
const kind = 
[
  {
    id:'0',
    title:'動作',
    Action:`/discover/movie?api_key=${m}&with_genres=28&language=zh-TW`
  },
  {
    id:'1',
    title:'冒險',
    Adventure:`/discover/movie?api_key=${m}&with_genres=12&language=zh-TW`
  },
  {
    id:'2',
    title:'動畫',
    Animation:`/discover/movie?api_key=${m}&with_genres=16&language=zh-TW`
  },
  {
    id:'3',
    title:'喜劇',
    Comedy:`/discover/movie?api_key=${m}&with_genres=35&language=zh-TW`
  },
  {
    id:'4',
    title:'犯罪',
    Crime:`/discover/movie?api_key=${m}&with_genres=80&language=zh-TW`
  },
  {
    id:'5',
    title:'紀錄片',
    Documentary:`/discover/movie?api_key=${m}&with_genres=99&language=zh-TW`
  },
  {
    id:'6',
    title:'劇情',
    Drama:`/discover/movie?api_key=${m}&with_genres=18&language=zh-TW`
  },
  {
    id:'7',
    title:'家庭',
    Family:`/discover/movie?api_key=${m}&with_genres=10751&language=zh-TW`
  },
  {
    id:'8',
    title:'奇幻',
    Fantasy:`/discover/movie?api_key=${m}&with_genres=14&language=zh-TW`
  },
  {
    id:'9',
    title:'歷史',
    History:`/discover/movie?api_key=${m}&with_genres=36&language=zh-TW`
  },
  {
    id:'10',
    title:'恐怖',
    Horror:`/discover/movie?api_key=${m}&with_genres=27&language=zh-TW`
  },
  {
    id:'11',
    title:'音樂',
    Music:`/discover/movie?api_key=${m}&with_genres=10402&language=zh-TW`
  },
  {
    id:'12',
    title:'懸疑',
    Mystery:`/discover/movie?api_key=${m}&with_genres=9648&language=zh-TW`
  },
  {
    id:'13',
    title:'愛情',
    Romance:`/discover/movie?api_key=${m}&with_genres=10749&language=zh-TW`
  },
  {
    id:'14',
    title:'科幻',
    ScienceFiction:`/discover/movie?api_key=${m}&with_genres=878&language=zh-TW`
  },
  {
    id:'15',
    title:'電視電影',
    TVMovie:`/discover/movie?api_key=${m}&with_genres=10770&language=zh-TW`
  },
  {
    id:'16',
    title:'驚悚',
    Thriller:`/discover/movie?api_key=${m}&with_genres=53&language=zh-TW`
  },
  {
    id:'17',
    title:'戰爭',
    War:`/discover/movie?api_key=${m}&with_genres=10752&language=zh-TW`
  },
  {
    id:'18',
    title:'西部',
    Western:`/discover/movie?api_key=${m}&with_genres=37&language=zh-TW`
  },
];

export default new Vuex.Store({
  state: {
    kind:kind,
    requests:requests,
    baseUrl:baseUrl,
    key:m,
    count:0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
