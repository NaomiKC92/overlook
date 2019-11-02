const testData = {
  users: [
    {
      id: 1,
      name: "Leatha Ullrich"
    },
    {
      id: 2,
      name: "Rocio Schuster"
    },
    {
      id: 3,
      name: "Kelvin Schiller"
    },
    {
      id: 4,
      name: "Kennedi Emard"
    },
    {
      id: 5,
      name: "Rhiannon Little"
    },
    {
      id: 6,
      name: "Fleta Schuppe"
    },
    {
      id: 7,
      name: "Dell Rath"
    },
    {
      id: 8,
      name: "Era Hand"
    },
    {
      id: 9,
      name: "Faustino Quitzon"
    },
    {
      id: 10,
      name: "Tony Armstrong"
    },
    {
      id: 11,
      name: "Melissa Sauer"
    },
    {
      id: 12,
      name: "Kari Keeling"
    },
    {
      id: 13,
      name: "Christina Kulas"
    },
    {
      id: 14,
      name: "Dallas Schultz"
    },
    {
      id: 15,
      name: "Maria Lakin"
    },
    {
      id: 16,
      name: "Garry Mills"
    },
    {
      id: 17,
      name: "Trudie Grimes"
    },
    {
      id: 18,
      name: "Triston Leffler"
    },
    {
      id: 19,
      name: "Leatha Hettinger"
    },
    {
      id: 20,
      name: "Keon Kirlin"
    },
    {
      id: 21,
      name: "Kelsie Rath"
    },
    {
      id: 22,
      name: "Amalia Rowe"
    },
    {
      id: 23,
      name: "Angus Swift"
    },
    {
      id: 24,
      name: "Salvatore Marquardt"
    },
    {
      id: 25,
      name: "Rashawn Langworth"
    },
    {
      id: 26,
      name: "Antone Olson"
    },
    {
      id: 27,
      name: "Sigrid Barrows"
    },
    {
      id: 28,
      name: "Isaiah Daniel"
    },
    {
      id: 29,
      name: "Maybelle Raynor"
    },
    {
      id: 30,
      name: "Devan Mante"
    }
  ],
  rooms: [
    {
      number: 1,
      roomType: "residential suite",
      bidet: false,
      bedSize: "twin",
      numBeds: 1,
      costPerNight: 265.03
    },
    {
      number: 2,
      roomType: "single room",
      bidet: true,
      bedSize: "full",
      numBeds: 1,
      costPerNight: 228.01
    },
    {
      number: 3,
      roomType: "suite",
      bidet: false,
      bedSize: "twin",
      numBeds: 1,
      costPerNight: 275.99
    },
    {
      number: 4,
      roomType: "junior suite",
      bidet: false,
      bedSize: "full",
      numBeds: 1,
      costPerNight: 177.03
    },
    {
      number: 5,
      roomType: "junior suite",
      bidet: false,
      bedSize: "king",
      numBeds: 2,
      costPerNight: 246.65
    },
    {
      number: 6,
      roomType: "suite",
      bidet: false,
      bedSize: "king",
      numBeds: 1,
      costPerNight: 211.42
    },
    {
      number: 7,
      roomType: "residential suite",
      bidet: false,
      bedSize: "full",
      numBeds: 2,
      costPerNight: 376.56
    },
    {
      number: 8,
      roomType: "suite",
      bidet: false,
      bedSize: "full",
      numBeds: 1,
      costPerNight: 177.04
    },
    {
      number: 9,
      roomType: "residential suite",
      bidet: true,
      bedSize: "twin",
      numBeds: 1,
      costPerNight: 327.76
    },
    {
      number: 10,
      roomType: "single room",
      bidet: false,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 296.48
    },
    {
      number: 11,
      roomType: "single room",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 216.05
    },
    {
      number: 12,
      roomType: "single room",
      bidet: false,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 247.86
    },
    {
      number: 13,
      roomType: "residential suite",
      bidet: false,
      bedSize: "full",
      numBeds: 1,
      costPerNight: 372.83
    },
    {
      number: 14,
      roomType: "junior suite",
      bidet: false,
      bedSize: "twin",
      numBeds: 2,
      costPerNight: 207.64
    },
    {
      number: 15,
      roomType: "suite",
      bidet: false,
      bedSize: "king",
      numBeds: 1,
      costPerNight: 163.1
    },
    {
      number: 16,
      roomType: "single room",
      bidet: true,
      bedSize: "king",
      numBeds: 1,
      costPerNight: 229.8
    },
    {
      number: 17,
      roomType: "junior suite",
      bidet: false,
      bedSize: "king",
      numBeds: 2,
      costPerNight: 393.97
    },
    {
      number: 18,
      roomType: "single room",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 332.07
    },
    {
      number: 19,
      roomType: "residential suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 356.33
    },
    {
      number: 20,
      roomType: "suite",
      bidet: true,
      bedSize: "king",
      numBeds: 1,
      costPerNight: 356.72
    },
    {
      number: 21,
      roomType: "suite",
      bidet: false,
      bedSize: "queen",
      numBeds: 2,
      costPerNight: 480.56
    },
    {
      number: 22,
      roomType: "residential suite",
      bidet: false,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 190.26
    },
    {
      number: 23,
      roomType: "single room",
      bidet: false,
      bedSize: "full",
      numBeds: 2,
      costPerNight: 245.42
    },
    {
      number: 24,
      roomType: "suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 174.95
    },
    {
      number: 25,
      roomType: "junior suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 307.49
    },
    {
      number: 26,
      roomType: "single room",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 391.55
    },
    {
      number: 27,
      roomType: "junior suite",
      bidet: true,
      bedSize: "king",
      numBeds: 2,
      costPerNight: 286.48
    },
    {
      number: 28,
      roomType: "residential suite",
      bidet: true,
      bedSize: "queen",
      numBeds: 1,
      costPerNight: 215.76
    },
    {
      number: 29,
      roomType: "junior suite",
      bidet: true,
      bedSize: "twin",
      numBeds: 1,
      costPerNight: 351.66
    },
    {
      number: 30,
      roomType: "junior suite",
      bidet: true,
      bedSize: "twin",
      numBeds: 1,
      costPerNight: 372.85
    }
  ],
  bookings: [
    {
      userID: 1,
      date: "2019/09/27",
      roomNumber: 30
    },
    {
      userID: 2,
      date: "2019/09/29",
      roomNumber: 29
    },
    {
      userID: 3,
      date: "2019/09/30",
      roomNumber: 28
    },
    {
      userID: 4,
      date: "2019/09/28",
      roomNumber: 27
    },
    {
      userID: 5,
      date: "2019/09/26",
      roomNumber: 26
    },
    {
      userID: 6,
      date: "2019/09/25",
      roomNumber: 26
    },
    {
      userID: 7,
      date: "2019/09/24",
      roomNumber: 25
    },
    {
      userID: 8,
      date: "2019/09/23",
      roomNumber: 25
    },
    {
      userID: 9,
      date: "2019/09/22",
      roomNumber: 25
    },
    {
      userID: 10,
      date: "2019/09/21",
      roomNumber: 24
    },
    {
      userID: 11,
      date: "2019/09/22",
      roomNumber: 23
    },
    {
      userID: 12,
      date: "2019/09/27",
      roomNumber: 22
    },
    {
      userID: 13,
      date: "2010/09/25",
      roomNumber: 21
    },
    {
      userID: 14,
      date: "2019/09/30",
      roomNumber: 20
    },
    {
      userID: 15,
      date: "2019/10/01",
      roomNumber: 19
    },
    {
      userID: 16,
      date: "2019/9/20",
      roomNumber: 18
    },
    {
      userID: 17,
      date: "2019/9/19",
      roomNumber: 17
    },
    {
      userID: 18,
      date: "2019/9/18",
      roomNumber: 16
    },
    {
      userID: 19,
      date: "2019/9/17",
      roomNumber: 15
    },
    {
      userID: 20,
      date: "2019/09/16",
      roomNumber: 14
    },
    {
      userID: 1,
      date: "2019/10/27",
      roomNumber: 13
    },
    {
      userID: 2,
      date: "2019/10/28",
      roomNumber: 12
    },
    {
      userID: 3,
      date: "2019/10/29",
      roomNumber: 11
    },
    {
      userID: 4,
      date: "2019/10/30",
      roomNumber: 10
    },
    {
      userID: 5,
      date: "2019/08/02",
      roomNumber: 9
    },
    {
      userID: 6,
      date: "2019/07/27",
      roomNumber: 8
    },
    {
      userID: 7,
      date: "2019/08/03",
      roomNumber: 7
    },
    {
      userID: 8,
      date: "2019/10/15",
      roomNumber: 6
    },
    {
      userID: 8,
      date: "2019/07/30",
      roomNumber: 5
    },
    {
      userID: 7,
      date: "2019/10/17",
      roomNumber: 4
    }
  ],
  roomServiceOrders: [
    {
      userID: 1,
      date: "2019/09/27",
      food: "Rustic Concrete Sandwich",
      totalCost: 14.9
    },
    {
      userID: 2,
      date: "2019/09/29",
      food: "Rustic Cotton Sandwich",
      totalCost: 17.33
    },
    {
      userID: 3,
      date: "2019/09/30",
      food: "Tasty Wooden Sandwich",
      totalCost: 11.15
    },
    {
      userID: 4,
      date: "2019/09/28",
      food: "Practical Granite Sandwich",
      totalCost: 14.87
    },
    {
      userID: 5,
      date: "2019/09/26",
      food: "Fantastic Cotton Sandwich",
      totalCost: 17.61
    },
    {
      userID: 6,
      date: "2019/09/25",
      food: "Awesome Cotton Sandwich",
      totalCost: 20.79
    },
    {
      userID: 7,
      date: "2019/09/24",
      food: "Refined Metal Sandwich",
      totalCost: 12.32
    },
    {
      userID: 8,
      date: "2019/09/23",
      food: "Incredible Concrete Sandwich",
      totalCost: 24.77
    },
    {
      userID: 9,
      date: "2019/09/22",
      food: "Unbranded Wooden Sandwich",
      totalCost: 7.95
    },
    {
      userID: 10,
      date: "2019/10/21",
      food: "Intelligent Fresh Sandwich",
      totalCost: 12.32
    },
    {
      userID: 11,
      date: "2019/10/22",
      food: "Unbranded Wooden Sandwich",
      totalCost: 12.83
    },
    {
      userID: 12,
      date: "2019/09/27",
      food: "Handcrafted Rubber Sandwich",
      totalCost: 22.45
    },
    {
      userID: 13,
      date: "2019/09/25",
      food: "Tasty Granite Sandwich",
      totalCost: 18.73
    },
    {
      userID: 14,
      date: "2019/09/30",
      food: "Refined Cotton Sandwich",
      totalCost: 12.65
    },
    {
      userID: 15,
      date: "2019/08/01",
      food: "Handcrafted Metal Sandwich",
      totalCost: 12.36
    },
    {
      userID: 16,
      date: "2019/09/20",
      food: "Rustic Soft Sandwich",
      totalCost: 6.78
    },
    {
      userID: 17,
      date: "2019/09/19",
      food: "Incredible Cotton Sandwich",
      totalCost: 8.26
    },
    {
      userID: 18,
      date: "2019/09/18",
      food: "Awesome Soft Sandwich",
      totalCost: 9.63
    },
    {
      userID: 19,
      date: "2019/09/17",
      food: "Generic Wooden Sandwich",
      totalCost: 10.63
    },
    {
      userID: 20,
      date: "2019/09/16",
      food: "Refined Plastic Sandwich",
      totalCost: 7.47
    },
    {
      userID: 21,
      date: "2019/08/27",
      food: "Rustic Metal Sandwich",
      totalCost: 14.95
    },
    {
      userID: 22,
      date: "2019/08/28",
      food: "Incredible Granite Sandwich",
      totalCost: 9.28
    },
    {
      userID: 23,
      date: "2019/08/29",
      food: "Sleek Steel Sandwich",
      totalCost: 12.79
    },
    {
      userID: 24,
      date: "2019/09/14",
      food: "Intelligent Fresh Sandwich",
      totalCost: 19.44
    },
    {
      userID: 25,
      date: "2019/10/27",
      food: "Generic Cotton Sandwich",
      totalCost: 21.66
    },
    {
      userID: 1,
      date: "2019/10/27",
      food: "Licensed Plastic Sandwich",
      totalCost: 10.64
    },
    {
      userID: 2,
      date: "2019/09/28",
      food: "Generic Plastic Sandwich",
      totalCost: 18.34
    },
    {
      userID: 3,
      date: "2019/09/29",
      food: "Sleek Frozen Sandwich",
      totalCost: 15.24
    },
    {
      userID: 4,
      date: "2019/09/30",
      food: "Rustic Plastic Sandwich",
      totalCost: 9.94
    },
    {
      userID: 5,
      date: "2019/08/02",
      food: "Tasty Granite Sandwich",
      totalCost: 20.84
    }
  ]
}

module.exports = testData;