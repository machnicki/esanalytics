import React from 'react'
import { shallow, mount } from 'enzyme'
import { App } from 'containers/app'
import { Provider } from 'react-redux';
import createStore from 'reduxModules/../create';

describe('<App>', () => {
  const store = createStore()

  it('renders as a <div>', () => {
    const wrapper = mount(
      <Provider store={ store } key="provider">
        <App dispatch={ function () {} } />
      </Provider>
    )
    expect(wrapper.find('div').length).to.not.equal(0)
  })
})
