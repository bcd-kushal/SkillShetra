import type { Metadata } from "next"
import "./globals.css"
import { generateMetadata } from "@/common/meta/metadata"
import { ChildrenType } from "@/common/types/reactTypes"
import Footer from "@/components/global/Footer/Footer"
import Header from "@/components/global/Header/Header"
import { HorizontalSpacing } from "@/components/global/_Spacing/HorizontalSpacing"

export const metadata: Metadata = generateMetadata()

export default async function RootLayout({ children }: { children: ChildrenType }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        
        <Header />
        <main className="bg-fuchsia-600">
          <HorizontalSpacing>
            {children}
          </HorizontalSpacing>
          </main>
        <Footer />
        
        </body>
    </html>
  );
}
