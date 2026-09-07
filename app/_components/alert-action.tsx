'use client';
import React, { useState } from 'react';
import { AlertTriangleIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
export default function AlertWarning() {
  const [show, setShow] = useState<boolean>(true);

  setInterval(() => setShow(false), 6000);
  return (
    show && (
      <Alert className="mx-auto w-4/5 sm:w-[300px]">
        <AlertTriangleIcon />
        <AlertTitle>Informação!</AlertTitle>
        <AlertDescription>
          Essa aplicação utiliza o LocalStorage e Google Analytics, para
          melhorar a experiência do usuário.
          <Link
            className="block text-center underline"
            href={'/pages/termos-de-uso'}
          >
            Confira o Termos de Uso!
          </Link>
        </AlertDescription>
      </Alert>
    )
  );
}
