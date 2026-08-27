import React from 'react';
import ListPeople from './list-people';
import SheetPersonForm from './sheet-person-form';

const FactorPeople = () => {
  return (
    <div className="overflow-auto">
      <ListPeople />
      <SheetPersonForm />
    </div>
  );
};

export default FactorPeople;
