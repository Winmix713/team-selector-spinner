
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronLeft, ChevronRight, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

interface Team {
  id: string
  name: string
  logoUrl: string
  weight?: number
  league: string
}

interface TeamSelectorProps {
  title: string
  teams: Team[]
  selectedTeam: Team
  onSelect: (team: Team) => void
  onPrevious: () => void
  onNext: () => void
}

export function TeamSelector({ 
  title, 
  teams, 
  selectedTeam, 
  onSelect,
  onPrevious,
  onNext 
}: TeamSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="w-full max-w-[var(--team-card-width)]"
    >
      <Card className="glass-card h-[var(--team-card-height)] rounded-3xl relative overflow-visible border border-white/10 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/80 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
        <div className="p-8 h-full flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold tracking-wide text-white">{title}</h2>
          </div>

          <div className="flex-grow flex items-center justify-center relative w-full">
            <button 
              onClick={onPrevious}
              className="absolute left-0 text-gray-600 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTeam.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="text-center px-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-white/5 p-4 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <img
                      src={selectedTeam.logoUrl}
                      alt={selectedTeam.name}
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedTeam.name}</h3>
                <p className="text-blue-400 text-sm">{selectedTeam.league}</p>
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={onNext}
              className="absolute right-0 text-gray-600 hover:text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="w-full relative">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white/5 hover:bg-white/10 rounded-xl p-4 flex items-center justify-between transition-colors border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-white/5 p-1 flex items-center justify-center">
                  <img src={selectedTeam.logoUrl} alt={selectedTeam.name} className="w-full h-full object-contain" />
                </div>
                <span className="font-medium text-white">{selectedTeam.name}</span>
              </div>
              <ChevronDown className={cn(
                "w-5 h-5 text-gray-400 transition-transform duration-300",
                isOpen && "transform rotate-180"
              )} />
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute bottom-full mb-2 w-full backdrop-blur-xl bg-gray-900/95 rounded-xl border border-white/10 py-2 shadow-lg z-50"
                >
                  {teams.map((team) => (
                    <motion.button
                      key={team.id}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                      onClick={() => {
                        onSelect(team)
                        setIsOpen(false)
                      }}
                      className="w-full px-4 py-2 flex items-center gap-3 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-white/5 p-1 flex items-center justify-center">
                        <img src={team.logoUrl} alt={team.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="font-medium text-white">{team.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
