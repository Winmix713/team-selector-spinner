
import { TeamSelector } from "@/components/team-selector"
import { useState } from "react"
import { motion } from "framer-motion"

interface Team {
  id: string
  name: string
  logoUrl: string
  weight?: number
  league: string
}

// Updated teams data with Premier League teams
const teams: Team[] = [
  { id: "arsenal", name: "London Ágyúk", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t3.png", weight: 1.0, league: "premier-league" },
  { id: "astonvilla", name: "Aston Oroszlán", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t7.png", league: "premier-league" },
  { id: "brentford", name: "Brentford", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t94.png", league: "premier-league" },
  { id: "brighton", name: "Brighton", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t36.png", league: "premier-league" },
  { id: "chelsea", name: "Chelsea", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t8.png", weight: 0.9, league: "premier-league" },
  { id: "palace", name: "Crystal Palace", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t31.png", league: "premier-league" },
  { id: "everton", name: "Everton", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t11.png", league: "premier-league" },
  { id: "fulham", name: "Fulham", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t54.png", league: "premier-league" },
  { id: "liverpool", name: "Liverpool", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t14.png", weight: 0.9, league: "premier-league" },
  { id: "mancity", name: "Manchester Kék", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t43.png", weight: 0.8, league: "premier-league" },
  { id: "newcastle", name: "Newcastle", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t4.png", league: "premier-league" },
  { id: "nottingham", name: "Nottingham", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t17.png", league: "premier-league" },
  { id: "tottenham", name: "Tottenham", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t6.png", weight: 1.1, league: "premier-league" },
  { id: "manutd", name: "Vörös Ördögök", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t1.png", weight: 0.9, league: "premier-league" },
  { id: "westham", name: "West Ham", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t21.png", league: "premier-league" },
  { id: "wolves", name: "Wolverhampton", logoUrl: "https://resources.premierleague.com/premierleague/badges/50/t39.png", league: "premier-league" }
].sort((a, b) => a.name.localeCompare(b.name))

const Index = () => {
  const [homeTeam, setHomeTeam] = useState(teams[0])
  const [awayTeam, setAwayTeam] = useState(teams[1])

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Team Selection</h1>
          <p className="text-white/80">Choose your teams for the match</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center content-center">
          <TeamSelector
            title="HOME TEAM"
            teams={teams}
            selectedTeam={homeTeam}
            onSelect={setHomeTeam}
            disabledTeamId={awayTeam.id}
            type="home"
          />
          <TeamSelector
            title="AWAY TEAM"
            teams={teams}
            selectedTeam={awayTeam}
            onSelect={setAwayTeam}
            disabledTeamId={homeTeam.id}
            type="away"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Index
