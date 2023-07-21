import react from "react";
// import "./data.css"
class Data extends react.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="container pt-2 mt-4    fs-6 text-center text-white" >
                <div className="row justify-content-center fs-2 mb-4 ">
                    Current Weather In {this.props.obj.city}
                </div>
                <div className="row justify-content-center mb-4 pb-2">
<div className="col-md-6">


                <table className="table table-primary table-borderless">
                    <thead>
                        <tr>
                            <th scope="row">CITY</th>
                            <th scope="col">{this.props.obj.city}</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">COUNTRY</th>
                            <td>{this.props.obj.country}</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">REGION</th>
                            <td>{this.props.obj.region}</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">TEMPRATURE &#8451;</th>
                            <td >{this.props.obj.celsius}</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">TEMPRATURE &#8457;</th>
                            <td d>{this.props.obj.fehrenheit}</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">Time</th>
                            <td d>{this.props.obj.time}</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">WIND Km/h</th>
                            <td d>{this.props.obj.Windkm}</td>
                           
                        </tr>
                        <tr>
                            <th scope="row">WIND Mp/h</th>
                            <td d>{this.props.obj.Windmph}</td>
                           
                        </tr>

                    </tbody>
                </table>
                </div>
                


                </div>
               


            </div>
        )
    }
} export default Data;