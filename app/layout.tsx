import { Metadata } from "next";
import "@/styles/globals.css";
import { josefinSans } from "@/styles/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome to The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen flex flex-col ${josefinSans.className}`}
      >
        <Header />
        <div className='flex-1 px-8 py-12'>
          <main className='max-w-7xl mx-auto'>{children}</main>
        </div>
      </body>
    </html>
  );
}
