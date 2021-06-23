import React from 'react'
import Button from '../custom/Button'


function SplitBtn({ onClick }) {
  return (
    <Button
      css={"btn btn-dark btn-block splitBtn"}
      text={"SPLIT"}
      onClick={onClick}
    />
  )
}

export default SplitBtn
