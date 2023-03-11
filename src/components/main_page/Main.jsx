import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../img/title_img.jpg'
import searchIcon from '../../img/search_icon.svg'
import './main.css'

const Main = ({ characters }) => {
    const [searchName, setSearchName] = useState("");

    return (
        <div className='main'>
            <div className='main__wrapper'>
                <div className='main__title'>
                    <img src={logo} alt="" />
                </div>
                <div className='main__input'>
                    <img src={searchIcon} alt="" />
                    <input
                        type="text"
                        placeholder='Filter by name...'
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                </div>
            </div>

            <div className="items__wrapper">
                {characters
                    .filter((character) => character.name.toLowerCase().includes(searchName.toLowerCase()))
                    .map((character) => {
                        const { id, image, name, species } = character
                        return (
                            <Link key={id} to={`/about/${id}`}>
                                <div className='item'
                                    key={id}
                                >
                                    <div>
                                        <img src={image}
                                            alt="img" />
                                        <div className="item__name">
                                            <h5>{name}</h5>
                                            <h6>{species}</h6>
                                        </div>
                                    </div>
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