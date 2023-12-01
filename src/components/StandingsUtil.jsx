import basketballSchedule from '../data/basketballSchedule'
import soccerSchedule from '../data/soccerSchedule'

const basketballTeams = ["Prodigy", "Squad UP", "Scary Hours", "Synergy Hoops", "Empire", "Jersey Elite", "Monstarz", "Kandahar Kingz", "Queens Finest", "Badri313", "Bullets"]

const soccerTeams = ["Brishna FC", "Brishna Youth 1", "Brishna Youth 2", "Lapis Leopards", "Zalzala FC", "Ittihad Samba", "Aria Kabab"]


export function calculateStandings(league) {
    
    // create object for each team
    const teamsList = league=='soccer-winter-23'? soccerTeams : basketballTeams 
    const teamStats = {}

    teamsList.forEach( team => {
        teamStats[team] = {
            teamName: team,
            matchesPlayed: 0,
            numWins: 0,
            numTies: 0,
            numLosses: 0,
            scored: 0,
            conceded: 0,
                // basketball stats
            avgScored: 0.0,
            avgConceded: 0.0,
            winPercentage: 0.0,
            avgDiff: 0.0,
                // soccer stats
            diff: 0,
            points: 0,
            teamsBeat: []  // used for head-to-head. if you beat a team they will be added to your list
        }
    })


    // obtain proper schedule to read
    const leagueSchedule = league=='soccer-winter-23'? soccerSchedule : basketballSchedule 
    const completedMatchWeeks = leagueSchedule.filter( week => week.completed===true)

    // iterate through each completed week to add stats
    completedMatchWeeks.forEach(matchweek => {
        
        // iterate through each match and add stats to each team
        matchweek.matches.forEach(match => {
            const homeTeam = String(match.home)
            const awayTeam = String(match.away)


            // add points for each team
            const points = match.score.split('-')
            const homePointsScored = parseInt(points[0])
            const awayPointsScored = parseInt(points[1])

            teamStats[homeTeam].scored += homePointsScored
            teamStats[homeTeam].conceded += awayPointsScored

            teamStats[awayTeam].scored += awayPointsScored
            teamStats[awayTeam].conceded += homePointsScored

            // add win/losses/ties
            if (homePointsScored > awayPointsScored){
                teamStats[homeTeam].numWins +=1
                teamStats[awayTeam].numLosses +=1  
                teamStats[homeTeam].teamsBeat.push(awayTeam)
            }
            else if (homePointsScored < awayPointsScored){
                teamStats[awayTeam].numWins +=1  
                teamStats[homeTeam].numLosses +=1
                teamStats[awayTeam].teamsBeat.push(homeTeam)

            }
            else {
                teamStats[homeTeam].numTies +=1
                teamStats[awayTeam].numTies +=1
            }
        })

    })

    const standingsArray = []


    // iterate through each team to compute more metrics and push to standings array
    Object.keys(teamStats).forEach( team => {
        teamStats[team].matchesPlayed = teamStats[team].numWins + teamStats[team].numLosses + teamStats[team].numTies

        teamStats[team].diff = teamStats[team].scored - teamStats[team].conceded

        // stats used for basketball
        teamStats[team].avgScored = teamStats[team].scored/teamStats[team].matchesPlayed || 0
        teamStats[team].avgConceded = teamStats[team].conceded/teamStats[team].matchesPlayed || 0
        teamStats[team].avgDiff =  teamStats[team].avgScored - teamStats[team].avgConceded
        teamStats[team].winPercentage = teamStats[team].numWins/teamStats[team].matchesPlayed
        teamStats[team].points =  3*teamStats[team].numWins + teamStats[team].numTies
        
        
        standingsArray.push(teamStats[team])
    })



    return standingsArray
}

export function sortBasketball( teamA, teamB){

        // main tiebreaker -- win percentage
    if(teamA.winPercentage > teamB.winPercentage) return -1
    else if(teamB.winPercentage > teamA.winPercentage) return 1

    else{

            // second tiebreaker -- head to head
        if (teamA.teamsBeat.includes(teamB.teamName)) return -1
        else if (teamB.teamsBeat.includes(teamA.teamName)) return 1
        else{

                // third tiebreaker -- diff
            if(teamA.avgDiff > teamB.avgDiff) return -1
            else if (teamB.avgDiff > teamA.avgDiff) return 1
            else return 0
        }
    }
}

export function sortSoccer( teamA, teamB){

        // main tiebreaker -- points
    if(teamA.points > teamB.points) return -1
    else if(teamB.points > teamA.points) return 1

    else{
            // second tiebreaker -- goal diff
        if (teamA.diff > teamB.diff) return -1
        else if (teamB.diff > teamA.diff) return 1
        else{

            // third tiebreaker -- goals scored
            if(teamA.scored > teamB.scored) return -1
            else if (teamB.scored > teamA.scored) return 1
            else {

                // fourth tiebreaker -- goals conceded
                if(teamA.conceded > teamB.conceded) return -1
                else if (teamB.conceded > teamA.conceded) return 1
            }
        }
    }
}