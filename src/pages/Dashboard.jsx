
import React from 'react';
// components
import { Header as PageHeader } from '../components/layout/Header';
import AppGrid from '../layout/AppGrid';
import TeamStats from '../widgets/TeamStats';
import Points from '../widgets/Points';
import Attendance from '../widgets/Attendance';
import TrainingPaceChart from '../widgets/TrainingPaceChart';
import MatchLiveReport from '../widgets/MatchLiveReport';
import WidgetGroup from '../components/WidgetGroup';
import TeamFullInfo from '../widgets/TeamFullInfo';
import TeamResults from '../widgets/TeamResults';
import LeagueStandings from '../widgets/LeagueStandings';

const widgets = {
    team_stats: <TeamStats/>,
    attendance:
        <WidgetGroup>
            <Points/>
            <Attendance/>
        </WidgetGroup>
    ,
    training_pace: <TrainingPaceChart/>,
    live_report: <MatchLiveReport/>,
    team_full_info: <TeamFullInfo id="bayern"/>,
    team_results: <TeamResults/>,
    league_standings: <LeagueStandings/>
}

const Dashboard = () => {
    return (
        <>
            <PageHeader title="Club summary"/>
            <AppGrid id="club_summary" widgets={widgets}/>
        </>
    )
}

export default Dashboard
