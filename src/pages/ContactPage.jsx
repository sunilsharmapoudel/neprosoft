import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-white text-[--primary] py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[--primary] mb-10">Contact Us</h1>
          <p className="text-lg font-light text-gray-700 max-w-3xl mx-auto">
            Have a question or want to start a project? Get in touch with us using the form below, or feel free to reach out through our contact details.
          </p>
        </div>

       
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

   
        <section className="mb-16 bg-[--accent] rounded-md py-5">
          <h2 className="text-2xl font-semibold text-[--primary] mb-6 text-center">
            Our Contact Details
          </h2>
          <div className="flex flex-wrap gap-8 justify-center md:gap-12">
            <div className="text-center w-full sm:w-auto">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Phone</h3>
              <p className="text-lg text-gray-700">+977 986 552 4555</p>
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

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[--primary] mb-10 text-center">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.116813331015!2d85.3244076150225!3d27.687123099281116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198c081f9b23%3A0xd2080ac6636b72d6!2sNepal%20Tech%20Park!5e0!3m2!1sen!2snp!4v1617807448155!5m2!1sen!2snp"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </section>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-[--primary] mb-4">Let’s Build Something Amazing Together!</h2>
          <p className="text-lg font-light text-gray-700 mb-6">
            Whether you're starting a new project or need advice on an existing one, we're here to help. Reach out today!
          </p>
          <a
            href="mailto:dev@sunil-sharma.com.np"
            className="inline-block bg-[--secondary] text-white py-3 px-6 rounded-lg text-xl hover:bg-[--primary] transition-all"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
