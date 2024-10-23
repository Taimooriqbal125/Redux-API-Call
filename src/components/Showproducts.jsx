import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../slices/getproductslice';

function Showproducts() {

    const dispatch = useDispatch();

    const products = useSelector(state=>state.getProducts.products);
    const loading = useSelector(state=>state.getProducts.loading)
   console.log(products)

//    const handlerClick = ()=>{
//     const vaue = dispatch(getProducts());
//     console.log(vaue)
//    }
   
  return (
    <>


<button onClick={() => dispatch(getProducts())}>Show Products</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                Array.isArray(products) && products.length > 0 ? (
                    products.map((e) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.description}</td>
                        </tr>
                    ))
                ) : (
                    <p>No products available</p>  // Show message if no products
                )
            )}




    {/* <button onClick={handlerClick} >Show Products </button>
    {products.map((item)=>{
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
        </tr>
    })} */}



    </>
  )
}

export default Showproducts