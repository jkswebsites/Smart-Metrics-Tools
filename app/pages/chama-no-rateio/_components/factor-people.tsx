import React from 'react';
import ListPeople from './list-people';
import SheetPersonForm from './sheet-person-form';

const FactorPeople = () => {
  return (
    <div className="relative mt-6 flex h-[70%] flex-col justify-between space-y-6 overflow-auto">
      <ListPeople />
      <SheetPersonForm />
    </div>
  );
};

export default FactorPeople;
