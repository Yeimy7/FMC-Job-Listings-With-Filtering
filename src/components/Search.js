import React from 'react'
import '../style/card.css'
import { ReactComponent as Close } from '../images/icon-remove.svg'

export const Search = () => {
    return (
        <section className="search">
            <div className="card__filters">
                <div className="tag__wraper">
                    <span className="tag tag--search">Frontend</span>
                    <button className="tag__close">
                        <Close />
                    </button>
                </div>
                <div className="tag__wraper">
                    <span className="tag tag--search">Senior</span>
                    <button className="tag__close">
                        <Close />
                    </button>
                </div>
                <div className="tag__wraper">
                    <span className="tag tag--search">HTML</span>
                    <button className="tag__close">
                        <Close />
                    </button>
                </div>
            </div>
            <button className="search__button">
                Clear
            </button>
        </section>
    )
}
