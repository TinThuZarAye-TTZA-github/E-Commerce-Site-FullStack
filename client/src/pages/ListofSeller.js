import { React, useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom"
export const ListofSeller = () => {

    const [list, setlist] = useState([]);
    let history = useHistory();
    let { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:3001/sellersignup").then((response) => {
            setlist(response.data);
        });

    
    });
    return (
        <div>
        <h1>Seller List</h1>
        {list.map((value,key) => {
            return (
                <div onClick={() => {history.push(`/sellerviewitem/${value.id}`)}}>
                    <div>{value.email}</div>
                </div>

            )
        })}
            
        </div>
    )
}
