import { useParams, withRouter } from "react-router-dom"
import { useState } from "react"
import data from "./data"
import axios from "axios"

function Cakedetails(props) {
    var { cakeid } = useParams()
    var [cake, setCake] = useState(data.cake)
    console.log(">>>>>>>>>>> cake id from data.js file", data.cake.cakeid)
    if (data.cake.cakeid != cakeid) {
        // bring all the details of that cake from backend
        var apiurl = "https://apibyashu.herokuapp.com/api/cake/" + cakeid
        axios({
            url: apiurl,
            method: "get"
        }).then((response) => {
            console.log("all the details of selected cake response", response)
            data.cake = response.data.data
            setCake(response.data.data)

        }, (error) => {
            console.log(">>>>> error from cake details api", error)
        })

    }
    console.log("cake id", cakeid)
    return (
        <div class="row" style={{ margin: "10px" }}>
            <h1 style={{ margin: '10px', textAlign: 'center' }}>{cake.name}</h1>
            <div class="col-4" style={{ marginTop: '55px' }}>
                <img src={cake.image} style={{ height: '400px', width: '400px' }}></img>
            </div>
            <div class="col-4">
                <form id="cakeform" style={{ marginTop: '55px' }}>
                    <div class="form-group row">
                        <label for="Id" class="col-sm-2 col-form-label"><b>Id</b></label>
                        <div class="col-sm-10">
                            <p><b>{cake.cakeid}</b></p>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group row">
                        <label for="Id" class="col-sm-2 col-form-label"><b>Rating</b></label>
                        <div class="col-sm-10">
                            <p><b>{cake.ratings}</b></p>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group row">
                        <label for="Flavour" class="col-sm-2 col-form-label"><b>Flavour</b></label>
                        <div class="col-sm-10">
                            <p><b>{cake.flavour}</b></p>
                        </div>
                    </div>
                    <br></br>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0"><b>Eggless</b></legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <p><b>{cake.eggless}</b></p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br></br>
                    <div class="form-group row">
                        <label for="Weight" class="col-sm-2 col-form-label"><b>Weight</b></label>
                        <div class="col-sm-10">
                            <p><b>{cake.weight}</b></p>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group row">
                        <label for="Occasion" class="col-sm-2 col-form-label"><b>Occasion</b></label>
                        <div class="col-sm-10">
                            <p><b>{cake.type}</b></p>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group row">
                        <label for="Description" class=" col-form-label"><b>{cake.description}</b></label>
                        <div class="col-sm-10">
                            <ul>
                                {cake.ingredients.map((each) => {
                                    return <li>{each}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <br></br>

                </form>
            </div>

            <div class="col-4">
                <div class="form-group row" style={{ marginTop: '55px' }}>
                    <label for="Price" class="col-sm-2 col-form-label"><b>Price</b></label>
                    <div class="col-sm-10">
                        <p><b>Rs.{cake.price}</b></p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <center>
                            <button type="submit" class="btn btn-primary">Add to Cart</button>
                        </center>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <center>
                            <button type="submit" class="btn btn-primary">Buy Now</button>
                        </center>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withRouter(Cakedetails)