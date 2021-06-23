import React from 'react'
import Button from '../custom/Button'

function StandBtn({ onClick }) {
  return (
    <div className="standBtn pad-10">
      <Button
        css={"btn btn-info btn-block stand"}
        text={"STAND"}
        onClick={onClick}
      />
    </div>
  )
}

export default StandBtn
