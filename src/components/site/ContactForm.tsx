import { Button } from '@/components/ui/button';
import { BOOKING_URL, SALES_EMAIL, SUPPORT_EMAIL } from '@/lib/contact-channels';
import type { Locale } from '@/lib/site-content';

/** Interim contact journey: Calendly handles booking, email handles other enquiries. */
export function ContactForm({ locale, className, support = false }: { locale: Locale; className?: string; support?: boolean }) {
  const no = locale === 'no';
  return (
    <div className={className}>
      <div className="rounded-md border border-border bg-white p-7 text-navy sm:p-9">
        <h3 className="font-sans text-2xl font-semibold">{support
          ? (no ? 'Tekniske og juridiske spørsmål' : 'Technical and legal questions')
          : (no ? 'La oss se på deres behov' : 'Let’s explore your needs')}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{support
          ? (no ? 'Spør oss om sikkerhet, personvern, avtaler eller teknisk støtte.' : 'Ask us about security, privacy, agreements or technical support.')
          : (no ? 'I en uforpliktende samtale ser vi på utfordringene deres og hvordan QuestPulse kan passe inn.' : 'In an introductory conversation, we explore your challenges and where QuestPulse could help.')}</p>
        {support ? (
          <Button asChild size="lg" className="mt-6"><a href={`mailto:${SUPPORT_EMAIL}`}>{no ? 'Kontakt support' : 'Contact support'}</a></Button>
        ) : (
          <>
            <ol className="my-6 grid gap-3 text-sm leading-relaxed">
              <li>{no ? '1. Velg en ledig tid i bookingkalenderen.' : '1. Choose an available time in the booking calendar.'}</li>
              <li>{no ? '2. Fullfør bookingen og motta Teams-lenken på e-post.' : '2. Complete the booking and receive the Teams link by email.'}</li>
              <li>{no ? '3. Se bekreftelsen på e-post for møtedetaljer.' : '3. Check your email confirmation for meeting details.'}</li>
            </ol>
            <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal"><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{no ? 'Book en uforpliktende samtale' : 'Book an introductory call'}</a></Button>
            <p className="mt-3 text-xs text-muted-foreground">{no ? 'Bookingkalenderen åpnes i en ny fane. Møtet er bestilt når du har fått bekreftelsen.' : 'The booking calendar opens in a new tab. Your meeting is booked once you receive confirmation.'}</p>
          </>
        )}
        <div className="mt-7 space-y-3 border-t border-border pt-5 text-sm">
          <p>{no ? 'Salg og samarbeid: ' : 'Sales and partnerships: '}<a className="underline underline-offset-4" href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a></p>
          <p>{no ? 'Tekniske og juridiske spørsmål: ' : 'Technical and legal questions: '}<a className="underline underline-offset-4" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
        </div>
      </div>
    </div>
  );
}
