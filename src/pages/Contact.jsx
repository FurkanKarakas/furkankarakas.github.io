import { useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

export default function Contact() {
  const [formFields, setFormFields] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState(null);

  const handleFormChange = (field, value) => {
    setMessage(null);
    const formFieldsNew = { ...formFields };
    formFieldsNew[field] = value;
    setFormFields(formFieldsNew);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const body = `Sender email: ${formFields.email}<br>Sender Message: ${formFields.message}`;

    // eslint-disable-next-line no-undef
    Email.send({
      SecureToken: "102323f1-d771-4640-8098-063ade2b62b2",
      To: "fkarakasster@gmail.com",
      From: "fkarakasster@gmail.com",
      Subject: formFields.subject,
      Body: body,
    })
      .then((message) => setMessage(message))
      .then(() => new Promise((resolve) => setTimeout(resolve, 10000)))
      .then(() => setMessage(null));
  };

  return (
    <AnimatedPage>
      <section>
        <div className="mx-auto min-h-screen max-w-screen-md px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-white">
            Contact Me
          </h2>
          <p className="mb-8 text-center font-light  text-gray-400 sm:text-xl lg:mb-16">
            Would you like to know something more about me? Let me know!
          </p>
          <form
            autoComplete="off"
            onSubmit={(e) => handleFormSubmit(e)}
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                autoComplete="off"
                onChange={(e) => handleFormChange("email", e.target.value)}
                id="email"
                className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border   border-gray-600 bg-gray-700  p-2.5 text-sm text-white placeholder-gray-400 shadow-sm"
                placeholder="example@gmail.com"
                title="Please enter the email address in the form x@y"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                onChange={(e) => handleFormChange("subject", e.target.value)}
                id="subject"
                className="focus:ring-primary-500 focus:border-primary-500  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-700  p-3 text-sm text-white placeholder-gray-400 shadow-sm"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                onChange={(e) => handleFormChange("message", e.target.value)}
                rows="6"
                className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300  bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 shadow-sm"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <div className="flex items-center gap-x-4">
              <button
                type="submit"
                className="flex-shrink-0 rounded-lg bg-gray-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-4 sm:w-fit"
              >
                Send message
              </button>
              <p
                className={`text-sm ${
                  message === "OK" ? "text-green-400" : "text-red-700"
                }`}
              >
                {message === "OK"
                  ? "Your message was sent successfully. I will be getting in touch with you soon!"
                  : message}
              </p>
            </div>
          </form>
        </div>
      </section>
    </AnimatedPage>
  );
}
