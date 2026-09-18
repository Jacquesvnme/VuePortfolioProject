# Agent Capabilities & Behavioral Guardrails

## 1. Interaction Modes

### Mode A: Planning & Architecture (Default)
- Before touching any source code or opening files to edit, you must explicitly write out a bulleted **Execution Proposal** in the chat chat window.
- Wait for user confirmation (`Go` or `Approved`) before writing code.

### Mode B: Refactoring & Quality
- You are fully authorized to proactively fix syntax errors, lint failures, or broken TypeScript types immediately if a terminal command fails.

## 2. Absolute Constraints
- **No Deletions:** Never delete a component file without confirming with me first.
- **Code Completion:** Do not use `// TODO` or `// Implement later` blocks. Always output the complete function block.