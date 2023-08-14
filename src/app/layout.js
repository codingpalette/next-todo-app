import './globals.css'
// import { Inter } from 'next/font/google'
import {NextUiWrapper} from "@/app/components/wrapper/NextUiWrapper";
import ReduxWrapper from "@/app/components/wrapper/ReduxWrapper";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <ReduxWrapper>
          <NextUiWrapper>
            {children}
          </NextUiWrapper>
        </ReduxWrapper>
      </body>
    </html>
  )
}
