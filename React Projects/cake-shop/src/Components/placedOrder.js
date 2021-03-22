import axios from "axios"
import { Component } from "react";
import { withRouter } from "react-router"



class placedOrder extends Component {

    constructor() {
        super()
        this.state = {
            myOrders: []
        }
    }

    componentDidMount() {
        alert()
        axios({
            url: "https://apibyashu.herokuapp.com/api/cakeorders",
            method: "POST",
            data: {
                email: localStorage.getItem("email")
            },
            headers: {
                authtoken: localStorage.getItem("token")
            }
        }).then(
            (resolved) => {
                this.setState({
                    myOrders: resolved
                })

                alert(" set state")
            },
            (error) => {
                console.log(error);
            }

        )
    }



    render() {

        return (
            <div className="container mt-5 mb-5">
                <div class="accordion" id="accordionExample">
                    {
                        this.state.myOrders > 0 && this.state.myOrders.map(
                            (item) => {
                                return "hello"
                            }
                        )
                    }

                </div>

            </div>
        )
    }
}

export default withRouter(placedOrder)