// These styles apply to every route in the application
import "./output.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Vaibhav Bakliwal!",
  description: "By Vaibhav",
};

export default function layout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black max-w-[1440px] mx-auto">{children}</body>
      <GoogleAnalytics gaId="G-9HDQGFFC0B" />
    </html>
  );
}
