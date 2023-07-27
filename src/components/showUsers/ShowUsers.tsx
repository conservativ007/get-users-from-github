import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IUser, userSlice } from '../../store/reducers/UserSlice';
import './index.scss';

export const ShowUsers = () => {
  const dispatch = useAppDispatch();
  const { setTargetUser } = userSlice.actions;
  const { users } = useAppSelector((state) => state.userReducer);

  const handleClick = (user: IUser) => {
    dispatch(setTargetUser(user));
  };

  if (users.length > 0) {
    return (
      <div className="users">
        {users.map((user) => {
          return (
            <div
              className="user"
              key={user.login}
              onClick={() => handleClick(user)}
            >
              <p>{user.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
  return <div></div>;
};
