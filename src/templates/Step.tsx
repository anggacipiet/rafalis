import { Section } from "@/component/layout/Section";

const Steps = () => {
  return (
    <>
      <div className="relative bg-black-600">
        <Section>   
          <h1 className="font-semibold text-5xl text-white mb-8">Pemesanan</h1>
          <div className="flex flex-col space-y-10 md:space-y-0 divide-y divide-neutral-800 md:divide-y-0 ">
            {/* Step 1 */}
            <div className="flex flex-row">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-32 py-5 border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                  <div className="text-3xl font-black text-neutral-500">Step 1</div>
                  <div className="text-neutral-500 text-sm">HUBUNGI</div>
                </div>
                <div className="h-full border-l-4 border-transparent">
                  <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                </div>
              </div>
              <div className="flex-auto rounded border-gray-300">
                <div className="flex md:flex-row flex-col items-center">
                  <div className="flex-auto">
                    <div className="md:hidden text-sm font-normal uppercase pt-3 sm:pl-3 text-neutral-500"><span className="font-black">Step 1</span> - Hubungi</div>
                    <div className="py-3 text-3xl text-white font-semibold">Hubungi Kami Untuk Order</div>
                    <div className="text-neutral-500">
                      Dapat melalui layanan chat Whatsapp, telepon dan email.
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-96 w-full p-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
                        <path d="M21 16.59V15a2.99 2.99 0 00-2.8-2.95c-1.43-.11-2.66.61-3.45 1.5l-.55.56a13.062 13.062 0 01-5.69-5.7l.56-.55c.89-.79 1.61-2.02 1.5-3.45A2.99 2.99 0 009 3h-1.59A2.992 2.992 0 005 5v1c0 .55-.45 1-1 1s-1 .45-1 1v1a10.012 10.012 0 0010 10h1c.55 0 1-.45 1-1v-1c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z"/>
                    </svg>

                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-start flex-row">
              <div className="border-t-4 border-r-4 border-transparent">
                <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
              </div>
              <div className="border-t-4 border-transparent flex-auto">
                <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
              </div>
              <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-row-reverse">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-32 py-5 border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                  <div className="text-3xl font-black text-neutral-500">Step 2</div>
                  <div className="text-neutral-500 text-sm">NEGOSIASI</div>
                </div>
                <div className="h-full border-r-4 border-transparent">
                  <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                </div>
              </div>
              <div className="flex-auto rounded border-gray-300">
                <div className="flex md:flex-row flex-col items-center">
                  <div className="flex-auto">
                    <div className="md:hidden text-sm font-normal uppercase pt-3 sm:pl-3 text-neutral-500"><span className="font-black">Step 2</span> - Negosiasi</div>
                    <div className="py-3 text-3xl text-white font-semibold">Negosiasi Harga</div>
                    <div className="text-neutral-500">
                      Silakan melakukan negosiasi dan berkonsultasi dengan kami.
                    </div>
                  </div>
                  <div className="md:w-96 w-full p-5 hidden md:flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.5v-5H8v-2h3v-5h2v5h3v2h-3v5h-2z"/>
</svg>


                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-start flex-row-reverse">
              <div className="border-t-4 border-l-4 border-transparent">
                <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
              </div>
              <div className="border-t-4 border-transparent flex-auto">
                <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
              </div>
              <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-row">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-32 py-5 border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                  <div className="text-3xl font-black text-neutral-500">Step 3</div>
                  <div className="text-neutral-500 text-sm">DEAL</div>
                </div>
                <div className="h-full border-l-4 border-transparent">
                  <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                </div>
              </div>
              <div className="flex-auto rounded border-gray-300">
                <div className="flex md:flex-row flex-col items-center">
                  <div className="flex-auto">
                    <div className="md:hidden text-sm font-normal uppercase pt-3 sm:pl-3 text-neutral-500"><span className="font-black">Step 3</span> - Deal</div>
                    <div className="py-3 text-3xl text-white font-semibold">Deal Harga</div>
                    <div className="text-neutral-500">
                      Bila terjadi kesepakatan harga kirim PO yang dipesan melalui email kami.
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-96 w-full p-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
                        <path d="M19 3h-3V1h-2v2H8V1H6v2H3v2h16V3zm-4 4H9v2h6V7zm-1 3H10v2h4v-2zm2 3H9v2h8v-2zm2 3H9v2h10v-2zm1 3H8v2h10v-2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Connector */}
            <div className="hidden md:flex items-start flex-row">
              <div className="border-t-4 border-r-4 border-transparent">
                <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
              </div>
              <div className="border-t-4 border-transparent flex-auto">
                <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
              </div>
              <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-row-reverse">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-32 py-5 border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                  <div className="text-3xl font-black text-neutral-500">Step 4</div>
                  <div className="text-neutral-500 text-sm">PEMBAYARAN</div>
                </div>
                <div className="h-full border-r-4 border-transparent">
                  <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                </div>
              </div>
              <div className="flex-auto rounded border-gray-300">
                <div className="flex md:flex-row flex-col items-center">
                  <div className="flex-auto">
                    <div className="md:hidden text-sm font-normal uppercase pt-3 sm:pl-3 text-neutral-500"><span className="font-black">Step 4</span> - Pembayaran</div>
                    <div className="py-3 text-3xl text-white font-semibold">Pembayaran</div>
                    <div className="text-neutral-500">
                      Setelah kami verifikasi pembayaran, kami akan segera memproses pesanan Anda.
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-96 w-full p-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
                      <path d="M20 4h-2V2h-4v2H6V2H2v4h18V4zm0 6H2v2h18v-2zm0 4H2v2h18v-2zm0 4H2v2h18v-2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-start flex-row-reverse">
              <div className="border-t-4 border-l-4 border-transparent">
                <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
              </div>
              <div className="border-t-4 border-transparent flex-auto">
                <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
              </div>
              <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-row">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-32 py-5 border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                  <div className="text-3xl font-black text-neutral-500">Step 5</div>
                  <div className="text-neutral-500 text-sm">PENGIRIMAN</div>
                </div>
                <div className="h-full border-l-4 border-transparent">
                  <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                </div>
              </div>
              <div className="flex-auto rounded border-gray-300">
                <div className="flex md:flex-row flex-col items-center">
                  <div className="flex-auto">
                    <div className="md:hidden text-sm font-normal uppercase pt-3 sm:pl-3 text-neutral-500"><span className="font-black">Step 5</span> - Pengiriman</div>
                    <div className="py-3 text-3xl text-white font-semibold">Pengiriman</div>
                    <div className="text-neutral-500">
                      Setelah produk selesai, kami akan mengirimkan pesanan Anda ke alamat yang telah di sepakati.
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-96 w-full p-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 object-scale-down text-white">
                      <path d="M20,8h-3v5h2v2h-2v2h-2v-2h-6v2H7v-2H5v-2h2V8H4v6H2v4h3v2h2v-2h10v2h2v-2h3v-4h-2V8z M16,8v5h-8V8H16z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-start flex-row">
              <div className="border-t-4 border-r-4 border-transparent">
                <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
              </div>
              <div className="border-t-4 border-transparent flex-auto">
                <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
              </div>
              <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
            </div>

            <div className="pt-10 md:pt-0">
              <button className="hover:bg-white transition-all hover:text-neutral-950 font-medium text-xl w-full border-4 border-white rounded-full border-dashed p-4 md:p-6">
                GET STARTED
                <span className="text-2xl ml-4">
                  -&gt;
                </span>
              </button>
            </div>


          </div>
        </Section>
      </div>
    </>
  )
}

export { Steps }