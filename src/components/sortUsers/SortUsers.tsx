import React, { useEffect } from 'react';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';

export const SortUsers = () => {
  const dispatch = useAppDispatch();

  const { setActionSortedUsers, sortUsers } = userSlice.actions;
  const { sortedUsers } = useAppSelector((state) => state.userReducer);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setActionSortedUsers(event.target.value));
  };

  useEffect(() => {
    if (sortedUsers === 'up') dispatch(sortUsers('up'));
    if (sortedUsers === 'down') dispatch(sortUsers('down'));
  }, [sortedUsers]);

  return (
    <div className="custom-select">
      <select value={sortedUsers} onChange={handleChange}>
        <option value="0">Select option:</option>
        <option value="up">up</option>
        <option value="down">down</option>
      </select>
    </div>
  );
};
