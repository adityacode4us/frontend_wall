import React from 'react'
import './main1.css'
import {data} from "../../../json/main1/data.json"

const Main1 = () => {
  return (
    <div className='main1'>
        <div className="header">
            Highlights
        </div>
        <div className="lists">
            {data.map((d)=>{
                return <div className="item" style={{
                    background:`linear-gradient(to bottom right,${d.color}  , rgba(17,17,17) )`
                }}>
                <div className="title">
                    <div className="logo" style={{background:`url(${d.url})`}}></div>
                    <div className="info">
                        <div className="first">{d.name}</div>
                        <div className="second" style={{color:`${d.color_text}`}}>{d.nickname}</div>
                    </div>
                </div>
                <div className="content1">
                    <div className="left">{d.one_name}</div>
                    <div className="right">
                        <div className="c">{d.one_content}</div>
                        <div className='img'></div>
                        </div>
                </div>
                <div className="content2">
                <div className="time">{d.two_day}</div>
                    <div className="point" style={{color:`${d.time_color}`}}>{d.two_content}</div>
                </div>
            </div>
            })}
            
           
            
        </div>
    </div>
  )
}

export default Main1