import React from 'react'
import '../style/card.css'

export const Card = ({ tab, setTab, card }) => {
    const { logo, name, new_ad, featured, training, day, schedule, site, tags } = card

    const handleTags = (tag) => {
        if (tab.indexOf(tag) <= -1) {
            setTab([...tab, tag])
        }
    }
    return (
        <section className={`card ${featured ? 'card--sale' : ''}`}>
            <div className="card__wrap">
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
            </div>
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
