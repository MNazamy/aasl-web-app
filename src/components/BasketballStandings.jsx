import {calculateStandings, sortBasketball} from './StandingsUtil'


function BasketballStandings(){

    const basketballStandingsHeader = [
    "Team Name", "MP", "Record", "Avg PF", "Avg PA", "DIFF"
    ]

    // calculate the stats
    const basketballStats = calculateStandings('basketball-winter-23')

    // sort the array
    basketballStats.sort((a,b) => sortBasketball(a,b))

    return (
        <div className="standings-table-container">
            <h5>Standings</h5>
            <div className='standings-table'>
                <div className="basketball-standing-row standing-row">
                    {basketballStandingsHeader.map( colName => {
                        return (<p className="header-row" key={colName} >{colName}</p>)
                    })}
                </div>
                {basketballStats.map( team => {
                    return(
                        <div className='basketball-standing-row standing-row' key={team.teamName}>
                            <p key='standing-name'>{team.teamName}</p>
                            <p key='standing-mp'>{team.matchesPlayed}</p>
                            <p key='standing-record'>{team.numWins}-{team.numLosses}</p>
                            <p key='standing-avg-scored'>{team.avgScored}</p>
                            <p key='standing-avg-conceded'>{team.avgConceded}</p>
                            <p key='standing-avg-dif'>{team.avgDiff}</p>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default BasketballStandings