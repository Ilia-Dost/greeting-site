"use client";

import { QRCodeCanvas } from "qrcode.react";

type QRCodeProps = {
  value: string;
};

export default function QRCode({ value }: QRCodeProps) {
  return (
    <div className="inline-flex rounded-3xl bg-white p-4 shadow-lg">
      <QRCodeCanvas
        value={value}
        size={220}
        bgColor="#ffffff"
        fgColor="#111827"
        level="H"
        includeMargin
      />
    </div>
  );
}