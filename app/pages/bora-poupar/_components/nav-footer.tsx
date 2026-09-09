import React from 'react';
import ButtonResetAll from './button-reset-all';
import ButtonSheetCart from './button-sheet-cart';

const NavFooter = () => {
  return (
    <footer className="fixed bottom-0 right-0 w-full rounded-md bg-gradient-to-t from-neutral-950 via-black to-transparent px-4 py-2">
      <nav className="mx-auto flex w-[98%] items-center justify-end gap-3">
        <ButtonResetAll />
        <ButtonSheetCart />
      </nav>
    </footer>
  );
};

export default NavFooter;
