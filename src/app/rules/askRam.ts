import { Rule } from 'json-rules-engine';

export const askRam = new Rule({
    conditions: {
        all: [
            {
                fact: 'userFacts',
                path: 'ram',
                operator: 'equal',
                value: undefined
            }
        ]
    },
    priority: 600,
    event: {
        type: 'MULTIPLE_CHOICE',
        params: {
            type: 'MULTIPLE_CHOICE',
            message: '¿Cuánta memoria RAM necesitas?',
            path: 'ram',
            options: [
                {
                    value: 1,
                    description: 'Poca',
                },
                {
                    value: 2,
                    description: 'Más o menos',
                },
                {
                    value: 3,
                    description: 'Mucha',
                }
            ]
        }
    }
});
