import '../App.css'
import winterLeagueFlyer from '../assets/winter_league_flier.jpg'

function Home() {

  return (
    <div className='home-page-container'>
      <div className="something">
        <h3>Welcome to the Afghan American Sports League (AASL) Website!</h3>
        <p>Use this website for information on league statuses, and contact information!</p>
        <p>League standings and schedules can be found in the 'Stats' section in the navigation</p>
      </div>
      <div className='home-page-flier-div'>
        <img className='home-page-flier' src={winterLeagueFlyer}/>
      </div>
    </div>
  )
}

export default Home
