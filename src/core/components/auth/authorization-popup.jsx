import React from "react"
import PropTypes from "prop-types"

export default class AuthorizationPopup extends React.Component {
  close =() => {
    let { authActions } = this.props

    authActions.showDefinitions(false)
  }

  render() {
    let { authSelectors, authActions, getComponent, errSelectors, specSelectors, fn: { AST = {} } } = this.props
    let definitions = authSelectors.shownDefinitions()
    const Auths = getComponent("auths")
    const Popup = getComponent("Popup")

    return (
      <Popup title={"Available authorizations"} onClose={this.close}>
        {
          definitions.valueSeq().map(( definition, key ) => {
            return <Auths key={ key }
                          AST={AST}
                          definitions={ definition }
                          getComponent={ getComponent }
                          errSelectors={ errSelectors }
                          authSelectors={ authSelectors }
                          authActions={ authActions }
                          specSelectors={ specSelectors }/>
          })
        }
      </Popup>
    )
  }

  static propTypes = {
    fn: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    authSelectors: PropTypes.object.isRequired,
    specSelectors: PropTypes.object.isRequired,
    errSelectors: PropTypes.object.isRequired,
    authActions: PropTypes.object.isRequired,
  }
}
