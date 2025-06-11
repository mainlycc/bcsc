import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Regulamin() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-[#2209B8]">Regulamin</h1>
            
            <div className="prose prose-lg">
              <h2 className="text-2xl font-semibold mb-4">§1 Postanowienia ogólne</h2>
              <p className="mb-4">
                Niniejszy regulamin określa zasady korzystania ze strony internetowej dostępnej pod adresem: www.bcsc.pl, należącej do:
              </p>
              <p className="mb-4">
                Business Care Daniel Piwowarczyk, ul. Przyszłości 6, 05-140 Skubianka, NIP: 1234567890, REGON: 123456789, wpisanej do CEIDG.
              </p>
              <p className="mb-4">
                Kontakt z Usługodawcą możliwy jest pod adresem e-mail: kontakt@bcsc.pl lub telefonicznie: +48 536 011 590.
              </p>
              <p className="mb-4">
                Strona internetowa służy prezentacji usług doradczych, księgowych i biznesowych świadczonych przez Usługodawcę.
              </p>
              <p className="mb-4">
                Regulamin jest dostępny nieodpłatnie na stronie internetowej w sposób umożliwiający jego pozyskanie, odtwarzanie i utrwalanie.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§2 Definicje</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Usługodawca – Business Care Daniel Piwowarczyk.</li>
                <li>Użytkownik – każda osoba korzystająca z serwisu internetowego.</li>
                <li>Usługa elektroniczna – funkcjonalność świadczona drogą elektroniczną przez Usługodawcę na rzecz Użytkownika za pośrednictwem strony internetowej, np. formularz kontaktowy.</li>
                <li>Regulamin – niniejszy dokument.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">§3 Rodzaj i zakres usług świadczonych drogą elektroniczną</h2>
              <p className="mb-4">
                Usługodawca świadczy drogą elektroniczną usługi polegające na:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>udostępnieniu treści informacyjnych dotyczących oferty firmy,</li>
                <li>umożliwieniu kontaktu z Usługodawcą za pomocą formularza kontaktowego,</li>
                <li>ewentualnie: zapisu na newsletter, przesyłania materiałów marketingowych, rezerwacji spotkań.</li>
              </ul>
              <p className="mb-4">
                Korzystanie z usług świadczonych drogą elektroniczną jest dobrowolne i bezpłatne.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§4 Warunki techniczne</h2>
              <p className="mb-4">
                Do korzystania z serwisu internetowego niezbędne są:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>urządzenie z dostępem do Internetu,</li>
                <li>przeglądarka internetowa obsługująca HTML5, JavaScript i pliki cookies,</li>
                <li>aktywne konto e-mail – w przypadku formularza kontaktowego.</li>
              </ul>
              <p className="mb-4">
                Użytkownik zobowiązuje się do korzystania z serwisu zgodnie z obowiązującym prawem i dobrymi obyczajami.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§5 Warunki korzystania z formularza kontaktowego</h2>
              <p className="mb-4">
                Użytkownik może skontaktować się z Usługodawcą za pomocą formularza kontaktowego dostępnego na stronie.
              </p>
              <p className="mb-4">
                Podanie danych osobowych w formularzu jest dobrowolne, ale niezbędne do obsługi zapytania.
              </p>
              <p className="mb-4">
                Dane podane w formularzu są przetwarzane zgodnie z Polityką Prywatności dostępną na stronie.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§6 Ochrona danych osobowych</h2>
              <p className="mb-4">
                Administratorem danych osobowych jest Business Care Daniel Piwowarczyk.
              </p>
              <p className="mb-4">
                Dane osobowe przetwarzane są w celu:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>obsługi zapytań kierowanych za pośrednictwem formularza kontaktowego,</li>
                <li>działań marketingowych, jeśli Użytkownik wyraził zgodę.</li>
              </ul>
              <p className="mb-4">
                Użytkownikowi przysługuje prawo dostępu do swoich danych, ich poprawiania, usunięcia oraz ograniczenia przetwarzania.
              </p>
              <p className="mb-4">
                Szczegółowe informacje znajdują się w Polityce Prywatności.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§7 Odpowiedzialność</h2>
              <p className="mb-4">
                Usługodawca nie ponosi odpowiedzialności za szkody powstałe w wyniku korzystania z serwisu niezgodnie z Regulaminem.
              </p>
              <p className="mb-4">
                Usługodawca nie gwarantuje nieprzerwanego i bezbłędnego działania strony internetowej.
              </p>
              <p className="mb-4">
                Usługodawca zastrzega sobie prawo do czasowego wyłączenia strony z przyczyn technicznych.
              </p>

              <h2 className="text-2xl font-semibold mb-4">§8 Postanowienia końcowe</h2>
              <p className="mb-4">
                Regulamin wchodzi w życie z dniem publikacji na stronie internetowej.
              </p>
              <p className="mb-4">
                Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O każdej zmianie Użytkownicy zostaną poinformowani poprzez publikację nowej wersji na stronie.
              </p>
              <p className="mb-4">
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną,</li>
                <li>RODO (Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679),</li>
                <li>Kodeks cywilny.</li>
              </ul>
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