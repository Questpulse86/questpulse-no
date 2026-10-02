/** English privacy and cookie text for Digital Coach Hub. */
import { dchubBrand } from "@/lib/dchub-content";

export const privacyMetaEn = {
  version: "1.0",
  updated: "10 September 2026",
  updatedIso: "2026-09-10",
};

export const privacyPageEn = {
  title: "Privacy and cookies",
  lead: `Digital Coach Hub AS processes personal data when you visit the website, send an enquiry or book a conversation. This page explains what is collected, why it is used, how long it is stored and which rights you have.`,
  sections: [
    {
      id: "controller",
      title: "Data controller",
      paragraphs: [
        `${dchubBrand.legalName}, company reg. no. ${dchubBrand.orgNumber}, ${dchubBrand.place}, is the data controller for personal data collected through this website.`,
        `Questions about privacy can be sent to ${dchubBrand.email} or ${dchubBrand.phoneDisplay}.`,
      ],
    },
    {
      id: "data-collected",
      title: "What information is collected",
      list: [
        "Contact form: name, email address, optional phone number, organisation and the content of your message.",
        "Booking: name, email address and selected meeting time.",
        "Website use: technical information such as browser type, page views, referral source and anonymised IP address if you consent to analytics.",
      ],
      paragraphs: [
        "The website does not store enquiries in its own database. Forms and booking go directly to our customer system.",
      ],
    },
    {
      id: "purpose",
      title: "Purpose and legal basis",
      list: [
        "Responding to enquiries and arranging conversations. Legal basis: legitimate interest and preparation for an agreement.",
        "Delivering and invoicing coaching, talks and workshops. Legal basis: agreement and bookkeeping obligations.",
        "Understanding website use and improving the content. Legal basis: consent.",
      ],
    },
    {
      id: "processors",
      title: "Who the information is shared with",
      paragraphs: [
        "We use Microsoft Bookings for appointments, Microsoft Outlook for email and Vercel for website hosting. Booking opens with Microsoft. The previous HubSpot forms have been removed from the website.",
        "Information is not shared with others, and it is never sold.",
      ],
    },
    {
      id: "retention",
      title: "How long information is stored",
      list: [
        "Enquiries that do not lead to cooperation: deleted no later than 12 months after the last contact.",
        "Client relationships: stored while the cooperation is active, and then for as long as bookkeeping law requires.",
        "Analytics data: stored for up to 13 months.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "Cookies are small text files stored in your browser. Necessary cookies are always active because the site cannot function without them. Analytics and marketing cookies are only set if you consent, and you can change your choice at any time at the bottom of this page.",
      ],
      table: [
        {
          name: "Necessary",
          purpose: "Ensures that forms, booking and your cookie choice work and are remembered.",
          duration: "The session or up to 12 months",
        },
        {
          name: "Analytics",
          purpose:
            "Previous HubSpot functionality. Not active in this contact setup.",
          duration: "Up to 13 months",
        },
        {
          name: "Marketing",
          purpose:
            "Previous HubSpot functionality. Not active in this contact setup.",
          duration: "Up to 13 months",
        },
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      list: [
        "Access to the information we hold about you.",
        "Correction of incorrect or incomplete information.",
        "Deletion of information we are not required to keep.",
        "Restriction of, or objection to, processing.",
        "Data portability, meaning that you can receive the information in a commonly used file format.",
        "Withdrawal of consent at any time, without affecting processing already carried out.",
      ],
      paragraphs: [
        `Send an email to ${dchubBrand.email}, and we will respond within 30 days. If you believe the processing breaches privacy regulations, you can complain to the Norwegian Data Protection Authority.`,
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "Information is transferred securely, and access is limited to those who need it to respond to you and deliver the service. Coaching conversations are confidential, and notes from conversations are not shared with employers or others.",
      ],
    },
  ],
};

export const cookieNoticeEn = {
  heading: "Cookies",
  text: "We use necessary cookies to make the site work, and analytics cookies to understand how the site is used. You choose what to allow.",
  accept: "Accept all",
  reject: "Necessary only",
  link: "Read the privacy policy",
};

export const dchubPrivacyUiEn = {
  versionLabel: "Version",
  updatedLabel: "Last updated",
  typeHeader: "Type",
  purposeHeader: "Purpose",
  durationHeader: "Duration",
  changeCookieChoice: "Change cookie choice",
  updatingCookieChoice: "Updating …",
  backToHome: "Back to the front page",
  orgNumberLabel: "company reg. no.",
};
