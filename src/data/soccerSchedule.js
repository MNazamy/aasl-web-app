const soccerSchedule = [
    {
        week: "Week 1: 12/02",
        completed: true,
        matches: [
            {
                home: "Brishna Youth 2",
                score: "3-4",
                away: "Lapis Leopards",
                time: "11:00AM",
            },
            {
                home: "Aria Kabab",
                score: "1-2",
                away: "Brishna Youth 1",
                time: "12:00PM",
            },
            {
                home: "Zalzala FC",
                score: "1-8",
                away: "Ittihad Samba",
                time: "1:00PM",
            }
        ],
        bye: ["Brishna FC"]
    },
    {
        week: "Week 2: 12/09",
        complete: false,
        matches: [
            {
                home: "Brishna FC",
                away: "Ittihad Samba",
                time: "11:00AM",
                score: null,
            },
            {
                home: "Brishna Youth 1",
                away: "Zalzala FC",
                time: "12:00PM",
                score: null,                
            },
            {
                home: "Brishna Youth 2",
                away: "Aria Kabab",
                time: "1:00PM",
                score: null,
            }
        ],
        bye: ["Lapis Leopards"]
    },
    {
        week: "Week 3: 12/16/23",
        completed: false,
        matches: [
            {
                home: "Brishna Youth 2",
                away: "Aria Kabab",
                time: "11:00AM",
                score: null,
            },
            {
                home: "Brishna FC",
                away: "Zalzala FC",
                time: "12:00PM",
                score: null,                
            },
            {
                home: "Lapis Leopards",
                away: "Ittihad Samba",
                time: "1:00PM",
                score: null,
            }
        ],
        bye: ["Brishna Youth 1"]
    },
    {
        week: "Week 4: 01/06/24",
        completed: false,
        matches: [
            {
                home: "Lapis Leopards",
                away: "Zalzala FC",
                time: "11:00AM",
                score: null,
            },
            {
                home: "Brishna Youth 1",
                away: "Ittihad Samba",
                time: "12:00PM",
                score: null,                
            },
            {
                home: "Brishna FC",
                away: "Aria Kabab",
                time: "1:00PM",
                score: null,
            }
        ],
        bye: ["Brishna Youth 2"]
    },
    {
        week: "Week 5: 01/13/24",
        completed: false,
        matches: [
            {
                home: "Brishna FC",
                away: "Brishna Youth 2",
                time: "11:00AM",
                score: null,
            },
            {
                home: "Lapis Leopards",
                away: "Aria Kabab",
                time: "12:00PM",
                score: null,                
            },
            {
                home: "Zalzala FC",
                away: "Brishna Youth 1",
                time: "1:00PM",
                score: null,
            }
        ],
        bye: ["Ittihad Samba"]
    },
    {
        week: "Week 6: 01/20/24",
        completed: false,
        matches: [
            {
                home: "Brishna FC",
                away: "Lapis Leopards",
                time: "11:00AM",
                score: null,
            },
            {
                home: "Brishna Youth 1",
                away: "Brishna Youth 2",
                time: "12:00PM",
                score: null,                
            },
            {
                home: "Aria Kabab",
                away: "Ittihad Samba",
                time: "1:00PM",
                score: null,
            }
        ],
        bye: ["Zalzala FC"]
    },
    {
        week: "Week 7: 01/27/24",
        completed: false,
        matches: [
            {
                home: "Lapis Leopards",
                away: "Brishna Youth 1",
                time: "11:00AM",
                score: null,
            },
            {
                home: "Ittihad Samba",
                away: "Brishna Youth 2",
                time: "12:00PM",
                score: null,                
            },
            {
                home: "Zalzala FC",
                away: "Brishna FC",
                time: "1:00PM",
                score: null,
            }
        ],
        bye: ["Aria Kabab"]
    },
    {
        week: "Week 8: 02/03/24",
        completed: false,
        matches: [
            {
                home: "Brishna Youth 2",
                away: "Ittihad Samba",
                time: "11:00AM",
                score: null,
            },
            {
                home: "Zalzala FC",
                away: "Aria Kabab",
                time: "12:00PM",
                score: null,                
            },
            {
                home: "Brishna FC",
                away: "Brishna Youth 1",
                time: "1:00PM",
                score: null,
            }
        ],
        bye: ["Lapis Leopards"]
    },
    {
        week: "PLAYOFFS: 02/10/24",
        completed: false,
        matches: [
            {
                home: "4th Seed",
                away: "7th Seed",
                time: "11:00AM",
                score: "WC1",
            },
            {
                home: "5th Seed",
                away: "6th Seed",
                time: "12:00PM",
                score: "WC2",                
            },
            {
                home: "WC1",
                away: "WC2",
                time: "1:00PM",
                score: "QF",
            }
        ],
        bye: ["1st Seed", "2nd Seed", "3rd Seed"]
    },
    {
        week: "SEMIS 1st Leg: 02/17/2024",
        completed: false,
        matches: [
            {
                home: "2nd Seed",
                away: "3rd Seed",
                time: "11:00AM",
                score: null,
            },
            {
                home: "1st Seed",
                away: "QF",
                time: "12:00PM",
                score: null,                
            }
        ],
        bye: []
    },
    {
        week: "Semis 2nd Leg: 02/24/2024",
        completed: false,
        matches: [
            {
                home: "2nd Seed",
                away: "3rd Seed",
                time: "11:00AM",
                score: "S1",
            },
            {
                home: "1st Seed",
                away: "QF",
                time: "12:00PM",
                score: "S2",                
            }
        ],
        bye: []
    },
    {
        week: "CHAMPIONSHIP: 03/02/24",
        completed: false,
        matches: [
            {
                home: "S1",
                away: "S2",
                time: "TBD",
                score: "FINAL",
            }
        ],
        bye: []
    },
]

export default soccerSchedule