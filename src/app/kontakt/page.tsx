import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export default function KontaktPage() {
  return (
    <div className="bg-[#B9D6F2] min-h-screen flex flex-col">
      {/* Nagłówek */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/BC.png"
              alt="BS SC Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="font-medium hover:text-[#FF6D2C] transition-colors">Strona główna</Link>
            <Link href="/#oferta" className="font-medium hover:text-[#FF6D2C] transition-colors">Oferta</Link>
            <Link href="/#o-nas" className="font-medium hover:text-[#FF6D2C] transition-colors">O nas</Link>
            <Link href="/#opinie" className="font-medium hover:text-[#FF6D2C] transition-colors">Opinie</Link>
            <Link href="/kontakt" className="font-medium text-[#FF6D2C] transition-colors">Kontakt</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Skontaktuj się z <span className="text-[#FF6D2C]">nami</span></h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Masz pytania?</h2>
                <p className="text-gray-700 mb-6">
                  Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin. Możesz też zadzwonić lub wysłać maila bezpośrednio do nas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2209B8] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span>+48 536 011 590</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2209B8] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span>kontakt@bcsc.pl</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2209B8] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span>ul. Przyszłości 6, 05-140 Skubianka</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2209B8] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m2 12 5.45 5.45" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <a href="https://bcsc.pl" target="_blank" rel="noopener noreferrer" className="hover:text-[#2209B8] transition-colors">
                      bcsc.pl
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Godziny pracy</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Poniedziałek - Piątek:</span>
                      <span className="font-medium">8:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sobota:</span>
                      <span className="font-medium">Zamknięte</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niedziela:</span>
                      <span className="font-medium">Zamknięte</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-6 text-center">Formularz kontaktowy</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 