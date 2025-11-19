import React from 'react'

import weatherImg from '../assets/weather.png';
import portfolioImg from '../assets/portfolio.png';
import todoxImg from '../assets/todox.png'

function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 bg-slate-800 flex items-center">
      <div className="text-center max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Dự án 1: JobFinder AI */}
          <div className="group bg-slate-700 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src={todoxImg} 
              alt="JobFinder AI" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">ToDoX</h3>
              <p className="text-gray-300 mb-4">
                Web Todo-List, cho phép xem thêm xóa sửa các công việc cần làm dùng ReactJs TailwindCSS + ExpressJS + MongoDB
              </p>
              <div className="flex gap-3">
                <a href="https://drive.google.com/file/d/1DCbjEOw3PQoY4KOmNgA90bnmbJ0ZROVt/view?usp=drive_link" className="flex-1 bg-sky-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all hover:bg-sky-500">
                  Live Demo
                </a>
                <a href="https://github.com/HuyLe297/Todo-List" className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all hover:bg-gray-500">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Dự án 2: Weather App */}
          <div className="group bg-slate-700 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src={weatherImg} 
              alt="Weather App" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Weather Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Hiển thị thời tiết theo thành phố, dự báo 7 ngày, API OpenWeather, responsive.
              </p>
              <div className="flex gap-3">
                <a href="https://my-weather-app-three-zeta.vercel.app/" className="flex-1 bg-sky-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all hover:bg-sky-500">
                  Live Demo
                </a>
                <a href="https://github.com/HuyLe297/Weather-App" className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all hover:bg-gray-500">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Dự án 3: Personal Portfolio */}
          <div className="group bg-slate-700 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img 
              src={portfolioImg} 
              alt="Personal Portfolio" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Personal Portfolio</h3>
              <p className="text-gray-300 mb-4">
                Trang cá nhân giới thiệu kỹ năng, dự án, dùng React + TailwindCSS.
              </p>
              <div className="flex gap-3">
                <a href="https://personal-portfolio-swart-delta.vercel.app/" className="flex-1 bg-sky-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all hover:bg-sky-500">
                  Live Demo
                </a>
                <a href="https://github.com/HuyLe297/Personal-Portfolio" className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg text-center font-medium transition-all hover:bg-gray-500">
                  GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;