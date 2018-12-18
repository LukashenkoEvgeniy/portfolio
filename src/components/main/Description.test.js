import Description from "./Description";
import React from "react";

describe('Description test', () => {

    const planet = {
        id: 0,
        name: 'SUN',
        img: null,
        description: 'Сонце — типова зоря головної послідовності спектрального класу G2. Воно майже ідеально сферичне і являє собою гарячу плазму, сплетену магнітними полями. Сонячне випромінювання підтримує життя на Землі (фотони необхідні для початкових стадій процесу фотосинтезу) та визначає клімат нашої планети. Сонце — потужне джерело енергії, яку воно постійно випромінює в усіх ділянках спектра електромагнітних хвиль — від рентгенівських і ультрафіолетових променів до радіохвиль. Це випромінювання сильно впливає на всі тіла Сонячної системи: нагріває їх, позначається на атмосферах планет, дає світло й тепло.'
    };

    it('should render a label', () => {
        const wrapper = shallow(
            <Description planet={planet}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a planet', () => {
        const wrapper = mount(
            <Description planet={planet}/>
        );
        expect(wrapper.prop('planet').id).toEqual(0);
    });
});