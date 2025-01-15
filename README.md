
# AutoQuote Extension for Visual Studio Code

**AutoQuote** is a simple yet powerful Visual Studio Code extension designed to make working with single and double quotes more efficient. It enables users to quickly add quoted sections with a comma and space, making your coding workflow smoother. I simply made this because while working on some data science lab times, I found it extremely annoying having to manually put quotes in lists etc.

## Features

- **Insert Single Quotes**: Add a comma, a space, and a pair of single quotes (`''`) at the cursor's position or after the nearest closing quote.
- **Insert Double Quotes**: Add a comma, a space, and a pair of double quotes (`""`) at the cursor's position or after the nearest closing quote.
- **Interoperability**: Regardless of the type of closing quote (`'` or `"`), you can choose to insert either single or double quotes.
- **Cursor Placement**: Automatically positions the cursor between the newly inserted quotes for immediate typing.

<<<<<<< HEAD
## Commands

- **Insert Single Quote**: `ctrl+'` (Windows/Linux) or `cmd+'` (macOS)
- **Insert Double Quote**: `ctrl+shift+'` (Windows/Linux) or `cmd+shift+'` (macOS)
=======
For example if there is an image subfolder under your extension project workspace:
Yeah this wasnt very successfull
\!\[feature X\]\(images/feature-x.png\)
>>>>>>> bdbf0f82ce0015eca49efa037d91596bbf229b4d

## Usage Examples

### 1. Inserting Single Quotes

**Before**: `"hello|"`
   
Press `ctrl+'` (or `cmd+'` on macOS).

**After**: `"hello", '|'`

**Before**: `'hello'`

Press `ctrl+'`

**After**: `'hello', '|'`

### 2. Inserting Double Quotes

**Before**: `'world|'`
   
Press `ctrl+shift+'` (or `cmd+shift+'` on macOS).

**After**: `'world', "|"`

**Before**: `"world|"`
   
Press `ctrl+shift+'` (or `cmd+shift+'` on macOS).

**After**: `"world", "|"`

### 3. Inserting Quotes at Cursor

**Before**: `hello|`
   
Press `ctrl+'` (or `cmd+'` on macOS).

**After**: `hello, '|''`

## Demo
This is a demonstration using commands for both kind of quotes:


![Demo](https://res.cloudinary.com/dnciaoigz/image/upload/v1736942270/demo_bxrpnn.gif)

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X`.
3. Search for `AutoQuote`.
4. Click **Install**.

## Contributing

Contributions are welcome! Please open an issue or a pull request on GitHub.

## License

This extension is licensed under the [MIT License](LICENSE).
