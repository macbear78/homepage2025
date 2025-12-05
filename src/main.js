import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css' // ✅ Tailwind CSS 불러오기
import router from './router'  // router import
import vuetify from './plugins/vuetify'
import mixins from './mixins'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'




// createApp(App).mount('#app')  <-- Vue 프로젝트 생성 시 존재하는 기본 코드 제거

// 위 createApp 코드 아래처럼 변경
const app = createApp(App)
app.use(createPinia())  // 추가!
app.use(router)  // router 추가
app.use(vuetify)
app.mixin(mixins)
app.use(store);
app.use(VueSweetalert2);
// Make BootstrapVue available throughout your project

app.mount('#app') 
 