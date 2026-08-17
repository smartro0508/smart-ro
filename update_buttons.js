const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // page.tsx & others
  { from: 'bg-[#4ea8de] text-[#0A1120] text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white', to: 'bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c]' },
  { from: 'border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white/10', to: 'bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c] border-none' },
  { from: 'border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors', to: 'bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#057a7c] transition-colors border-none' },
  { from: 'text-slate-700 bg-slate-100 hover:bg-slate-200', to: 'text-white bg-[#06999b] hover:bg-[#057a7c]' },
  { from: 'text-white bg-[#0f3a61] hover:bg-[#0a2845]', to: 'text-white bg-[#06999b] hover:bg-[#057a7c]' },
  { from: 'bg-[#0f3a61] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0a2845]', to: 'bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#057a7c]' },
  { from: 'bg-white text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors border border-slate-300', to: 'bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#057a7c] transition-colors border-none' },
  { from: 'bg-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-sm border border-slate-300 hover:bg-slate-50', to: 'bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c] border-none' },
  { from: 'bg-white text-[#0f3a61] text-xs font-bold uppercase tracking-wider hover:bg-slate-100', to: 'bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#057a7c]' },
  
  // products/[id]/page.tsx
  { from: 'bg-[#0f3a61] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#0a2845]', to: 'bg-[#06999b] text-white text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#057a7c]' },

  // contact form & location
  { from: 'bg-[#0F172A] text-white font-bold rounded-xl hover:bg-primary', to: 'bg-[#06999b] text-white font-bold rounded-xl hover:bg-[#057a7c]' },
  { from: 'bg-[#0F172A] text-white text-sm font-bold rounded-xl hover:bg-primary', to: 'bg-[#06999b] text-white text-sm font-bold rounded-xl hover:bg-[#057a7c]' },
  
  // gallery
  { from: 'bg-primary text-white font-bold rounded-lg hover:bg-white hover:text-[#0F172A]', to: 'bg-[#06999b] text-white font-bold rounded-lg hover:bg-[#057a7c]' },

  // products page filters
  { from: 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900', to: 'bg-[#06999b] text-white border-none hover:bg-[#057a7c] hover:text-white' },
  { from: 'bg-[#0f3a61] text-white border-[#0f3a61]', to: 'bg-[#06999b] text-white border-none hover:bg-[#057a7c]' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const rep of replacements) {
        if (content.includes(rep.from)) {
          content = content.split(rep.from).join(rep.to);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(srcDir);

// Also update globals.css
const cssPath = path.join(srcDir, 'app', 'globals.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');
  let changed = false;

  if (css.includes('--color-primary: #075985;')) {
    css = css.replace('--color-primary: #075985;', '--color-primary: #06999b;');
    changed = true;
  }
  if (css.includes('--color-primary-dark: #0C4A6E;')) {
    css = css.replace('--color-primary-dark: #0C4A6E;', '--color-primary-dark: #057a7c;');
    changed = true;
  }

  // Update button utility classes in css if they didn't rely just on css variables
  if (css.includes('hover:bg-primary-dark')) {
    // Actually the button uses bg-primary and hover:bg-primary-dark which are variables we just updated!
    // But let's be explicit to ensure it applies exactly.
    css = css.replace(/hover:bg-primary-dark/g, 'hover:bg-[#057a7c]');
    changed = true;
  }
  if (css.includes('hover:bg-primary/10')) {
    css = css.replace(/hover:bg-primary\/10/g, 'bg-[#06999b] text-white hover:bg-[#057a7c] border-none');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log(`Updated ${cssPath}`);
  }
}
