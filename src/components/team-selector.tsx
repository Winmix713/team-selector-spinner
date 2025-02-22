
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown, Home, Plane } from "lucide-react"
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
  disabledTeamId?: string
  type: "home" | "away"
}

export function TeamSelector({ title, teams, selectedTeam, onSelect, disabledTeamId, type }: TeamSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const filteredTeams = teams.filter(team => team.id !== disabledTeamId)

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="w-full max-w-[var(--team-card-width)]"
    >
      <Card className="glass-card h-[var(--team-card-height)] rounded-3xl relative overflow-visible">
        <div className="p-8 h-full flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8">
            {type === "home" ? (
              <Home className="w-5 h-5 text-gray-600" />
            ) : (
              <Plane className="w-5 h-5 text-gray-600" />
            )}
            <h2 className="text-lg font-semibold tracking-wide text-gray-800">{title}</h2>
          </div>

          <div className="flex-grow flex items-center justify-center relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTeam.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <img
                    src={selectedTeam.logoUrl}
                    alt={selectedTeam.name}
                    className="w-32 h-32 mx-auto mb-6 drop-shadow-lg"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedTeam.name}</h3>
                <p className="text-gray-500 text-sm">{selectedTeam.league}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full relative">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex items-center justify-between transition-colors border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <img src={selectedTeam.logoUrl} alt={selectedTeam.name} className="w-8 h-8" />
                <span className="font-medium text-gray-700">{selectedTeam.name}</span>
              </div>
              <ChevronDown className={cn(
                "w-5 h-5 text-gray-500 transition-transform duration-300",
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
                  className="absolute bottom-full mb-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 py-2 dropdown-blur team-dropdown-content z-50"
                >
                  {filteredTeams.map((team) => (
                    <motion.button
                      key={team.id}
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                      onClick={() => {
                        onSelect(team)
                        setIsOpen(false)
                      }}
                      className="w-full px-4 py-2 flex items-center gap-3 transition-colors"
                    >
                      <img src={team.logoUrl} alt={team.name} className="w-8 h-8" />
                      <span className="font-medium text-gray-700">{team.name}</span>
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

