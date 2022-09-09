import './bodyContent.css';
import { useState, useEffect } from 'react';
import { getData, fetchQuantity } from '../redux/actions';
import { useDispatch } from 'react-redux';

function BodyContent() {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();


    useEffect(() => {
        fetch('https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json')
            .then(results => results.json())
            .then(res => {
                const dataArray = res;
                setData(dataArray);
            });
    }, []);

    const handleFilter = (e) => {
        fetch('https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/catalogue.json')
            .then(results => results.json())
            .then(res => {
                let dataArray = [];
                res.filter(data => data.name.toLowerCase().includes(e.toLowerCase())).map((filteredItems) => {
                    dataArray.push(filteredItems)
                });
                setData(dataArray);
            });
    }

    const handleData = (e) => {
       return dispatch(getData(e));
    }

    return (
        <div className="container mt-3">
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-0 col-xs-0'></div>
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" onChange={(e) => handleFilter(e.target.value)} type="search" placeholder="Search for products..." aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-0 col-xs-0'></div>
            </div>
            <div className='row mt-5'>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-0 col-xs-0'></div>
                <div className='col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 alightLeft'>
                    {
                        data ? data.map(e => {
                            return (
                                <div className="card d-inline-flex">
                                    <div className="card-body">
                                        <div className='row d-block'>
                                            <div className='col'>
                                                <img src={e.imageURL} className="img-fluid img" alt="" aria-label="Placeholder: Image cap" />
                                            </div>
                                            <div className='col mt-2'>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <h5 className="card-title">{e.name}</h5>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col text-left'>
                                                        <p className='mt-2 mb-0'>Rs. {e.price}</p>
                                                    </div>
                                                    <div className='col text-right'>
                                                        <a name="" id="" className="btn btn-primary" onClick={() => handleData(e)} role="button">Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : "nodata"
                    }
                </div>
            </div>
        </div>
    );
}

export default BodyContent;
