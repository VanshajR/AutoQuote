import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('AutoQuote extension is now active!');

  let insertQuote = (quoteType: "'" | '"') => {
    if (!vscode.window.activeTextEditor) {
      return;
    }

    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);

    if (!selection.isEmpty) {
      // If text is selected, wrap it in quotes
      editor.edit(editBuilder => {
        editBuilder.replace(selection, `${quoteType}${selectedText}${quoteType}`);
      });
      return;
    }

    // If no text is selected, proceed with original insertion logic
    const cursorPosition = selection.active;
    const lineText = editor.document.lineAt(cursorPosition.line).text;

    // Find the next closing quote of any type after the cursor
    const closingSingleQuoteIndex = lineText.indexOf("'", cursorPosition.character);
    const closingDoubleQuoteIndex = lineText.indexOf('"', cursorPosition.character);

    let insertPosition: vscode.Position;

    if (closingSingleQuoteIndex !== -1 && (closingDoubleQuoteIndex === -1 || closingSingleQuoteIndex < closingDoubleQuoteIndex)) {
      // Found a single closing quote before any double quote
      insertPosition = cursorPosition.with(cursorPosition.line, closingSingleQuoteIndex + 1);
    } else if (closingDoubleQuoteIndex !== -1) {
      // Found a double closing quote (or no single quote)
      insertPosition = cursorPosition.with(cursorPosition.line, closingDoubleQuoteIndex + 1);
    } else {
      // No closing quote of either type found
      insertPosition = cursorPosition;
    }

    editor.edit(editBuilder => {
      if (quoteType === "'") {
        editBuilder.insert(insertPosition, `, ''`);
      } else {
        editBuilder.insert(insertPosition, `, ""`);
      }
    }).then(() => {
      const newCursorPosition = insertPosition.translate(0, quoteType === "'" ? 3 : 3);
      editor.selection = new vscode.Selection(newCursorPosition, newCursorPosition);
    });
  };

  let singleQuoteCommand = vscode.commands.registerCommand('extension.insertSingleQuote', () => {
    insertQuote("'");
  });

  let doubleQuoteCommand = vscode.commands.registerCommand('extension.insertDoubleQuote', () => {
    insertQuote('"');
  });

  context.subscriptions.push(singleQuoteCommand, doubleQuoteCommand);
}

export function deactivate() {
  console.log('AutoQuote extension is now deactivated.');
}
