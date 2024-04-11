import React from 'react'

const Jumbotron = (props) => {
  return ( 
        <div className="bg-secondary-subtle p-5">
            <h1 className="display-4">A warm wellcome!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.You can see also a breaf story about this four amazing singers.</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
        </div>
  )
}

export default Jumbotron
