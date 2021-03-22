import { withRouter } from "react-router"

const SearchCard = (props) => {

    let showDetails = (data) => {
        props.history.push("/cake-details/" + data)
    }

    return (
        <div className="row mb-4 border" onClick={() => showDetails(props.data.cakeid)}>
            <div className="col-4">
                <img src={props.data.image} alt="" style={{ 'width': '100%', 'height': 'auto', 'maxHeight': '200px' }} />
            </div>
            <div className="col-8 p-3">
                <div className="row">
                    <div className="col-6">
                        <h4>Name: {props.data.name}</h4>
                        <span>Rating <strong>{props.data.ratings} </strong>  </span>
                        <span>Review <strong>{props.data.reviews}</strong> </span>

                        <p><br />
                            Description: {props.data.description}
                        </p>
                        <small>Chief: {props.data.owner.name} </small>

                    </div>
                    <div className="col-6">
                        <p><strong>Price: </strong>{props.data.price}  </p>
                        <p><strong>Flavour: </strong>{props.data.flavour}  </p>
                        <p><strong>Eggless: </strong>{
                            (
                                props.data.eggless && <span> Yes </span>
                            ) ||
                            (
                                !props.data.eggless && <span> Contain Egg </span>
                            )
                        }  </p>
                        <p><strong>Ingredients: </strong>{props.data.ingredients}  </p>

                        <p><strong>Weight: </strong>{props.data.weight} </p>

                    </div>

                </div>

            </div>
        </div>
    )

}

export default withRouter(SearchCard)