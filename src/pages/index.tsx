import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

type HomeProps = {
  datetime: string;
};

export default function Home(props: HomeProps) {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText) => {
        alert(decodedText);
      },
      undefined
    );
  }, []);

  return (
    <div>
      <div id="reader"></div>
    </div>
  );
}
