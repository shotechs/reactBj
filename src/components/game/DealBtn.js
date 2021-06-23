import React from 'react'
import Button from '../custom/Button'


function DealBtn({ text, onClick }) {
  return (
    <div className="dealBtn pad-10">
      <Button
        css={"btn btn-success btn-block deal"}
        text={text}
        onClick={onClick}
      />
    </div>
  )
}

export default DealBtn
