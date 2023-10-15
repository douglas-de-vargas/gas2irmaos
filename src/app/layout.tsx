// Nextjs
import type { Metadata } from 'next'

// ReactJs
import * as React from 'react'

// Hooks
import { AppStateProvider } from '@/contexts/dadosCompra'

// Styles
import './globals.css'

// Componentes
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Gás 2 Irmãos',
  description: 'Peça seu gás',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="PT-BR">
      <AppStateProvider>
        <body>
          <Header />
          <main
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {children}
          </main>
          <Footer />
        </body>
      </AppStateProvider>
    </html>
  )
}
