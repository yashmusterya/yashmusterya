import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { contactLinks, emailConfig, profile } from '@/content';
import { Icon, Panel, ScreenHeader } from '@/components/site/Primitives';
import { useToast } from '@/hooks/use-toast';

const EMPTY = { name: '', email: '', subject: '', message: '' };

export const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  /** Bots fill hidden fields; humans don't. */
  const [honeypot, setHoneypot] = useState('');

  const update = (field: keyof typeof EMPTY) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypot) return;

    setSending(true);
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
          to_name: profile.name,
        },
        emailConfig.publicKey,
      );
      setForm(EMPTY);
      setSent(true);
      toast({
        title: 'Message sent',
        description: 'Thanks for reaching out — I usually reply within a day.',
      });
    } catch (error) {
      console.error('Contact form failed', error);
      toast({
        variant: 'destructive',
        title: 'Message not sent',
        description: `Something went wrong. Email me directly at ${profile.email}.`,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="screen">
      <ScreenHeader
        eyebrow="Open channel"
        title="Get in touch"
        description="Internships, project collaborations, or a question about anything on this site — the form reaches my inbox directly."
      />

      <div className="contact-layout">
        <Panel className="contact-details">
          <div className="contact-signal" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <h3>Direct lines</h3>

          <ul className="contact-list">
            {contactLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external === false ? {} : { target: '_blank', rel: 'noreferrer' })}
                >
                  <Icon name={link.icon} />
                  <span>
                    <small>{link.hint ?? link.label}</small>
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <span className="contact-list__static">
                <Icon name="mapPin" />
                <span>
                  <small>Location</small>
                  {profile.location}
                </span>
              </span>
            </li>
          </ul>

          {profile.resumeUrl ? (
            <a className="btn btn--ghost btn--block" href={profile.resumeUrl} download>
              <Icon name="download" /> Download résumé
            </a>
          ) : null}

          <p className="contact-note">
            <Icon name="sparkles" /> Usually replies within 24 hours.
          </p>
        </Panel>

        <Panel variant="raised" className="contact-form-panel">
          <form className="contact-form" onSubmit={submit} noValidate={false}>
            <div className="contact-form__row">
              <label>
                <span>Name</span>
                <input
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update('name')(event.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update('email')(event.target.value)}
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label>
              <span>Subject</span>
              <input
                required
                value={form.subject}
                onChange={(event) => update('subject')(event.target.value)}
                placeholder="What is this about?"
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                required
                rows={6}
                minLength={10}
                value={form.message}
                onChange={(event) => update('message')(event.target.value)}
                placeholder="A couple of lines is plenty."
              />
            </label>

            {/* Honeypot — hidden from people, irresistible to bots. */}
            <label className="honeypot" aria-hidden="true">
              Leave this field empty
              <input
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
              />
            </label>

            <div className="contact-form__foot">
              <button type="submit" className="btn" disabled={sending}>
                <Icon name="send" /> {sending ? 'Sending…' : 'Send message'}
              </button>
              <p aria-live="polite" className="contact-form__status">
                {sent ? 'Sent — thank you.' : `Or email ${profile.email}`}
              </p>
            </div>
          </form>
        </Panel>
      </div>
    </div>
  );
};
