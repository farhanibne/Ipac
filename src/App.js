import {useState} from 'react'
import axios from 'axios'
import React from 'react';
import { firebase } from './server'


const GeoLocation = () => {



      const [ip, setIP] = useState('');

      const getData = async () => {
      const button =  document.getElementById('btn');  
      button.disabled = true;
      button.style.backgroundColor = 'grey';
      button.innerHTML = 'Loading...';

      const ip = document.getElementById('ip');
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      setIP(res.data.IPv4)
      button.disabled = false;
      button.style.backgroundColor = '#287f63';
      button.innerHTML = 'Find Data';
      ip.innerHTML = res.data.IPv4;


      firebase.firestore().collection("IP").add({
        IP: res.data.IPv4,
        Country: res.data.country_name,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        user: "IPAC",
      });
  

    }
      

     
      

  return (
    <>
      <div>
        <div>
          <center>
            <h1 className="font-semibold text-4xl mt-9">Get Your Ip <sup style={{color:'black',fontSize:'13px'}}>⚠️ Don't use it</sup>  </h1>
          </center>

          <div>
            <div
              className="m-11 border-4 p-11 ml-4 mr-4 xl:ml-96 xl:mr-96 md:ml-10 md:mr-10"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <center>
                  <button
                    id="btn"
                    className="m-10  p-3 rounded-lg bg-[#487f63] text-white"
                    onClick={getData}
                  >
                    Find Data{" "}
                  </button>

                  <h4 id='ip'></h4>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeoLocation;
