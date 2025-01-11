import React from 'react';

function Contact() {
  return (
    <section className="contact-section py-10 px-6 md:py-20 md:px-40">
      <div className="container mx-auto flex flex-col md:flex-row"> {/* Use flexbox for layout */}
        <div className="contact-info w-full md:w-1/2 pr-0 md:pr-10"> {/* Adjust width for responsiveness */}
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Please feel free to contact us with any questions or inquiries.
          </p>
          <ul className="info-list list-none p-0">
            <li className="mb-4">
              <strong className="font-bold">Address:</strong>
              <p className="text-gray-600">123 Main Street, Anytown, CA 12345</p>
            </li>
            <li className="mb-4">
              <strong className="font-bold">Phone:</strong>
              <p className="text-gray-600">(123) 456-7890</p>
            </li>
            <li>
              <strong className="font-bold">Email:</strong>
              <p className="text-gray-600">info@example.com</p>
            </li>
          </ul>
        </div>
        <div className="contact-form w-full md:w-1/2 mt-8 md:mt-0"> {/* Adjust spacing for responsiveness */}
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form>
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4" 
              required 
            />
            <textarea 
              placeholder="Message" 
              className="w-full border border-gray-300 px-4 py-2 rounded-md mb-4" 
              required 
            />
            <button 
              type="submit" 
              className="bg-emerald-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;