import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router'
import {getProductById} from '../services/productsService'

export default function ProductDetailsPage() {
    const {id} = useParams();
    const[product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id)
        .then(data => setProduct(data))
        .catch(error => console.error(error))
    }, [id])

    if(!product) {
        return <p className="container mt-5"> Chargement...</p>
    }

    return (

        <div className="container mt-5">
            <h2>{product.name}</h2>

            <img src={product.image} alt={product.name} width="300" />

            <p>{product.description}</p>
            <p className="fw-bold"> {product.price} €</p>

            <Link to ="/" className="btn btn-secondary">
              Retour au catalogue
            </Link>
        </div>

    )
}