import { useState } from 'react'
import { addProduct } from '../services/productsService.js'

function AddProductPage() {
    const[name, setName] = useState('');
    const[description, setDescription] = useState('');
    const[price, setPrice] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        const product = {
            name,
            description,
            price: Number(price),
            available: true,
            image: 'https://placehold.co/400x250'
        }

        try {
            const newProduct = await addProduct(product)
            console.log('Produit ajouté :', newProduct)
            alert('Produit ajouté avec succès !')
        } catch (error) {
            console.error(error)
            alert("Erreur lors de l'ajout du produit")
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
            <h3>Ajouter un produit</h3>
            <div className="form-group">
            <form onSubmit={handleSubmit} className="form-group">
              <h3>Nom</h3>
              <input value={name} onChange={handleName} placeholder='Nom' className="form-control mb-3"/>
              <h3>Description</h3>
              <input value={description} onChange={handleDesc} placeholder='Description' className="form-control mb-3"/>
              <h3>Prix</h3>
              <input value={price} onChange={handlePrice} placeholder='Price' className="form-control mb-3"/>
              <button className="btn btn-primary">Envoyer</button>
            </form>
            </div>
        </div>
    )
}

export default AddProductPage