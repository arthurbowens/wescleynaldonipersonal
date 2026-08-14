import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  /** Troque pelo número real com DDI + DDD, só dígitos. Ex: 5511999999999 */
  private readonly whatsappNumber = '5511999999999';

  protected readonly currentYear = new Date().getFullYear();
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#metodo', label: 'Método' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#faq', label: 'Dúvidas' },
  ];

  protected wa(message: string): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  protected readonly msg = {
    hero: 'Olá Wescley! Quero começar minha transformação. Pode me atender?',
    consultoria:
      'Olá Wescley! Quero saber como funciona a Consultoria Online e começar o quanto antes.',
    avaliacao: 'Olá Wescley! Quero agendar minha Avaliação Física.',
    metodo: 'Olá Wescley! Quero entrar no desafio de 30 dias.',
    sobre: 'Olá Wescley! Vi seu site e quero treinar com você.',
    faq: 'Olá Wescley! Tenho uma dúvida antes de começar.',
    footer: 'Olá Wescley! Quero conversar sobre treino e resultado.',
  };

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.lockScroll(this.menuOpen());
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.lockScroll(false);
  }

  private lockScroll(lock: boolean): void {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}
