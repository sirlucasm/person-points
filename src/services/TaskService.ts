import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc, setDoc, collection, query, where, orderBy, getDoc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";
import { CreateTaskParams, } from "../@types/task";
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
    const docRef = doc(collection(db, 'tasks', docId, 'subTasks'));

    params.newSubTask.id = docRef.id;
    params.newSubTask.createdAt = timeNow;
    params.newSubTask.updatedAt = timeNow;
    params.newSubTask.done = false;

    await setDoc(docRef, params.newSubTask);
  },

  showTask: (
    setTask: React.Dispatch<React.SetStateAction<any>>,
    docId: string
  ) => {
    const docRef = doc(db, 'tasks', docId);
    return onSnapshot(docRef, (result) => {
      const task = result.data();
      setTask(task);
    });
  },

  listSubTasks: (
    setSubTasks: React.Dispatch<React.SetStateAction<any[]>>,
    docId: string
  ) => {
    const docRef = query(collection(db, 'tasks', docId, 'subTasks'), orderBy('createdAt', 'desc'));

    return onSnapshot(docRef, (result) => {
      const subTasks: any[] = [];
      if (!result.empty) result.forEach(subTask => subTasks.push(subTask.data()));

      setSubTasks(subTasks);
    });
  },

  finishSubTask: async (params: any, taskId: string) => {
    const docRef = doc(db, 'tasks', taskId, 'subTasks', params.subTaskId);

    await updateDoc(docRef, {
      done: params.done,
      updatedAt: timeNow
    });
  },

  deleteTask: async (taskId: string) => {
    const docRef = doc(db, 'tasks', taskId);

    await deleteDoc(docRef);
  },

  deleteSubTask: async (subTaskId: string, taskId: string) => {
    const docRef = doc(db, 'tasks', taskId, 'subTasks', subTaskId);

    await deleteDoc(docRef);
  },
};
