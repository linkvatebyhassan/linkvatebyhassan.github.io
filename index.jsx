
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 px-4 shadow-md">
        <h1 className="text-3xl font-bold">Off-Page SEO Expert</h1>
        <p className="text-sm mt-1">Guest Posting • Backlinks • Authority Building</p>
      </header>

      {/* Hero Section */}
      <section className="p-6 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-2">Boost Your Website's Authority</h2>
        <p className="mb-4">Professional Off-Page SEO Services to help your site rank higher and gain more traffic.</p>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-2xl shadow hover:bg-indigo-700 transition">Get a Free Quote</button>
      </section>

      {/* Services Section */}
      <section className="p-6">
        <h3 className="text-xl font-semibold mb-4">My Services</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-4 border">
            <h4 className="text-lg font-bold mb-2">Guest Posting</h4>
            <p>Get published on high authority blogs to build powerful backlinks and trust.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4 border">
            <h4 className="text-lg font-bold mb-2">High Authority Backlinks</h4>
            <p>Create quality backlinks from trusted sources to boost your SEO ranking.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4 border">
            <h4 className="text-lg font-bold mb-2">Directory Submissions</h4>
            <p>Submit your business to relevant directories for improved online presence.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4 border">
            <h4 className="text-lg font-bold mb-2">Social Bookmarking</h4>
            <p>Share your content on social bookmarking sites to generate traffic and backlinks.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="p-6 bg-gray-100">
        <h3 className="text-xl font-semibold mb-4">About Me</h3>
        <p>I’m an experienced Off-Page SEO specialist helping websites improve their domain authority and Google ranking through strategic backlinks and outreach techniques.</p>
      </section>

      {/* Contact Section */}
      <section className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Contact Me</h3>
        <p>Ready to grow your online presence? Let’s work together!</p>
        <div className="mt-4 space-y-3">
          <a href="mailto:husnain007@gmail.com" className="block bg-indigo-600 text-white py-2 px-6 rounded-2xl shadow hover:bg-indigo-700">
            Email Me: husnain007@gmail.com
          </a>
          <a href="https://wa.me/923248314697" target="_blank" className="block bg-green-500 text-white py-2 px-6 rounded-2xl shadow hover:bg-green-600">
            WhatsApp: +92 324 8314697
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-4 mt-6">
        <p>&copy; 2025 Off-Page SEO Expert. All rights reserved.</p>
      </footer>
    </div>
  );
}
