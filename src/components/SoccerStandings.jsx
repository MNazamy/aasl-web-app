import {calculateStandings, sortSoccer} from './StandingsUtil'


function SoccerStandings(){

    const soccerStandingsHeader = [
    "Team Name", "MP", "Pts", "Record", "GD", "GF", "GA"
    ]


    const soccerStandings = calculateStandings('soccer-winter-23')
    soccerStandings.sort((a,b) => sortSoccer(a,b))

    
    return (
        <div className="standings-table-container">
            <h5>Standings</h5>
            <div className='standings-table'>
                <div className="soccer-standing-row standing-row" key='header'>
                    {soccerStandingsHeader.map( colName => {
                        return (<p className="header-row" key={colName}>{colName}</p>)
                    })}
                </div>
                {soccerStandings.map( team => {
                    return(
                    <div className='soccer-standing-row standing-row' key={team.teamName}>
                        <p key='name'>{team.teamName}</p>
                        <p key='mp'>{team.matchesPlayed}</p>
                        <p key='points'>{team.points}</p>
                        <p key='record'>{team.numWins}-{team.numTies}-{team.numLosses}</p>
                        <p key='diff'>{team.scored-team.conceded}</p>
                        <p key='scored'>{team.scored}</p>
                        <p key='conceded'>{team.conceded}</p>
                    </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default SoccerStandings