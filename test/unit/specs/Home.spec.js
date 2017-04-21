import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
  it('should render correct contents', done => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()

    vm.qauthor = 'test'
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('#q-author').textContent)
        .to.equal('- test')
      done()
    })
  })
})
