import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, setDoc, collection, getDocs, query, where, orderBy, getDoc, onSnapshot } from "firebase/firestore";
import { CreatePersonParams } from "../@types/person";
import { db } from "../configs/firebase";
import { timeNow } from "../utils/app";

export default {
  create: async (params: CreatePersonParams, uid: string) => {
    const docRef = doc(collection(db, 'persons'));
    await setDoc(docRef, {
      id: docRef.id,
      name: params.name,
      points: 0,
      createdAt: timeNow,
      updatedAt: timeNow,
      tierName: 'Sem divisão',
      tierNumber: 0,
      tierPicURL: 'https://firebasestorage.googleapis.com/v0/b/person-points.appspot.com/o/images%2Ftiers%2Fno_tier.png?alt=media&token=8bcf5594-8525-4290-821f-4b57fabda89f',
      nextTierPoints: 30,
      userId: uid,
      profilePic: params.profilePic,
    });
    const person = (await getDoc(doc(db, 'persons', docRef.id))).data();

    AsyncStorage.setItem('person_selected', JSON.stringify(person));

    return person;
  },

  listAllMyPersons: (
    setPersons: React.Dispatch<React.SetStateAction<any[]>>,
    uid: string
  ) => {
    const q = query(collection(db, 'persons'), where('userId', '==', uid), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (data) => {
      const persons: any[] = [];

      if (!data.empty) data.forEach(person => persons.push(person.data()));

      setPersons(persons);
    });
  },

  listAllCartoons: async () => {
    const cartoons: any[] = [];
    const q = query(collection(db, 'person_cartoons'));
    const data = await getDocs(q);
    if (!data.empty) data.forEach(cartoon => cartoons.push(cartoon.data()));

    return cartoons;
  }
}
