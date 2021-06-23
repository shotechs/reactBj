import { Link } from 'react-router-dom'

const Footer = ({ title }) => {


  var today = new Date();
  var year = today.getFullYear();

  const useLayoutEffect = () => {
    window.scrollTo(0, 0)
  };

  return (

    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          {/* <Link to="#">Back to top</Link> */}

          <button
            onClick={useLayoutEffect}
            className="btn btn-secondary"
          >
            Back to top
    </button>



        </p>
        <p>
          {title} &copy; {year} &nbsp;
    <Link to={{ pathname: "http://www.sholab.com" }} target="_blank">Visit the Devloper homepage</Link>
        </p>
      </div>
      {/* <Link to='/about'>About</Link> */}
    </footer>
  )
}

export default Footer
