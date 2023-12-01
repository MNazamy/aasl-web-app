import basketballSchedule from '../data/basketballSchedule'
import soccerSchedule from '../data/soccerSchedule'

function Schedule(league){
    const scheduleHeader = [
        "Time", "Home", "", "Away"
    ]

    const leagueSchedule = league.league=='soccer-winter-23'? soccerSchedule : basketballSchedule 
    
    return (
        <div className="schedule-table-container">
        <h5>Schedule</h5>
        <div className='schedule-table'>
            <div className="schedule-row">
                {scheduleHeader.map( colName => {
                    return (<p className='header-row' key={colName}>{colName}</p>)
                })}
            </div>
            {leagueSchedule.map( matchweek => {
                return(
                    <div className='matchweek-box' key={matchweek.week}>
                        <div className='matchweek-title'>
                            <p className='matchweek'>{matchweek.week}</p>
                        </div>
                        <div className='matchweek-fixtures'>
                            {matchweek.matches.map( match => {
                                return(
                                    <div className='schedule-row' key={match.home+'-'+match.away}>
                                        <p>{match.time}</p>
                                        <p>{match.home}</p>
                                        <p><b style={{color:"orange"}}>{match.score}</b></p>
                                        <p>{match.away}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                        {matchweek?.bye?.length>0 &&
                            <div className='matchweek-byes'>
                                <p className='bye'><u>Byes:   </u></p>
                                {matchweek.bye.map( team => <p className='bye' key={team}><i>{team}</i></p>)}
                            </div>
                        }
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Schedule