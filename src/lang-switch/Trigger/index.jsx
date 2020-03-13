import React from "react"
import { FormattedMessage } from "react-intl"
import { Context } from "../Context"
import { Button } from "react-bootstrap"

const Trigger = () => (
  <Context.Consumer>
    {({ toggleLanguage }) => (
      <Button type="button" onClick={toggleLanguage}>
        <FormattedMessage id="language" />
      </Button>
    )}
  </Context.Consumer>
)

// I recommend moving the style down below to a separate file

export { Trigger }
