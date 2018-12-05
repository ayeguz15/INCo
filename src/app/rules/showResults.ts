import { Rule } from 'json-rules-engine';

export const showResults = new Rule({
    conditions: {
        any: [
            {
                fact: 'userFacts',
                path: 'recommended',
                operator: 'sumEqual',
                value: 1
            }, {
                fact: 'userFacts',
                path: 'recommended',
                operator: 'sumEqual',
                value: 0
            }
        ]
    },
    priority: 2000,
    event: {
        type: 'SHOW_RESULTS',
        params: {
            type: 'SHOW_RESULTS',
            message: 'FIN',
            path: 'FIN'
        }
    }
});
