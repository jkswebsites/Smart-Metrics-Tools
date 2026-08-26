import React from 'react';
import ListPeople from './list-people';
import SheetPersonForm from './sheet-person-form';

const FactorPeople = () => {
  return (
    <div className="relative mt-6 overflow-auto">
      <ListPeople />
      <SheetPersonForm />
    </div>
  );
};

export default FactorPeople;
