// src/stores/newsStore.js
import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    currentArticle: null,
  }),

  actions: {
    setArticle(article) {
      this.currentArticle = article
      // 새로고침해도 유지되게 localStorage 저장
      localStorage.setItem('currentArticle', JSON.stringify(article))
    },
    loadFromStorage() {
      const data = localStorage.getItem('currentArticle')
      if (data) {
        this.currentArticle = JSON.parse(data)
      }
    },
    clearArticle() {
      this.currentArticle = null
      localStorage.removeItem('currentArticle')
    }
  }
})
