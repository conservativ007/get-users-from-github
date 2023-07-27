import React from 'react';
import { Search } from './components/search/Search';
import { ShowUsers } from './components/showUsers/ShowUsers';
import { UserDetails } from './components/popup/UserDetails';
import { SortUsers } from './components/sortUsers/SortUsers';

function App() {
  return (
    <div className="app">
      <Search />
      <SortUsers />
      <ShowUsers />
      <UserDetails />
    </div>
  );
}

export default App;
