import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages のリポジトリ名に合わせて base を設定
  site: 'https://your-username.github.io',
  base: '/teach-site/',
  
  // 出力ディレクトリをdistに設定
  outDir: './dist',
  
  // 静的サイト生成モード
  output: 'static',
  
  // ビルド設定
  build: {
    assets: '_astro'
  }
});
