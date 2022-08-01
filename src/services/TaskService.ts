import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, setDoc, collection, getDocs, query, where, orderBy, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { CreateSubTaskParams, CreateTaskParams, ITask } from "../@types/task";
import { db } from "../configs/firebase";
import { timeNow } from "../utils/app";

export default {
  create: async (params: CreateTaskParams, uid: string) => {
    const docRef = doc(collection(db, 'tasks'));
    await setDoc(docRef, {
      id: docRef.id,
      name: params.name,
      description: params.description,
      color: params.color,
      done: false,
      createdAt: timeNow,
      updatedAt: timeNow,
      subTasks: [],
      userId: uid,
    });

    const task = (await getDoc(doc(db, 'tasks', docRef.id))).data();

    return task;
  },

  listAllMyTasks: (
    setTasks: React.Dispatch<React.SetStateAction<any[]>>,
    uid: string
  ) => {
    const q = query(collection(db, 'tasks'), where('userId', '==', uid), orderBy('updatedAt', 'desc'));
    return onSnapshot(q, (data) => {
      const tasks: any[] = [];

      if (!data.empty) data.forEach(task => tasks.push(task.data()));

      setTasks(tasks);
    });
  },

  createSubTask: async (params: any, docId: string) => {
    const docRef = doc(db, 'tasks', docId);
    await updateDoc(docRef, {
      subTasks: [
        ...params.subTasks,
        params.newSubTask
      ],
      updatedAt: timeNow
    });

    const task = (await getDoc(doc(db, 'tasks', docRef.id))).data();

    return task;
  },

  showTask: (
    setTask: React.Dispatch<React.SetStateAction<any>>,
    setSubTasks: React.Dispatch<React.SetStateAction<any[]>>,
    docId: string
  ) => {
    const docRef = doc(db, 'tasks', docId);
    return onSnapshot(docRef, (result) => {
      const task = result.data();
      setTask(task);
      setSubTasks(task?.subTasks);
    });
  },
};
