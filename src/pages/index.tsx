import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function Home() {
  const [isCameraBlocked, setIsCameraBlocked] = useState(false);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        const html5QrCode = new Html5Qrcode("reader");
        html5QrCode.start(
          { facingMode: "environment" },
          { fps: 30, qrbox: { width: 250, height: 250 } },
          (decodedText) => {
            alert(decodedText);
          },
          undefined
        );
      })
      .catch(function (_error) {
        setIsCameraBlocked(true);
      });
  }, []);

  return (
    <div>
      {isCameraBlocked ? (
        <div>
          <p>Camera is blocked, please allow it</p>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
}
