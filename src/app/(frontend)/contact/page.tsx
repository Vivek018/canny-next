import { LandingTitle } from "@/common/LandingTitle";
import { ContactForm } from "./_components/ContactForm";
import { LandingDescription } from "@/common/LandingDescription";
import { ContactFooter } from "./_components/ContactFooter";

type Props = {};

export default function ContactPage({}: Props) {
  return (
    <main className='mx-auto px-4 md:px-8 h-full items-center flex flex-col'>
      <section className='mx-auto mt-4 md:mt-10 flex flex-col items-center justify-end w-[90%] sm:w-3/5 md:w-1/2'>
        <LandingTitle title='Get A Quote' />
        <LandingDescription text="Reach out for expert guidance, support and collaboration opportunities. Let's shape the future together." />
      </section>
      <section className='w-full mt-4 md:w-[96%]'>
        <ContactForm />
      </section>
      <section className='w-full mt-6 md:mt-12 md:w-[96%]'>
        <ContactFooter />
      </section>
    </main>
  );
}
