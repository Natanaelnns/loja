import NavBar from '@/components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './contact/page';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
