import React from 'react'

const Card = (props) => {
  return (
    <div className="mb-3 mb-md-0 col-md-3">
      <div className="card">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.vinculo} className="btn btn-primary">Más info</a>
        </div>
      </div>
    </div>
  )
}

export default Card
