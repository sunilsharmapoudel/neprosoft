import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white text-[--primary] py-16">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[--primary] mb-10">About Neprosoft</h1>
          <p className="text-lg font-light text-gray-700 max-w-3xl mx-auto">
            Neprosoft is proud to be one of Nepal’s leading IT companies, committed to delivering innovative, custom software solutions, dynamic websites, and powerful mobile applications. We help businesses scale through expert IT consulting and seamless support.
          </p>
        </div>

        
        <div className="mb-16 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-[--primary] mb-10">How We Formed</h2>
            <p className="text-lg font-light text-gray-700">
              Founded by a passionate group of technologists, Neprosoft emerged with the goal of revolutionizing the digital landscape in Nepal. We started with a mission to deliver top-notch, customer-centric IT solutions that push boundaries and drive business growth.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/neprosoft-about.webp"
              alt="Team working together"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

       
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[--primary] mb-10">Our Priorities</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-3xl text-[--tertiary] mr-4">✔</span>
              Providing custom solutions that are built around our clients' unique needs.
            </li>
            <li className="flex items-center">
              <span className="text-3xl text-[--tertiary] mr-4">✔</span>
              Delivering high-quality software with a focus on scalability and performance.
            </li>
            <li className="flex items-center">
              <span className="text-3xl text-[--tertiary] mr-4">✔</span>
              Building long-term relationships with clients based on trust and transparency.
            </li>
          </ul>
        </div>

       
        <div className="mb-16 bg-[--accent] p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-[--primary] mb-6">Our Mission</h2>
          <p className="text-lg font-light text-gray-700">
            Our mission is to lead Nepal’s IT industry by providing innovative, reliable, and scalable solutions that empower businesses to succeed. We strive to create exceptional digital experiences that have a lasting impact on our clients.
          </p>
        </div>

       
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[--primary] mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-[--primary] p-6 rounded-xl shadow-lg border">
              <h3 className="font-semibold text-xl mb-4">Innovation</h3>
              <p className="text-lg font-light text-gray-700">
                We believe in continuous innovation, pushing the limits of technology to deliver state-of-the-art solutions.
              </p>
            </div>
            <div className="bg-white text-[--primary] p-6 rounded-xl shadow-lg border">
              <h3 className="font-semibold text-xl mb-4">Integrity</h3>
              <p className="text-lg font-light text-gray-700">
                Honesty and transparency form the foundation of our relationships with clients and partners.
              </p>
            </div>
            <div className="bg-white text-[--primary] p-6 rounded-xl shadow-lg border">
              <h3 className="font-semibold text-xl mb-4">Excellence</h3>
              <p className="text-lg font-light text-gray-700">
                We are committed to delivering excellence in everything we do, ensuring that our solutions meet the highest standards.
              </p>
            </div>
          </div>
        </div>

       
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[--primary] mb-10 text-center">Our Work in Action</h2>
          <div className="flex justify-center">
            <video className="w-full max-w-2xl rounded-xl shadow-lg" controls>
              <source src="https://via.placeholder.com/800x450" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

       
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-[--primary] mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg font-light text-gray-700 mb-6">
            Partner with Neprosoft today and experience the future of technology. Let’s create something extraordinary together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[--secondary] text-white py-3 px-6 rounded-lg text-xl hover:bg-[--primary] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
