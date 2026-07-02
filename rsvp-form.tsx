'use client'

import { useState } from 'react'
import { Heart, Check, Loader2 } from 'lucide-react'
import { submitRsvp } from '@/app/actions/rsvp'

type Attendance = 'yes' | 'no' | ''

export function RsvpForm() {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState<Attendance>('')
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) {
      setError('Пожалуйста, укажите имя · Атыңызды жазыңыз')
      return
    }
    if (!attendance) {
      setError('Отметьте, придёте ли вы · Келетініңізді белгілеңіз')
      return
    }
    setError('')
    setPending(true)
    const result = await submitRsvp({
      fullName: name.trim(),
      attending: attendance === 'yes',
    })
    setPending(false)
    if (result.ok) {
      setSubmitted(true)
    } else {
      setError(
        'Қателік кетті, қайталап көріңіз · Произошла ошибка, попробуйте ещё раз',
      )
    }
  }

  if (submitted) {
    return (
      <div className="animate-fade-up flex flex-col items-center gap-5 rounded-3xl border border-border/70 bg-card/80 px-6 py-12 text-center shadow-sm backdrop-blur-sm">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="h-8 w-8" strokeWidth={1.5} />
        </span>
        <h3 className="font-heading text-3xl text-foreground">
          Рахмет! Спасибо, что ответили
        </h3>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Жауабыңыз үшін алғыс айтамыз. Біз сіздермен кездескенге дейін
          асыға күтеміз.
          <br />
          <br />
          Мы получили ваш ответ и будем с нетерпением ждать этого дня вместе с
          вами.
        </p>
        <Heart className="h-5 w-5 text-primary" strokeWidth={1.5} />
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-3xl border border-border/70 bg-card/80 px-5 py-8 shadow-sm backdrop-blur-sm sm:px-8"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="rsvp-name"
          className="text-sm font-medium text-secondary-foreground"
        >
          Аты-жөніңіз · Ваше имя и фамилия
        </label>
        <input
          id="rsvp-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Мысалы: Айдана Серікова"
          className="w-full rounded-xl border border-input bg-background/70 px-4 py-3 text-base text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/40"
        />
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-sm font-medium text-secondary-foreground">
          Тойға қатысасыз ба? · Будете ли вы на торжестве?
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <AttendanceOption
            active={attendance === 'yes'}
            onClick={() => setAttendance('yes')}
            title="Иә, келемін"
            subtitle="Да, я приду"
          />
          <AttendanceOption
            active={attendance === 'no'}
            onClick={() => setAttendance('no')}
            title="Өкінішке орай, жоқ"
            subtitle="К сожалению, не смогу"
          />
        </div>
      </fieldset>

      {error && (
        <p className="text-center text-sm text-destructive">{error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition hover:opacity-90 active:scale-[0.99] disabled:opacity-70"
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />}
        {pending ? 'Жіберілуде · Отправляем…' : 'Жіберу · Отправить ответ'}
      </button>
    </form>
  )
}

function AttendanceOption({
  active,
  onClick,
  title,
  subtitle,
}: {
  active: boolean
  onClick: () => void
  title: string
  subtitle: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-center gap-0.5 rounded-xl border px-4 py-4 text-center transition ${
        active
          ? 'border-primary bg-accent text-accent-foreground ring-2 ring-ring/40'
          : 'border-border bg-background/60 text-muted-foreground hover:border-primary/60'
      }`}
    >
      <span className="text-base font-medium">{title}</span>
      <span className="text-xs opacity-80">{subtitle}</span>
    </button>
  )
}
