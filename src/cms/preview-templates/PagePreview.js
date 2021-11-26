import React from "react"
import PropTypes from "prop-types"
import Page from "../../templates/templates-components/PageComponents"

const PagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Page
        title={data.title}
        description={data.description}
        image={getAsset(data.heroImage)}
        imageAlt={data.featuredImageAlt}
        html={widgetFor("body")}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PagePreview
