import React from 'react';

const AddLinkedAccounts = ({ onSelectRegion }) => {
  return (
    <div className="add-linked-accounts">
      <h1>Add Linked Accounts</h1>
      <button onClick={() => onSelectRegion('North America')}>North America</button>
      <button onClick={() => onSelectRegion('Europe')}>Europe</button>
    </div>
  );
};

export default AddLinkedAccounts;
