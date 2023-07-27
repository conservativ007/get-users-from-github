import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import './index.scss';

export const UserDetails = () => {
  const { targetUser } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();
  const { setTargetUserToNULL } = userSlice.actions;

  if (targetUser !== null) {
    return (
      <div className="user-details">
        <div className="user-avatar">
          <img src={targetUser.avatar_url} alt="user-avatar" />
        </div>
        <p>
          login: <span>{targetUser.login}</span>
        </p>

        <p>
          count of repos: <span>{targetUser.repos_count}</span>
        </p>
        <p className="close" onClick={() => dispatch(setTargetUserToNULL())}>
          close
        </p>
      </div>
    );
  }
  return <div></div>;
};
