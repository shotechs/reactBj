import PropTypes from 'prop-types'
const Button = ({ text, onClick, css, modal, target, disabledBtn }) => {

  //const [modalset, setmodalset] = useState("")

  const Modal = () => {
    if (modal != null) {
      return modal
    }
  }

  const Target = () => {
    if (target != null) {
      return target
    }
  }


  return (
    <button
      onClick={onClick}
      className={css}
      data-bs-toggle={Modal()}
      data-bs-target={Target()}
      disabled={disabledBtn}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {

}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
