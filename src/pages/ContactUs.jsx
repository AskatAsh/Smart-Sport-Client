import { Helmet, HelmetProvider } from "react-helmet-async";

const ContactUs = () => {
  return (
    <section className="py-16">
      <HelmetProvider>
        <Helmet>
          <title>SmartSport | Contact Us</title>
        </Helmet>
      </HelmetProvider>
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-300">
        Contact Us
      </h1>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg border-2 border-gray-200 dark:border-gray-700 p-6 sm:p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text text-gray-900 dark:text-gray-200">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="input input-bordered rounded-none w-full focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text text-gray-900 dark:text-gray-200">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="input input-bordered rounded-none w-full focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
            </div>

            {/* Subject */}
            <div className="form-control md:col-span-2">
              <label htmlFor="subject" className="label">
                <span className="label-text text-gray-900 dark:text-gray-200">
                  Subject
                </span>
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="input input-bordered rounded-none w-full focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
            </div>

            {/* Message */}
            <div className="form-control md:col-span-2">
              <label htmlFor="message" className="label">
                <span className="label-text text-gray-900 dark:text-gray-200">
                  Message
                </span>
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="textarea textarea-bordered rounded-none w-full focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn bg-gray-900 rounded-none text-white w-full hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;