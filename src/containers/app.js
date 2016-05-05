import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import FeatureA from 'components/feature-a'
import FeatureB from 'components/feature-b'
import Toggler from 'components/toggler'

import { getData, setFeature } from 'reduxModules/feature/feature.actions'

export class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getData())
  }

  handleTogglerChange(feature) {
    const { dispatch } = this.props
    dispatch(setFeature({ feature }))
  }

  render() {
    const { feature } = this.props

    return (
      <div>
        {
          (feature.activeFeatureNo === 1 && <FeatureA />)
          || (feature.activeFeatureNo === 2 && <FeatureB />)
          || <i>No active features</i>
        }
        { feature.isFetching && <div>loading...</div> }
        { feature.error && <div>Error: { feature.error }</div> }
        <Toggler
          selectedFeature={ feature.activeFeatureNo }
          onChange={ featureNo => this.handleTogglerChange(featureNo) }
        />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  feature: PropTypes.object.isRequired,
}

App.defaultProps = {
  feature: {},
}

export default connect((state) => ({
  feature: state.feature.toJS(),
}))(App)
