import React from 'react';
import QRCode from "react-qr-code";

interface QRScanMeLocationProps {
  mapUrl: string;
}

const QRScanMeLocation: React.FC<QRScanMeLocationProps> = ({ mapUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <QRCode
        onClick={() => navigator.clipboard.writeText(mapUrl)}
        size={150}
        value={mapUrl}
        viewBox={`0 0 256 256`}
        className="bg-white p-2 rounded"
      />
    </div>
  );
};

export { QRScanMeLocation };