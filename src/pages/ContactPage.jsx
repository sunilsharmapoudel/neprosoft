import ActionButton from "../components/ActionButton";
import PageTitle from "../components/PageTitle";

const ContactPage = () => {
  return (
    <div className="bg-white text-[--primary] py-16">
      <div className="container mx-auto px-6">
        <PageTitle title="Contact Us" desc="Have a question or want to start a project? Get in touch with us using the form below, or feel free to reach out through our contact details." />

        <section className="mb-16">
          <h2 className=" text-center text-2xl font-semibold text-[--primary] mb-10">Get In Touch</h2>
          <form className="space-y-6 max-w-xl mx-auto">
            <div className="flex gap-6">
              <div className="flex-1">
                <label htmlFor="name" className="text-lg font-semibold text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg shadow-md"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="text-lg font-semibold text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg shadow-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-lg font-semibold text-gray-700">Your Message</label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-4 mt-2 border border-gray-300 rounded-lg shadow-md"
                placeholder="Write your message here"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[--secondary] text-white py-3 px-6 rounded-lg text-xl hover:bg-[--primary] transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        <section className="bg-[--accent] rounded-md py-5">
          <h2 className="text-2xl font-semibold text-[--primary] mb-6 text-center">
            Our Contact Details
          </h2>
          <div className="flex flex-wrap gap-8 justify-center md:gap-12">
            <div className="text-center w-full sm:w-auto">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Phone</h3>
              <p className="text-lg text-gray-700">+977 </p>
            </div>
            <div className="text-center w-full sm:w-auto">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Email</h3>
              <p className="text-lg text-gray-700">dev@sunil-sharma.com.np</p>
            </div>
            <div className="text-center w-full sm:w-auto">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Office</h3>
              <p className="text-lg text-gray-700">Kathmandu, Nepal</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
