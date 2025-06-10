/**
 * Утиліта для коректного формування шляхів до ресурсів з урахуванням базового шляху
 */

/**
 * Повертає правильний шлях до ресурсу з урахуванням базового шляху
 * @param path Відносний шлях до ресурсу (наприклад, "/icons/image.svg")
 * @returns Повний шлях з урахуванням базового шляху
 */
export function getAssetPath(path: string): string {
  // Визначаємо, чи запущено додаток на GitHub Pages
  const isGitHubPages = typeof window !== 'undefined' && 
    window.location.hostname === 'urielskiy.github.io';
  
  // Якщо запущено на GitHub Pages, додаємо префікс
  return isGitHubPages ? `/speed-reading-hub${path}` : path;
}
