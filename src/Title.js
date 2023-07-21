import react from "react";
import axios from "axios"
import Data from "./Data"
// import "./Title.css"
class Title extends react.Component {
    constructor() {
        super()
        this.state = {
            country: "", region: "",  celsius: "", fehrenheit: "", city: "", find: "",isNull:true,Windkm:"",Windmph:"",time:"",heightvh:""
        }

    }
    handleChnage = (e) => {
        this.setState({ find: e.target.value })
        console.log(this.state.find)

    }
    componentDidMount(){
        
    }
   getdata=async()=>{
        let apikey="887f8d8fbed04628be085053231007";
        let locationfind=this.state.find;
       await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${locationfind}`).then((res)=>{
            let location=res.data.location;
            let cur=res.data.current;
            this.setState({celsius:cur.temp_c,fehrenheit:cur.temp_f,city:location.name,region:location.region,country:location.country,isNull:false,Windkm:cur.wind_kph,Windmph:cur.wind_mph,time:location.localtime,heightvh:"100vh"
            })
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    }
    render() {
        return (
            <>
            <div className="  pb-4  bg-secondary text-white" style={{height:this.state.heightvh==="100vh"?("100vh"):("")}}>
            <div className="container ">
                <div className="text-center fs-1 mb-3 pt-3">Weather Website</div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="input-group ">
                            <input type="text" className="form-control  fs-5" placeholder="Enter City" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => { this.handleChnage(e) }} />
                            <button className="input-group-text bg-dark text-white" id="basic-addon2" onClick={()=>{this.getdata()}}>Submit</button>
                        </div>

                    </div>

                </div>
            </div>
           {this.state.isNull?(""):(<Data obj={this.state}/>)}
           </div>
            </>
        )
    }
} export default Title;