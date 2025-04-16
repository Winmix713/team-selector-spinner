import { TeamSelector } from "@/components/team-selector"
import { Navigation } from "@/components/navigation"
import { TeamHeader } from "@/components/team-header"
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
  const [homeTeamIndex, setHomeTeamIndex] = useState(0)
  const [awayTeamIndex, setAwayTeamIndex] = useState(1)

  const homeTeam = teams[homeTeamIndex]
  const awayTeam = teams[awayTeamIndex]

  const handleHomeTeamChange = (direction: 'prev' | 'next') => {
    setHomeTeamIndex(currentIndex => {
      let newIndex
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % teams.length
      } else {
        newIndex = currentIndex - 1 < 0 ? teams.length - 1 : currentIndex - 1
      }
      if (newIndex === awayTeamIndex) {
        if (direction === 'next') {
          newIndex = (newIndex + 1) % teams.length
        } else {
          newIndex = newIndex - 1 < 0 ? teams.length - 1 : newIndex - 1
        }
      }
      return newIndex
    })
  }

  const handleAwayTeamChange = (direction: 'prev' | 'next') => {
    setAwayTeamIndex(currentIndex => {
      let newIndex
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % teams.length
      } else {
        newIndex = currentIndex - 1 < 0 ? teams.length - 1 : currentIndex - 1
      }
      if (newIndex === homeTeamIndex) {
        if (direction === 'next') {
          newIndex = (newIndex + 1) % teams.length
        } else {
          newIndex = newIndex - 1 < 0 ? teams.length - 1 : newIndex - 1
        }
      }
      return newIndex
    })
  }

  return (
    <div className="min-h-screen w-full bg-[#0f1120] overflow-x-hidden">
      <Navigation />
      
      <TeamHeader 
        name={homeTeam.name}
        logoUrl={homeTeam.logoUrl}
        stats={{
          users: 10,
          accuracy: 87,
          tipsPerDay: 5
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center content-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/10 to-[#0EA5E9]/10 rounded-3xl blur-3xl -z-10" />
          
          <TeamSelector
            title="HAZAI CSAPAT"
            teams={teams}
            selectedTeam={homeTeam}
            onSelect={(team) => setHomeTeamIndex(teams.findIndex(t => t.id === team.id))}
            disabledTeamId={awayTeam.id}
            type="home"
            onPrevious={() => handleHomeTeamChange('prev')}
            onNext={() => handleHomeTeamChange('next')}
          />
          <TeamSelector
            title="VENDÉG CSAPAT"
            teams={teams}
            selectedTeam={awayTeam}
            onSelect={(team) => setAwayTeamIndex(teams.findIndex(t => t.id === team.id))}
            disabledTeamId={homeTeam.id}
            type="away"
            onPrevious={() => handleAwayTeamChange('prev')}
            onNext={() => handleAwayTeamChange('next')}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Index
