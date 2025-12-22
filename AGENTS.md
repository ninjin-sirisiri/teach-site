# AGENTS.md

このプロジェクトは、Web開発の基礎（HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS）を段階的に学べる学習サイトです。

## プロジェクト概要

- **目的**: Web開発初心者から中級者向けの実践的なチュートリアルサイト。
- **技術スタック**:
  - **フレームワーク**: Astro v5
  - **言語**: TypeScript
  - **スタイリング**: Vanilla CSS
  - **テスト**: Vitest
  - **デプロイ**: GitHub Actions -> GitHub Pages

## フォルダ構造

- `/`: プロジェクトのルート。設定ファイル（`package.json`, `astro.config.mjs`, `tsconfig.json`）が配置されています。
- `/src/`: ソースコード。
  - `components/`: Astroコンポーネント（Layout, Sidebar, Quiz, CodeBlock など）。
  - `content/`: Astro Content Collections。
    - `config.ts`: コンテンツコレクションの設定。
    - `lessons/`: 各レッスンのJSONファイル（html-intro.json, css-basics.json など）。
  - `data/`: ナビゲーションなどの静的データ。
  - `pages/`: ページコンポーネント（index.astro, 404.astro, lessons/）。
  - `scripts/`: クライアントサイドスクリプト（quiz.ts, progress.ts, mobile-menu.ts）。
  - `styles/`: グローバルスタイル（global.css）。
  - `types/`: TypeScript型定義。
  - `__tests__/`: テストファイル。
- `/public/`: 静的アセット。バナー画像、アイコン、favicon などが配置されています。
- `/.github/workflows/`: CI/CD設定。GitHub Pagesへの自動デプロイが設定されています。
- `/tasks/`: 開発タスクやロードマップのドキュメント。
- `/.kiro/`: Kiro設定ファイル。

## プロジェクトルール

1. **コンポーネント分割**: Astroコンポーネントは可能な限り別ファイルに分割すること。
2. **言語**: コミュニケーションは日本語で行う。
3. **デザイン**: モダンでプレミアムなデザイン（リッチなアニメーション、適切な配色、タイポグラフィ）を維持する。
4. **進捗管理**: `/tasks/` フォルダ内のドキュメントを使用して、計画的な開発を行う。
5. **デプロイ**: `main` ブランチへのプッシュで自動的に GitHub Pages にデプロイされる。
6. **型安全**: TypeScriptを活用し、型定義を `/src/types/` に配置する。
7. **コンテンツ管理**: レッスンコンテンツはAstro Content Collectionsを使用し、JSONファイルで管理する。

## 開発コマンド

- `npm run dev`: 開発サーバーの起動。
- `npm run build`: プロダクションビルドの生成。
- `npm run preview`: ビルド済みのプレビュー。
- `npm run test`: テストの実行。
- `npm run test:watch`: テストのウォッチモード。
