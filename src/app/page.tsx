import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="bg-[#E0F8F2] min-h-screen flex flex-col">
      {/* Nagłówek */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1EA39B]">BS SC</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="font-medium hover:text-[#FF6D2C] transition-colors">Strona główna</Link>
            <Link href="#oferta" className="font-medium hover:text-[#FF6D2C] transition-colors">Oferta</Link>
            <Link href="#o-nas" className="font-medium hover:text-[#FF6D2C] transition-colors">O nas</Link>
            <Link href="#opinie" className="font-medium hover:text-[#FF6D2C] transition-colors">Opinie</Link>
            <Link href="/kontakt" className="font-medium hover:text-[#FF6D2C] transition-colors">Kontakt</Link>
          </nav>
          <Button className="hidden md:flex bg-[#FF6D2C] hover:bg-[#e65a1c] text-white" asChild>
            <Link href="/kontakt">Darmowa konsultacja</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Księgowość dla <span className="text-[#1EA39B]">startupów</span> i młodych firm
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Zajmij się rozwojem swojego biznesu, a my zadbamy o Twoją księgowość. Kompleksowa obsługa księgowa dostosowana do potrzeb dynamicznych firm.
              </p>
              <div className="bg-white p-4 rounded-lg border-2 border-dashed border-[#FF6D2C] relative mt-4 mb-6 overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#FF6D2C] text-white py-1 px-4 transform rotate-45 translate-x-6 -translate-y-1 font-bold text-sm">
                  -20%
                </div>
                <p className="font-bold text-[#FF6D2C]">Oferta Specjalna dla Nowych Firm!</p>
                <p className="text-sm text-gray-700">Zniżka 20% na wszystkie usługi księgowe przez pierwsze 3 miesiące od wpisu do CEIDG!</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#1EA39B] hover:bg-[#198f87] text-white" asChild>
                  <Link href="#oferta">Poznaj ofertę</Link>
                </Button>
                <Button variant="outline" className="border-[#1EA39B] text-[#1EA39B] hover:bg-[#1EA39B] hover:text-white" asChild>
                  <Link href="/kontakt">Skontaktuj się z nami</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px]">
              <Image 
                src="/hero.png" 
                alt="Księgowość dla startupów" 
                fill 
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Oferta */}
        <section id="oferta" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Nasza <span className="text-[#FF6D2C]">oferta</span></h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Zajmujemy się wyłącznie uproszczoną księgowością — nie świadczymy usług doradczych. Dzięki temu możesz mieć pewność, że cały nasz wysiłek koncentruje się na sprawnym prowadzeniu Twoich rozliczeń.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                <div className="text-[#FF6D2C] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Książka Przychodów i Rozchodów</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Kompleksowa ewidencja przychodów i kosztów, sporządzanie deklaracji podatkowych, rozliczenia miesięczne i roczne.
                </p>
                <button className="bg-[#E0F8F2] text-[#1EA39B] py-2 px-4 rounded-md font-medium hover:bg-[#1EA39B] hover:text-white transition-colors self-start">
                  Zobacz więcej
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                <div className="text-[#FF6D2C] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                    <path d="M12 22.08V12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Rozliczanie ryczałtu ewidencjonowanego</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Prowadzenie ewidencji przychodów, terminowe składanie deklaracji, kontrola nad prawidłowością stawek podatku ryczałtowego.
                </p>
                <button className="bg-[#E0F8F2] text-[#1EA39B] py-2 px-4 rounded-md font-medium hover:bg-[#1EA39B] hover:text-white transition-colors self-start">
                  Zobacz więcej
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                <div className="text-[#FF6D2C] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Obsługa kadrowo-płacowa</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Przygotowywanie list płac, rozliczenia z ZUS, obsługa składek, prowadzenie dokumentacji pracowniczej.
                </p>
                <button className="bg-[#E0F8F2] text-[#1EA39B] py-2 px-4 rounded-md font-medium hover:bg-[#1EA39B] hover:text-white transition-colors self-start">
                  Zobacz więcej
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                <div className="text-[#FF6D2C] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                    <path d="M10 9H8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sporządzanie deklaracji i sprawozdań</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Przygotowywanie deklaracji PIT, ZUS, a także rocznych sprawozdań do urzędów, pilnowanie terminów i kontrola poprawności dokumentów.
                </p>
                <button className="bg-[#E0F8F2] text-[#1EA39B] py-2 px-4 rounded-md font-medium hover:bg-[#1EA39B] hover:text-white transition-colors self-start">
                  Zobacz więcej
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                <div className="text-[#FF6D2C] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Współpraca online i stacjonarnie</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Możliwość przesyłania dokumentów drogą elektroniczną, konsultacje telefoniczne, mailowe i spotkania osobiste (w zależności od potrzeb).
                </p>
                <button className="bg-[#E0F8F2] text-[#1EA39B] py-2 px-4 rounded-md font-medium hover:bg-[#1EA39B] hover:text-white transition-colors self-start">
                  Zobacz więcej
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                <div className="text-[#FF6D2C] mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Bezpłatna pomoc w rejestracji działalności</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Pomoc w wypełnieniu i złożeniu wniosków rejestrowych, wsparcie w doborze optymalnej formy opodatkowania.
                </p>
                <button className="bg-[#E0F8F2] text-[#1EA39B] py-2 px-4 rounded-md font-medium hover:bg-[#1EA39B] hover:text-white transition-colors self-start">
                  Zobacz więcej
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Oferta specjalna */}
        <section className="py-12 bg-gradient-to-r from-[#1EA39B]/10 to-[#FF6D2C]/10">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-dashed border-[#FF6D2C] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FF6D2C] text-white py-2 px-6 transform rotate-45 translate-x-8 -translate-y-2 font-bold">
                -20%
              </div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-[#E0F8F2] rounded-full p-6 w-24 h-24 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1EA39B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <path d="M12 10v4" />
                    <path d="M10 12h4" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Oferta Specjalna dla Nowych Firm</h2>
                  <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-[#FF6D2C]">Zniżka 20%</span> na wszystkie usługi księgowe przez pierwsze 3 miesiące od wpisu do CEIDG!
                  </p>
                  <p className="text-gray-600 mb-4">
                    Skorzystaj z profesjonalnego wsparcia księgowego na start swojej działalności w promocyjnej cenie.
                  </p>
                  <Button asChild className="bg-[#FF6D2C] hover:bg-[#e65a1c] text-white py-2 px-6 rounded-md font-medium transition-colors">
                    <Link href="/kontakt">Dowiedz się więcej</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dlaczego my */}
        <section id="o-nas" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Dlaczego <span className="text-[#FF6D2C]">BS SC</span> to najlepszy wybór?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#E0F8F2] rounded-lg">
                <div className="w-16 h-16 bg-[#1EA39B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Specjalizacja w obsłudze startupów</h3>
                <p className="text-gray-700">Doskonale rozumiemy specyfikę młodych, dynamicznie rozwijających się firm i ich potrzeby księgowe.</p>
              </div>
              <div className="p-6 bg-[#E0F8F2] rounded-lg">
                <div className="w-16 h-16 bg-[#1EA39B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Elastyczna współpraca</h3>
                <p className="text-gray-700">Dopasowujemy się do Twojego rytmu pracy i rodzaju działalności, oszczędzając Twój czas i zapewniając terminowe rozliczenia.</p>
              </div>
              <div className="p-6 bg-[#E0F8F2] rounded-lg">
                <div className="w-16 h-16 bg-[#1EA39B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
                    <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
                    <line x1="12" x2="12" y1="22" y2="13" />
                    <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Przejrzyste rozliczenia</h3>
                <p className="text-gray-700">Płacisz za konkretny zakres usług, bez ukrytych kosztów i niespodziewanych dopłat.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Opinie klientów */}
        <section id="opinie" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Co mówią o nas <span className="text-[#FF6D2C]">klienci</span>?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-[#1EA39B]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F8F2] flex items-center justify-center text-[#1EA39B] font-bold text-xl">
                      M
                    </div>
                    <div>
                      <CardTitle className="text-lg">Michał K.</CardTitle>
                      <CardDescription>Startup technologiczny</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2 text-[#FF6D2C]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">&quot;Współpraca z BS SC to strzał w dziesiątkę dla mojego startupa. Dzięki ich wsparciu mogę skupić się na rozwoju produktu, a nie na rozliczeniach podatkowych. Profesjonalizm i elastyczność na najwyższym poziomie!&quot;</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#1EA39B]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F8F2] flex items-center justify-center text-[#1EA39B] font-bold text-xl">
                      A
                    </div>
                    <div>
                      <CardTitle className="text-lg">Anna W.</CardTitle>
                      <CardDescription>Sklep internetowy</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2 text-[#FF6D2C]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">&quot;Od roku korzystam z usług BS SC i jestem zachwycona poziomem obsługi. Zawsze otrzymuję szybkie odpowiedzi na moje pytania, a księgowość mojego sklepu internetowego jest prowadzona perfekcyjnie. Polecam!&quot;</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#1EA39B]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F8F2] flex items-center justify-center text-[#1EA39B] font-bold text-xl">
                      P
                    </div>
                    <div>
                      <CardTitle className="text-lg">Piotr J.</CardTitle>
                      <CardDescription>Agencja marketingowa</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2 text-[#FF6D2C]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">&quot;BS SC doskonale rozumie specyfikę rozwijających się firm. Cenię ich za elastyczność, terminowość i profesjonalne doradztwo. Dzięki nim mogę spokojnie rozwijać moją agencję bez stresu związanego z rozliczeniami.&quot;</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skontaktuj się z <span className="text-[#FF6D2C]">nami</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Masz pytania?</h3>
                <p className="text-gray-700 mb-6">
                  Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin. Możesz też zadzwonić lub wysłać maila bezpośrednio do nas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1EA39B] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span>+48 536 011 590</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1EA39B] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span>kontakt@bcsc.pl</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1EA39B] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span>ul. Przyszłości 6, 05-140 Skubianka</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1EA39B] flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m2 12 5.45 5.45" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <a href="https://bcsc.pl" target="_blank" rel="noopener noreferrer" className="hover:text-[#1EA39B] transition-colors">
                      bcsc.pl
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-6">Potrzebujesz pełnego formularza kontaktowego?</h3>
                <p className="text-gray-700 mb-6">
                  Przejdź do naszej strony kontaktowej, gdzie znajdziesz szczegółowy formularz oraz dodatkowe informacje.
                </p>
                <Button asChild className="bg-[#FF6D2C] hover:bg-[#e65a1c] text-white px-8 py-3">
                  <Link href="/kontakt">Przejdź do strony kontaktowej</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Stopka */}
      <Footer />
    </div>
  );
}
