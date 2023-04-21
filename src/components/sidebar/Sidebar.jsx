import React from 'react'
import './sidebar.css'
import {data as info} from '../../json/sidebar/data.json'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="a">
            <div className="left">
                <div className="rectangle">
                    <div className="image">

                    </div>
                </div>
                <div className="textlvl">
                    LVL {info.level}
                </div>
            </div>
            <div className="right">
                <div className="h">{info.name}</div>
                <div className="p">{info.nickname}</div>
            </div>
        </div>
        <div className="social">
            <div className="name">
                <div className="image"></div>
                <div className="handle">@{info.handlename}</div>
            </div>
            <div className="web"></div>
        </div>
        <div className="content">
        {info.user_description}
        </div>
        <div className="common_communities">
            <p>Common Communitites (3)</p>
            <div className="list">
                {info.communities.map((community)=>{
                    return <div className="item" style={{background:`url(${community.url})`}}></div>
                })}
                
            </div>
        </div>
        <div className="contribution">
            {info.fields.map((field)=>{
                return <div className="item" style={{border:`1px solid ${field.color}`,color:field.color==="rgba(255, 193, 72, 1)"?"rgba(255, 193, 72, 1)":"rgba(162, 162, 162, 1)"}}>
                <div className="name">{field.field_name}</div>
                <div className="percentage">{field.field_percentage}%</div>
            </div>
            })}
            
           
        </div>
        <div className='subscribe'>
            <p>Subscribe</p>
            <div className="img"></div>
        </div>
    </div>
  )
}

export default Sidebar