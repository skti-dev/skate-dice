const allStances = ["Regular", "Switch", "Fakie", "Nollie", false]
const allDirections = ["Backside", "Frontside", false]
const allSpins = ["180", "360", false]
const allTricks = [
  // Ollie
  {name: "Ollie", spinnable: true, hasDirections: true}, //  reverse: false, bodyVarial: true
  // Shove it
  {name: "BS Shove It", spinnable: true, hasDirections: false}, //  reverse: true, bodyVarial: true
  {name: "FS Shove It", spinnable: true, hasDirections: false}, //  reverse: true, bodyVarial: true
  // Flip
  {name: "Flip", spinnable: true, hasDirections: true}, //  reverse: false, bodyVarial: true
  {name: "Varial Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  {name: "360 Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  {name: "Hardflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  {name: "360 Hardflip", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
  // Heelflip
  {name: "Heelflip", spinnable: true, hasDirections: true}, //  reverse: false, bodyVarial: true
  {name: "Varial Heelflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  {name: "Laser Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  {name: "Inward Heelflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  {name: "360 Inward Heelflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  // Big Spin
  {name: "Big Spin", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  {name: "Big Spin Flip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  {name: "Big Spin Heelflip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  // Bigger Spin
  {name: "Bigger Spin", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  {name: "Bigger Spin Flip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  {name: "Bigger Spin Heelflip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  // Gazelle Spin
  {name: "Gazelle Spin", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  {name: "Gazelle Spin Flip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  {name: "Gazelle Spin Heelflip", spinnable: false, hasDirections: true}, //  reverse: false, bodyVarial: false
  // Pressure
  {name: "Pressure Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  {name: "Pressure Hardflip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: true
  // Impossible
  {name: "Impossible", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
  // Casper
  {name: "Casper Flip", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
  {name: "Alpha Flip", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
  // Dolphin
  {name: "Dolphin Flip", spinnable: false, hasDirections: false}, //  reverse: true, bodyVarial: false
  {name: "Dragon Flip", spinnable: false, hasDirections: false}, //  reverse: false, bodyVarial: false
  // Old School
  {name: "Old School Flip", spinnable: true, hasDirections: true}, //  reverse: false, bodyVarial: true
  {name: false, spinnable: true, hasDirections: true}
]

export default { allStances, allDirections, allSpins, allTricks }