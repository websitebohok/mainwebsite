import React from "react"
import Banner from "../components/Banner"
import Seo from "../components/SEO"

const NotFoundPage = () => (
  <>
    <Seo title={"Not Found"} />
    <Banner content="Error 404" />
    <p>You just hit a url that doesn&#39;t exist... the sadness.</p>
  </>
)

export default NotFoundPage
