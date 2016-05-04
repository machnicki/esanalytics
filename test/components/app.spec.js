import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/app'

describe('<App>', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.type()).to.eql('div')
  })
})
