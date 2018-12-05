import { Rule } from 'json-rules-engine';

export const motorolaG6Play = new Rule({
    conditions: {
        all: [
            // price
            {
                any: [
                    {
                        fact: 'userFacts',
                        path: 'price',
                        operator: 'greaterThanInclusive',
                        value: {
                            fact: 'motorolaG6Play',
                            path: 'price'
                        }
                    },
                    {
                        fact: 'userFacts',
                        path: 'price',
                        operator: 'equal',
                        value: undefined
                    }
                ]
            },
            // ram
            {
                any: [
                    {
                        fact: 'userFacts',
                        path: 'ram',
                        operator: 'lessThanInclusive',
                        value: {
                            fact: 'motorolaG6Play',
                            path: 'ram'
                        }
                    },
                    {
                        fact: 'userFacts',
                        path: 'ram',
                        operator: 'equal',
                        value: undefined
                    }
                ]
            },
            // camera
            {
                any: [
                    {
                        fact: 'userFacts',
                        path: 'camera',
                        operator: 'lessThanInclusive',
                        value: {
                            fact: 'motorolaG6Play',
                            path: 'camera'
                        }
                    },
                    {
                        fact: 'userFacts',
                        path: 'camera',
                        operator: 'equal',
                        value: undefined
                    }
                ]
            },
            // screenSize
            {
                any: [
                    {
                        fact: 'userFacts',
                        path: 'screenSize',
                        operator: 'equal',
                        value: {
                            fact: 'motorolaG6Play',
                            path: 'screenSize'
                        }
                    },
                    {
                        fact: 'userFacts',
                        path: 'screenSize',
                        operator: 'equal',
                        value: undefined
                    }
                ]
            },
            // processor
            {
                any: [
                    {
                        fact: 'userFacts',
                        path: 'processor',
                        operator: 'lessThanInclusive',
                        value: {
                            fact: 'motorolaG6Play',
                            path: 'processor'
                        }
                    },
                    {
                        fact: 'userFacts',
                        path: 'processor',
                        operator: 'equal',
                        value: undefined
                    }
                ]
            }
        ]
    },
    priority: 5000,
    onSuccess: function (event, almanac) {
        almanac.factValue('userFacts')
            .then(userFacts => {
                userFacts.recommended[5] = 1;
            });
    },
    onFailure: function (event, almanac) {
        almanac.factValue('userFacts')
            .then(userFacts => {
                userFacts.recommended[5] = 0;
            });
    }
});
