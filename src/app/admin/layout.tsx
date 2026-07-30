import '../globals.css';

export const metadata = {
  title: 'Admin Dashboard - ZJ Logix',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
