const ESC: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (ch) => ESC[ch] ?? ch);
}

type Rule = { type: string; re: RegExp };

const rulesByLang: Record<string, Rule[]> = {
  css: [
    { type: "comment", re: /\/\*[\s\S]*?\*\//y },
    { type: "string", re: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/y },
    { type: "atrule", re: /@[a-zA-Z-]+/y },
    { type: "function", re: /[a-zA-Z_-][\w-]*(?=\()/y },
    { type: "selector", re: /[.#]?[a-zA-Z_-][\w-]*/y },
    { type: "number", re: /\b\d+(\.\d+)?(px|rem|em|%|vh|vw|s|ms)?\b/y },
  ],
  html: [
    { type: "comment", re: /<!--[\s\S]*?-->/y },
    { type: "tag", re: /<\/?[a-zA-Z][\w:-]*/y },
    { type: "attr", re: /\s[a-zA-Z_:][\w:.-]*(?==)/y },
    { type: "string", re: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/y },
  ],
  bash: [
    { type: "comment", re: /#[^\n]*/y },
    { type: "string", re: /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/y },
    { type: "command", re: /\b(npm|npx|pnpm|yarn|cd|ls|git)\b/y },
    { type: "flag", re: /--?[\w-]+/y },
  ],
  js: [
    { type: "comment", re: /\/\/[^\n]*|\/\*[\s\S]*?\*\//y },
    { type: "string", re: /`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/y },
    {
      type: "keyword",
      re: /\b(const|let|var|function|return|import|export|from|if|else|await|async|new|class|extends)\b/y,
    },
    { type: "number", re: /\b\d+(\.\d+)?\b/y },
  ],
  text: [],
};

rulesByLang.javascript = rulesByLang.js;
rulesByLang.shell = rulesByLang.bash;
rulesByLang.sh = rulesByLang.bash;

export function highlight(code: string, lang = "text"): string {
  const rules = rulesByLang[lang] ?? rulesByLang.text;
  if (!rules.length) {
    return `<pre class="shiki"><code>${escapeHtml(code)}</code></pre>`;
  }

  let out = "";
  let i = 0;

  while (i < code.length) {
    let matched = false;
    for (const rule of rules) {
      rule.re.lastIndex = i;
      const m = rule.re.exec(code);
      if (m && m.index === i) {
        out += `<span class="token token-${rule.type}">${escapeHtml(m[0])}</span>`;
        i += m[0].length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      out += escapeHtml(code[i] ?? "");
      i += 1;
    }
  }

  return `<pre class="shiki"><code>${out}</code></pre>`;
}
