import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-white/80">
              Kompleksowa obsługa księgowa dla startupów i młodych firm. Wspieramy Twój biznes, byś mógł skupić się na tym, co najważniejsze - jego rozwoju.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Usługi</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/80 hover:text-white">Księga Przychodów i Rozchodów</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Ryczałt ewidencjonowany</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Obsługa kadrowo-płacowa</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white">Deklaracje i sprawozdania</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white">Strona główna</Link></li>
              <li><Link href="#oferta" className="text-white/80 hover:text-white">Oferta</Link></li>
              <li><Link href="#o-nas" className="text-white/80 hover:text-white">O nas</Link></li>
              <li><Link href="#opinie" className="text-white/80 hover:text-white">Opinie</Link></li>
              <li><Link href="#kontakt" className="text-white/80 hover:text-white">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+48 536 011 590</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>kontakt@bcsc.pl</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>ul. Przyszłości 6, 05-140 Skubianka</span>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <a href="https://www.facebook.com/people/BC-Księgowość/61571088134057/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m2 12 5.45 5.45" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <a href="https://bcsc.pl" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                  bcsc.pl
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>© 2023 BC SC. Wszelkie prawa zastrzeżone.</p>
          <div className="mt-4 space-x-4">
            <Link href="/regulamin" className="text-white/60 hover:text-white">
              Regulamin
            </Link>
            <Link href="/polityka-prywatnosci" className="text-white/60 hover:text-white">
              Polityka Prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 