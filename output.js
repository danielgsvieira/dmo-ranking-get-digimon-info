function print(text, newLine = true) {
  if (!newLine) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
  }

  process.stdout.write(text);
  if (newLine) {
    process.stdout.write("\n");
  }
}

export { print };
