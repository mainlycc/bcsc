import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, ChevronLeft, Clock, Mail, MapPin, Phone } from "lucide-react"

export default function UmowSie() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-[#16AB59]">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">BC</span>
              <span className="text-2xl font-bold text-[#FF7715]">SC</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-white hover:text-[#FFBAC4] transition-colors">
              Strona główna
            </Link>
            <Link href="/#services" className="text-sm font-medium text-white hover:text-[#FFBAC4] transition-colors">
              Usługi
            </Link>
            <Link href="/#about" className="text-sm font-medium text-white hover:text-[#FFBAC4] transition-colors">
              O nas
            </Link>
            <Link
              href="/#testimonials"
              className="text-sm font-medium text-white hover:text-[#FFBAC4] transition-colors"
            >
              Opinie
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-white hover:text-[#FFBAC4] transition-colors">
              Kontakt
            </Link>
          </nav>
          <Link href="/">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <ChevronLeft className="mr-2 h-4 w-4" /> Powrót
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-[#E1EDFF]/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <div className="inline-block rounded-lg bg-[#16AB59] px-3 py-1 text-sm text-white font-medium">
                Umów spotkanie
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skontaktuj się z nami</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Wypełnij formularz poniżej, aby umówić się na konsultację z naszym zespołem ekspertów.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-lg border bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Formularz kontaktowy</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium leading-none">
                        Imię
                      </label>
                      <Input id="first-name" placeholder="Wpisz swoje imię" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium leading-none">
                        Nazwisko
                      </label>
                      <Input id="last-name" placeholder="Wpisz swoje nazwisko" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Wpisz swój adres email" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium leading-none">
                      Telefon
                    </label>
                    <Input id="phone" type="tel" placeholder="Wpisz swój numer telefonu" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium leading-none">
                      Interesująca usługa
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled selected>
                        Wybierz usługę
                      </option>
                      <option value="ksiegowosc">Księgowość</option>
                      <option value="podatki">Planowanie podatkowe</option>
                      <option value="raporty">Raportowanie finansowe</option>
                      <option value="kadry">Usługi kadrowo-płacowe</option>
                      <option value="doradztwo">Doradztwo biznesowe</option>
                      <option value="audyt">Wsparcie audytowe</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="preferred-date" className="text-sm font-medium leading-none">
                      Preferowana data spotkania
                    </label>
                    <div className="relative">
                      <Input id="preferred-date" type="date" className="pl-10" />
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-[#300FE6]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Wiadomość
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Opisz swoje potrzeby lub zadaj pytanie"
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-[#16AB59] hover:bg-[#16AB59]/90 text-white">Umów spotkanie</Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg border bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Dane kontaktowe</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-[#300FE6]" />
                      <div>
                        <h3 className="font-bold">Adres</h3>
                        <p className="text-gray-500">ul. Biznesowa 123, lokal 200, 00-001 Warszawa</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-[#300FE6]" />
                      <div>
                        <h3 className="font-bold">Telefon</h3>
                        <p className="text-gray-500">(22) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-[#300FE6]" />
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-gray-500">info@bcsc.pl</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-[#300FE6]" />
                      <div>
                        <h3 className="font-bold">Godziny pracy</h3>
                        <p className="text-gray-500">Poniedziałek - Piątek: 9:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Dlaczego warto się z nami spotkać?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#16AB59] flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-bold">Indywidualne podejście</h3>
                        <p className="text-gray-500">
                          Każdy klient otrzymuje spersonalizowane rozwiązania dostosowane do potrzeb jego firmy.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#16AB59] flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-bold">Doświadczeni eksperci</h3>
                        <p className="text-gray-500">
                          Nasz zespół składa się z certyfikowanych księgowych z wieloletnim doświadczeniem.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#16AB59] flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-bold">Kompleksowe usługi</h3>
                        <p className="text-gray-500">
                          Oferujemy pełen zakres usług księgowych i doradczych pod jednym dachem.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#16AB59] text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">BC</span>
                <span className="text-2xl font-bold text-[#FF7715]">SC</span>
              </div>
              <p className="text-gray-100">
                Profesjonalne usługi księgowe, które pomogą Twojej firmie osiągnąć sukces finansowy.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Szybkie linki</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-100 hover:text-[#FFBAC4] transition-colors">
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-100 hover:text-[#FFBAC4] transition-colors">
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-100 hover:text-[#FFBAC4] transition-colors">
                    O nas
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-gray-100 hover:text-[#FFBAC4] transition-colors">
                    Opinie
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-100 hover:text-[#FFBAC4] transition-colors">
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
                <Button className="bg-[#FF7715] hover:bg-[#FF7715]/90 text-white">Zapisz się</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-100">&copy; {new Date().getFullYear()} BCSC. Wszelkie prawa zastrzeżone.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-100 hover:text-[#FFBAC4]">
                Polityka prywatności
              </Link>
              <Link href="#" className="text-gray-100 hover:text-[#FFBAC4]">
                Warunki korzystania
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

