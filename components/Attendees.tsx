import { ArrowUpRight, Calendar, Clock, MapPin, Ticket, Plane, User } from 'lucide-react';
import {
  ATTENDEE_LINKS,
  FULL_PROGRAM_URL,
  PROGRAM_DAYS,
  PROGRAM_SESSIONS,
  type ProgramSession,
} from '@/data/program';

const LINK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Venue: MapPin,
  Registration: Ticket,
  'Travel Grants': Plane,
};

const SessionBlock = ({ session }: { session: ProgramSession }) => (
  <article className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition hover:shadow-md">
    <header className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50/60 px-6 py-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
          {session.code}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200/70">
          <Clock className="h-3 w-3" />
          {session.time}
        </span>
      </div>
      <h4 className="mt-3 text-lg font-semibold leading-snug text-blue-950">{session.title}</h4>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
        <span className="inline-flex items-center gap-1.5">
          <User className="h-3.5 w-3.5 text-blue-500" />
          <span className="text-gray-500">Chair</span>
          <span className="font-medium text-blue-900">{session.chair}</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-blue-500" />
          <span className="font-medium text-blue-900">{session.room}</span>
        </span>
      </div>
    </header>
    <div className="overflow-x-auto">
      <table className="w-full table-fixed text-left text-sm">
        <thead>
          <tr className="border-b border-blue-100 bg-slate-50/60">
            <th scope="col" className="w-1/2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-blue-900">
              Paper
            </th>
            <th scope="col" className="w-1/2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-blue-900">
              Authors
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-50">
          {session.papers.map((paper) => (
            <tr key={paper.title} className="align-top transition hover:bg-blue-50/50">
              <td className="px-6 py-4 font-medium text-gray-900">{paper.title}</td>
              <td className="px-6 py-4 italic text-gray-600">{paper.authors}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </article>
);

const Attendees = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">Attendees</h2>
      <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
        ICFEC 2026 is co-located with <span className="font-semibold">IEEE/ACM CCGrid 2026</span> in
        Parramatta, Sydney. The logistics below — venue, registration, and travel grants — are
        shared with CCGrid. The table further down lists the ICFEC technical program.
      </p>

      {/* Quick-access cards → CCGrid pages */}
      <div className="mx-auto mb-16 grid max-w-5xl gap-5 sm:grid-cols-3">
        {ATTENDEE_LINKS.map((link) => {
          const Icon = LINK_ICONS[link.title] ?? MapPin;
          return (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-4 w-4 text-gray-400 transition group-hover:text-blue-700" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-blue-900">{link.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{link.description}</p>
              <span className="mt-auto pt-4 text-xs font-medium text-blue-600">
                View on CCGrid 2026 →
              </span>
            </a>
          );
        })}
      </div>

      {/* Technical program */}
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900">Technical Program</h3>
            <p className="mt-1 flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>19 – 21 May 2026 · Parramatta, Sydney</span>
            </p>
          </div>
          <a
            href={FULL_PROGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Full CCGrid program
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="space-y-10">
          {PROGRAM_DAYS.map((day) => (
            <section key={day}>
              <h4 className="mb-4 border-l-4 border-blue-600 pl-3 text-lg font-semibold text-blue-900">
                {day}
              </h4>
              <div className="space-y-5">
                {PROGRAM_SESSIONS.filter((s) => s.day === day).map((session) => (
                  <SessionBlock key={session.code} session={session} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Session times follow the CCGrid 2026 master schedule and may be adjusted closer to the
          conference. See the full CCGrid program for keynotes, tutorials, workshops, and social
          events.
        </p>
      </div>
    </div>
  );
};

export default Attendees;
