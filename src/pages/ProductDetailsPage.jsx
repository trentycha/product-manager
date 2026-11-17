import {useState, useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router'
import {getProductById} from '../services/productsService'
import {deleteProduct} from '../services/productsService'

export default function ProductDetailsPage() {
    const {id} = useParams();
    const[product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
        .then(data => setProduct(data))
        .catch(error => console.error(error))
    }, [id])

    if(!product) {
        return <p className="container mt-5"> Chargement...</p>
    }

    const handleDelete = () => {
        deleteProduct(id)
        navigate('/')
    }

    return (

        <div className="container mt-5">
            <h2>{product.name}</h2>

            <img src={product.image} alt={product.name} width="300" />

            <p>{product.description}</p>
            <p className="fw-bold"> {product.price} €</p>

            <button onClick={handleDelete} className="btn btn-danger">Supprimer</button>
            <button onClick={() => navigate(`/products/update/${id}`)} className="btn btn-primary">Modifier</button>

            <Link to ="/" className="btn btn-secondary">
              Retour au catalogue
            </Link>
        </div>

    )
}