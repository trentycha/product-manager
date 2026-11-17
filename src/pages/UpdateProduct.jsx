
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { getProductById, updateProduct } from '../services/productsService'

function UpdateProduct() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data)
                setName(data.name)
                setDescription(data.description)
                setPrice(data.price)
            })
            .catch(error => console.error(error))
    }, [id])

    if (!product) {
        return <p className="container mt-5">Chargement...</p>
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const updatedProduct = {
            name: name,
            description: description,
            price: Number(price),
            image: product.image
        }

        try {
            await updateProduct(id, updatedProduct)
            navigate('/')
        } catch (error) {
            console.error(error)
            alert("Erreur lors de la modification du produit")
        }
    }

    function handleName(e) {
        setName(e.target.value)
    }

    function handleDesc(e) {
        setDescription(e.target.value)
    }

    function handlePrice(e) {
        setPrice(e.target.value)
    }

    return (
        <div className="container mt-5">
            <h3>Modifier un produit</h3>

            <div className="form-group">
                <form onSubmit={handleSubmit} className="form-group">
                    <h3>Nom</h3>
                    <input value={name} onChange={handleName} placeholder="Nom"
                        className="form-control mb-3"/>

                    <h3>Description</h3>
                    <input value={description} onChange={handleDesc} placeholder="Description"
                        className="form-control mb-3"/>

                    <h3>Prix</h3>
                    <input value={price} onChange={handlePrice} placeholder="Price"
                        className="form-control mb-3"/>

                    <button type="submit" className="btn btn-primary">Modifier</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateProduct
