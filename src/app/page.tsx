"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/servies";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Badge,
} from "@/components/ui/badge"

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        </div>
      </div>
      {/* Nagłówek */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center -my-2">
            <Image
              src="/BC.png"
              alt="BS SC Logo"
              width={120}
              height={120}
              className="object-contain w-[90px] h-[90px] md:w-[110px] md:h-[110px]"
              priority
            />
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="font-medium hover:text-[#FF4800] transition-colors">
                  Strona główna
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/cennik" className="font-medium hover:text-[#FF4800] transition-colors">
                  Cennik
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#o-nas" className="font-medium hover:text-[#FF4800] transition-colors">
                  O nas
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#opinie" className="font-medium hover:text-[#FF4800] transition-colors">
                  Opinie
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/kontakt" className="font-medium hover:text-[#FF4800] transition-colors">
                  Kontakt
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button className="hidden md:flex bg-[#FF4800] hover:bg-[#FF2D00] text-white" asChild>
            <Link href="/kontakt">Darmowa konsultacja</Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-40">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block py-2 text-lg font-medium hover:text-[#FF4800] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Strona główna
              </Link>
              <Link 
                href="/cennik" 
                className="block py-2 text-lg font-medium hover:text-[#FF4800] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cennik
              </Link>
              <Link 
                href="#o-nas" 
                className="block py-2 text-lg font-medium hover:text-[#FF4800] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                O nas
              </Link>
              <Link 
                href="#opinie" 
                className="block py-2 text-lg font-medium hover:text-[#FF4800] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Opinie
              </Link>
              <Link 
                href="/kontakt" 
                className="block py-2 text-lg font-medium hover:text-[#FF4800] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
              <Button className="w-full bg-[#FF4800] hover:bg-[#FF2D00] text-white mt-4" asChild>
                <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                  Darmowa konsultacja
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-8 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Księgowość dla <span className="text-[#2209B8]">startupów</span> i młodych firm
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700">
                Zajmij się rozwojem swojego biznesu, a my zadbamy o Twoją księgowość. Kompleksowa obsługa księgowa dostosowana do potrzeb dynamicznych firm.
              </p>
              <Card className="border-2 border-dashed border-[#FF4800] relative mt-4 mb-6 overflow-hidden">
                <Badge className="absolute top-0 right-0 bg-[#FF4800] text-white py-1 px-2 md:px-4 text-xs md:text-sm transform rotate-45 translate-x-4 md:translate-x-6 -translate-y-1">
                  -20%
                </Badge>
                <CardContent className="p-3 md:p-4">
                  <p className="font-bold text-[#FF4800] text-sm md:text-base">Oferta Specjalna dla Nowych Firm!</p>
                  <p className="text-xs md:text-sm text-gray-700">Zniżka 20% na wszystkie usługi księgowe przez pierwsze 3 miesiące od wpisu do CEIDG!</p>
                </CardContent>
              </Card>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button className="bg-[#2209B8] hover:bg-[#1B0792] text-white text-sm md:text-base" asChild>
                  <Link href="/cennik">Poznaj ofertę</Link>
                </Button>
                <Button variant="outline" className="border-[#2209B8] text-[#2209B8] hover:bg-[#2209B8] hover:text-white text-sm md:text-base" asChild>
                  <Link href="/kontakt">Skontaktuj się z nami</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] order-1 md:order-2">
              <Image 
                src="/hero.png" 
                alt="Księgowość dla startupów" 
                fill 
                style={{ objectFit: 'contain' }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Oferta */}
        <section id="oferta" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800">
                Nasza <span className="text-[#2727E6]">oferta</span>
              </h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                Zajmujemy się wyłącznie uproszczoną księgowością — nie świadczymy usług doradczych. Dzięki temu możesz mieć pewność, że cały nasz wysiłek koncentruje się na sprawnym prowadzeniu Twoich rozliczeń.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="p-4 md:p-8 bg-[#2727E6] text-white shadow-lg transform transition-transform hover:scale-105">
                <CardHeader className="p-0">
                  <div className="text-white mb-3 md:mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg md:text-xl mb-2 md:mb-3 text-white text-center">Książka Przychodów i Rozchodów</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-white/90 flex-grow text-center text-sm md:text-base">
                    Kompleksowa ewidencja przychodów i kosztów, sporządzanie deklaracji podatkowych, rozliczenia miesięczne i roczne.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 md:p-8 bg-[#FFDA00] text-gray-800 shadow-lg transform transition-transform hover:scale-105">
                <CardHeader className="p-0">
                  <div className="text-gray-800 mb-3 md:mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                      <path d="M12 22.08V12" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg md:text-xl mb-2 md:mb-3 text-gray-800 text-center">Rozliczanie ryczałtu ewidencjonowanego</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-800/90 flex-grow text-center text-sm md:text-base">
                    Prowadzenie ewidencji przychodów, terminowe składanie deklaracji, kontrola nad prawidłowością stawek podatku ryczałtowego.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 md:p-8 bg-[#FFBAC4] text-gray-800 shadow-lg transform transition-transform hover:scale-105">
                <CardHeader className="p-0">
                  <div className="text-gray-800 mb-3 md:mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg md:text-xl mb-2 md:mb-3 text-gray-800 text-center">Obsługa kadrowo-płacowa</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-800/90 flex-grow text-center text-sm md:text-base">
                    Przygotowywanie list płac, rozliczenia z ZUS, obsługa składek, prowadzenie dokumentacji pracowniczej.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 md:p-8 bg-[#FF8E3D] text-white shadow-lg transform transition-transform hover:scale-105">
                <CardHeader className="p-0">
                  <div className="text-white mb-3 md:mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg md:text-xl mb-2 md:mb-3 text-white text-center">Sporządzanie deklaracji i sprawozdań</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-white/90 flex-grow text-center text-sm md:text-base">
                    Przygotowywanie deklaracji PIT, ZUS, a także rocznych sprawozdań do urzędów, pilnowanie terminów i kontrola poprawności dokumentów.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 md:p-8 bg-[#91D8EC] text-gray-800 shadow-lg transform transition-transform hover:scale-105">
                <CardHeader className="p-0">
                  <div className="text-gray-800 mb-3 md:mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg md:text-xl mb-2 md:mb-3 text-gray-800 text-center">Współpraca online i stacjonarnie</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-800/90 flex-grow text-center text-sm md:text-base">
                    Możliwość przesyłania dokumentów drogą elektroniczną, konsultacje telefoniczne, mailowe i spotkania osobiste (w zależności od potrzeb).
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-4 md:p-8 bg-[#2727E6] text-white shadow-lg transform transition-transform hover:scale-105">
                <CardHeader className="p-0">
                  <div className="text-white mb-3 md:mb-4 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg md:text-xl mb-2 md:mb-3 text-white text-center">Bezpłatna pomoc w rejestracji działalności</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-white/90 flex-grow text-center text-sm md:text-base">
                    Pomoc w wypełnieniu i złożeniu wniosków rejestrowych, wsparcie w doborze optymalnej formy opodatkowania.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Oferta specjalna */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-[#00B8B0]/20 to-[#FF4800]/20">
          <div className="container mx-auto px-4">
            <Card className="border-2 border-dashed border-[#FF4800] relative overflow-hidden">
              <Badge className="absolute top-0 right-0 bg-[#FF4800] text-white py-1 md:py-2 px-3 md:px-6 text-xs md:text-sm transform rotate-45 translate-x-6 md:translate-x-8 -translate-y-1 md:-translate-y-2">
                -20%
              </Badge>
              <CardContent className="p-4 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="bg-[#B9D6F2] rounded-full p-4 md:p-6 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2209B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-10 md:h-10">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <path d="M12 10v4" />
                    <path d="M10 12h4" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Oferta Specjalna dla Nowych Firm</h2>
                  <p className="text-base md:text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-[#FF4800]">Zniżka 20%</span> na wszystkie usługi księgowe przez pierwsze 3 miesiące od wpisu do CEIDG!
                  </p>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Skorzystaj z profesjonalnego wsparcia księgowego na start swojej działalności w promocyjnej cenie.
                  </p>
                  <Button asChild className="bg-[#FF4800] hover:bg-[#FF2D00] text-white py-2 px-4 md:px-6 rounded-md font-medium transition-colors text-sm md:text-base">
                    <Link href="/kontakt">Dowiedz się więcej</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dlaczego my */}
        <section id="o-nas" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">
              Dlaczego <span className="text-[#FF4800]">BC SC</span> to najlepszy wybór?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-4 md:p-6 bg-[#B9D6F2]">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2209B8] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Specjalizacja w obsłudze startupów</h3>
                <p className="text-gray-700 text-sm md:text-base">Doskonale rozumiemy specyfikę młodych, dynamicznie rozwijających się firm i ich potrzeby księgowe.</p>
              </Card>
              <Card className="p-4 md:p-6 bg-[#B9D6F2]">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2209B8] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Elastyczna współpraca</h3>
                <p className="text-gray-700 text-sm md:text-base">Dopasowujemy się do Twojego rytmu pracy i rodzaju działalności, oszczędzając Twój czas i zapewniając terminowe rozliczenia.</p>
              </Card>
              <Card className="p-4 md:p-6 bg-[#B9D6F2]">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2209B8] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                    <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
                    <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
                    <line x1="12" x2="12" y1="22" y2="13" />
                    <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Przejrzyste rozliczenia</h3>
                <p className="text-gray-700 text-sm md:text-base">Płacisz za konkretny zakres usług, bez ukrytych kosztów i niespodziewanych dopłat.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Opinie klientów */}
        <section id="opinie" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
              Co mówią o nas <span className="text-[#FF4800]">klienci</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="border-[#00B8B0]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00FFF0] flex items-center justify-center text-[#00B8B0] font-bold text-xl">
                      M
                    </div>
                    <div>
                      <CardTitle className="text-lg">Michał K.</CardTitle>
                      <CardDescription>Startup technologiczny</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2 text-[#FF4800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">&quot;Współpraca z BC SC to strzał w dziesiątkę dla mojego startupa. Dzięki ich wsparciu mogę skupić się na rozwoju produktu, a nie na rozliczeniach podatkowych. Profesjonalizm i elastyczność na najwyższym poziomie!&quot;</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#00B8B0]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00FFF0] flex items-center justify-center text-[#00B8B0] font-bold text-xl">
                      A
                    </div>
                    <div>
                      <CardTitle className="text-lg">Anna W.</CardTitle>
                      <CardDescription>Sklep internetowy</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2 text-[#FF4800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">&quot;Od roku korzystam z usług BC SC i jestem zachwycona poziomem obsługi. Zawsze otrzymuję szybkie odpowiedzi na moje pytania, a księgowość mojego sklepu internetowego jest prowadzona perfekcyjnie. Polecam!&quot;</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#00B8B0]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#00FFF0] flex items-center justify-center text-[#00B8B0] font-bold text-xl">
                      P
                    </div>
                    <div>
                      <CardTitle className="text-lg">Piotr J.</CardTitle>
                      <CardDescription>Agencja marketingowa</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-2 text-[#FF4800]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700">&quot;BC SC doskonale rozumie specyfikę rozwijających się firm. Cenię ich za elastyczność, terminowość i profesjonalne doradztwo. Dzięki nim mogę spokojnie rozwijać moją agencję bez stresu związanego z rozliczeniami.&quot;</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nasze Usługi */}
        <Services />

        {/* Kontakt */}
        <section id="kontakt" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
              Skontaktuj się z <span className="text-[#FF4800]">nami</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-semibold">Masz pytania?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                    Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin. Możesz też zadzwonić lub wysłać maila bezpośrednio do nas.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2209B8] flex items-center justify-center text-white flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px]">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <span className="text-sm md:text-base">+48 796 148 577</span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2209B8] flex items-center justify-center text-white flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px]">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base">kontakt@bcsc.pl</span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2209B8] flex items-center justify-center text-white flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px]">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base">ul. Przyszłości 6, 05-140 Skubianka</span>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2209B8] flex items-center justify-center text-white flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px]">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="m2 12 5.45 5.45" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      </div>
                      <a href="https://bcsc.pl" target="_blank" rel="noopener noreferrer" className="hover:text-[#2209B8] transition-colors text-sm md:text-base">
                        bcsc.pl
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 md:p-8 text-center">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold">Potrzebujesz pełnego formularza kontaktowego?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                    Przejdź do naszej strony kontaktowej, gdzie znajdziesz szczegółowy formularz oraz dodatkowe informacje.
                  </p>
                  <Button asChild className="bg-[#FF4800] hover:bg-[#FF2D00] text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                    <Link href="/kontakt">Przejdź do strony kontaktowej</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}