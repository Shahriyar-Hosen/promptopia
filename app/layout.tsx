import "@styles/globals.css";
import { ReactNode } from "react";

interface IMetadata {
  title: string;
  description: string;
}

export const metadata: IMetadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">{children}</main>
    </body>
  </html>
);

export default RootLayout;
