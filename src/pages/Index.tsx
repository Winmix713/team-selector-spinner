import { TeamSelector } from "@/components/team-selector"
import { Navigation } from "@/components/navigation"
import { useState } from "react"
import { motion } from "framer-motion"

interface Team {
  id: string
  name: string
  logoUrl: string
  weight?: number
  league: string
}

const teams: Team[] = [
  { id: "arsenal", name: "London Ágyúk", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t3.svg", weight: 1.0, league: "premier-league" },
  { id: "astonvilla", name: "Aston Oroszlán", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t7.svg", league: "premier-league" },
  { id: "brentford", name: "Brentford", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t94.svg", league: "premier-league" },
  { id: "brighton", name: "Brighton", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t36.svg", league: "premier-league" },
  { id: "chelsea", name: "Chelsea", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t8.svg", weight: 0.9, league: "premier-league" },
  { id: "palace", name: "Crystal Palace", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t31.svg", league: "premier-league" },
  { id: "everton", name: "Everton", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t11.svg", league: "premier-league" },
  { id: "fulham", name: "Fulham", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t54.svg", league: "premier-league" },
  { id: "liverpool", name: "Liverpool", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t14.svg", weight: 0.9, league: "premier-league" },
  { id: "mancity", name: "Manchester Kék", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t43.svg", weight: 0.8, league: "premier-league" },
  { id: "newcastle", name: "Newcastle", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t4.svg", league: "premier-league" },
  { id: "nottingham", name: "Nottingham", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t17.svg", league: "premier-league" },
  { id: "tottenham", name: "Tottenham", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t6.svg", weight: 1.1, league: "premier-league" },
  { id: "manutd", name: "Vörös Ördögök", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t1.svg", weight: 0.9, league: "premier-league" },
  { id: "westham", name: "West Ham", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t21.svg", league: "premier-league" },
  { id: "wolves", name: "Wolverhampton", logoUrl: "https://resources.premierleague.com/premierleague/badges/rb/t39.svg", league: "premier-league" }
].sort((a, b) => a.name.localeCompare(b.name))

const Index = () => {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0)
  const selectedTeam = teams[selectedTeamIndex]

  const handleTeamChange = (direction: 'prev' | 'next') => {
    setSelectedTeamIndex(currentIndex => {
      if (direction === 'next') {
        return (currentIndex + 1) % teams.length
      }
      return currentIndex - 1 < 0 ? teams.length - 1 : currentIndex - 1
    })
  }

  return (
    <div className="min-h-screen w-full bg-black text-gray-300 overflow-x-hidden">
      <Navigation />
      
      <main>
        <section className="relative min-h-[80vh] flex items-center pt-28 pb-16 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-blue-950/20 to-black/95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.15),transparent_45%)]" />
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "radial-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }} />
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: Text Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-full backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                  <p className="text-xs font-medium text-blue-300">Tippelj mérkőzésekre és nyerj jutalmakat</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  <span className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
                    Emeld új szintre
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
                    mérkőzés tippjeidet
                  </span>
                </h1>
              </motion.div>

              {/* Right Column: Team Selector Card */}
              <motion.div 
                className="relative mx-auto lg:mx-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <TeamSelector
                  title="HAZAI CSAPAT"
                  teams={teams}
                  selectedTeam={selectedTeam}
                  onSelect={(team) => setSelectedTeamIndex(teams.findIndex(t => t.id === team.id))}
                  onPrevious={() => handleTeamChange('prev')}
                  onNext={() => handleTeamChange('next')}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Index
