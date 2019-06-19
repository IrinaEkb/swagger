import React from "react"
import PropTypes from "prop-types"
import { sanitizeUrl } from "core/utils"

const InfoExternalDocsUrl = ({ description, url, getComponent }) => {
  const Link = getComponent("Link")

  return (
    <div className="info__extdocs">
      <Link
        target="_blank"
        href={sanitizeUrl(url)}
      >
        {description || url}
      </Link>
    </div>
  )
}

InfoExternalDocsUrl.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string,
  getComponent: PropTypes.func
}

export default InfoExternalDocsUrl
