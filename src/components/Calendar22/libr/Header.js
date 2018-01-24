import React from 'react'

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

export default Header
