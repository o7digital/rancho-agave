import React from 'react';
import heroRanchoAgave from './assets/hero-rancho-agave.jpg';

export default function MezcalTequilaMockup() {
  const steps = [
    {
      num: '01',
      title: 'Selección del agave',
      text: 'Elegimos agaves maduros de origen controlado para garantizar carácter, equilibrio y autenticidad en cada etiqueta.',
    },
    {
      num: '02',
      title: 'Cocción y extracción',
      text: 'Respetamos procesos tradicionales con una ejecución cuidada para conservar notas ahumadas, vegetales y minerales.',
    },
    {
      num: '03',
      title: 'Destilación',
      text: 'Refinamos el perfil aromático con una destilación precisa, pensada para lograr profundidad y elegancia.',
    },
    {
      num: '04',
      title: 'Presentación premium',
      text: 'Diseñamos una experiencia visual y sensorial que posiciona la marca con una imagen sofisticada y memorable.',
    },
  ];

  const products = [
    {
      name: 'Mezcal de autor',
      subtitle: 'Notas ahumadas, mineralidad elegante y perfil artesanal.',
      description:
        'Ideal para una marca con narrativa de origen. Un destilado con identidad fuerte, perfecto para hospitality, gifting premium o posicionamiento de alta gama.',
      image:
        'https://images.unsplash.com/photo-1582819509237-dde6e8d6e4d8?auto=format&fit=crop&w=900&q=80',
    },
    {
      name: 'Tequila reserva',
      subtitle: 'Equilibrio, suavidad y presencia visual premium.',
      description:
        'Una propuesta pensada para marcas que buscan elegancia comercial sin perder autenticidad mexicana ni fuerza de storytelling.',
      image:
        'https://images.unsplash.com/photo-1563223771-375783ee91ad?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-[#ead8bf] selection:bg-[#b78a2d]/40 selection:text-white">
      <section className="relative overflow-hidden bg-[#080808]">
        <div className="absolute inset-0">
          <img
            src={heroRanchoAgave}
            alt="Rancho mexicano al atardecer con plantaciones de agave azul"
            className="h-full w-full object-cover object-center brightness-[0.95] contrast-[1.08] saturate-[1.08]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,6,6,0.06),rgba(8,8,8,0.26),rgba(8,8,8,0.58),rgba(8,8,8,0.82))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,8,8,0.4),rgba(8,8,8,0.08),rgba(8,8,8,0.34))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(245,176,66,0.24),rgba(245,176,66,0.08)_24%,transparent_54%)]" />
        </div>

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="text-lg tracking-[0.35em] text-[#d9b36a] uppercase">Casa del Agave</div>
          <nav className="hidden gap-8 text-sm text-[#e7d5bb]/90 md:flex">
            <a href="#coleccion" className="transition hover:text-[#d9b36a]">Colección</a>
            <a href="#origen" className="transition hover:text-[#d9b36a]">Origen</a>
            <a href="#proceso" className="transition hover:text-[#d9b36a]">Proceso</a>
            <a href="#contacto" className="transition hover:text-[#d9b36a]">Contacto</a>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-20 pt-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#c79a3d]">Mezcal & Tequila premium</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] text-[#f1e1ca] sm:text-6xl lg:text-8xl">
              El alma del agave,
              <span className="block text-[#e9d7be]">hecha con tiempo.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#e7d5bb]/80 sm:text-lg">
              Un mockup premium para una marca que quiere transmitir origen, tradición, elegancia y valor percibido alto desde el primer scroll.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full border border-[#b8892d] px-7 py-3 text-sm font-medium text-[#e8d8c0] shadow-[0_0_0_1px_rgba(184,137,45,0.15)] transition hover:bg-[#b8892d] hover:text-[#120f0b]">
                Ver colección
              </button>
              <button className="rounded-full border border-[#6d5523] bg-[#14110d]/70 px-7 py-3 text-sm font-medium text-[#e8d8c0] transition hover:border-[#b8892d] hover:bg-[#1c1711]">
                Solicitar información
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="origen" className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-[#3b2d16] bg-[#0f0d0b] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1400&q=80"
            alt="Paisaje de agave y proceso artesanal"
            className="h-full min-h-[340px] w-full object-cover"
          />
        </div>

        <div className="flex items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#c79a3d]">Origen</p>
            <h2 className="max-w-xl font-serif text-4xl leading-tight text-[#f0dfc7] sm:text-5xl">
              Un rancho, una tierra,
              <span className="block">una identidad auténtica.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#dbc7aa]/78">
              Nuestra marca nace del respeto por la tierra y del deseo de proyectar un origen real. No vendemos solo una botella: presentamos una experiencia ligada al agave y al trabajo bien hecho.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#c7b394]/70">
              Este layout funciona muy bien para mezcal, tequila, hotel boutique con marca propia o una línea premium inspirada en México y su artesanía.
            </p>
          </div>
        </div>
      </section>

      <section id="proceso" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="mb-10 flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#6f5523] to-[#2a2114]" />
          <div className="text-center text-sm uppercase tracking-[0.55em] text-[#d0a14b]">Proceso</div>
          <div className="h-px flex-1 bg-gradient-to-r from-[#2a2114] via-[#6f5523] to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[1.6rem] border border-[#3d2f18] bg-[linear-gradient(180deg,rgba(255,191,73,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#b8892d]"
            >
              <div className="text-5xl font-serif text-[#d89d2e]">{step.num}</div>
              <h3 className="mt-5 max-w-[12rem] font-serif text-3xl leading-tight text-[#f0e0c8]">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#cbb89b]/75">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="coleccion" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.42em] text-[#c79a3d]">Colección</p>
            <h2 className="font-serif text-4xl leading-tight text-[#f0dfc7] sm:text-6xl">Mezcal y tequila con narrativa premium</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#dbc7aa]/78">
              Una identidad visual sobria, cálida y cinematográfica para destacar el producto, elevar la percepción de marca y convertir mejor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-[2rem] border border-[#3a2d17] bg-[#0d0c0a] shadow-[0_22px_80px_rgba(0,0,0,0.42)]"
              >
                <div className="relative h-[26rem] overflow-hidden">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/15 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-3xl text-[#efddc4]">{product.name}</h3>
                  <p className="mt-3 text-base leading-7 text-[#d2be9f]">{product.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-[#bea989]/75">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-[#221a10] bg-[#090909]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-[1fr_auto] lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.42em] text-[#c79a3d]">Contacto</p>
            <h3 className="mt-3 font-serif text-3xl text-[#f0dfc7] sm:text-4xl">Una presencia visual lista para convertirse en marca real.</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#c8b395]/75">
              Este mockup está pensado para servir como base premium. Se puede adaptar para tequila, mezcal, línea de destilados, proyecto hotelero o branding de exportación.
            </p>
          </div>
          <div className="flex items-center">
            <button className="rounded-full border border-[#b8892d] px-7 py-3 text-sm font-medium text-[#ead8bf] transition hover:bg-[#b8892d] hover:text-[#120f0b]">
              Pedir propuesta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
