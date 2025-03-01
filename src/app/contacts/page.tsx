import { Contacts } from "@/components/Contacts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'

export default function ContactsPage() {
  return (
      <>
        <Header navItems={navItems} />
        <Contacts />
        <Footer />
      </>
    )
}