import { Rule } from 'json-rules-engine';

export const askCamera = new Rule({
    conditions: {
        all: [
            {
                fact: 'userFacts',
                path: 'camera',
                operator: 'equal',
                value: undefined
            }
        ]
    },
    priority: 800,
    event: {
        type: 'MULTIPLE_CHOICE',
        params: {
            type: 'MULTIPLE_CHOICE',
            message: '¿Qué tipo de cámara te gustaría?',
            path: 'camera',
            options: [
                {
                    value: 1,
                    description: 'Buena',
                },
                {
                    value: 2,
                    description: 'Muy Buena',
                },
                {
                    value: 3,
                    description: 'Excelente',
                }
            ]
        }
    }
});
