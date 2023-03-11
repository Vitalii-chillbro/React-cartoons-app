import React from 'react'
import { Link, useParams } from 'react-router-dom'

import arrow from "../../img/back_arrow.svg"
import "./about.css"

const About = ({ characters }) => {
    const { id } = useParams()
    const character = characters.filter(({ id: characterId }) => id == characterId)[0]
    return (
        <div className='about'>
            <Link to="/main">
                <div className='about__header'>
                    <img src={arrow} alt="img" />
                    GO BACK
                </div>
            </Link>
            <div className='about__wrapper'>
                <div className='about__avatar'>
                    <img src={character?.image} alt="" />
                </div>
                <div className='about__information'>
                    <h3 className='about__name'>{character?.name}</h3>
                    <h4>Informations</h4>
                    <div className='about__items-list'>
                        <div className="about__item">
                            <h5>Gender</h5>
                            <h6>{character?.gender}</h6>
                        </div>
                        <div className="about__item">
                            <h5>Status</h5>
                            <h6>{character?.status}</h6>
                        </div>
                        <div className="about__item">
                            <h5>Specie</h5>
                            <h6>{character?.species}</h6>
                        </div>
                        <div className="about__item">
                            <h5>Origin</h5>
                            <h6>{character?.origin.name}</h6>
                        </div>
                        <div className="about__item">
                            <h5>Type</h5>
                            <h6>{character?.type || 'Unknown'}</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About