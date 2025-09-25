import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeSwitch from "@/components/ThemeSwitch";

const montserrat = Montserrat({
   variable: "--font-montserrat",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Baran Arslan",
   description: "Full Stack & Mobile Developer",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <script
               dangerouslySetInnerHTML={{
                  __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored ? stored === 'dark' : prefersDark;
                  if (isDark) document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
               }}
            />
         </head>
         <body className={`${montserrat.className} antialiased max-h-svh`}>
            <div className="container mx-auto max-w-[1400px] px-4 lg:px-0 py-4 flex items-center justify-end">
               <ThemeSwitch />
            </div>

            {children}
         </body>
      </html>
   );
}
