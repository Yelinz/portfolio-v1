import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <Link to="/">Go home</Link>.
    </Layout>
  )
}

export default NotFoundPage
