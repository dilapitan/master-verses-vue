import { db } from '../config/firebase-config'

export const getVerses = () => {
  return db
    .collection('memory-verses')
    .orderBy('category', 'asc')
    .get()
}
