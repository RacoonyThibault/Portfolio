import FormContact from "./FormContact"; // Importation du composant FormContact
import SocialLinks from "./SocialLinks"

export default function Contact() {


  return (
    <section className="h-screen w-full flex flex-col justify-between text-slate-900 bg-slate-100">
      <SocialLinks />
      <FormContact/>
    </section>
  );
}