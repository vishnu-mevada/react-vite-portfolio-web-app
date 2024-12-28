import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string(),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Value: ", values);
    toast.success(`Hello ${values.name}, we'll get back to you soon!`);
    resetForm();
  };

  return (
    <>
      <div className="single-contact-box">
        <div className="contact-form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div className="form-group">
                      <Field
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-sm-6 col-xs-12">
                    <div className="form-group">
                      <Field
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-xs-12">
                    <div className="form-group">
                      <Field
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-xs-12">
                    <div className="form-group">
                      <Field
                        as="textarea"
                        className="form-control"
                        rows="8"
                        name="message"
                        placeholder="Message"
                      />
                      <ErrorMessage
                        name="message"
                        component="small"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="single-contact-btn">
                      <button
                        type="submit"
                        className="contact-btn"
                        role="button"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default ContactForm;
