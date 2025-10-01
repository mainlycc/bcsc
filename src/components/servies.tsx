'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Services() {
  return (
    <div className="bg-white py-8 sm:py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/BC.png"
              alt="Business Care Logo"
              width={180}
              height={180}
              className="w-40 h-40 object-contain"
              priority
            />
            <h2 className="text-2xl sm:text-3xl font-bold">Nasze Usługi</h2>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base text-center mt-4">
            Oferujemy kompleksowe rozwiązania dla Twojego biznesu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Ubezpieczenia */}
          <Link href="https://gapauto.pl" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-[#E02D21] rounded-lg p-6 sm:p-8 transition-transform group-hover:scale-105 relative h-full">
              <div className="absolute top-4 right-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#E02D21]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white">Ubezpieczenia</h3>
              <p className="text-white/90 text-sm sm:text-base">
                Kompleksowa obsługa ubezpieczeniowa dla Twojej firmy i pojazdu
              </p>
            </div>
          </Link>

          {/* Leasing */}
          <Link href="https://www.lease1.pl" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-[#FB8423] rounded-lg p-6 sm:p-8 transition-transform group-hover:scale-105 relative h-full">
              <div className="absolute top-4 right-4 z-10">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#FB8423]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white">Leasing</h3>
              <p className="text-white/90 text-sm sm:text-base">
                Profesjonalne doradztwo i pomoc w uzyskaniu najlepszych warunków leasingu
              </p>
            </div>
          </Link>

          {/* Księgowość */}
          <Link href="https://www.bcsc.pl" target="_blank" rel="noopener noreferrer" className="block group">
            <div className="bg-[#00702D] rounded-lg p-6 sm:p-8 transition-transform group-hover:scale-105 relative h-full">
              <div className="absolute top-4 right-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00702D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white">Księgowość</h3>
              <p className="text-white/90 text-sm sm:text-base">
                Profesjonalna obsługa księgowa dla firm i przedsiębiorców
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 