
import { Home, Users, BarChart2, Settings, LogIn } from "lucide-react"
import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1120]/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BarChart2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-white">WINMIX</span>
              <span className="text-sm text-gray-400">TIPSTER</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Home className="w-5 h-5" />
              <span>Főoldal</span>
            </Link>
            <Link to="/teams" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Users className="w-5 h-5" />
              <span>Csapatok</span>
            </Link>
            <Link to="/matches" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <BarChart2 className="w-5 h-5" />
              <span>Mérkőzések</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
              <span>Rendszer</span>
            </Link>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <LogIn className="w-5 h-5" />
            <span>Bejelentkezés</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
