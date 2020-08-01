import firebase from '../config/firebase-config'

const db = firebase.firestore()

export const getVerses = () => {
  return db
    .collection('memory-verses')
    .orderBy('category', 'asc')
    .get()
}
