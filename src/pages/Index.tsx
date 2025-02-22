
import { TeamSelector } from "@/components/team-selector"
import { useState } from "react"

// Sample data
const teams = [
  {
    id: "1",
    name: "Arsenal",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    league: "Premier League"
  },
  {
    id: "2",
    name: "Manchester United",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    league: "Premier League"
  },
  {
    id: "3",
    name: "Liverpool",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    league: "Premier League"
  }
]

const Index = () => {
  const [homeTeam, setHomeTeam] = useState(teams[0])
  const [awayTeam, setAwayTeam] = useState(teams[1])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Team Selector</h1>
          <p className="mt-4 text-lg text-gray-600">Select your teams for the match</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <TeamSelector
            title="Home Team"
            teams={teams}
            selectedTeam={homeTeam}
            onSelect={setHomeTeam}
            disabledTeamId={awayTeam.id}
            type="home"
          />
          <TeamSelector
            title="Away Team"
            teams={teams}
            selectedTeam={awayTeam}
            onSelect={setAwayTeam}
            disabledTeamId={homeTeam.id}
            type="away"
          />
        </div>
      </div>
    </div>
  )
}

export default Index

