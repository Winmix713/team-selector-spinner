
import { motion } from "framer-motion"
import { ChevronRight, Users, BarChart2 } from "lucide-react"

interface TeamHeaderProps {
  name: string
  logoUrl: string
  stats: {
    users: number
    accuracy: number
    tipsPerDay: number
  }
}

export function TeamHeader({ name, logoUrl, stats }: TeamHeaderProps) {
  return (
    <div className="relative overflow-hidden pb-32 pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1120] to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-white mb-8"
        >
          {name}
        </motion.h1>

        <div className="flex items-center space-x-4 mb-8">
          <button className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-500 px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <span>Statisztika</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <span>H2H elemzés</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6"
          >
            <div className="text-gray-400 mb-2 flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Felhasználók</span>
            </div>
            <div className="text-4xl font-bold text-white">{stats.users}K+</div>
            <div className="text-gray-400 text-sm">Aktív tippelő</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6"
          >
            <div className="text-gray-400 mb-2 flex items-center space-x-2">
              <BarChart2 className="w-5 h-5" />
              <span>Pontosság</span>
            </div>
            <div className="text-4xl font-bold text-white">{stats.accuracy}%</div>
            <div className="text-gray-400 text-sm">Legjobb tippelő</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-6"
          >
            <div className="text-gray-400 mb-2 flex items-center space-x-2">
              <BarChart2 className="w-5 h-5" />
              <span>Mérkőzések</span>
            </div>
            <div className="text-4xl font-bold text-white">{stats.tipsPerDay}K+</div>
            <div className="text-gray-400 text-sm">Tipp naponta</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
