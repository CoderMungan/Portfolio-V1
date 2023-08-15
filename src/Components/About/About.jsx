import React from 'react'

export default function About() {
    return (
        <>
            <section id='about'>
                <div className="flex">
                    <div className="w-screen h-auto">
                        <div className="w-3/6 m-auto">
                            <h1 className='text-white text-center text-4xl'>Hakkımda</h1>
                            <p className='text-white text-center mt-5'>Merhaba, ben bir Full Stack Developer'ım. Hem ön yüzde etkileyici arayüzler oluşturuyorum hem de arka yüzde veritabanı tasarımı ve iş mantığı kodlaması gibi temel alanlarda çalışıyorum. Teknolojiye ilgi duyan, sorun çözmeye odaklı ve sürekli öğrenmeye istekliyim. Kendi vizyonumu kodlarla hayata geçirerek dijital dünyaya katkı sağlıyorum.</p>
                        </div>
                    </div>
                    {/* Card Yapısı */}
                </div>
                <div className="grid-cols-1 lg:grid-cols-4">
                    <div className="block justify-around space-y-10 space-x-0 mt-32 lg:flex lg:space-x-10 lg:mr-4 lg:ml-4 lg:space-y-0">
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'><i class="fa-brands fa-js"></i></h1>
                            <p className='p-5 text-white'>JavaScript ile dinamik ve etkileşimli web uygulamaları geliştirebiliyorum. Kullanıcı deneyimini ön planda tutarak projeler oluşturuyorum.</p>
                            <p className='p-5 text-white'>ReactJs ve NodeJs Teknolojisine Hakimim. Bu web sitesi React ile yazılmıştır.</p>
                            <a href="https://github.com/CoderMungan" target='_blank' rel="noopener noreferrer"><button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">Projelerime Bakabilirsiniz</button></a>
                        </div>
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'><i class="fa-brands fa-python"></i></h1>
                            <p className='p-5 text-white'>Python ile veri analizi, yapay zeka ve web programlaması gibi farklı alanlarda projeler geliştiriyorum. Basit ve temiz kodlama prensiplerine öncelik veriyorum.</p>
                            <p className='p-5 text-white'>Django kütüphanesiyle uygulamaların Back-End tarafını yazıyorum.</p>
                            <a href="https://github.com/CoderMungan" target='_blank' rel="noopener noreferrer"><button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">Projelerime Bakabilirsiniz</button></a>
                        </div>
                        <div className="w-screen bg-gradient-to-tr from-violet-700 to-fuchsia-400 shadow-black shadow-2xl text-center rounded-lg lg:w-auto">
                            <h1 className='mt-3 p-4 text-white text-8xl'><i class="fa-brands fa-html5"></i></h1>
                            <p className='p-5 text-white'>HTML5 ile modern ve semantik web sayfaları oluşturuyorum. Kullanıcı dostu arayüzler tasarlamak için en son web standartlarını takip ediyorum.</p>
                            <p className='p-5 text-white'>Tailwind, Bootstrap Teknolojilerine hakimim. Bu web sitesi Tailwind ile stilize edilmiştir.</p>
                            <a href="https://github.com/CoderMungan" target='_blank' rel="noopener noreferrer"><button type='button' className="inline-block mb-10 lg:mb-10 rounded-full shadow-2xl bg-violet-700 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">Projelerime Bakabilirsiniz</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
