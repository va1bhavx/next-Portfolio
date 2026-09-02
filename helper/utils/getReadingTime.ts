import { LogsDetail } from "../data/LogData";

/**
 * Universal average reading speed: 200 words per minute (WPM).
 * Standard across Medium, Dev.to, and technical publications.
 */
const WORDS_PER_MINUTE = 200;

export interface ReadingTimeResult {
  minutes: number;
  text: string;
  words: number;
}

/**
 * Calculates dynamic reading time for a log by parsing all title,
 * descriptions, subheadings, and section content blocks.
 */
export function getReadingTime(log: LogsDetail): ReadingTimeResult {
  const textParts: string[] = [];

  if (log.title) textParts.push(log.title);
  if (log.snippet) textParts.push(log.snippet);
  if (Array.isArray(log.description)) {
    textParts.push(...log.description);
  }

  if (Array.isArray(log.sections)) {
    for (const section of log.sections) {
      if (section.subheading) textParts.push(section.subheading);

      if (Array.isArray(section.content)) {
        for (const block of section.content) {
          if (block.value) textParts.push(block.value);
          if (block.title) textParts.push(block.title);
          if (block.description) textParts.push(block.description);
          if (block.alt) textParts.push(block.alt);
        }
      }

      if (Array.isArray(section.links)) {
        for (const link of section.links) {
          if (link.title) textParts.push(link.title);
          if (link.description) textParts.push(link.description);
        }
      }
    }
  }

  if (Array.isArray(log.links)) {
    for (const link of log.links) {
      if (link.title) textParts.push(link.title);
      if (link.description) textParts.push(link.description);
    }
  }

  const combinedText = textParts.join(" ");
  const words = combinedText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));

  return {
    minutes,
    text: `${minutes} min read`,
    words,
  };
}

export function formatReadingTime(log: LogsDetail): string {
  return getReadingTime(log).text;
}
