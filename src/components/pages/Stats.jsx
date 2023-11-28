import '../../App.css'
import {useState, useEffect} from 'react'
import { Dropdown } from 'primereact/dropdown';
import leagueOptions from '../../data/leagueOptions';

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
      {selectedLeague!=null && (
        <div className="stats-container">
          <div className="schedule">Schedule for {selectedLeague}</div>
          <div className="standings">Standings</div>
        </div>
      )}

    </div>
    </>
  )
}

export default Stats