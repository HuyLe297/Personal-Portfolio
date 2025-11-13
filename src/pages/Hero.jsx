import React from 'react'

function Hero() {
  return (
    <section id = "hero" className='min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800'>
      <div className='text-center px-6'>
      <h1 className='text-5xl md:text-7xl font-bold md-6 '>
         Hi, I'm <span className="text-amber-300">Le Duc Huy</span>
      </h1>
       <p className="text-xl md:text-3xl text-textSub mb-10 leading-relaxed">
          I'm a passionate <span className="text-amber-300 font-bold">Front-End Developer</span> who loves building modern, responsive websites with{" "}
          <span className="text-amber-300 font-bold">React</span> and{" "}
          <span className="text-amber-300 font-bold">TailwindCSS</span>.
        </p>
      <a href="#proejcts" className='inline-block bg-sky-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-300 transition shadow-lg'> View my work</a>
      </div>
    </section>
  )
}

export default Hero