import "./globals.css";
import { Assignment } from "./Assignment";

export default function RootLayout({

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "white" }}>
        <Assignment />

      </body>


    </html>
  );
}
