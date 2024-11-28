const ServicesPage = () => {
    return (
        <div>
            <h1>Services</h1>
            <section>
                <h2>Our Core Services</h2>
                <ul className="service-list">
                    <li className="service-item">
                        <h3>Web Development</h3>
                        <p>Beautiful, responsive, and functional websites.</p>
                        <p><strong>Examples:</strong> E-commerce platforms, blogs, SaaS applications, portals.</p>
                    </li>
                    
                    <li className="service-item">
                        <h3>Custom Software Development</h3>
                        <p>Tailored solutions to meet your business goals.</p>
                        <p><strong>Examples:</strong> CRM systems, ERP solutions, dashboards, inventory management systems.</p>
                    </li>

                    <li className="service-item">
                        <h3>Mobile App Development</h3>
                        <p>Innovative apps to keep your business on the go.</p>
                        <p><strong>Examples:</strong> Social media apps, fitness trackers, online payment systems.</p>
                    </li>
                    <li className="service-item">
                        <h3>Software Maintenance and Support</h3>
                        <p>Keeping your software running smoothly.</p>
                        <p><strong>Examples:</strong> Bug fixes, performance optimization, feature upgrades.</p>
                    </li>
                    <li className="service-item">
                        <h3>IT Consulting</h3>
                        <p>Expert advice for smarter digital strategies.</p>
                        <p><strong>Examples:</strong> Cloud migration, software selection, scalability planning.</p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Coming Soon Services</h2>
                <ul className="coming-soon-list">
                    <li className="coming-soon-item">
                        <h3>Cloud Services</h3>
                        <p>Harness the power of the cloud for storage, computing, and hosting.</p>
                    </li>
                    <li className="coming-soon-item">
                        <h3>Software Integration Services</h3>
                        <p>Seamless connectivity between systems for enhanced productivity.</p>
                    </li>
                    <li className="coming-soon-item">
                        <h3>UI/UX Design</h3>
                        <p>Crafting intuitive and visually appealing user experiences.</p>
                    </li>
                    <li className="coming-soon-item">
                        <h3>SaaS Product Development</h3>
                        <p>Building scalable and efficient SaaS solutions tailored to your needs.</p>
                    </li>
                    <li className="coming-soon-item">
                        <h3>Training and Education</h3>
                        <p>Empowering your team with the knowledge and skills to succeed.</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default ServicesPage
