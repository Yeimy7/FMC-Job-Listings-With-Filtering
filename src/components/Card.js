import React, { useEffect } from 'react'
// import { ReactComponent as Photosnap } from '../images/photosnap.svg'
import '../style/card.css'

// logo: air,
//       name: 'The Air Filter Company',
//       new: false,
//       featured: false,
//       training: 'Front-end Developer',
//       day: '1mo ago',
//       schedule: 'Part time',
//       site: 'Worldwide',
//       tags: ['Frontend', 'Junior', 'JavaScript', 'React', 'Sass']

export const Card = ({ tab, setTab, card }) => {
    const { logo, name, new_ad, featured, training, day, schedule, site, tags } = card

    const handleTags = (tag) => {
        if (tab.indexOf(tag) <= -1) {
            setTab([...tab, tag])
        }
    }
    return (
        <section className={`card ${featured ? 'card--sale' : ''}`}>
            <section className="card__logo">
                <img className="card__logo__image" src={logo} alt="logo-card" />
            </section>
            <header className="card__info">
                <div className="card__info__name">
                    <h2 className="card__info__title">
                        {name}
                    </h2>
                    {new_ad && <span className="attribute attribute--new">new!</span>}
                    {featured && <span className="attribute">featured</span>}
                </div>
                <h3 className="card__info__job">{training}</h3>
                <div className="card__info__description">
                    <span className='description description--one'>{day}</span>
                    <span className='description'>{schedule}</span>
                    <span className='description'>{site}</span>
                </div>
            </header>
            <div className="card__filters">
                {
                    tags.map((element, i) => (
                        <span key={i + ''.concat(String(Math.floor(Math.random() * (1000 - 100) + 100)))} className="tag tag--card" onClick={() => handleTags(element)}>{element}</span>
                    ))
                }
            </div>
        </section>
    )
}
