import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderWrapper from "@/components/HeaderWrapper";

const inter = Inter({ subsets: ["latin"] });

const getConfig = async () => {
  const res = await fetch(
    "https://testapi.einzelwerk.io/index.php?q=api/en/config"
  );

  if (!res.ok) throw new Error("No config data available.");

  return res.json();
};

export const metadata: Metadata = {
  title: "Global Media Production",
  description: "A landing page by Einzelwerk",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = await getConfig();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body-background`}>
        <header className="fixed left-4 right-4 z-10">
          <HeaderWrapper>
            <Header menu={config.menu} />
          </HeaderWrapper>
        </header>
        <main>{children}</main>
        <Footer
          footer={config.footer}
          social={config.social}
          sitename={config.site_name}
        />
      </body>
    </html>
  );
}
