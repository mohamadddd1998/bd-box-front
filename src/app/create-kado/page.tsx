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
          <CreateKadoForm />
        </section>
      </main>
    </>
  );
}
