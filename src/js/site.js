import { createApp } from 'vue'
import '../css/styles.css'

import free_trial_form from './components/free-trial-form.vue'

const app = createApp({})

app.component('free-trial-form', free_trial_form);

app.mount('#app')