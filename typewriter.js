const pause = (character, timeout) => {
  setTimeout(() => {
    process.stdout.write(character);
  }, timeout);
};

const newL = (timeout) => {
  setTimeout(() => {
    console.log();
  }, timeout);
};

const loop = (string, time) => {
  let count = 0;
  for (const char of string) {
    pause(char, time);
    time += 50;
    count ++;
    if (count === string.length) {
      newL(time);
    }
  }
};

const sentence = "hello there from lighthouse labs";
loop(sentence, 50);