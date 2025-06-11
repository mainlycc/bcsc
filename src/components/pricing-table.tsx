import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
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
        "Ryczałt od przychodów ewidencjonowanych",
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
        "Ryczałt od przychodów ewidencjonowanych",
        "Do 150 faktur miesięcznie",
        "Kadry (umowa o pracę): 45 zł za każdego pracownika",
        "Kadry (zlecenie/dzieło): 35 zł za każdego pracownika",
        "Dodatkowa faktura: 2 zł",
      ],
    },
  ]

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cennik Usług Księgowych</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Wybierz pakiet dostosowany do potrzeb Twojej firmy. Wszystkie pakiety obejmują pełną obsługę księgową KPiR.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={`relative ${pkg.popular ? "border-2 border-blue-500 shadow-lg scale-105" : "border border-gray-200"}`}
          >
            {pkg.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1">
                Najpopularniejszy
              </Badge>
            )}

            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
              <CardDescription className="text-sm text-gray-500 mb-2">
                Pakiet &quot;{pkg.name}&quot; {pkg.type}
              </CardDescription>
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                <span className="text-lg text-gray-500 ml-1">zł</span>
                <span className="text-sm text-gray-500 ml-1">/miesiąc</span>
              </div>
              <p className="text-sm text-blue-600 font-medium mt-2">Faktury: {pkg.invoices}</p>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-4">
              <Button
                className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"}`}
                size="lg"
              >
                Wybierz pakiet
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Dodatkowe informacje</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Kadry - umowa o pracę:</h4>
            <p>• Komfort/Premium: 49 zł za każdego pracownika</p>
            <p>• Premium+: 45 zł za każdego pracownika</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Kadry - zlecenie/dzieło:</h4>
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
  )
}
