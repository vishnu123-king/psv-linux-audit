import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  caption?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  title,
  caption,
  showLineNumbers = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API fails
      setCopied(false);
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/90 shadow-lg shadow-black/40 font-mono text-xs sm:text-sm">
      {/* Code Block Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700/80"></span>
          </div>
          {title ? (
            <span className="text-xs font-medium text-slate-300 font-mono flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              {title}
            </span>
          ) : (
            <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase">
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans text-xs">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-sans text-xs">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto p-4 text-slate-200">
        <pre className="font-mono leading-relaxed">
          {showLineNumbers ? (
            lines.map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell select-none pr-4 text-right text-slate-600 font-mono text-xs">
                  {i + 1}
                </span>
                <span className="table-cell font-mono">{line || ' '}</span>
              </div>
            ))
          ) : (
            <code>{code.trim()}</code>
          )}
        </pre>
      </div>

      {caption && (
        <div className="border-t border-slate-800/80 bg-slate-950/40 px-4 py-2 text-xs text-slate-400 font-sans italic">
          {caption}
        </div>
      )}
    </div>
  );
};
