# Implementation Plan: ESLint & Prettier レッスン

## Overview

ESLint & Prettierレッスンを既存のAstro Content Collections構造に追加する。レッスンJSONファイルの作成、ナビゲーション設定の更新、テストの実装を行う。

## Tasks

- [x] 1. レッスンJSONファイルの作成
  - [x] 1.1 eslint-prettier.jsonファイルを作成
    - `src/content/lessons/eslint-prettier.json`を作成
    - id: "eslint-prettier", category: "nodejs"を設定
    - title, descriptionを設定
    - _Requirements: 3.2, 3.3_
  - [x] 1.2 リンターとフォーマッターの概念説明セクションを作成
    - リンターの定義と役割
    - フォーマッターの定義と役割
    - 両者の違いを表形式で説明
    - _Requirements: 1.1_
  - [x] 1.3 ESLintセクションを作成
    - インストールコマンド（npm install eslint）
    - eslint.config.jsの設定例
    - 検出できるエラーの種類とコード例（未使用変数、構文エラー）
    - _Requirements: 1.2, 1.4_
  - [x] 1.4 Prettierセクションを作成
    - インストールコマンド（npm install prettier）
    - .prettierrcの設定例
    - フォーマット前後のコード比較例
    - _Requirements: 1.3, 1.5_
  - [x] 1.5 ESLintとPrettierの併用セクションを作成
    - eslint-config-prettierのインストールと設定
    - 推奨ワークフロー
    - _Requirements: 1.6_
  - [x] 1.6 演習問題を作成
    - ESLintの役割に関する問題
    - Prettierの役割に関する問題
    - ESLintとPrettierの違いに関する問題
    - _Requirements: 1.7, 4.1, 4.2, 4.3, 4.4_

- [x] 2. ナビゲーション設定の更新
  - [x] 2.1 navigation.tsにレッスンを追加
    - 「ツール」セクションにeslint-prettierアイテムを追加
    - icon: '🔍', label: 'ESLint & Prettier', badge: 'nodejs'
    - _Requirements: 2.1, 2.2_
  - [x] 2.2 TOTAL_LESSONS定数を更新
    - 25から26に更新
    - _Requirements: 2.3_

- [x] 3. チェックポイント - ビルド確認
  - Astroビルドが成功することを確認
  - Zodスキーマ検証が通ることを確認
  - 開発サーバーでレッスンページが表示されることを確認

- [x] 4. テストの実装
  - [x] 4.1 レッスンデータ検証テストを作成
    - eslint-prettier.jsonの存在確認
    - 必須フィールドの存在確認
    - **Property 1: レッスンJSONの構造検証**
    - **Validates: Requirements 3.2**
  - [x] 4.2 演習問題構造テストを作成
    - 演習問題が3問以上あることの確認
    - 各問題の構造が正しいことの確認
    - **Property 2: 演習問題の構造検証**
    - **Validates: Requirements 4.1, 1.7**
  - [x] 4.3 ナビゲーション統合テストを作成
    - ツールセクションにeslint-prettierが存在することの確認
    - TOTAL_LESSONSが26であることの確認
    - _Requirements: 2.1, 2.3_

- [x] 5. 最終チェックポイント
  - すべてのテストが通ることを確認
  - 質問があればユーザーに確認

## Notes

- レッスンコンテンツはHTML形式で記述（既存レッスンと同じ形式）
- 既存のCSSクラス（content-section, section-title, code-block等）を使用
