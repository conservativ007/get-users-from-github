import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  login: string;
  avatar_url: string;
  url: string;
  repos_url: string;
  repos_count: number;
}

interface UserState {
  users: IUser[];
  targetUser: IUser | null;
  sortedUsers: string;
}

const initialState: UserState = {
  users: [],
  targetUser: null,
  sortedUsers: 'up',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      if (chekUser(state.users, action.payload.login) === true) {
        state.users.push(action.payload);
      } else {
        console.log('such user already exists');
        return;
      }
    },
    setTargetUser(state, action: PayloadAction<IUser>) {
      state.targetUser = action.payload;
    },
    setTargetUserToNULL(state) {
      state.targetUser = null;
    },
    setActionSortedUsers(state, action: PayloadAction<string>) {
      state.sortedUsers = action.payload;
    },
    sortUsers(state, action: PayloadAction<'up' | 'down'>) {
      if (action.payload === 'up') {
        state.users.sort(customSortUserUp);
      }
      if (action.payload === 'down') {
        state.users.sort(customSortUserDown);
      }
    },
  },
});

const chekUser = (users: IUser[], login: string) => {
  const foundUser = users.findIndex((user) => user.login === login);
  if (foundUser === -1) {
    return true;
  }
  return false;
};

const customSortUserUp = (a: IUser, b: IUser) => {
  if (a.repos_count > b.repos_count) {
    return 1;
  }

  if (a.repos_count < b.repos_count) {
    return -1;
  }

  return 0;
};
const customSortUserDown = (a: IUser, b: IUser) => {
  if (a.repos_count < b.repos_count) {
    return 1;
  }

  if (a.repos_count > b.repos_count) {
    return -1;
  }

  return 0;
};

export default userSlice.reducer;
