const tableBody = document.getElementById('table-body')


let flights = [
{
    time: "08:11",
    destination: "NIGERIA",
    flight: "0X 203",
    gate: "A 06",
    remarks: "ON TIME"
},
{
    time: "12:05",
    destination: "CHINA",
    flight: "0X 203",
    gate: "A 06",
    remarks: "DELAYED"
},
{
    time: "06:01",
    destination: "UKRAINE",
    flight: "0X 203",
    gate: "A 06",
    remarks: "CANCELLED"
},
{
    time: "09:11",
    destination: "LONDON",
    flight: "0X 203",
    gate: "A 06",
    remarks: "ON TIME"
},
]
function populateTable() {
     for (const flight of flights) 
     {
        const tableRow = document.createElement("tr")

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])
      
            for (const [index, letter] of word.entries()) {
              const letterElement = document.createElement("div")
              setTimeout(() => {
                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableCell.append(letterElement)
              }, 100 * index)

            }

            tableRow.append(tableCell)
        }

        tableBody.append(tableRow)
     }
}

populateTable()