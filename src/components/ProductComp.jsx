import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import { updateAv, getProductById } from '../services/productsService'

function ProductComp(props) {

    const id = props.id

    const [product, setProduct] = useState(null)
    const [av, setAv] = useState(null)

    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data)
                setAv(data.available)
            })
            .catch(error => console.error(error))
    }, [id])

    if (!product) {
        return <p className="container mt-5">Chargement...</p>
    }

    async function handleClick() {
        const newAv = !av
        setAv(newAv)

        const updatedAv = {
            available: newAv
        }

        await updateAv(id, updatedAv)

    }

  return (
        <div className="col-4">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded-start border-0">
            <img src={props.image} className="card_img-top" alt="Product" />
            <div className="card-body">
              <div>
              <h5 className="card-title">{props.name}</h5>
              {av ? <button className="btn btn-success" onClick={handleClick}>Disponible</button>
              : <button className="btn btn-danger" onClick={handleClick}>Indisponible</button>}
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
