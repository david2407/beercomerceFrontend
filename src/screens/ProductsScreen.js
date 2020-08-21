import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct } from '../actions/productActions';


function ProductsScreen (props) {
   
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');
const [brand, setBrand] = useState('');
const [category, setCategory] = useState('');
const [countInStock, setCountInStock] = useState('');
const [description, setDescription] = useState('');
const [rating, setRating] = useState('');
const [numReview, setNumReview] = useState('');
const productSave = useSelector(state=>state.productSave);
const {loading: loadingSave, success: succesSave, error: errorSave} = productSave;
const dispatch = useDispatch();

useEffect(() => {
    
    return () => {
      //
    };
  }, []);

const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(saveProduct({
        name, price, image,brand,category,
        countInStock,description,rating,numReview
    }));
}

    return <div className="form">
        <form onSubmit={handlerSubmit}>
            <ul className="form-container">
                <li>
                    <h2>Create Product</h2>
                </li>
                <li>
                    {loadingSave && <div>Loading...</div>}
                    {errorSave && <div>{errorSave}</div>}
                </li>
                <li>
                    <label for="name">
                        Name
                    </label>
                    <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label for="price">
                        Price
                    </label>
                    <input type="text" id="price" name="price" onChange={(e) => setPrice(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label for="image">
                        Image
                    </label>
                    <input type="text" id="image" name="image" onChange={(e) => setImage(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label for="brand">
                        Brand
                    </label>
                    <input type="text" id="brand" name="brand" onChange={(e) => setBrand(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label for="category">
                        Category
                    </label>
                    <input type="text" id="category" name="category" onChange={(e) => setCategory(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label for="countInStock">
                        Count In Stock
                    </label>
                    <input type="text" id="countInStock" name="countInStock" onChange={(e) => setCountInStock(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label for="rating">
                        Rating
                    </label>
                    <input type="text" id="rating" name="rating" onChange={(e) => setRating(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label for="numReviews">
                        Num Reviews
                    </label>
                    <input type="text" id="numReviews" name="numReviews" onChange={(e) => setNumReview(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label for="description">
                        Description
                    </label>
                    <textarea type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)}>

                    </textarea>
                </li>
                
                <li>
                    <button type="submit" className="button primary">Create</button>
                </li>
                
            </ul>
        </form>
    </div>
}

export default ProductsScreen;