import { useState } from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedln.png';
import emailIcon from '../assets/email.png';

function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-slate-900 flex items-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Get In Touch With Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">

          {/* Form */}
          <form 
            action="https://formspree.io/f/xkgknlob" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"
            ></textarea>

            {/* Thông báo */}
            {status === 'success' && (
              <div className="p-3 bg-emerald-600 text-white rounded-lg text-center animate-pulse">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="p-3 bg-red-600 text-white rounded-lg text-center">
                Oops! Something went wrong.
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-sky-600 text-white py-3 px-8 rounded-xl font-medium text-lg transition-all hover:bg-sky-500 hover:shadow-lg hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col justify-center space-y-8">
            <a href="https://github.com/HuyLe297" className="flex items-center gap-4 text-gray-300 hover:text-sky-400 transition-all group">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shadow-md group-hover:shadow-sky-500/50 transition-all">
                <img src={githubIcon} alt="GitHub" className="w-7 h-7" />
              </div>
              <span className="text-lg font-medium">Github</span>
            </a>
            <a href="https://www.linkedin.com/in/leduchuy297/" className="flex items-center gap-4 text-gray-300 hover:text-sky-400 transition-all group">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shadow-md group-hover:shadow-sky-500/50 transition-all">
                <img src= {linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
              </div>
              <span className="text-lg font-medium">Linkedin</span>
            </a>
            <a href="mailto:lehuy297@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-sky-400 transition-all group">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shadow-md group-hover:shadow-sky-500/50 transition-all">
                <img src={emailIcon} alt="Email" className="w-7 h-7" />
              </div>
              <span className="text-lg font-medium">Email</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;