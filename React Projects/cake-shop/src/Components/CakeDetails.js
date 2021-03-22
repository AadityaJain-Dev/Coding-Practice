import axios from "axios";
import { Redirect, withRouter } from "react-router"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CakeDetails = (props) => {



    // let urlData = useParams();
    // let cakeId = urlData.cakeid













    // const [cakedata, setcakedata] = useState({ owner: {} })
    // useEffect(() => {
    //     axios({
    //         url: "http://apibyashu.herokuapp.com/api/cake/" + cakeId,
    //         method: "GET",
    //     }).then(

    //         (resolved) => {
    //             setcakedata(resolved.data.data)
    //         },
    //         (error) => { }

    //     )
    // }, [])



    return (
        <div className="container">


            {/* 
            <div className="row mt-5 mb-5">
                <div className="col-3">
                    <img src={cakedata.image} alt={cakedata.name} style={{ width: '100%' }} />
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col-6">
                            <h4>Name: {cakedata.name}</h4>
                            <span>Rating <strong>{cakedata.ratings} </strong>  </span>
                            <span>Review <strong>{cakedata.reviews}</strong> </span>

                            <p><br />
                            Description: {cakedata.description}
                            </p>
                            <small>Chief: {cakedata.owner.name} </small>

                        </div>
                        <div className="col-6">
                            <p><strong>Price: </strong>{cakedata.price}  </p>
                            <p><strong>Flavour: </strong>{cakedata.flavour}  </p>
                            <p><strong>Eggless: </strong>{
                                (
                                    cakedata.eggless && <span> Yes </span>
                                ) ||
                                (
                                    !cakedata.eggless && <span> Contain Egg </span>
                                )
                            }  </p>
                            <p><strong>Ingredients: </strong>{cakedata.ingredients}  </p>

                            <p><strong>Weight: </strong>{cakedata.weight} </p>

                        </div>
                    </div>

                </div>
                <div className="col-2">
                    <button className="btn btn-success" onclick={() => addToCart}>Add to cart</button>   </div>
            </div> */}
        </div>
    )



}
export default withRouter(CakeDetails)