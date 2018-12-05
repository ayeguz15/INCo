import { Rule } from 'json-rules-engine';

export const askScreenSize = new Rule({
    conditions: {
        all: [
            {
                fact: 'userFacts',
                path: 'screenSize',
                operator: 'equal',
                value: undefined
            }
        ]
    },
    priority: 700,
    event: {
        type: 'MULTIPLE_CHOICE',
        params: {
            type: 'MULTIPLE_CHOICE',
            message: '¿Qué tamaño de pantalla preferís?',
            path: 'screenSize',
            options: [
                {
                    value: 1,
                    description: 'Chica',
                },
                {
                    value: 2,
                    description: 'Mediana',
                },
                {
                    value: 3,
                    description: 'Grande',
                }
            ]
        }
    }
});
