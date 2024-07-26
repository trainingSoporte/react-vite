import { Sidebar } from "@/presentation/components";

export default function Layout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2">
    <Sidebar/>
    <main>
      {children}
    </main>
    </div>
  );
}