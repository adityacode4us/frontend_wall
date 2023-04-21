import React from 'react'
import './main2.css'
import {data} from "../../../json/main2/data.json"
const Main2 = () => {
  return (
    <div className='main2'>

        {
            data.map((d)=>{
                return <div className="item">
                <div className="top">
                    <div className="image"
                     style={{background:`url(${d.url})`}}
                     ></div>
                    <div className="time">3 Months</div>
                </div>
                
                <div className="content">
                    <div className="header">
                    {d.name}
                    </div>
                    <div className="bought">
                        <p style={{color:"rgba(162, 162, 162, 1)"}}>Bought</p>
                        <p className='right'>
                            <div className="c">0.28</div>
                            <div className='img'></div>
                        </p>
                    </div>
                    <div className="floor">
                        <p style={{color:"rgba(162, 162, 162, 1)"}}>Floor</p>
                        <p className='right'>
                            <div className="first">12.74</div>
                            <div className="center"></div>
                            <div className="last">+21.6%</div>
                        </p>
                    </div>
                </div>
            </div>
            })
        }
        
        
        
        
    </div>
  )
}

export default Main2