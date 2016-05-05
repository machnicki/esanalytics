import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import FeatureA from 'components/feature-a'
import FeatureB from 'components/feature-b'

import { getData } from 'reduxModules/feature/feature.actions'

export class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getData())
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
