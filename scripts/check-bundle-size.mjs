import { statSync } from 'node:fs';

const files = ['web/index.html', 'web/styles.css', 'web/app.js', 'web/images/deal-stream.svg', 'web/images/approval-map.svg'];
const warningBudgetKb = 160;

const totalBytes = files.reduce((sum, file) => sum + statSync(file).size, 0);
const totalKb = totalBytes / 1024;

if (totalKb > warningBudgetKb) {
  console.warn(
    `[bundle-size-warning] Total static payload is ${totalKb.toFixed(1)}KB and exceeds warning budget (${warningBudgetKb}KB).`
  );
  process.exitCode = 1;
} else {
  console.log(`[bundle-size-check] Total static payload is ${totalKb.toFixed(1)}KB (budget ${warningBudgetKb}KB).`);
}
