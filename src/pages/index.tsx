import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

type HomeProps = {
  datetime: string;
};

export default function Home(props: HomeProps) {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
      { facingMode: "user" },
      { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1 },
      (decodedText) => {
        alert(decodedText);
      },
      undefined
    );
  }, []);

  return (
    <div>
      <div id="reader" style={{ width: 600 }}></div>
    </div>
  );
}
