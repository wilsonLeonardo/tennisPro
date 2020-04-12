import moment from 'moment';

export function setRelativeTimeTranslate() {
    moment.locale('pt-br', {
        relativeTime : {
            future : '%s',
            past : '%s',
            s : 'Agora',
            ss : 'Agora',
            m : '1 min',
            mm : '%d min',
            h : '1 Hora',
            hh : '%d hrs',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        }
    });
}