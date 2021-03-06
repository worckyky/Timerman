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
        },{
            id: 5,
            name: 'Альметьевский триатлон',
            distance: [['Timerkids', 0], ['Спринт', 2900], ['Спринт эст.', 1800]]
        },{
            id: 6,
            name: 'Заплыв «SVIYAGA SWIM»',
            distance: [['Timerkids', 390], ['1.5 км', 2000], ['3.5 км', 3000], ['7,5 км', 1200], ['15 км', 1700], ['6 км', 2000] , ['12 км', 3000]]
        },{
            id: 7,
            name: 'Забег «Ночная Казань»',
            distance: [['Timerkids', 490], ['5 км', 1200], ['10 км', 1500]]
        },{
            id: 8,
            name: 'Велогонка «Тур де Татарстан. Казань»',
            distance: [['Timerkids', 390], ['25 км', 900], ['50 км', 1900], ['100 км', 2900]]
        },{
            id: 9,
            name: 'Камский полумарафон',
            distance: [['Timerkids', 390], ['3 км', 490], ['10 км', 990], ['21 км', 1300]]
        },{
            id: 10,
            name: 'Альметьевский полумарафон',
            distance: [['Timerkids', 390], ['3 км', 490], ['10 км', 990], ['21 км', 1300]]
        },{
            id: 11,
            name: 'Казанский национальный полумарафон',
            distance: [['Timerkids', 490], ['3 км', 490], ['10 км', 1200], ['21 км', 1700]]
        }
    ]
    if (selector) {
        return data
    } else {
        return data.find(elem => elem.id === id)
    }

}

