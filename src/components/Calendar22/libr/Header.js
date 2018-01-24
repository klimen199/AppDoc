import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ labels }) => {
  return <div className="header-week">
    <div className="header-week-weekday">
        {labels[0]}
    </div>
    <div className="header-week-day">
        {labels[1]}
    </div>
      </div>
}

Header.propTypes = {
    labels: PropTypes.array,
}
Header.defaultProps = {
    labels: [],
}

export default Header
