import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyALDp1pejHDw4Ry1erXajPiIz-BWcVZJQ8",
    authDomain: "magento-catalog-test-a5554.firebaseapp.com",
    databaseURL: "https://magento-catalog-test-a5554.firebaseio.com",
    projectId: "magento-catalog-test-a5554",
    storageBucket: "magento-catalog-test-a5554.appspot.com",
    messagingSenderId: "644925185069"
};
firebase.initializeApp(config);

const database = firebase.firestore();

// Get a reference to the database service
export default database;
