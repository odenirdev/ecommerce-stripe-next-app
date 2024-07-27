import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "700"],
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={twMerge(
        "antialiased",
        fontHeading.className,
        fontBody.className
      )}
    >
      <Component {...pageProps} />
    </div>
  );
}
