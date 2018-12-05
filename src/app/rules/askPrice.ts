import { Rule } from 'json-rules-engine';

export const askprice = new Rule({
    conditions: {
        all: [
            {
                fact: 'userFacts',
                path: 'price',
                operator: 'equal',
                value: undefined
            }
        ]
    },
    priority: 900,
    event: {
        type: 'OPEN_QUESTION',
        params: {
            type: 'OPEN_QUESTION',
            message: '¿Cuánto querés invertir en tu celular?',
            path: 'price'
        }
    }
});
