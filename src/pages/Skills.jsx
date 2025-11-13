import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import tailwindIcon from '../assets/tailwind.png';
import laravelIcon from '../assets/laravel.png';

import vscodeIcon from '../assets/vscode.png';
import gitIcon from '../assets/git.png';
import figmaIcon from '../assets/figma.png';
import postmanIcon from '../assets/postman.png';
import githubIcon from '../assets/github.png';
import mysqlIcon from '../assets/mysql.png';

function Skills() {
  return (
    <section id="skills" className="min-h-screen py-24 bg-slate-900 flex items-center">
      <div className="text-center max-w-6xl mx-auto px-6 space-y-20">

        {/* ===== SKILLS ===== */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
            My Tech
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

            {/* HTML */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-sky-600 flex flex-col items-center">
                <img src={htmlIcon} alt="HTML" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">HTML</p>
              </div>
            </div>

            {/* CSS */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-sky-600 flex flex-col items-center">
                <img src={cssIcon} alt="CSS" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">CSS</p>
              </div>
            </div>

            {/* JavaScript */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-sky-600 flex flex-col items-center">
                <img src={javascriptIcon} alt="JavaScript" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">JavaScript</p>
              </div>
            </div>

            {/* React */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-sky-600 flex flex-col items-center">
                <img src={reactIcon} alt="React" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">React</p>
              </div>
            </div>

            {/* TailwindCSS */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-sky-600 flex flex-col items-center">
                <img src={tailwindIcon} alt="TailwindCSS" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">TailwindCSS</p>
              </div>
            </div>

            {/* Laravel */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-sky-600 flex flex-col items-center">
                <img src={laravelIcon} alt="Laravel" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">Laravel</p>
              </div>
            </div>

          </div>
        </div>
        {/* ===== TOOLS ===== */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
            My Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

            {/* VS Code */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-emerald-600 flex flex-col items-center">
                <img src={vscodeIcon} alt="VS Code" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">VS Code</p>
              </div>
            </div>

            {/* Git */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-emerald-600 flex flex-col items-center">
                <img src={gitIcon} alt="Git" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">Git</p>
              </div>
            </div>

            {/* Figma */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-emerald-600 flex flex-col items-center">
                <img src={figmaIcon} alt="Figma" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">Figma</p>
              </div>
            </div>

            {/* Postman */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-emerald-600 flex flex-col items-center">
                <img src={postmanIcon} alt="Postman" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">Postman</p>
              </div>
            </div>

            {/* GitHub */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-emerald-600 flex flex-col items-center">
                <img src={githubIcon} alt="GitHub" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">GitHub</p>
              </div>
            </div>

            {/* MySQL */}
            <div className="group">
              <div className="bg-slate-800 p-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:bg-emerald-600 flex flex-col items-center">
                <img src={mysqlIcon} alt="MySQL" className="w-16 h-16 mb-3 object-contain transition-all" />
                <p className="text-lg font-medium text-gray-300 group-hover:text-white">MySQL</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;