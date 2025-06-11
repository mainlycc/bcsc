import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PolitykaPrywatnosci() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-[#2209B8]">Polityka Prywatności</h1>
            
            <div className="prose prose-lg">
              <h2 className="text-2xl font-semibold mb-4">§1 Informacje ogólne</h2>
              <p className="mb-4">
                Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych pozyskiwanych za pośrednictwem strony internetowej www.bcsc.pl.
              </p>
              <p className="mb-4">
                Administratorem danych osobowych jest:
              </p>
              <p className="mb-4">
                Business Care Daniel Piwowarczyk<br />
                ul. Przyszłości 6, 05-140 Skubianka<br />
                NIP: 1234567890<br />
                e-mail: kontakt@bcsc.pl<br />
                tel.: +48 536 011 590<br />
                (dalej: Administrator).
              </p>

              <h2 className="text-2xl font-semibold mb-4">§2 Podstawa prawna przetwarzania danych</h2>
              <p className="mb-4">
                Dane osobowe przetwarzane są zgodnie z:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO),</li>
                <li>ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych,</li>
                <li>ustawą z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">§3 Zakres zbieranych danych</h2>
              <p className="mb-4">
                Administrator może przetwarzać następujące dane osobowe Użytkowników:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Imię i nazwisko,</li>
                <li>Adres e-mail,</li>
                <li>Numer telefonu,</li>
                <li>Treść wiadomości (jeśli podana),</li>
                <li>Dane techniczne (adres IP, typ przeglądarki, dane o urządzeniu – w celach statystycznych i bezpieczeństwa).</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">§4 Cele przetwarzania danych</h2>
              <p className="mb-4">
                Dane osobowe przetwarzane są w celu:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Obsługi zapytań kierowanych przez formularz kontaktowy,</li>
                <li>Realizacji usług oferowanych przez Administratora,</li>
                <li>Prowadzenia działań marketingowych (za zgodą Użytkownika),</li>
                <li>Utrzymywania prawidłowego działania strony i jej zabezpieczenia,</li>
                <li>Dochodzenia lub obrony roszczeń.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">§5 Dobrowolność podania danych</h2>
              <p className="mb-4">
                Podanie danych osobowych jest dobrowolne, jednak ich niepodanie może uniemożliwić skorzystanie z formularza kontaktowego lub otrzymanie odpowiedzi.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§6 Odbiorcy danych</h2>
              <p className="mb-4">
                Dane osobowe mogą być przekazywane:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Podmiotom wspierającym Administratora w zakresie usług IT, hostingu, obsługi poczty e-mail itp. – wyłącznie na podstawie umowy powierzenia,</li>
                <li>Organom publicznym – tylko w przypadkach przewidzianych przepisami prawa.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">§7 Czas przechowywania danych</h2>
              <p className="mb-4">
                Dane osobowe będą przechowywane:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>przez okres niezbędny do obsługi zapytania lub realizacji usługi,</li>
                <li>lub do momentu wycofania zgody (jeśli dane przetwarzane są na jej podstawie),</li>
                <li>lub przez okres niezbędny do zabezpieczenia ewentualnych roszczeń.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">§8 Prawa osoby, której dane dotyczą</h2>
              <p className="mb-4">
                Każdemu Użytkownikowi przysługuje prawo do:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>dostępu do swoich danych osobowych,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia (&quot;prawo do bycia zapomnianym&quot; ),</li>
                <li>ograniczenia przetwarzania,</li>
                <li>przeniesienia danych,</li>
                <li>wniesienia sprzeciwu wobec przetwarzania danych,</li>
                <li>cofnięcia zgody (jeśli była podstawą przetwarzania),</li>
                <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">§9 Pliki cookies</h2>
              <p className="mb-4">
                Strona wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia prawidłowego działania, analizy ruchu oraz działań marketingowych.
              </p>
              <p className="mb-4">
                Użytkownik może w każdej chwili zmienić ustawienia cookies w swojej przeglądarce.
              </p>
              <p className="mb-4">
                Szczegóły dotyczące plików cookies znajdują się w Polityce cookies.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§10 Zabezpieczenia</h2>
              <p className="mb-4">
                Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu zapewnienia bezpieczeństwa danych osobowych i ochrony ich przed dostępem osób nieupoważnionych.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§11 Zmiany w Polityce Prywatności</h2>
              <p className="mb-4">
                Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności.
              </p>
              <p className="mb-4">
                Zmiany wchodzą w życie z dniem ich opublikowania na stronie internetowej.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-[#2209B8] hover:bg-[#1B0792] text-white">
                <Link href="/kontakt">Skontaktuj się z nami</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 