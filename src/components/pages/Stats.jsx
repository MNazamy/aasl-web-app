import '../../App.css'
import {useState, useEffect} from 'react'
import { Dropdown } from 'primereact/dropdown';
import leagueOptions from '../../data/leagueOptions';
import BasketballStandings from '../BasketballStandings'
import SoccerStandings from '../SoccerStandings'
import Schedule from '../Schedule'

function Stats() {

  const [selectedLeague, setSelectedLeague] = useState(null)


  return (
    <>
    <h1 className='page-title ml-100'>League Stats and Schedules</h1>
    <div className="stats-page-container">
      <Dropdown 
        value={selectedLeague} onChange={(e) => setSelectedLeague(e.value)} 
        options={leagueOptions} optionLabel="label" 
        placeholder="Select a League" className="dropdown"/>
      {selectedLeague=="basketball-winter-23" && (
        <div className="stats-container">
          <BasketballStandings />
          <Schedule league={selectedLeague} />
        </div> 
      )}
      {selectedLeague=="soccer-winter-23" && (
        <div className="stats-container">
          <SoccerStandings />
          <Schedule league={selectedLeague} />
        </div>
      )
      }

    </div>
    </>
  )
}

export default Stats