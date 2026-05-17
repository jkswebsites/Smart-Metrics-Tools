'use client';
import React, { useState } from 'react';
import { AlertTriangleIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
export default function AlertWarning() {
  const [show, setShow] = useState<boolean>(true);

  setInterval(() => setShow(false), 6000);
  return (
    show && (
      <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
        <AlertTriangleIcon />
        <AlertTitle>Informação!</AlertTitle>
        <AlertDescription>
          Essa aplicação utiliza o LocalStorage para os dados persistirem na
          tela!
        </AlertDescription>
      </Alert>
    )
  );
}
