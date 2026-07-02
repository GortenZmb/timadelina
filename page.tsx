import Image from 'next/image'
import { MapPin, CalendarHeart, Clock } from 'lucide-react'
import { FallingPetals } from '@/components/falling-petals'
import { RsvpForm } from '@/components/rsvp-form'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FallingPetals />

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center px-5 pb-20 pt-14 sm:pt-20">
        <Hero />
        <Divider />
        <WithUs />
        <CouplePhoto />
        <Divider />
        <EventDetails />
        <VenueMap />
        <Divider />
        <RsvpSection />
        <Footer />
      </div>
    </main>
  )
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="my-10 flex items-center justify-center gap-3"
    >
      <span className="h-px w-12 bg-border" />
      <Image
        src="/images/floral-sprig.png"
        alt=""
        width={80}
        height={80}
        className="w-9 opacity-70 mix-blend-multiply"
      />
      <span className="h-px w-12 bg-border" />
    </div>
  )
}

function Hero() {
  return (
    <header className="animate-fade-up flex flex-col items-center text-center">
      <p className="mb-5 text-sm uppercase tracking-[0.35em] text-primary">
        Той шақыруы
      </p>
      <p className="text-pretty text-base text-muted-foreground">
        Біздің неке қию тойымызға шақырамыз
      </p>
      <h1 className="my-3 font-heading text-6xl leading-none text-foreground sm:text-7xl">
        Темирлан
        <span className="mx-2 block font-heading text-4xl text-primary sm:inline sm:text-5xl">
          &amp;
        </span>
        Аделина
      </h1>
      <p className="text-pretty text-base text-muted-foreground">
        Приглашаем вас на нашу свадьбу
      </p>
      <div className="mt-7 flex items-center gap-4 rounded-full border border-border/70 bg-card/70 px-6 py-2.5 text-secondary-foreground shadow-sm backdrop-blur-sm">
        <span className="font-heading text-2xl">29</span>
        <span className="h-6 w-px bg-border" />
        <span className="text-sm leading-tight">
          тамыз
          <br />
          августа
        </span>
        <span className="h-6 w-px bg-border" />
        <span className="font-heading text-2xl">2026</span>
      </div>
    </header>
  )
}

function WithUs() {
  return (
    <section className="animate-fade-up flex flex-col items-center text-center">
      <h2 className="mb-4 font-heading text-3xl text-foreground">
        Бізбен бірге · Будьте с нами
      </h2>
      <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
        Құрметті туыстар мен достар! Өміріміздегі ең бақытты күнді сіздермен
        бөліскіміз келеді. Осы ерекше мерекеде жанымызда болуларыңызды сұраймыз.
      </p>
      <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
        Дорогие родные и друзья! Мы будем счастливы разделить с вами самый
        важный день нашей жизни. Будем рады видеть вас на нашем торжестве.
      </p>
    </section>
  )
}

function CouplePhoto() {
  return (
    <div className="animate-fade-up mt-10 w-full">
      <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] border border-border/70 shadow-md">
        <Image
          src="/images/couple.jpg"
          alt="Темирлан и Аделина"
          fill
          sizes="(max-width: 640px) 90vw, 384px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

function EventDetails() {
  return (
    <section className="grid w-full grid-cols-1 gap-4">
      <DetailCard
        icon={<CalendarHeart className="h-6 w-6" strokeWidth={1.5} />}
        titleKz="Күні"
        titleRu="Дата"
        value="29 тамыз / августа 2026"
      />
      <DetailCard
        icon={<Clock className="h-6 w-6" strokeWidth={1.5} />}
        titleKz="Уақыты"
        titleRu="Время"
        value="14:00"
      />
      <DetailCard
        icon={<MapPin className="h-6 w-6" strokeWidth={1.5} />}
        titleKz="Мекен-жайы"
        titleRu="Место проведения"
        value="«EtnoFarabi»"
        sub="г. Караганда, ул. Муканова, 28/1"
      />
    </section>
  )
}

function DetailCard({
  icon,
  titleKz,
  titleRu,
  value,
  sub,
}: {
  icon: React.ReactNode
  titleKz: string
  titleRu: string
  value: string
  sub?: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border/70 bg-card/70 px-5 py-4 shadow-sm backdrop-blur-sm">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wider text-primary">
          {titleKz} · {titleRu}
        </span>
        <span className="font-heading text-2xl leading-tight text-foreground">
          {value}
        </span>
        {sub && (
          <span className="mt-0.5 text-sm text-muted-foreground">{sub}</span>
        )}
      </div>
    </div>
  )
}

function VenueMap() {
  return (
    <div className="mt-5 w-full overflow-hidden rounded-2xl border border-border/70 shadow-sm">
      <iframe
        title="Карта — EtnoFarabi, Караганда"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1288.2924858387812!2d73.14815306009656!3d49.77506343955734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4243393c88d5af0d%3A0x4badb20a66272929!2z0JHQsNC90LrQtdGCINCl0L7Qu9C7IEZhcmFiaQ!5e0!3m2!1sru!2skz!4v1782984430855!5m2!1sru!2skz"
        width="600"
        height="450"
        className="h-64 w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  )
}

function RsvpSection() {
  return (
    <section className="w-full">
      <div className="mb-6 flex flex-col items-center text-center">
        <h2 className="font-heading text-3xl text-foreground">
          Жауап беру · Подтвержде��ие
        </h2>
        <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Тойымызды жоспарлауға көмектесу үшін жауабыңызды қалдырыңыз.
          <br />
          Пожалуйста, сообщите, сможете ли вы присутствовать.
        </p>
      </div>
      <RsvpForm />
    </section>
  )
}

function Footer() {
  return (
    <footer className="mt-14 flex flex-col items-center gap-2 text-center">
      <p className="font-heading text-3xl text-foreground">
        Темирлан &amp; Аделина
      </p>
      <p className="text-sm text-muted-foreground">29.08.2026 · Караганда</p>
    </footer>
  )
}
