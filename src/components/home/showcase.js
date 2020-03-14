import React from "react"
import { FormattedMessage } from 'react-intl'

const ShowCase = () => {
    return (
        <section id="hero" className="hero ">

            <div className="hero-text container">
                <h1 className="primary-heading"><FormattedMessage id="showcase_main_text" /></h1>
                <p className="primary-sub-heading"><FormattedMessage id="showcase_secondary_text" /></p>
                <a href="#benefit" className="btn btn-primary"><FormattedMessage id="showcase_btn" /></a>
            </div>
        </section>
    )
}

export default ShowCase