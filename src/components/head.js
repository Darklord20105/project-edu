import React from 'react'
import { Helmet } from 'react-helmet'

const Head = (props) => (
    <Helmet>
        <html lang="ar" dir="rtl" />
        <title>
            {props.title}
        </title>
    </Helmet>
)

export default (Head)
