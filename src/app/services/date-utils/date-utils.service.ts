import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateUtilsService {

  // Extract a proper Date from various messy formats
  parsePublishedDate(dateStr: string): Date | null {
    if (!dateStr) return null;

    const normalized = dateStr
      .replace(/–/g, '-')          // en-dash → hyphen
      .replace(/—/g, '-')          // em-dash → hyphen
      .replace(/\s+/g, ' ')         // normalize spaces
      .trim()
      .toLowerCase();

    // Extract year
    const yearMatch = normalized.match(/(19|20)\d{2}/);
    if (!yearMatch) return null;
    const year = parseInt(yearMatch[0], 10);

    // Month mapping
    const months: any = {
      jan: 0, january: 0,
      feb: 1, february: 1,
      mar: 2, march: 2,
      apr: 3, april: 3,
      may: 4,
      jun: 5, june: 5,
      jul: 6, july: 6,
      aug: 7, august: 7,
      sep: 8, sept: 8, september: 8,
      oct: 9, october: 9,
      nov: 10, november: 10,
      dec: 11, december: 11
    };

    // Extract first month found
    const monthMatch = normalized.match(
      /(jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*/i
    );
    const month = monthMatch ? months[monthMatch[0]] : 0; // Default Jan

    // Extract day (optional)
    const dayMatch = normalized.match(/\b(\d{1,2})\b/);
    const day = dayMatch ? parseInt(dayMatch[0], 10) : 1;

    return new Date(year, month, day);
  }

  // Sort articles by parsed date
  sortByPublishedDate<T extends { publishedDate?: string }>(items: T[]): T[] {
    return [...items].sort((a, b) => {
      const dateA = this.parsePublishedDate(a.publishedDate ?? '');
      const dateB = this.parsePublishedDate(b.publishedDate ?? '');

      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;

      return dateA.getTime() - dateB.getTime();
    });
  }
}
