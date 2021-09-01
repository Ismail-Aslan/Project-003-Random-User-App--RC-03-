import React, {useState,useEffect} from 'react';
import './Card.css'
import email from "./../assets/email.svg";
import phone from "./../assets/phone.svg";
import location from "./../assets/location.svg";
import loading from "./../assets/loading.gif";
import axios from "axios";

export default function card(props) {

    const getUser = ()=>{
        axios.get('https://randomuser.me/api/')
        //   axios({
        //     url: 'https://randomuser.me/api/',
        //     method: 'GET'
        //   })
      .then((res)=> setItem(res.data.results));
    };

    const [item, setItem] = useState([]);
  useEffect(() => getUser(), []);

    return (
        
        <div className="main">
           {item.length !== 0 ? 
           <>
            <table  className="card">
                <thead>
                    <th><img className="avatar" src={ item[0].picture.large  } alt="avatar" /></th>
                    <th><h2 className="name">{ item[0].name.title +  " " + item[0].name.first + " " + item[0].name.last }</h2></th>
                </thead>
                <tbody>
                    <tr>
                        <td><img className="svg" src= {email} alt="avatar" /></td>
                        <td className="desc">{ item[0].email  } </td>
                    </tr>

                    <tr>
                        <td><img className="svg" src= {phone} alt="avatar" /></td>
                        <td className="desc">{ item[0].phone  } </td>
                    </tr>

                    <tr>
                        <td><img className="svg" src= {location} alt="avatar" /></td>
                        <td className="desc">{ item[0].location.city + "-" + item[0].location.country  }</td>
                    </tr>

                    <tr>
                        <td colspan="2">Age: { item[0].registered.age  }</td>
                    </tr>

                    <tr>
                        <td colspan="2">Registration Date: {item[0].registered.date.match(/\d{4}[-]\d{2}[-]\d{2}/i)  }</td>
                    </tr>
                </tbody>
            </table>

            <div className="btn-container">
                <button id='btn' onClick={getUser}>Random User</button>
            </div>
            </>
            :
            <img src={loading} alt="loading" />}
        </div>

        

       
    )
}
