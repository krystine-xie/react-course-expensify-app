import * as firebase from 'firebase'; 

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default }; 

// //child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('expense').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

//   database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     }, (e) => {
//         console.log('Error occurred', e);
//     });

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses);
//     }) 


  // database.ref('expenses').push({
  //     description: 'Coffee',
  //     note: 'At Red Rock Cafe', 
  //     amount: 250, 
  //     createdAt: '01 Aug 2020' 
  // })



//   database.ref('notes').push({
//       title: 'Books to Finish',
//       body: 'Kafka on the Shore by Haruki Murakami'
//   })

//   database.ref('notes/-MDq8-7-NXHosQ-oO1Af').remove();

//   database.ref('notes').set(notes);

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
//   }, (e) => {
//       console.log('Error with data fetching', e)
//   });

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   })

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref('age').off(onValueChange);
//   }, 7000);  

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);


//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

//   database.ref().set({
//       name: 'Krystine Xie', 
//       age: 28, 
//       stressLevel: 9,
//       job: {
//           title: 'Physiotherapist',
//           company: 'Trillium Health Partners'
//       },
//       location: {
//           city: 'Mississauga',
//           state: 'Ontario', 
//           country: 'Canada'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   });


//   database.ref().update(({
//       stressLevel: 6,
//       'job/title': 'Software Developer',
//       'job/company': 'WebMD', 
//       'location/city': 'Sunnyvale',
//       'location/state': 'California',
//       'location/country': 'U.S.A'
//   }));


// database.ref().remove().then(() => {
//     console.log('Data is removed!');
// }).catch((e) => {
//     console.log('Something went wrong.', e);
// })

