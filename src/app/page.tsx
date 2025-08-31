import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calculator, ChevronRight, Clock, FileText, Mail, MapPin, Phone, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-bcsc-green">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">BC</span>
            <span className="text-2xl font-bold text-bcsc-orange">SC</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium text-white hover:text-bcsc-pink transition-colors">
              Strona główna
            </Link>
            <Link href="#services" className="text-sm font-medium text-white hover:text-bcsc-pink transition-colors">
              Usługi
            </Link>
            <Link href="#about" className="text-sm font-medium text-white hover:text-bcsc-pink transition-colors">
              O nas
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white hover:text-bcsc-pink transition-colors"
            >
              Opinie
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white hover:text-bcsc-pink transition-colors">
              Kontakt
            </Link>
          </nav>
          <Link href="/umow-sie">
            <Button className="bg-bcsc-blue hover:bg-bcsc-blue/90 text-white">Umów się</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-bcsc-green/10 py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Profesjonalne Usługi Księgowe dla Twojej Firmy
                </h1>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BCSC oferuje kompleksowe rozwiązania księgowe, które pomogą Twojej firmie osiągnąć sukces finansowy.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-bcsc-green hover:bg-bcsc-green/90 text-white">Umów konsultację</Button>
                  <Button variant="outline" className="border-bcsc-orange text-bcsc-orange hover:bg-bcsc-orange/10">
                    Dowiedz się więcej <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full bg-bcsc-light-blue flex items-center justify-center">
                  <div className="absolute h-[250px] w-[250px] rounded-full bg-bcsc-green/20 flex items-center justify-center">
                    <Calculator className="h-24 w-24 text-bcsc-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nasze Usługi</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kompleksowe rozwiązania księgowe dostosowane do potrzeb Twojej firmy.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Księgowość",
                  description: "Dokładne i terminowe rejestrowanie wszystkich transakcji finansowych dla Twojej firmy.",
                  icon: <FileText className="h-10 w-10 text-bcsc-blue" />,
                  color: "bg-bcsc-light-blue",
                },
                {
                  title: "Planowanie podatkowe",
                  description:
                    "Strategiczne planowanie podatkowe w celu minimalizacji zobowiązań i maksymalizacji oszczędności.",
                  icon: <Calculator className="h-10 w-10 text-bcsc-blue" />,
                  color: "bg-bcsc-green/10",
                },
                {
                  title: "Raportowanie finansowe",
                  description: "Kompleksowe raporty finansowe, które pomogą podejmować świadome decyzje biznesowe.",
                  icon: <FileText className="h-10 w-10 text-bcsc-blue" />,
                  color: "bg-bcsc-light-blue",
                },
                {
                  title: "Usługi kadrowo-płacowe",
                  description: "Efektywne przetwarzanie i zarządzanie listami płac dla firm każdej wielkości.",
                  icon: <Users className="h-10 w-10 text-bcsc-blue" />,
                  color: "bg-bcsc-green/10",
                },
                {
                  title: "Doradztwo biznesowe",
                  description:
                    "Profesjonalne porady, które pomogą Twojej firmie rozwijać się i osiągać sukcesy finansowe.",
                  icon: <Users className="h-10 w-10 text-bcsc-blue" />,
                  color: "bg-bcsc-light-blue",
                },
                {
                  title: "Wsparcie audytowe",
                  description: "Profesjonalna pomoc podczas audytów w celu zapewnienia zgodności i dokładności.",
                  icon: <Clock className="h-10 w-10 text-bcsc-blue" />,
                  color: "bg-bcsc-green/10",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col p-6 space-y-4 rounded-lg ${service.color}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">{service.icon}</div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link href="#" className="text-bcsc-green font-medium hover:underline inline-flex items-center">
                    Dowiedz się więcej <ChevronRight className="ml-1 h-4 w-4 text-bcsc-blue" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-bcsc-light-blue/70">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-bcsc-green px-3 py-1 text-sm text-white">O BCSC</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Twój Zaufany Partner Księgowy
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Założona w 2005 roku firma BCSC świadczy wyjątkowe usługi księgowe dla firm z różnych branż. Nasz
                  zespół certyfikowanych księgowych jest zaangażowany w pomoc Twojej firmie w osiągnięciu sukcesu
                  finansowego.
                </p>
                <ul className="space-y-2">
                  {[
                    "Ponad 15 lat doświadczenia w branży",
                    "Zespół certyfikowanych księgowych",
                    "Spersonalizowana obsługa każdego klienta",
                    "Nowoczesne technologie księgowe",
                    "Zaangażowanie w dokładność i zgodność",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-bcsc-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-bcsc-green hover:bg-bcsc-green/90 text-white">Dowiedz się więcej o nas</Button>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-40 rounded-lg bg-bcsc-pink"></div>
                  <div className="h-40 rounded-lg bg-bcsc-green"></div>
                  <div className="h-40 rounded-lg bg-bcsc-orange"></div>
                  <div className="h-40 rounded-lg bg-bcsc-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-bcsc-green/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Co mówią nasi klienci</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nie wierz nam na słowo. Oto co nasi klienci mówią o naszych usługach.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  quote:
                    "BCSC zrewolucjonizowało nasze zarządzanie finansami. Ich wiedza i dbałość o szczegóły są niezrównane.",
                  author: "Jan Kowalski",
                  company: "Tech Solutions Sp. z o.o.",
                  color: "bg-bcsc-light-blue",
                  accent: "border-bcsc-blue",
                },
                {
                  quote:
                    "Współpraca z BCSC była przełomem dla naszej firmy. Ich strategie planowania podatkowego zaoszczędziły nam tysiące złotych.",
                  author: "Alicja Nowak",
                  company: "Green Retail Sp. z o.o.",
                  color: "bg-bcsc-pink/30",
                  accent: "border-bcsc-blue",
                },
                {
                  quote: "Zespół BCSC jest profesjonalny, responsywny i naprawdę dba o sukces naszej firmy.",
                  author: "Marek Jankowski",
                  company: "Jankowski Budownictwo",
                  color: "bg-bcsc-light-blue",
                  accent: "border-bcsc-blue",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex flex-col p-6 space-y-4 rounded-lg border-l-4 ${testimonial.color} ${testimonial.accent}`}
                >
                  <div className="flex-1">
                    <p className="italic text-gray-600">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-bcsc-green px-3 py-1 text-sm text-white font-medium">
                  Kontakt
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Skontaktuj się z nami</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Masz pytania lub jesteś gotowy, aby zacząć? Skontaktuj się z nami już dziś, aby umówić się na
                  bezpłatną konsultację.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-bcsc-blue" />
                    <div>
                      <h3 className="font-bold">Adres</h3>
                      <p className="text-gray-500">ul. Biznesowa 123, lokal 200, 00-001 Warszawa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-bcsc-blue" />
                    <div>
                      <h3 className="font-bold">Telefon</h3>
                      <p className="text-gray-500">+48 796 148 577</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-bcsc-blue" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500">info@bcsc.pl</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-bcsc-blue" />
                    <div>
                      <h3 className="font-bold">Godziny pracy</h3>
                      <p className="text-gray-500">Poniedziałek - Piątek: 9:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Wyślij nam wiadomość</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Imię i nazwisko
                        </label>
                        <Input id="name" placeholder="Wpisz swoje imię i nazwisko" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Wpisz swój email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Temat
                      </label>
                      <Input id="subject" placeholder="Wpisz temat" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Wiadomość
                      </label>
                      <Textarea id="message" placeholder="Wpisz swoją wiadomość" className="min-h-[120px]" />
                    </div>
                    <Button className="w-full bg-bcsc-green hover:bg-bcsc-green/90 text-white">Wyślij wiadomość</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-bcsc-green text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">BC</span>
                <span className="text-2xl font-bold text-bcsc-orange">SC</span>
              </div>
              <p className="text-gray-100">
                Profesjonalne usługi księgowe, które pomogą Twojej firmie osiągnąć sukces finansowy.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Szybkie linki</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-100 hover:text-bcsc-pink transition-colors">
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-100 hover:text-bcsc-pink transition-colors">
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-100 hover:text-bcsc-pink transition-colors">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-100 hover:text-bcsc-pink transition-colors">
                    Opinie
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-100 hover:text-bcsc-pink transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="text-gray-100">
                Zapisz się do naszego newslettera, aby otrzymywać najnowsze aktualizacje i porady.
              </p>
              <form className="flex space-x-2">
                <Input
                  placeholder="Wpisz swój email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-200"
                />
                <Button className="bg-bcsc-orange hover:bg-bcsc-orange/90 text-white">Zapisz się</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-100">&copy; {new Date().getFullYear()} BCSC. Wszelkie prawa zastrzeżone.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-100 hover:text-bcsc-pink">
                Polityka prywatności
              </Link>
              <Link href="#" className="text-gray-100 hover:text-bcsc-pink">
                Warunki korzystania
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

