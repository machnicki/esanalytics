import React from 'react'
import { shallow } from 'enzyme'
import FeatureA from 'components/feature-a'

describe('<FeatureA>', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<FeatureA />)
    expect(wrapper.type()).to.eql('div')
  })
})
