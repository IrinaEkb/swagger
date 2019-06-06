import React from "react"
import PropTypes from "prop-types"
import { sanitizeUrl } from "core/utils"

const TermsOfService = ({ termsOfService, getComponent }) => {
  const Link = getComponent("Link")
    
  return (
    <div className="info__tos">
      <Link target="_blank" href={ sanitizeUrl(termsOfService) }>Terms of service</Link>
    </div>
  )
}

TermsOfService.propTypes = {
  termsOfService: PropTypes.string.isRequired,
  getComponent: PropTypes.func.isRequired
}

export default TermsOfService