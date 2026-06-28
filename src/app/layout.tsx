import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { Roboto } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import ThemeProviderWrapper from "../components/ThemeProviderWrapper";
import BackToTopButton from "../components/BackToTopButton";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: {
    default: "Furkan Karakaş",
    template: "%s | Furkan Karakaş",
  },
  description:
    "Welcome to the personal website of Furkan Karakaş! Feel free to explore my portfolio, learn about my skills and experience, and get in touch with me. Thank you for visiting!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProviderWrapper>
            <div
              style={{
                minHeight: "100dvh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Header />
              <main
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <BackToTopButton />
            </div>
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
