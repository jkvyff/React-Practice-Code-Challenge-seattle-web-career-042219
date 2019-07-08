import React from 'react'

const Sushi = ({sushi, handleEat}) => {
  const {name, img_url, price, eaten} = sushi

  const handleClick = () => handleEat(sushi)
  return (
    <div className="sushi" >
      <div className="plate" 
           onClick={handleClick}>
        { eaten ? null : <img src={img_url} width="100%" alt="Yummy Sushi" /> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi