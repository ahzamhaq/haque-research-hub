
import Layout from "@/components/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import CollaborationAreas from "@/components/contact/CollaborationAreas";

const Contact = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactHero />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <ContactInfo />

            <div className="lg:col-span-2">
              <ContactForm />
              <CollaborationAreas />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
