import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { BackHandler } from 'react-native';
import { CreateUserParams } from '../@types/user';
import { auth } from '../configs/firebase';

export default {
  create: async ({ email, password, name }: CreateUserParams) => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);

    if (newUser.user) {
      AsyncStorage.setItem('auth_user_data', JSON.stringify({ email, password }));
      await updateProfile(newUser.user, {
        displayName: name,
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/person-points.appspot.com/o/images%2Fprofile_pictures%2Fdefault-profile-pic.png?alt=media&token=172cc0a5-efe1-4243-b257-939aea38ab63',
      });
    }

    return newUser;
  },

  login: async ({ email, password }: CreateUserParams) => {
    const user = await signInWithEmailAndPassword(auth, email, password);

    if (user.user) AsyncStorage.setItem('auth_user_data', JSON.stringify({ email, password }));

    return user;
  },

  logout: async () => {
    AsyncStorage.multiRemove(['auth_user_data', 'person_selected'])
      .then(() => {
        auth.signOut();
        BackHandler.exitApp();
      });
  },

  getCurrentUser: () => auth.currentUser,
}



