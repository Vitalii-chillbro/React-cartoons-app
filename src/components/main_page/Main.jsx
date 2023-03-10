import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../img/title_img.jpg'
import searchIcon from '../../img/search_icon.svg'
import './main.css'

const Main = ({characters}) => {
    const [searchName, setSearchName] = useState("");
    
    return (
        <div className='main'>
            <div className='main_wrapper'>
                <div className='main_title'>
                    <img src={logo} alt="" />
                </div>
                <div className='main_input'>
                    <img src={searchIcon} alt="" />
                    <input
                        type="text"
                        placeholder='Filter by name...'
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
            </div>

            <div className="items_wrapper">
                {characters
                    .filter((character) => character.name.toLowerCase().includes(searchName.toLowerCase()))
                    .map((character) => {
                        const {id, image, name, species} = character
                        return (
                            <Link key={id} to={`/about/${id}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                                <div className='item'
                                    key={id}
                                >
                                    <img src={image}
                                        width="240px"
                                        alt="img" />
                                    <h5>{name}</h5>
                                    <h6>{species}</h6>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Main