import { Rule } from 'json-rules-engine';

export const finish = new Rule({
    conditions: {
        any: [
            {
                fact: 'userFacts',
                path: 'name',
                operator: 'notEqual',
                value: undefined
            }
        ]
    },
    priority: 1,
    event: {
        type: 'SHOW_RESULTS',
        params: {
            type: 'SHOW_RESULTS',
            message: 'FIN',
            path: 'FIN'
        }
    }
});
