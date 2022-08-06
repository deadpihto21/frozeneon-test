import { defineStore } from 'pinia'
import axios from 'axios'

export const searchStore = defineStore({
  id: 'searchStore',
  state: () => ({
    keyword: '',
    result: [],
    currentPackage:{},
    modalOpen:false,
    currentPagiantion:0,
    totalResults:0
  }),
  actions: {
    async searchPackagesByName(name) {
      try{
        const request = await axios.get('https://registry.npmjs.org/-/v1/search?text=' + this.keyword +'&size=10&from=' + this.currentPagiantion*10)
        this.result = request.data.objects
        this.totalResults = request.data.total
      }
      catch (error) {
        console.log(error)
      }
    },
    async showPackage(name) {
      try{
        const request = await axios.get('https://registry.npmjs.org/' + name)
        this.currentPackage = request.data
      }
      catch (error) {
        console.log(error)
      }
    }
  }
})
