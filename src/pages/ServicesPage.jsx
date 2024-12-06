const ServicesPage = () => {
  return (
    <div className="bg-white text-[--primary] py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-[--primary] mb-10">Our Services</h1>
          <p className="text-lg font-light text-gray-700 max-w-3xl mx-auto">
            Neprosoft offers a range of IT services to meet your business needs, from custom software development to mobile app solutions. Our goal is to provide innovative, efficient, and scalable digital solutions.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[--primary] mb-6">Our Core Services</h2>
          <ul className="space-y-8">
            <li className="service-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Web Development</h3>
              <p className="text-lg font-light text-gray-700 mb-4">
                Beautiful, responsive, and functional websites tailored to your business needs.
              </p>
              <p className="text-lg text-gray-600"><strong>Examples:</strong> E-commerce platforms, blogs, SaaS applications, portals.</p>
            </li>

            <li className="service-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Custom Software Development</h3>
              <p className="text-lg font-light text-gray-700 mb-4">
                Tailored solutions to meet your unique business goals.
              </p>
              <p className="text-lg text-gray-600"><strong>Examples:</strong> CRM systems, ERP solutions, dashboards, inventory management systems.</p>
            </li>

            <li className="service-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Mobile App Development</h3>
              <p className="text-lg font-light text-gray-700 mb-4">
                Innovative apps to keep your business on the go.
              </p>
              <p className="text-lg text-gray-600"><strong>Examples:</strong> Social media apps, fitness trackers, online payment systems.</p>
            </li>

            <li className="service-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Software Maintenance and Support</h3>
              <p className="text-lg font-light text-gray-700 mb-4">
                Keeping your software running smoothly with regular updates and optimizations.
              </p>
              <p className="text-lg text-gray-600"><strong>Examples:</strong> Bug fixes, performance optimization, feature upgrades.</p>
            </li>

            <li className="service-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">IT Consulting</h3>
              <p className="text-lg font-light text-gray-700 mb-4">
                Expert advice for smarter digital strategies tailored to your business.
              </p>
              <p className="text-lg text-gray-600"><strong>Examples:</strong> Cloud migration, software selection, scalability planning.</p>
            </li>

            <li className="service-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Desktop Software Development</h3>
              <p className="text-lg font-light text-gray-700 mb-4">
                Developing desktop applications with a focus on performance and usability.
              </p>
              <p className="text-lg text-gray-600"><strong>Examples:</strong> Custom software for desktop systems, business management tools.</p>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[--primary] mb-6">Coming Soon Services</h2>
          <ul className="space-y-8">
            <li className="coming-soon-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Cloud Services</h3>
              <p className="text-lg font-light text-gray-700">
                Harness the power of the cloud for storage, computing, and hosting.
              </p>
            </li>

            <li className="coming-soon-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Software Integration Services</h3>
              <p className="text-lg font-light text-gray-700">
                Seamless connectivity between systems for enhanced productivity.
              </p>
            </li>

            <li className="coming-soon-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">UI/UX Design</h3>
              <p className="text-lg font-light text-gray-700">
                Crafting intuitive and visually appealing user experiences.
              </p>
            </li>

            <li className="coming-soon-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">SaaS Product Development</h3>
              <p className="text-lg font-light text-gray-700">
                Building scalable and efficient SaaS solutions tailored to your needs.
              </p>
            </li>

            <li className="coming-soon-item bg-white p-6 rounded-xl shadow-lg border">
              <h3 className="text-xl font-semibold text-[--primary] mb-4">Training and Education</h3>
              <p className="text-lg font-light text-gray-700">
                Empowering your team with the knowledge and skills to succeed.
              </p>
            </li>
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-[--primary] mb-10  ">Our Work in Action</h2>
          <div className="flex justify-center mb-12">
            <video className="w-full max-w-2xl rounded-xl shadow-lg" controls>
              <source src="https://via.placeholder.com/800x450" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-[--primary] mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg font-light text-gray-700 mb-6">
            Let's collaborate and build something extraordinary. Contact us today to bring your ideas to life!
          </p>
          <a
            href="#contact"
            className="inline-block bg-[--secondary] text-white py-3 px-6 rounded-lg text-xl hover:bg-[--primary] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
