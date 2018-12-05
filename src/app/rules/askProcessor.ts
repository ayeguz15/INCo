import { Rule } from 'json-rules-engine';

export const askProcessor = new Rule({
    conditions: {
        all: [
            {
                fact: 'userFacts',
                path: 'processor',
                operator: 'equal',
                value: undefined
            }
        ]
    },
    priority: 500,
    event: {
        type: 'MULTIPLE_CHOICE',
        params: {
            type: 'MULTIPLE_CHOICE',
            message: '¿Qué tipo de procesador necesitás?',
            path: 'processor',
            options: [
                {
                    value: 1,
                    description: 'Regular',
                },
                {
                    value: 2,
                    description: 'Rápido',
                },
                {
                    value: 3,
                    description: 'Muy Rápido',
                }
            ]
        }
    }
});
