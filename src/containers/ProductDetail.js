import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import  { selectedProducts } from '../reduc/actions/productActions'
import { useSelector } from 'react-redux';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId);

    const fetchProductDetail = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => {
            console.log('Err',err)
        })

        dispatch(selectedProducts(response.data));
    }
    return (
        <div>
            <h1>ProductDetail</h1>
        </div>
    )

}

export default ProductDetail;