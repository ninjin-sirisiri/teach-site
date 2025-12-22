/**
 * モバイルメニュースクリプト
 * ハンバーガーメニューのトグル機能
 * Requirements: 8.2, 8.3
 */

/**
 * モバイルメニューの状態を管理するクラス
 */
export class MobileMenu {
  private toggle: HTMLElement | null;
  private sidebar: HTMLElement | null;
  private isOpen: boolean = false;

  constructor(toggleSelector: string = '#mobile-menu-toggle', sidebarSelector: string = '.sidebar') {
    this.toggle = document.querySelector(toggleSelector);
    this.sidebar = document.querySelector(sidebarSelector);
  }

  /**
   * モバイルメニューを初期化する
   */
  init(): void {
    if (!this.toggle || !this.sidebar) {
      return;
    }

    // トグルボタンのクリックイベント
    this.toggle.addEventListener('click', () => this.toggleMenu());

    // サイドバー外をクリックしたら閉じる
    document.addEventListener('click', (e) => this.handleOutsideClick(e));

    // Escキーで閉じる
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));

    // ウィンドウリサイズ時にメニューを閉じる（デスクトップサイズになった場合）
    window.addEventListener('resize', () => this.handleResize());
  }

  /**
   * メニューの開閉をトグルする
   */
  toggleMenu(): void {
    if (!this.sidebar || !this.toggle) return;

    this.isOpen = !this.isOpen;
    this.updateMenuState();
  }

  /**
   * メニューを開く
   */
  open(): void {
    if (!this.sidebar || !this.toggle) return;

    this.isOpen = true;
    this.updateMenuState();
  }

  /**
   * メニューを閉じる
   */
  close(): void {
    if (!this.sidebar || !this.toggle) return;

    this.isOpen = false;
    this.updateMenuState();
  }

  /**
   * メニューの状態を更新する
   */
  private updateMenuState(): void {
    if (!this.sidebar || !this.toggle) return;

    if (this.isOpen) {
      this.sidebar.classList.add('open');
      this.toggle.setAttribute('aria-label', 'メニューを閉じる');
      this.toggle.setAttribute('aria-expanded', 'true');
      this.toggle.textContent = '✕';
    } else {
      this.sidebar.classList.remove('open');
      this.toggle.setAttribute('aria-label', 'メニューを開く');
      this.toggle.setAttribute('aria-expanded', 'false');
      this.toggle.textContent = '☰';
    }
  }

  /**
   * サイドバー外のクリックを処理する
   */
  private handleOutsideClick(e: Event): void {
    if (!this.sidebar || !this.toggle || !this.isOpen) return;

    const target = e.target as HTMLElement;
    if (!this.sidebar.contains(target) && !this.toggle.contains(target)) {
      this.close();
    }
  }

  /**
   * キーボードイベントを処理する
   */
  private handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.isOpen) {
      this.close();
      this.toggle?.focus();
    }
  }

  /**
   * ウィンドウリサイズを処理する
   */
  private handleResize(): void {
    // 768px以上になったらメニューを閉じる
    if (window.innerWidth > 768 && this.isOpen) {
      this.close();
    }
  }

  /**
   * メニューが開いているかどうかを返す
   */
  getIsOpen(): boolean {
    return this.isOpen;
  }
}

/**
 * モバイルメニューを初期化するヘルパー関数
 */
export function initMobileMenu(): MobileMenu {
  const menu = new MobileMenu();
  menu.init();
  return menu;
}

// DOMContentLoadedで自動初期化
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
  });

  // Astroのページ遷移時にも再初期化
  document.addEventListener('astro:page-load', () => {
    initMobileMenu();
  });
}
