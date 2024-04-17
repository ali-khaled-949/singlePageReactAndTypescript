// src/features/about/AboutPage.tsx

import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our website! We're glad you're here. Below you'll find some information about who we are and what we do.</p>
            <section>
                <h2>Our Mission</h2>
                <p>Our mission is to provide exceptional service and innovative solutions in everything we do. We strive to push the boundaries of technology and service to new heights.</p>
            </section>
            <section>
                <h2>Our Team</h2>
                <p>We are a team of dedicated professionals passionate about making a difference in our industry. Our team is our strength, and we believe in fostering a collaborative and inclusive environment.</p>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to get in touch with us, please don't hesitate to reach out. You can contact us at:</p>
                <ul>
                    <li>Email: contact@ourcompany.com</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Address: 123 Business Rd, Business City, BC 12345</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutPage;
