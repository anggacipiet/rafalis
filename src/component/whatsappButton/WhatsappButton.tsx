import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsappButton  = () => (
  <div className="App">
    <FloatingWhatsApp
      phoneNumber="6281294212524"
      accountName="Haris"
      statusMessage="Biasanya merespons dalam 1 jam"
      placeholder="Menulis pesan..."
      chatMessage="Halo 🤝 Apa yang bisa kami bantu?"
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  </div>
)

export { WhatsappButton };