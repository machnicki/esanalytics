import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './style.css'

export function Toggler(props) {
  return (
    <div styleName="toggler">
     <h2>Choose feature</h2>
     <ul>
      { _renderItems(props) }
     </ul>
    </div>
  )
}

function _renderItems(props) {
  return ['No feature', 'Feature A', 'Feature B']
    .map((item, number) => (
      <li className={ props.selectedFeature === number ? 'selected' : '' }>
        <a href="#" onClick={ () => props.onChange(number) } >
          { item }
        </a>
      </li>
    ))
}

Toggler.propTypes = {
  selectedFeature: PropTypes.number,
  onChange: PropTypes.func,
}

Toggler.defaultProps = {
  selectedFeature: 0,
  onChange: () => null,
}

export default CSSModules(Toggler, styles)
