import { Component, effect, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroArrowDownTray,
  heroChevronDown,
  heroChevronLeft,
  heroChevronRight,
  heroChevronUp,
  heroDocumentText,
  heroXMark
} from '@ng-icons/heroicons/outline';
import { HeaderLinesComponent } from '../shared/header-lines/header-lines.component';
import { CategoryPopComponent } from '../shared/category-pop/category-pop.component';
import { publicationDetails } from '../../utils/publication-detail-data';
import { PublicationDecadeSection, PublicationDetail, PublicationFileItem } from '../../utils/data-model';
import { findById } from '../../utils/utils';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-publication-detail',
  imports: [NgClass, NgIconComponent, HeaderLinesComponent, CategoryPopComponent],
  providers: [
    provideIcons({
      heroArrowDownTray,
      heroChevronDown,
      heroChevronLeft,
      heroChevronRight,
      heroChevronUp,
      heroDocumentText,
      heroXMark
    })
  ],
  templateUrl: './publication-detail.component.html',
  styleUrl: './publication-detail.component.scss'
})
export class PublicationDetailComponent {
  @ViewChildren('sliderTrack') sliderTracks!: QueryList<ElementRef<HTMLElement>>;

  detail: PublicationDetail | null = null;
  currentLang = 'en';
  openSectionId: string | null = null;
  previewItem: PublicationFileItem | null = null;
  publicationId: string | null = null;
  previewUrl: SafeResourceUrl | null = null;
  previewObjectUrl: string | null = null;
  pdfPageImages: string[] = [];
  pdfPreviewLoading = false;
  pdfPreviewError = '';
  private pdfRenderToken = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService,
    private sanitizer: DomSanitizer
  ) {
    effect(() => {
      this.currentLang = this.languageService.lang();
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.publicationId = params.get('publicationId');
      this.detail = this.publicationId ? findById(publicationDetails, this.publicationId, 'id') ?? null : null;

      if (this.detail?.mode === 'accordion') {
        this.openSectionId = this.detail.sections?.[0]?.id ?? null;
      } else {
        this.openSectionId = null;
      }
    });
  }

  get descriptionList() {
    if (!this.detail) {
      return [];
    }

    return this.currentLang === 'hi' ? this.detail.description.hi : this.detail.description.en;
  }

  get pageTitle() {
    if (!this.detail) {
      return '';
    }

    return this.currentLang === 'hi' && this.detail.hindiTitle ? this.detail.hindiTitle : this.detail.title;
  }

  get isAccordionMode() {
    return this.detail?.mode === 'accordion';
  }

  get previewItems(): PublicationFileItem[] {
    if (!this.detail) {
      return [];
    }

    if (this.detail.mode === 'accordion') {
      return (this.detail.sections ?? []).flatMap(section => section.items);
    }

    return this.detail.items ?? [];
  }

  get previewItemIndex(): number {
    if (!this.previewItem) {
      return -1;
    }

    return this.previewItems.findIndex(item => item.id === this.previewItem?.id);
  }

  get previewHasPrev() {
    return this.previewItemIndex > 0;
  }

  get previewHasNext() {
    return this.previewItemIndex > -1 && this.previewItemIndex < this.previewItems.length - 1;
  }

  get isPdfPreview() {
    return this.previewItem?.fileType === 'pdf';
  }

  get isImagePreview() {
    return this.previewItem?.fileType === 'png' || this.previewItem?.fileType === 'jpeg';
  }

  get isDocPreview() {
    return this.previewItem?.fileType === 'doc';
  }

  get isUnsupportedPreview() {
    return !!this.previewItem && !this.isPdfPreview && !this.isImagePreview && !this.isDocPreview;
  }

  get previewFileBadge() {
    return this.previewItem ? this.getFileBadge(this.previewItem) : '';
  }

  get previewFileName() {
    return this.previewItem?.fileName ?? '';
  }

  get previewFileTitle() {
    return this.previewItem?.title ?? '';
  }

  get previewFileUrl() {
    return this.previewItem?.fileUrl ?? '';
  }

  hasThumbnail(item: PublicationFileItem) {
    return !!item.thumbnailUrl;
  }

  getThumbnailUrl(item: PublicationFileItem) {
    return item.thumbnailUrl ?? '';
  }

  goBack() {
    const base = this.languageService.isEnglish() ? '/publications' : '/hi/publications';
    this.router.navigateByUrl(base);
  }

  toggleSection(id: string) {
    this.openSectionId = this.openSectionId === id ? null : id;
  }

  isOpen(id: string) {
    return this.openSectionId === id;
  }

  scroll(index: number, direction: 'left' | 'right') {
    const track = this.sliderTracks.toArray()[index];
    track?.nativeElement.scrollBy({ left: direction === 'left' ? -320 : 320, behavior: 'smooth' });
  }

  openPreview(item: PublicationFileItem) {
    this.previewItem = item;
    this.syncPreviewUrl(item);
  }

  closePreview() {
    this.previewItem = null;
    this.resetPdfPreviewState();
    this.clearPreviewUrl();
  }

  openPrevPreview() {
    if (!this.previewHasPrev) {
      return;
    }

    this.previewItem = this.previewItems[this.previewItemIndex - 1];
    this.syncPreviewUrl(this.previewItem);
  }

  openNextPreview() {
    if (!this.previewHasNext) {
      return;
    }

    this.previewItem = this.previewItems[this.previewItemIndex + 1];
    this.syncPreviewUrl(this.previewItem);
  }

  downloadPdf(item: PublicationFileItem) {
    const link = document.createElement('a');
    link.href = item.fileUrl;
    link.download = item.fileName;
    link.rel = 'noopener';
    link.click();
  }

  openFileInNewTab(item: PublicationFileItem) {
    const targetUrl = this.previewObjectUrl || item.fileUrl;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }

  downloadCurrentPreview() {
    if (this.previewItem) {
      this.downloadPdf(this.previewItem);
    }
  }

  openCurrentPreviewInNewTab() {
    if (this.previewItem) {
      this.openFileInNewTab(this.previewItem);
    }
  }

  getFileBadge(item: PublicationFileItem) {
    return item.fileType.toUpperCase();
  }

  private syncPreviewUrl(item: PublicationFileItem | null) {
    this.resetPdfPreviewState();
    this.clearPreviewUrl();

    if (!item) {
      return;
    }

    if (item.fileType === 'pdf') {
      void this.renderPdfPreview(item);
      return;
    }

    if (item.fileType === 'png' || item.fileType === 'jpeg') {
      this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item.fileUrl);
    }
  }

  private clearPreviewUrl() {
    if (this.previewObjectUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(this.previewObjectUrl);
    }

    this.previewObjectUrl = null;
    this.previewUrl = null;
  }

  private resetPdfPreviewState() {
    this.pdfPageImages = [];
    this.pdfPreviewLoading = false;
    this.pdfPreviewError = '';
  }

  private async renderPdfPreview(item: PublicationFileItem) {
    const token = ++this.pdfRenderToken;
    this.pdfPreviewLoading = true;
    this.pdfPreviewError = '';

    try {
      const fileBytes = await this.loadFileBytes(item.fileUrl);
      const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
      const pdfBlobUrl = URL.createObjectURL(new Blob([fileBytes], { type: 'application/pdf' }));

      if (token !== this.pdfRenderToken) {
        URL.revokeObjectURL(pdfBlobUrl);
        return;
      }

      this.previewObjectUrl = pdfBlobUrl;
      this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfBlobUrl);

      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
        import.meta.url
      ).toString();

      const pdf = await pdfjsLib.getDocument({
        data: fileBytes,
        useSystemFonts: true,
        useWorkerFetch: false,
        isEvalSupported: false,
        disableFontFace: true
      }).promise;
      const pageImages: string[] = [];

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: 1.65 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) {
          throw new Error('Canvas context not available');
        }

        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);

        await page.render({
          canvas,
          canvasContext: context,
          viewport
        }).promise;

        pageImages.push(canvas.toDataURL('image/png'));
      }

      if (token !== this.pdfRenderToken) {
        return;
      }

      this.pdfPageImages = pageImages;
    } catch (error) {
      if (token !== this.pdfRenderToken) {
        return;
      }

      console.error('PDF preview render failed', error);
      this.pdfPreviewError = 'This PDF could not be rendered as page images in the preview. Trying browser-backed preview instead.';
    } finally {
      if (token === this.pdfRenderToken) {
        this.pdfPreviewLoading = false;
      }
    }
  }

  private async loadFileBytes(fileUrl: string) {
    if (fileUrl.startsWith('data:')) {
      const [, base64] = fileUrl.split(',');
      const binary = atob(base64);
      const bytes = new Uint8Array(binary.length);

      for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
      }

      return bytes;
    }

    const resolvedFileUrl = new URL(fileUrl, document.baseURI).toString();
    const response = await fetch(resolvedFileUrl);
    if (!response.ok) {
      throw new Error(`Failed to load file: ${response.status}`);
    }

    return new Uint8Array(await response.arrayBuffer());
  }

  trackByItemId(_: number, item: PublicationFileItem) {
    return item.id;
  }

  trackBySectionId(_: number, section: PublicationDecadeSection) {
    return section.id;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.previewItem) {
      this.closePreview();
    }
    if (event.key === 'ArrowLeft' && this.previewItem) {
      this.openPrevPreview();
    }
    if (event.key === 'ArrowRight' && this.previewItem) {
      this.openNextPreview();
    }
  }

  ngOnDestroy() {
    this.pdfRenderToken++;
    this.clearPreviewUrl();
  }
}
