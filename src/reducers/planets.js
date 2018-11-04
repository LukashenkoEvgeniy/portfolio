import * as types from '../constants/ActionTypes';
import sun from "../static/sun.png";
import mercury from "../static/mercury.png";
import venus from "../static/venus.png";
import earth from "../static/earth.png";
import mars from "../static/mars.png";
import jupiter from "../static/jupiter.png";
import saturn from "../static/saturn.png";
import uranus from "../static/uranus.png";
import neptune from "../static/neptune.png";
import pluton from "../static/pluton.png";

const initialState = {
    planetList: [
        {
            id: 0,
            name: 'SUN',
            img: sun,
            description: 'Сонце — типова зоря головної послідовності спектрального класу G2. Воно майже ідеально сферичне і являє собою гарячу плазму, сплетену магнітними полями. Сонячне випромінювання підтримує життя на Землі (фотони необхідні для початкових стадій процесу фотосинтезу) та визначає клімат нашої планети. Сонце — потужне джерело енергії, яку воно постійно випромінює в усіх ділянках спектра електромагнітних хвиль — від рентгенівських і ультрафіолетових променів до радіохвиль. Це випромінювання сильно впливає на всі тіла Сонячної системи: нагріває їх, позначається на атмосферах планет, дає світло й тепло.'
        }, {
            id: 1,
            name: 'MERCURY',
            img: mercury,
            description: 'Мерку́рій — найближча до Сонця планета Сонячної системи. Обертається навколо Сонця за 87,969 земних діб. Меркурій належить до внутрішніх планет, оскільки його орбіта лежить ближче до Сонця, ніж пояс астероїдів. Після позбавлення Плутона статусу планети Меркурій є найменшою планетою Сонячної системи. Планету названо на честь римського бога Меркурія, послідовника грецького Гермеса та вавилонського Набу. Давні греки часів Гесіода назвали Меркурій «Στίλβων» (Стилбон, блискучий). До V століття до н. е. греки вважали, що Меркурій, видимий на вечірньому та вранішньому небі — це два різні об\'єкти. У Стародавній Індії Меркурій називали Будга (बुध) та Рогінея. У китайській, японській, в\'єтнамській та корейських мовах Меркурій називають Водяною зіркою (кит. і яп. 水星) на честь однієї з 5 стихій. У давньоруському Ізборнику Святослава планета називалась Єрмис (форма імені Гермес).'
        }, {
            id: 2,
            name: 'VENUS',
            img: venus,
            description: 'Fists planet'
        }, {
            id: 3,
            name: 'EARTH',
            img: earth,
            description: 'Fists planet'
        }, {
            id: 4,
            name: 'MARS',
            img: mars,
            description: 'Fists planet'
        }, {
            id: 5,
            name: 'EARTH',
            img: earth,
            description: 'Fists planet'
        }, {
            id: 6,
            name: 'JUPITER',
            img: jupiter,
            description: 'Fists planet'
        }, {
            id: 7,
            name: 'SATURN',
            img: saturn,
            description: 'Fists planet'
        }, {
            id: 8,
            name: 'URANUS',
            img: uranus,
            description: 'Fists planet'
        }, {
            id: 9,
            name: 'NEPTUNE',
            img: neptune,
            description: 'Fists planet'
        }, {
            id: 10,
            name: 'PLUTON',
            img: pluton,
            description: 'Плуто́н — найбільша відома карликова планета Сонячної системи та найбільший транснептуновий об\'єкт, перший відкритий об\'єкт поясу Койпера. Дев\'яте за розміром та десяте за масою небесне тіло, яке обертається навколо Сонця (без урахування супутників планет). Як і більшість тіл у поясі Койпера, Плутон складається здебільшого з каменю й льоду і є відносно малим (діаметр близько 2374 км). За масою він поступається Місяцю вп\'ятеро, а за об\'ємом — утричі. Орбіта Плутона має великий ексцентриситет (0,25, тобто, вона доволі витягнута) і значний нахил до площини екліптики (17,1°). Через витягнутість орбіти Плутон то наближається до Сонця на відстань 29,6 а.о. (4,4 млрд км) і опиняється ближче, ніж Нептун, то віддаляється на 49,3 а.о. (7,4 млрд км). Плутон перебуває в стабільному орбітальному резонансі з Нептуном, тому їхнє зіткнення виключене.'
        },
    ],
    selectedPlanet: null
};

export default function planets(state = initialState, action) {
    switch (action.type) {
        case types.SELECT_PLANET:
            return {planetList: state.planetList, selectedPlanet: state.planetList[action.id]};
        default:
            return state;
    }
}