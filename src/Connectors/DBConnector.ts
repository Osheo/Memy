import * as firebase from 'firebase';
const jsf = require('json-schema-faker');
const faker = require('faker');

export async function createDateToDatabase() {
    faker.locale = 'pl';
    jsf.extend('faker', function() {
        return require('faker');
    });

    const schemaUser = {
        type: 'array',
        minItems: 15,
        maxItems: 15,
        items: {
            type: 'object',
            properties: {
                // id: {
                //     type: 'integer',
                //     // // from: 0,
                //     minimum: 1,
                //     maximum: 15,
                //     // unique: true,
                //     // autoIncrement: true,
                //     uniqueItems: true,
                //     exclusiveMinimum: true
                //     // autoIncrement: true,
                //     // minimum: 1,
                //     // maximum: 20
                // },
                firstName: {
                    type: 'string',
                    faker: 'name.findName'
                },
                lastName: {
                    type: 'string',
                    faker: 'name.lastName'
                },
                email: {
                    type: 'string',
                    faker: 'internet.email'
                },
                roleName: {
                    type: 'string',
                    pattern: 'debtor|founder'
                },
                password: {
                    type: 'string',
                    faker: 'internet.password'
                }
            },
            required: ['id', 'firstName', 'lastName', 'email', 'roleName', 'password']
        }
    };

    const schemaDebtor = {
        type: 'array',
        minItems: 30,
        maxItems: 50,
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    minimum: 200,
                    maximum: 500,
                    autoIncrement: true,
                    exclusiveMinimum: true
                },
                authorId: {
                    type: 'integer',
                    minimum: 1,
                    maximum: 15
                },
                name: {
                    type: 'string',
                    faker: 'commerce.productName'
                },
                listDebtors: {
                    type: 'array',
                    minItems: 3,
                    maxItems: 10,
                    items: {
                        id: {
                            type: 'integer',
                            from: 0,
                            minimum: 0,
                            maximum: 50,
                            autoIncrement: true
                        },
                        user: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'integer',
                                    minimum: 1,
                                    maximum: 15
                                }
                                // ,
                                // firstName: {
                                //     type: 'string',
                                //     faker: 'name.findName'
                                // },
                                // lastName: {
                                //     type: 'string',
                                //     faker: 'name.lastName'
                                // },
                                // email: {
                                //     type: 'string',
                                //     faker: 'internet.email'
                                // }
                            },
                            // required: ['id', 'firstName', 'lastName', 'email']
                            required: ['id']
                        },
                        amount: {
                            type: 'integer',
                            minimum: 0,
                            maximum: 30
                        },
                        returned: {
                            type: 'boolean'
                        }
                    }
                },
                finished: {
                    type: 'boolean'
                }
            },
            required: ['id', 'authorId', 'name', 'listDebtors', 'finished']
        }
    };

    const userData = await jsf.resolve(schemaUser);
    const debtsData = await jsf.resolve(schemaDebtor);
    console.log('userData: ', userData);
    console.log('debtsData', debtsData);

    jsf.resolve(schemaUser).then(function(schemaUserData: any) {
        jsf.resolve(schemaDebtor).then(function(schemaDebtorData: any) {
            firebase
                .database()
                .ref()
                .set({
                    appName: 'Debtor app',
                    isRunning: true,
                    users: userData,
                    debts: debtsData
                });
            return true;
        });
    });
}
