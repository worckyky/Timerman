export default function (selector = true, id) {
    const data =  [
        {
            id: 1,
            name: 'Иннополумарафон',
            distance: [['Timerkids', 390], ['3 км', 490], ['10 км', 990], ['21 км', 1300]]
        },
        {
            id: 2,
            name: 'Казанский марафон',
            distance: [['Timerbaby', 500], ['Timerkids', 500], ['3 км', 490], ['10 км', 1700], ['21 км', 2200], ['42 км', 2700]]
        },
        {
            id: 3,
            name: 'ЗАБЕГ.РФ',
            distance: [['Timerbaby', 290], ['25 км', 390], ['5 км', 590], ['10 км', 790], ['21 км', 890]]
        },{
            id: 4,
            name: 'Велогонка «Тур де Татарстан. Альметьевск»',
            distance: [['Timerkids', 390], ['25 км', 900], ['50 км', 1600], ['100 км', 1920]]
        }
    ]
    if (selector) {
        return data
    } else {
        return data.find(elem => elem.id === id)
    }

}

