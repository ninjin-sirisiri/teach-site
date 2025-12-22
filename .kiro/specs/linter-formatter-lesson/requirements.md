# Requirements Document

## Introduction

Web開発学習サイトに「ESLint & Prettier」のレッスンを追加する機能です。最もポピュラーなリンター（ESLint）とフォーマッター（Prettier）について、基本概念から実践的な使い方までを1つのレッスンで学べるコンテンツを提供します。

## Glossary

- **Lesson_System**: レッスンコンテンツを管理・表示するシステム
- **Content_Collection**: Astro Content Collectionsを使用したレッスンデータ管理機構
- **Navigation_System**: サイドバーのナビゲーション構造を管理するシステム
- **Quiz_System**: レッスン内の演習問題を管理・表示するシステム
- **ESLint**: JavaScriptおよびTypeScriptの静的解析ツール（リンター）
- **Prettier**: コードを一貫したスタイルに自動整形するツール（フォーマッター）

## Requirements

### Requirement 1: ESLint & Prettierレッスンの作成

**User Story:** As a 学習者, I want to ESLintとPrettierの基本概念と使い方を学ぶ, so that コード品質の向上と一貫したスタイルを維持できるようになる

#### Acceptance Criteria

1. WHEN 学習者がESLint & Prettierレッスンにアクセスする THEN THE Lesson_System SHALL リンターとフォーマッターの違いと役割を説明するコンテンツを表示する
2. WHEN レッスンが表示される THEN THE Lesson_System SHALL ESLintのインストール方法と基本的な設定例を表示する
3. WHEN レッスンが表示される THEN THE Lesson_System SHALL Prettierのインストール方法と基本的な設定例を表示する
4. WHEN レッスンが表示される THEN THE Lesson_System SHALL ESLintが検出できるエラーの種類（未使用変数、構文エラー、潜在的バグ）をコード例で説明する
5. WHEN レッスンが表示される THEN THE Lesson_System SHALL Prettierによるフォーマット前後のコード比較例を表示する
6. WHEN レッスンが表示される THEN THE Lesson_System SHALL ESLintとPrettierを併用する方法を説明する
7. THE Lesson_System SHALL ESLint & Prettierレッスンに最低3問の演習問題を含める

### Requirement 2: ナビゲーションへの統合

**User Story:** As a 学習者, I want to サイドバーから新しいレッスンにアクセスできる, so that 他のレッスンと同様にスムーズに学習を進められる

#### Acceptance Criteria

1. WHEN サイドバーが表示される THEN THE Navigation_System SHALL 「ツール」セクションにESLint & Prettierレッスンを表示する
2. THE Navigation_System SHALL レッスンに適切なアイコン（🔍など）とラベル（「ESLint & Prettier」）を設定する
3. WHEN 新しいレッスンが追加される THEN THE Navigation_System SHALL TOTAL_LESSONS定数を26に更新する

### Requirement 3: コンテンツスキーマの準拠

**User Story:** As a 開発者, I want to 新しいレッスンが既存のスキーマに準拠する, so that システムの一貫性を維持できる

#### Acceptance Criteria

1. THE Content_Collection SHALL 新しいレッスンJSONファイルを既存のZodスキーマで検証する
2. WHEN レッスンJSONが作成される THEN THE Content_Collection SHALL id（eslint-prettier）、category（nodejs）、title、description、content、exercisesフィールドを含む
3. THE Content_Collection SHALL categoryフィールドに「nodejs」を使用する（開発ツールカテゴリとして）

### Requirement 4: 演習問題の品質

**User Story:** As a 学習者, I want to 理解度を確認できる演習問題に取り組む, so that 学習内容を定着させられる

#### Acceptance Criteria

1. THE Quiz_System SHALL 各演習問題に問題文、4つの選択肢、正解インデックス、解説を含める
2. THE Quiz_System SHALL ESLintの役割に関する問題を含める
3. THE Quiz_System SHALL Prettierの役割に関する問題を含める
4. THE Quiz_System SHALL ESLintとPrettierの違いに関する問題を含める
