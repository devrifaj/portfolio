"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
  }

  return <div className="container py-5">{children}</div>;
}
