import { IUser, userSlice } from '../../store/reducers/UserSlice';

const {
  setUser,
  setTargetUser,
  setTargetUserToNULL,
  setActionSortedUsers,
  sortUsers,
} = userSlice.actions;

const user: IUser = {
  login: 'john_doe',
  avatar_url: 'https://example.com/avatar',
  url: 'https://example.com/john_doe',
  repos_url: 'https://example.com/john_doe/repos',
  repos_count: 5,
};

const userTwo: IUser = {
  login: 'john_doe',
  avatar_url: 'https://example.com/avatar',
  url: 'https://example.com/john_doe',
  repos_url: 'https://example.com/john_doe/repos',
  repos_count: 7,
};

describe('userSlice', () => {
  test('should handle setUser', () => {
    const initialState = {
      users: [],
      targetUser: null,
      sortedUsers: 'up',
    };

    const nextState = userSlice.reducer(initialState, setUser(user));
    expect(nextState.users).toHaveLength(1);
    expect(nextState.users[0]).toEqual(user);
  });

  test('should handle setTargetUser', () => {
    const initialState = {
      users: [],
      targetUser: null,
      sortedUsers: 'up',
    };

    const targetUser = user;
    const nextState = userSlice.reducer(
      initialState,
      setTargetUser(targetUser)
    );
    expect(nextState.targetUser).toEqual(targetUser);
  });

  test('should handle setTargetUserToNULL', () => {
    const initialState = {
      users: [],
      targetUser: user,
      sortedUsers: 'up',
    };

    const nextState = userSlice.reducer(initialState, setTargetUserToNULL());
    expect(nextState.targetUser).toBeNull();
  });

  test('should handle setActionSortedUsers', () => {
    const initialState = {
      users: [],
      targetUser: null,
      sortedUsers: 'up',
    };

    const nextState = userSlice.reducer(
      initialState,
      setActionSortedUsers('down')
    );
    expect(nextState.sortedUsers).toBe('down');
  });

  test('should handle sortUsers', () => {
    const initialState = {
      users: [user, userTwo],
      targetUser: null,
      sortedUsers: 'up',
    };

    const nextState = userSlice.reducer(initialState, sortUsers('down'));
    expect(nextState.users).toEqual([userTwo, user]);
  });
});
