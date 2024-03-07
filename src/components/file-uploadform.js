import React from "react"
import { useFormik } from "formik"
import classes from "./formStyle.module.css"

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      username: "",
    },

    onSubmit: async (values) => {
      console.log("values", values)

      const formData = new FormData()

      const data = {
        username: values.username,
      }

      console.log("data", data)

      formData.append("data", JSON.stringify(data))
      //single-file
      formData.append("files.single", values.singleFile)
      //for upload page
      const uploadData = new FormData()
      uploadData.append("files", values.singleFile)

      // simple create new collection with JSON

      const createArticle = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        body: formData,
        headers: {},
      })
      const createRes = await createArticle.json()
      console.log("createArticleRes", createRes)
 
    },
  })

 
  const onSingleFileChange = (e) => {
    const file = e.target.files
    console.log("onSingleFileChange", file)
    console.log("onSingleFileChange1", file[0])

    formik.setFieldValue("singleFile", file[0])
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={{
        display: "flex",
      }}
    >
      <div>
        <label htmlFor="title" className={classes.labelStyle}>
          Title
        </label>
        <input
          id="title"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          className={classes.inputStyle}
        />
      </div>
      <div>
        <label htmlFor="image" className={classes.labelStyle}>
          single-file-upload
        </label>
        <input
          id="file"
          name="image"
          type="file"
          onChange={onSingleFileChange}
          value={formik.values.image}
          className={classes.inputStyle}
        />
      </div>
      
      <button type="submit" className={classes.btnStyle}>
        Submit
      </button>
    </form>
  )
}

export default SignupForm
