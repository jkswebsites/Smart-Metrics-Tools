'use client';
import { ContextSmartBuy } from '@/app/context/smart-buy-context';
import { Button } from '@/components/ui/button';
import React, { useContext } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const ButtonDeleteCart = ({ nameItem }: { nameItem: string }) => {
  const { removeItemCart } = useContext(ContextSmartBuy);
  return (
    <Button
      variant={'destructive'}
      title={`deletar ${nameItem}`}
      className="h-6 w-6"
      onClick={() => removeItemCart!(nameItem)}
    >
      <RiDeleteBin6Line />
    </Button>
  );
};

export default ButtonDeleteCart;
