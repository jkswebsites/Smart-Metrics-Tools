'use client';
import React, { useEffect, useState } from 'react';
import { FcDownload } from 'react-icons/fc';

const PWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    console.log('Resultado:', outcome);

    setDeferredPrompt(null);
  };

  if (!deferredPrompt) {
    return null;
  }
  return (
    <button className="flex items-center gap-2" onClick={handleInstall}>
      <div className="">
        <FcDownload />
      </div>
      <div>
        <span className="font-oxygen text-custom-secondary font-semibold">
          Baixar
        </span>
        <span className="font-oxygen font-thin text-neutral-400">App</span>
      </div>
    </button>
  );
};

export default PWAButton;
