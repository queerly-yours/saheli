import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(text: string, query: string, lang: 'en' | 'hi' = 'en'): SafeHtml {
    if (!text || !query?.trim()) return text;

    const words = query.trim().split(/\s+/).filter(Boolean);
    const escaped = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    let regex: RegExp;
    if (lang === 'hi') {
      regex = new RegExp(`(${escaped.join('|')})`, 'giu');
    } else {
      regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');
    }

    const highlighted = text.replace(regex, `<mark class="search-highlight">$1</mark>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}