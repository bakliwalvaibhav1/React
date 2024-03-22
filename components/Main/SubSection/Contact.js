import { useEffect, useState } from "react";

import Heading from "@/components/UI/Wrappers/Heading";
import SectionWrapper from "@/components/UI/Wrappers/SectionWrapper";
import ContactForm from "./ContactSection/ContactForm";

const Contact = () => {
  const [firstSubmissionCheck, setSubmissionCheck] = useState(true);
  const [submitStatus, setSubmitStatus] = useState("idle"); //"idle", "submitting", "succeed"

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formValidity, setFormValidity] = useState(true);
  const [prevName, setPrevName] = useState("");

  useEffect(() => {
    if (firstSubmissionCheck) {
      return;
    }

    const identifier = setTimeout(() => {
      setFormValidity(
        formFields.name !== "" &&
          formFields.email !== "" &&
          formFields.subject !== "" &&
          formFields.message !== ""
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [formFields, firstSubmissionCheck]);

  const onChangeHandler = (event, identifier) => {
    const value = event.target.value;
    setFormFields((prevFields) => ({ ...prevFields, [identifier]: value }));
  };

  useEffect(() => {
    if (submitStatus === "succeed") {
      setTimeout(() => {
        setSubmitStatus("idle");
        setPrevName("");
      }, 4000);
    }
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Activating auto checker
    setSubmissionCheck(false);

    const validCheck =
      formFields.name !== "" &&
      formFields.email !== "" &&
      formFields.subject !== "" &&
      formFields.message !== "";
    setFormValidity(validCheck);

    if (!validCheck) return;

    // If data is valid, send it to the server
    try {
      setSubmitStatus("submitting");
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFields),
      });

      if (response.ok) {
        // Email sent successfully, handle success on the client side
        setSubmitStatus("succeed");

        // Name backup for displaying message after form submission.
        setPrevName(formFields.name);

        // Reset form fields
        setFormFields({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Disabling Auto checker
        setSubmissionCheck(true);
      } else {
        const errorResponse = await response.json();
        setSubmitStatus("idle");
        setFormValidity(false);

        if (errorResponse && errorResponse.missingFields) {
          // Handle missing fields on the client side
          console.error(errorResponse);
        } else {
          // Handle other errors when sending email
          console.error("Failed to send email");
        }
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <SectionWrapper id="Connect" className="bg-opacity-50">
      <Heading>
        Get In{" "}
        <span className="gradient-text-teal-sky">&#60; / Touch &#62;</span>
      </Heading>
      <div className="h-[60vh] mx-4">
        <ContactForm
          formFields={formFields}
          formValidity={formValidity}
          submitStatus={submitStatus}
          prevName={prevName}
          onChangeHandler={onChangeHandler}
          handleSubmit={handleSubmit}
        />
      </div>
    </SectionWrapper>
  );
};

export default Contact;
