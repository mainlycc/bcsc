"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Oferta() {
  const packages = [
    {
      name: "Komfort",
      type: "KPiR",
      price: 189,
      invoices: "do 10",
      popular: false,
      features: [
        "Podatkowa księga przychodów i rozchodów",
        "Ryczałt od przychodów ewidencjonowanych",
        "Do 10 faktur miesięcznie",
        "Kadry (umowa o pracę): 49 zł za każdego pracownika",
        "Kadry (zlecenie/dzieło): 39 zł za każdego pracownika",
        "Dodatkowa faktura: 6 zł",
      ],
    },
    {
      name: "Komfort +",
      type: "KPiR",
      price: 219,
      invoices: "do 20",
      popular: true,
      features: [
        "Podatkowa księga przychodów i rozchodów",
        "Ryczałt od przychodów ewidecjonowanych",
        "Do 20 faktur miesięcznie",
        "Kadry (umowa o pracę): 49 zł za każdego pracownika",
        "Kadry (zlecenie/dzieło): 39 zł za każdego pracownika",
        "Dodatkowa faktura: 5 zł",
      ],
    },
    {
      name: "Premium",
      type: "KPiR",
      price: 329,
      invoices: "do 50",
      popular: false,
      features: [
        "Podatkowa księga przychodów i rozchodów",
        "Ryczałt od przychodów ewidencjonowanych",
        "Do 50 faktur miesięcznie",
        "Kadry (umowa o pracę): 49 zł za każdego pracownika",
        "Kadry (zlecenie/dzieło): 39 zł za każdego pracownika",
        "Dodatkowa faktura: 3 zł",
      ],
    },
    {
      name: "Premium +",
      type: "KPiR",
      price: 609,
      invoices: "do 150",
      popular: false,
      features: [
        "Podatkowa księga przychodów i rozchodów",
        "Ryczałt od przychodów ewidecjonowanych",
        "Do 150 faktur miesięcznie",
        "Kadry (umowa o pracę): 45 zł za każdego pracownika",
        "Kadry (zlecenie/dzieło): 35 zł za każdego pracownika",
        "Dodatkowa faktura: 2 zł",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <div className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2209B8] mb-4">Nasza Oferta</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wybierz pakiet dostosowany do potrzeb Twojej firmy. Wszystkie pakiety obejmują pełną obsługę księgową KPiR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular 
                    ? "border-2 border-[#2209B8] shadow-lg scale-105" 
                    : "border border-gray-200"
                } ${
                  pkg.name === "Komfort" 
                    ? "bg-gradient-to-b from-blue-50 to-white" 
                    : pkg.name === "Komfort +" 
                    ? "bg-gradient-to-b from-[#2209B8]/5 to-white" 
                    : pkg.name === "Premium" 
                    ? "bg-gradient-to-b from-purple-50 to-white" 
                    : "bg-gradient-to-b from-indigo-50 to-white"
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2209B8] text-white px-4 py-1">
                    Najpopularniejszy
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className={`text-2xl font-bold ${
                    pkg.name === "Komfort" 
                      ? "text-blue-600" 
                      : pkg.name === "Komfort +" 
                      ? "text-[#2209B8]" 
                      : pkg.name === "Premium" 
                      ? "text-purple-600" 
                      : "text-indigo-600"
                  }`}>{pkg.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 mb-2">
                    Pakiet &quot;{pkg.name}&quot; {pkg.type}
                  </CardDescription>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${
                      pkg.name === "Komfort" 
                        ? "text-blue-600" 
                        : pkg.name === "Komfort +" 
                        ? "text-[#2209B8]" 
                        : pkg.name === "Premium" 
                        ? "text-purple-600" 
                        : "text-indigo-600"
                    }`}>{pkg.price}</span>
                    <span className="text-lg text-gray-500 ml-1">zł</span>
                    <span className="text-sm text-gray-500 ml-1">/miesiąc</span>
                  </div>
                  <p className={`text-sm font-medium mt-2 ${
                    pkg.name === "Komfort" 
                      ? "text-blue-600" 
                      : pkg.name === "Komfort +" 
                      ? "text-[#2209B8]" 
                      : pkg.name === "Premium" 
                      ? "text-purple-600" 
                      : "text-indigo-600"
                  }`}>Faktury: {pkg.invoices}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`h-4 w-4 mt-0.5 mr-3 flex-shrink-0 ${
                          pkg.name === "Komfort" 
                            ? "text-blue-600" 
                            : pkg.name === "Komfort +" 
                            ? "text-[#2209B8]" 
                            : pkg.name === "Premium" 
                            ? "text-purple-600" 
                            : "text-indigo-600"
                        }`} />
                        <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-4">
                  <Button
                    className={`w-full ${
                      pkg.name === "Komfort" 
                        ? "bg-blue-600 hover:bg-blue-700" 
                        : pkg.name === "Komfort +" 
                        ? "bg-[#2209B8] hover:bg-[#1B0792]" 
                        : pkg.name === "Premium" 
                        ? "bg-purple-600 hover:bg-purple-700" 
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                    size="lg"
                    asChild
                  >
                    <Link href="/kontakt">Wybierz pakiet</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-[#2209B8] mb-4 text-center">Dodatkowe informacje</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-[#2209B8] mb-2">Kadry - umowa o pracę:</h4>
                <p>• Komfort/Premium: 49 zł za każdego pracownika</p>
                <p>• Premium+: 45 zł za każdego pracownika</p>
              </div>
              <div>
                <h4 className="font-medium text-[#2209B8] mb-2">Kadry - zlecenie/dzieło:</h4>
                <p>• Komfort/Premium: 39 zł za każdego pracownika</p>
                <p>• Premium+: 35 zł za każdego pracownika</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Wszystkie ceny podane są w złotych polskich (PLN) i obejmują pełną obsługę księgową zgodnie z wybranym
                pakietem.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 