import { useState } from "react";
import {useNavigate} from "react-router-dom"
export default function Search(){
    const [keyword, setkey] = useState("");
    const navigate=useNavigate();
    const searchHandler=()=>{
        navigate('/search?keyword='+keyword)

    }

    return <div className="input-group">
    <input
        type="text"
        id="search_field"
        placeholder="Search for a product..."
        onChange={(e)=>setkey(e.target.value)}
        className="form-control"
    />
    <div className="input-group-append">
        <button onClick={searchHandler} id="search_btn" className="btn">
        <i className="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
    </div>
}