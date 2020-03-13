import React from "react"
import { IntlProvider } from "react-intl"
import localEng from "../../data/en.json"
import localAr from "../../data/ar.json"
import { Context } from "../Context"
import Provider from "./Provider"
// import Header from "../../theme/Header"
// import "./layout.css"
import Header from "../../components/header"
import Footer from "../../components/footer"

const Layout = ({ children }) => (
  <Provider>
    <Context.Consumer>
      {({ lang }) => (
        <IntlProvider
          locale={lang}
          messages={lang === "en" ? localEng : localAr}
        >
          <div lang={lang}>
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        </IntlProvider>
      )}
    </Context.Consumer>
  </Provider>
)

export { Layout }
