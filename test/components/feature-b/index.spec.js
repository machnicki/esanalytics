import React from 'react'
import { shallow } from 'enzyme'
import FeatureB from 'components/feature-b'

describe('<FeatureB>', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<FeatureB />)
    expect(wrapper.type()).to.eql('div')
  })
})
