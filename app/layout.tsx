import Box from "./components/Box";
import Footer from "./components/Footer";
import Nav from "./components/nav/Nav";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import { getCurrentUser } from "./action/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Fiverr",
  description: "Fiverr-Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />

        <Box>
          <Nav currentUser={currentUser} />

          <main>{children}</main>

          <Footer />
        </Box>
      </body>
    </html>
  );
}
