import { z } from "zod";

export const localeSchema = z.enum(["no", "en"]);

export const leadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).optional().default(""),
  role: z.string().trim().max(160).optional().default(""),
  inquiryType: z.string().trim().min(1).max(40),
  message: z.string().trim().max(4000).optional().default(""),
  locale: localeSchema,
});

export const contentSaveSchema = z.object({
  locale: localeSchema,
  data: z.record(z.string(), z.unknown()),
});
