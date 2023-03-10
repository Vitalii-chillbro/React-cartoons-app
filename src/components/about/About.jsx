import React from 'react'
import { Link, useParams } from 'react-router-dom'

import arrow from "../../img/back_arrow.svg"
import "./about.css"

const About = ({ characters }) => {
    const { id } = useParams()
    const character = characters.filter(({ id: characterId }) => id == characterId)[0]
    return (
        <div className='about'>
            <Link to="/main" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className='about_header'>
                    <img src={arrow} alt="img" />
                    GO BACK
                </div>
            </Link>
            <div className='about_wrapper'>
                <div className='about_avatar'>
                    <img src={character?.image} alt="" />
                    <h3>{character?.name}</h3>
                </div>
                <h4>Informations</h4>
                <div className='about_information'>
                    <div className="about_items">
                        <h5>Gender</h5>
                        <h6>{character?.gender}</h6>
                    </div>
                    <div className="about_items">
                        <h5>Status</h5>
                        <h6>{character?.status}</h6>
                    </div>
                    <div className="about_items">
                        <h5>Specie</h5>
                        <h6>{character?.species}</h6>
                    </div>
                    <div className="about_items">
                        <h5>Origin</h5>
                        <h6>{character?.origin.name}</h6>
                    </div>
                    <div className="about_items">
                        <h5>Type</h5>
                        <h6>{character?.type || 'Unknown'}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About