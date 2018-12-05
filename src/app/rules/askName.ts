import { Rule } from 'json-rules-engine';

export const askName = new Rule({
    conditions: {
        all: [
            {
                fact: 'userFacts',
                path: 'name',
                operator: 'equal',
                value: ''
            }
        ]
    },
    priority: 1000,
    event: {
        type: 'OPEN_QUESTION',
        params: {
            type: 'OPEN_QUESTION',
            message: 'Para comenzar indicanos tu nombre',
            path: 'name'
        }
    }
});
