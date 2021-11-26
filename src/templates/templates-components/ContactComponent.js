import React, { useState } from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"
import Button from "../../components/Button"
import Seo from "../../components/SEO"
import Banner from "../../components/Banner"
import PropTypes from "prop-types"

const Form = styled.div`
  margin: calc(var(--spacing) * 2) 0;
  width: 100%;
  max-width: 656px;
`

const FormLabel = styled.label`
  font-family: var(--sansSerif);
  color: var(--black);
  font-size: var(--h6);
  font-weight: var(--boldWeight);
  margin-bottom: calc(var(--spacing) / 2);
  display: inline-block;
`

const FormInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  font-family: var(--sansSerif);
  font-weight: var(--regularWeight);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  font-family: var(--sansSerif);
  font-weight: var(--regularWeight);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const Contact = ({ SEOtitle, SEOdescription, html, title }) => {
  const [form, setForm] = useState([])

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAttribute("name"),
        ...form,
      }),
    })
      .then(() => navigate(e.target.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    <>
      <Seo title={SEOtitle} description={SEOdescription} />
      <Banner content={title} />
      {html && (
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      <Form>
        <form
          name="contact-kakbohok"
          method="post"
          action="/kontak/terima-kasih/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </div>
          <p>
            <FormLabel htmlFor="name">Nama Anda</FormLabel>
            <FormInput
              type="text"
              name="name"
              onChange={handleChange}
              required={true}
            />
          </p>
          <p>
            <FormLabel htmlFor="email">Alamat Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              onChange={handleChange}
              required={true}
            />
          </p>
          <p>
            <FormLabel htmlFor="message">Pesan Anda</FormLabel>
            <FormTextArea
              type="text"
              name="message"
              onChange={handleChange}
              required={true}
            />
          </p>
          <p>
            <Button className="btn-link" text="Kirim Pesan" type="submit" />
          </p>
        </form>
      </Form>
    </>
  )
}

Contact.propTypes = {
  SEOtitle: PropTypes.string,
  SEOdescription: PropTypes.string,
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Contact
