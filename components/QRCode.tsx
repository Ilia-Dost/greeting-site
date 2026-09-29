"use client";

import { QRCodeCanvas } from "qrcode.react";

type QRCodeProps = {
    path: string;
};

export default function QRCode({ path }: QRCodeProps) {
    const value =
        typeof window !== "undefined"
            ? `${window.location.origin}${path}`
            : path;

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