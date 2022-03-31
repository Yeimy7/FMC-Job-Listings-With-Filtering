import React from 'react'
import '../style/card.css'
import { ReactComponent as Close } from '../images/icon-remove.svg'

export const Search = ({ tab, setTab }) => {

    const handleClose = (tag) => {
        const newTags = tab.filter(e => e !== tag)
        setTab(newTags)
    }
    const handleClear = () => {
        setTab([])
    }
    return (
        <section className="search">
            <div className="card__filters">
                {
                    tab.map((element, index) => (
                        <div className="tag__wraper" key={index}>
                            <span className="tag tag--search">{element}</span>
                            <button className="tag__close" onClick={() => handleClose(element)}>
                                <Close />
                            </button>
                        </div>
                    ))
                }

            </div>
            <button className="search__button" onClick={handleClear}>
                Clear
            </button>
        </section>
    )
}
