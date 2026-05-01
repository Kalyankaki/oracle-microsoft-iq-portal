#!/usr/bin/env bash
# Build downloadable .docx and .pdf from the Microsoft executive strategy memo.
#
# Requires: pandoc, weasyprint
#   apt-get install -y pandoc
#   pip3 install weasyprint
#
# Usage: scripts/build_exec_strategy.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$REPO_ROOT/docs/microsoft-exec-strategy.md"
CSS="$REPO_ROOT/scripts/exec-strategy.css"
OUT_DOCX="$REPO_ROOT/docs/microsoft-exec-strategy.docx"
OUT_PDF="$REPO_ROOT/docs/microsoft-exec-strategy.pdf"
TMP_HTML="$(mktemp -t exec-strategy.XXXXXX.html)"

TITLE="Microsoft Executive Strategy — The Oracle Alliance for Agentic Transformation"

trap 'rm -f "$TMP_HTML"' EXIT

echo "Building .docx ..."
pandoc "$SRC" \
  -o "$OUT_DOCX" \
  --from gfm \
  --toc \
  --toc-depth=2 \
  --metadata title="$TITLE"

echo "Building .pdf ..."
pandoc "$SRC" \
  -o "$TMP_HTML" \
  --from gfm \
  --standalone \
  --metadata title="$TITLE" \
  --css="$CSS"

weasyprint "$TMP_HTML" "$OUT_PDF"

echo
echo "Wrote:"
ls -la "$OUT_DOCX" "$OUT_PDF"
