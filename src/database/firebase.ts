import * as firebase from 'firebase';
import * as FirebaseConnector from './../Connectors/DBConnector';

const config = {
    apiKey: 'AIzaSyA0hGEACtQFXAYApXxyAFlUXCSDfFQBMUc',
    authDomain: 'localhost:3000',
    databaseURL: 'https://react-debtors.firebaseio.com/',
    storageBucket: 'react-debtors.appspot.com'
};
firebase.initializeApp(config);

export async function setNewData() {
  const response = await FirebaseConnector.createDateToDatabase();
  console.log(response);
}

export function postHTTP<T>(url: string, dataRequest: any): Promise<T> {
    return new Promise((resolve, reject) => {
        firebase
            .database()
            .ref(url)
            .set(dataRequest)
            .then((response: any) => {
                resolve(dataRequest);
            })
            .catch((err: any) => {
                reject(err);
            });
    });
}

export function getHTTP<T>(url: string, dataRequest?: any): Promise<T> {
    return new Promise((resolve, reject) => {
        return firebase
            .database()
            .ref(url)
            .on(
                'value',
                (response: any) => {
                    resolve(response.val());
                },
                (err: any) => {
                    reject(err);
                }
            );
    });
}
