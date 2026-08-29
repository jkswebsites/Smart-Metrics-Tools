import React from 'react';
import ListPeople from './list-people';
import SheetPersonForm from './sheet-person-form';
import ScreenParticipants from './screen-participants';

const FactorPeople = () => {
  return (
    <div className="relative mt-3 h-[400px] overflow-auto">
      <ScreenParticipants />
      <ListPeople />
      <SheetPersonForm />
    </div>
  );
};

export default FactorPeople;
