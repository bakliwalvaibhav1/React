import { motion } from "framer-motion";
import Input from "@/components/UI/Input/input";
import CustomButton from "@/components/UI/Buttons/CustomButton";
import { LinkedInIcon, GitHubIcon, SendIcon } from "@/public/SVG/svg";
const ContactForm = ({ formValidity, submitStatus, prevName, formFields, onChangeHandler, handleSubmit }) => {
  return (
    <form className="h-full max-w-[1024px] mx-auto m-2 p-2 gap-2 grid grid-cols-1 grid-rows-8 md:grid-rows-7 md:grid-cols-2 md:grid-flow-row md:items-start md:h-auto md:gap-3">
      {!formValidity || submitStatus === "succeed" ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className={`row-span-2 p-2 md:row-span-1 md:h-10 md:col-span-2 ${submitStatus === "succeed" ? "bg-teal-600 text:xs h-auto" : "bg-red-500 h-10 mt-auto"}`}
        >
          {submitStatus === "succeed" ? `Thank you ${prevName} for reaching out! We'll be in touch as soon as possible.` : `*All fields are required`}
        </motion.div>
      ) : (
        <div className="row-span-2 md:row-span-1 md:h-10 md:col-span-2" />
      )}
      <Input name="name" placeholder="Name" value={formFields.name} onChange={(event) => onChangeHandler(event, "name")} />
      <Input name="email" type="email" placeholder="Email" value={formFields.email} onChange={(event) => onChangeHandler(event, "email")} />

      <Input className={`mb-1 md:mb-0 md:col-span-2`} name="subject" placeholder="Subject" value={formFields.subject} onChange={(event) => onChangeHandler(event, "subject")} />
      <textarea
        className={`p-4 bg-neutral-100 outline-none text-black row-span-4 h-full md:col-span-2 focus:border-b-4 focus:border-teal-600`}
        required={true}
        placeholder="Message"
        value={formFields.message}
        onChange={(event) => onChangeHandler(event, "message")}
      />
      <div className="flex justify-between items-center md:col-span-2">
        <div className="flex gap-4">
          <a target="_blank" href="https://www.linkedin.com/in/vaibhavbakliwal/">
            <LinkedInIcon className="fill-white inline-block h-8 w-8 hover:fill-blue-500" />
          </a>
          <a target="_blank" href="https://github.com/bakliwalvaibhav1">
            <GitHubIcon className="fill-white inline-block h-8 w-8 hover:fill-gray-500" />
          </a>
        </div>
        <CustomButton
          onClick={handleSubmit}
          className="min-w-[100px] border-white no-underline"
          title={`${submitStatus === "submitting" ? "Submitting..." : "Submit"}`}
          disabled={submitStatus === "submitting"}
          SVG={SendIcon}
        />
      </div>
    </form>
  );
};

export default ContactForm;
