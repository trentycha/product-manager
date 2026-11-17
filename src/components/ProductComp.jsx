import { Link } from 'react-router'

function ProductComp(props) {

  return (
        <div className="col-4">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded-start border-0">
            <img src={props.image} className="card_img-top" alt="Product" />
            <div className="card-body">
              <div>
              <h5 className="card-title">{props.name}</h5>
              {props.available ? <p className="fw-bold text-success text-end">Disponible</p>
              : <p className="fw-bold text-danger text-end">Indisponible</p>}
              </div>
              <p className="card-text">{props.description}</p>
              <p className="fw-bold text-primary">{props.price}€</p>
              <Link to={`/products/${props.id}`} className="btn btn-primary"> Voir détails </Link>
            </div>
        </div>
      </div>
  )
}

export default ProductComp
