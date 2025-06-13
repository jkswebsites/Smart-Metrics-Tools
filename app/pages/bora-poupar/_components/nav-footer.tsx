import React from 'react';
import ButtonResetAll from './button-reset-all';
import ButtonSheetCart from './button-sheet-cart';

const NavFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-neutral-950 py-2 pr-4">
      <nav className="mx-auto flex w-[98%] items-center justify-end gap-3">
        <ButtonResetAll />
        <ButtonSheetCart />
      </nav>
    </footer>
  );
};

export default NavFooter;
