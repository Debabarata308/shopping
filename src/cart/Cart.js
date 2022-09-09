import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, deleteData } from '../redux/actions';


function Cart() {
    // const myState = useSelector((state) => state.data);
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    console.log(data)
    let handleDeleteData = (e) => {
        dispatch(deleteData(e));
    }

    return (
        <div className="container mt-3">
            <div className='row mt-5'>
                <div className='col-xl-1 col-lg-1 col-md-1 col-sm-0 col-xs-0'></div>
                <div className='col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 alightLeft'>
                    {
                        data.length > 0 ? data.map(e => {
                            return (
                                <div className='row'>
                                    <div className='col'>
                                        <div className="card d-inline-flex">
                                            <div className="card-body">
                                                <div className='row d-flex'>
                                                    <div className='col'>
                                                        <img src={e.imageURL} className="img-fluid image" alt="" aria-label="Placeholder: Image cap" />
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col d-inline-flex pt-4'>
                                        <div>
                                            <button onClick={() => dispatch(increment(e))} className="btn">+</button>
                                        </div>
                                        <div className='pt-2 mx-3'>
                                            {e.quantity}
                                        </div>
                                        <div>
                                            <button onClick={() => dispatch(decrement(e))} className="btn">-</button>
                                        </div>
                                    </div>
                                    <div className='col pt-4'>
                                        <button className="btn btn-danger" onClick={() => dispatch(handleDeleteData(e))}>Delete</button>
                                    </div>
                                </div>
                            )
                        }) : "nodata"
                    }
                </div>
                <div className='col-xl-2 col-lg-3 col-md-3 col-sm-0 col-xs-0'></div>
            </div>
        </div>
    );
}

export default Cart;