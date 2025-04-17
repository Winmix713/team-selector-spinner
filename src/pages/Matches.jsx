
import React from 'react';
// components
import { Header as PageHeader } from '../components/layout/Header';
import AppGrid from '../layout/AppGrid';
import ActiveMatchCard from '../widgets/ActiveMatchCard';
import MatchLiveEvents from '../widgets/MatchLiveEvents';
import HotField from '../widgets/HotField';
import TeamsLineups from '../widgets/TeamsLineups';
import ActiveActionsChart from '../widgets/ActiveActionsChart';
import PassesPolarChart from '../widgets/PassesPolarChart';
import PlayerFullInfo from '../widgets/PlayerFullInfo';
import Merch from '../widgets/Merch';
import GeneralSupport from '../widgets/GeneralSupport';

const widgets = {
    active_match: <ActiveMatchCard />,
    match_live_events: <MatchLiveEvents />,
    hot_field: <HotField />,
    teams_lineups: <TeamsLineups />,
    active_actions: <ActiveActionsChart />,
    passes_polar_chart: <PassesPolarChart />,
    player_full_info: <PlayerFullInfo />,
    merch: <Merch />,
    support: <GeneralSupport />
}

const Matches = () => {
    return (
        <>
            <PageHeader title="Match Overview" />
            <AppGrid id="match_overview" widgets={widgets}/>
        </>
    )
}

export default Matches
