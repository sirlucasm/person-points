import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { CreateUserParams } from '../@types/user';
import { auth } from '../configs/firebase';

export default {
  create: async ({ email, password, name }: CreateUserParams) => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);

    if (newUser.user) {
      AsyncStorage.setItem('auth_uid', newUser.user.uid);
      await updateProfile(newUser.user, {
        displayName: name,
        photoURL: `https://firebasestorage.googleapis.com/v0/b/person-points.appspot.com/o/
          images%2Fprofile_pictures%2Fdefault-profile-pic.png
          ?alt=media&token=172cc0a5-efe1-4243-b257-939aea38ab63`,
      });
    }

    return newUser;
  },

  login: async ({ email, password }: CreateUserParams) => {
    const user = await signInWithEmailAndPassword(auth, email, password);

    if (user.user) AsyncStorage.setItem('auth_uid', user.user.uid);

    return user;
  },

  logout: async () => {
    await auth.signOut();
    await AsyncStorage.removeItem('auth_uid');
  },

  getCurrentUser: () => auth.currentUser,
}
