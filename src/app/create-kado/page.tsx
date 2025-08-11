import CreateKadoForm from "@/containers/features/CreateKado/CreateKadoForm";
import SpecialHero from "@/layouts/header/SpecialHero";
import { Suspense } from "react";

export default function CreateKado() {
  return (
    <>
      <Suspense fallback={<h1>Loading ... </h1>}>
        <SpecialHero />
      </Suspense>
      <main className="pb-16">
        <section id="kado">
          <div
            className="container max-w-6xl max-xs:px-1 py-6 lg:bg-secondaryColor 
                flex flex-col gap-4 rounded-4xl"
          >
            <Suspense fallback={<h1>Loading ... </h1>}>
              <CreateKadoForm />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}
