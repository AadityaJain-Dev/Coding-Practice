export const CartItem = (props) => {




    return (
        <div className="mt-3 row bg-light p-3 rounded">
            <div className="col-9">
                <div className="row">
                    <div className="col-4"><img src={props.data.image} alt={props.data.name} className="rounded-circle" style={{ "max-width": "100px", }} /></div>
                    <div className="col-4"><span className="">{props.data.name}</span></div>
                    <div className="col-4 ">{props.data.price}</div>
                </div>
            </div>




            <div className="col-3">
                <button name="" id="" className="btn btn-danger" onClick={() => props.cartDelete(props.data.cakeid, props.data.price)}>
                    Remove</button></div>
        </div>
    )
}