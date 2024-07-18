import React from 'react';
import QRCode from 'qrcode.react';

interface QRScanMeLocationProps {
  mapUrl: string;
}

const QRScanMeLocation: React.FC<QRScanMeLocationProps> = ({ mapUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md">
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <QRCode value={mapUrl} size={128} />
      </div>
    </div>
  );
};

export {QRScanMeLocation};
