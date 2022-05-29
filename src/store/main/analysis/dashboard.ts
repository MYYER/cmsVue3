import { Module } from 'vuex'

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

import { IdashBoardState } from './types'
import { IRootState } from '@/store/types'

const dashboardModule: Module<IdashBoardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      console.log('categoryCountResult', categoryCountResult)
      commit('changeCategoryGoodsCount', categoryCountResult.data)

      const categorySaleResult = await getCategoryGoodsSale()
      console.log('categorySaleResult', categorySaleResult)
      commit('changeCategoryGoodsSale', categorySaleResult.data)

      const categoryFavorResult = await getCategoryGoodsFavor()
      console.log('categoryFavorResult', categoryFavorResult)
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)

      const addressSaleResult = await getAddressGoodsSale()
      console.log('addressSaleResult', addressSaleResult)
      commit('changeAddressGoodsSale', addressSaleResult.data)
    }
  }
}

export default dashboardModule
