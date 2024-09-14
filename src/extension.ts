import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('AutoQuote extension is now active!');

  let singleQuoteCommand = vscode.commands.registerCommand('extension.insertSingleQuote', () => {
    if (!vscode.window.activeTextEditor) {
      return;
    }

    const editor = vscode.window.activeTextEditor;
    const cursorPosition = editor.selection.active;

    editor.edit(editBuilder => {
      // Calculate the insertion position (one position after the cursor)
      const insertPosition = cursorPosition.with(cursorPosition.line, cursorPosition.character + 1);
      
      // Insert the text
      editBuilder.insert(insertPosition, `, ''`);

      // Calculate the new cursor position (between the single quotes)
      // Move cursor to between quotes, which is 3 characters ahead of the insert position
      const newCursorPosition = insertPosition.with(cursorPosition.line, cursorPosition.character + 2);

      // Log positions for debugging
      console.log('Cursor Position before insertion:', cursorPosition);
      console.log('Insert Position:', insertPosition);
      console.log('New Cursor Position:', newCursorPosition);

      // Move the cursor to the position between the single quotes
      editor.selections = editor.selections.map(sel =>
        sel.active.isEqual(cursorPosition) ? new vscode.Selection(newCursorPosition, newCursorPosition) : sel
      );
    });
  });

  let doubleQuoteCommand = vscode.commands.registerCommand('extension.insertDoubleQuote', () => {
    if (!vscode.window.activeTextEditor) {
      return;
    }

    const editor = vscode.window.activeTextEditor;
    const cursorPosition = editor.selection.active;

    editor.edit(editBuilder => {
      // Calculate the insertion position (one position after the cursor)
      const insertPosition = cursorPosition.with(cursorPosition.line, cursorPosition.character + 1);
      
      // Insert the text
      editBuilder.insert(insertPosition, `, ""`);

      // Calculate the new cursor position (between the double quotes)
      // Move cursor to between quotes, which is 3 characters ahead of the insert position
      const newCursorPosition = insertPosition.with(cursorPosition.line, cursorPosition.character + 2);

      // Log positions for debugging
      console.log('Cursor Position before insertion:', cursorPosition);
      console.log('Insert Position:', insertPosition);
      console.log('New Cursor Position:', newCursorPosition);

      // Move the cursor to the position between the double quotes
      editor.selections = editor.selections.map(sel =>
        sel.active.isEqual(cursorPosition) ? new vscode.Selection(newCursorPosition, newCursorPosition) : sel
      );
    });
  });

  context.subscriptions.push(singleQuoteCommand, doubleQuoteCommand);
}

export function deactivate() {
  console.log('AutoQuote extension is now deactivated.');
}
