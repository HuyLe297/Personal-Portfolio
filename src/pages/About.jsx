function About() {
  return (
    <section id="about" className=" min-h-screen py-24 bg-slate-800 flex items-center">
      <div className="max-w-3xl mx-auto px-6 text-center ">
        <h2 className="text-5xl md:text-6xl font-bold  mb-10 text-sky-300">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-loose max-w-2xl mx-auto">
          I'm <strong className="text-amber-300 ">Front-End Developer</strong> passionate about building beautiful, smooth interfaces with
          <strong className="text-amber-300">React</strong> and <strong className="text-amber-300">TailwindCSS</strong>. 
           I love to learn, do real projects and always try to write clean, maintainable code.
        </p>
      </div>
    </section>
  );
}

export default About;