import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB-FoPHl52YB5y__EyFoTXzazoaMNpJX9g",
    authDomain: "tennis-pro-d81a1.firebaseio.com",
    databaseURL: "https://tennis-pro-d81a1.firebaseio.com",
    projectId: "tennis-pro-d81a1",
    storageBucket: "tennis-pro-d81a1.appspot.com",
    messagingSenderId: "945234744872"
};


export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();

export default class FirebaseService {

    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);

        query.on('value', dataSnapshot => {
            let items = [];

            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });

            callback(items);
        });

        return query;
    };

    static notificationSync(key, callback) {
        firebaseDatabase
            .ref('notifications/'.concat(key))
            .on('value', (data) => callback(data.val()));
    }

    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

}