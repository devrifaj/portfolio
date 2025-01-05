export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container py-5">{children}</div>;
}
