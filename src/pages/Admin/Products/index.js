import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../../components/Admin/DashboardHeader';
import {calculateRange, sliceData} from '../../../utils/table-pagination';
import '../styles.css';
import DoneIcon from '../../../assets/icons/done.svg';
import CancelIcon from '../../../assets/icons/cancel.svg';
import RefundedIcon from '../../../assets/icons/refunded.svg';
import productbook from './Productservice';

import SideBar from '../../../components/Admin/Sidebar';
import sidebar_menu from '../../../constants/sidebar-menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
function Products () {
    const [search, setSearch] = useState('');
    const [product, setproduct] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        productbook.getAllproduct().
        then(response=>{
            setPagination(calculateRange(response.data.data, 5));
         setproduct(sliceData(response.data.data, page, 5));
            //setproduct(response.data.data);
            console.log(response.data)
        }).catch(err=>console.log(err))
        
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = product.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) 
             
            );
            setproduct(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        productbook.getAllproduct().then(response=>{
            setPagination(calculateRange(response.data.data, 5));
         setproduct(sliceData(response.data.data, page, 5));
            //setproduct(response.data.data);
            console.log(response.data)
        }).catch(err=>console.log(err))
        // setproduct(sliceData(product, new_page, 5));
    }

    const _handleDelete=async(idBooks)=>{
     console.log(idBooks);
     await productbook.deleteproduct(idBooks);
     setproduct(product.filter(product=>product._id!==idBooks));
    }

    return(
        <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
        <div className='dashboard-content'>
           
              <Link to="/forms"> <DashboardHeader
                btnText="New productment" /></Link>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>productment List</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>ID</th>
                        <th>name</th>
                        <th>description</th>
                        <th>Image</th>
                        <th>Create Time</th>
                        <th>Edit</th>
                    </thead>

                    {product.length !== 0 ?
                        <tbody>
                            {product.map((order, index) => (
                                <tr key={index}>
                                    <td><span>{order._id}</span></td>
                                    <td><span>{order.name}</span></td>
                                    <td>
                                        <div>
                                            {order.status === 'Paid' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Canceled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Refunded' ?
                                                <img
                                                    src={RefundedIcon}
                                                    alt='refunded-icon'
                                                    className='dashboard-content-icon' />
                                            : null}
                                            <span>{order.description}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <img 
                                                src={"http://localhost:3000" + order.image}
                                                className='dashboard-content-dress'
                                               />
                                            <span>{order.fname} {order.lname}</span>
                                        </div>
                                    </td>
                                    <td><span>{order.createdAt}</span></td>
                                    <td><button onClick={() => _handleDelete(order._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {product.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
        </div>
    )
}

export default Products;