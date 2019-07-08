import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, handleEat, handleClick}) => {
  return (
    <Fragment>
      <div className="belt">
        { sushis.map(sushi =>
            <Sushi key={sushi.id} sushi={sushi} handleEat={handleEat} />
        )}
        <MoreButton handleClick={handleClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer