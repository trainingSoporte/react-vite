import { Sidebar } from "@/presentation/components";
import { Infobar } from "@/presentation/components/sidebar/Infobar";

export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <main className="flex flex-col gap-2 rounded-md p-2 shadow-lg bg-zinc-100 w-full">
        <section>
          <Infobar/>
        </section>
        <section>
          {children}
        </section>
      </main>
    </div>
  );
}