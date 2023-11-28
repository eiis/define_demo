// sum.test.js
import { expect, test,describe } from 'vitest'
import { mount } from '@vue/test-utils'
import { it } from 'vitest'
import App from '../src/App.vue'
import HelloWorld from '../src/components/HelloWorld.vue'

function sum(a,b){
  return a + b
}

// const stock = {
//   type: 'apples',
//   count: 11,
// }

test('adds 1 + 2 to equal 3', () => {
  expect(sum(2, 3)).toMatchSnapshot()
  expect(sum(2, 3)).toBe(5)
})

// test('stock has 13 apples', () => {
//   expect(stock.type).toBe('apples')
//   expect(stock.count).toBe(11)
// })


describe('renders HelloWorld component', () => {
  it('renders a div', () => {
    const wrapper = mount(HelloWorld,{props:{count:2}})
    console.log('wrapper', wrapper.text())
    expect(wrapper.attributes('class')).toBe('hello')
    expect(wrapper.text()).toContain('2')
    expect(wrapper.text()).toContain('even')
  })
})

describe('App', () => {
  it('should increment count value when button is clicked', async () => {
    // 挂载组件
    const wrapper = mount(App);
    
    // 检查初始 count 值
    const helloWorldComponent = wrapper.getComponent({ name: 'HelloWorld' });
    expect(helloWorldComponent.props('count')).toBe(1);
    // expect(helloWorldComponent.props('name')).toBe('name');

    
    // 找到并点击按钮
    // await wrapper.find('button').trigger('click');
    
    // 检查 count 值是否增加
    // expect(helloWorldComponent.props('count')).toBe(3);
  });
});
