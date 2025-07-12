import KadoCreator from "@/containers/features/kado-creator";
import KadoCost from "@/containers/features/kado-creator/KadoCost";

export default function Home() {
  return (
    <main className="pb-16">
      <section id="kado">
        <div
          className="container max-w-6xl max-xs:px-1 py-6 lg:bg-secondaryColor 
                flex flex-col gap-4 rounded-4xl"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <KadoCreator />
          </div>
          <KadoCost />
        </div>
      </section>
    </main>
  );
}
