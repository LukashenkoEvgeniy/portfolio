import Planet from "../Planet";
import React from "react";

describe('Planet test', () => {

    const planet = {
        id: 0,
        name: 'SUN',
        img: null,
        description: 'Сонце — типова зоря головної послідовності спектрального класу G2. Воно майже ідеально сферичне і являє собою гарячу плазму, сплетену магнітними полями. Сонячне випромінювання підтримує життя на Землі (фотони необхідні для початкових стадій процесу фотосинтезу) та визначає клімат нашої планети. Сонце — потужне джерело енергії, яку воно постійно випромінює в усіх ділянках спектра електромагнітних хвиль — від рентгенівських і ультрафіолетових променів до радіохвиль. Це випромінювання сильно впливає на всі тіла Сонячної системи: нагріває їх, позначається на атмосферах планет, дає світло й тепло.'
    };
    const onClick = jest.fn();

    it('Planet on click must called one time', () => {
        const wrapper = shallow(
            <Planet onClick={onClick} planet={planet}/>
        );
        wrapper.simulate('click')
        expect(onClick).toHaveBeenCalledTimes(1)
    });

    it('Planet rendered right name', () => {
        const wrapper = shallow(
            <Planet onClick={onClick} planet={planet}/>
        );
        // console.log(wrapper.debug());
        expect(wrapper.find('Planet__Name').text()).toBe('SUN')
    });

    it('should toMatchSnapshot', () => {
        const wrapper = shallow(
            <Planet planet={planet}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

});