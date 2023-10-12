import "./globals.css";
import type { Metadata } from "next";

// hooks
import { AppStateProvider } from "@/hooks/context";

// componentes
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Gás 2 Irmãos",
  description: "Peça seu gás",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppStateProvider>
      <html lang="PT-BR">
        <body>
          <Header />
          <main
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </AppStateProvider>
  );
}
