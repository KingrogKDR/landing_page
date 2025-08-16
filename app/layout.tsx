import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Generated a landing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50/80 to-blue-50/60 overflow-hidden">
          <div className="fixed inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse transform -translate-x-20 -translate-y-20"></div>
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000 transform translate-x-20"></div>
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-1/4 right-1/3 w-88 h-88 bg-slate-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-3000"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-4000 transform -translate-x-32 translate-y-32"></div>

            <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-5000 transform -translate-x-1/2"></div>
            <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-6000"></div>
          </div>

          <div className="fixed inset-0 bg-gradient-to-b from-transparent via-white/5 to-slate-50/20 pointer-events-none"></div>

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
