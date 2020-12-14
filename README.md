# nodeno-land

A lightweight HTTP wrapper for deno.town REPL website.

## Example:
```js
const deno = require("nodeno-town");

(async () => {
  const response = await deno(`
    console.log('Hello world!', Deno.version);
  `);

  console.log(response);
})();
```
Response:
```js
{
  stdout: 'Hello world! { deno: "0.26.0", v8: "8.0.192", typescript: "3.7.2" }\n',
  stderr: null,
  ms: 1820
}
```

## Error example:
```js
const deno = require("nodeno-town");

(async () => {
  const response = await deno(`
    const x: number = 1;
  `);

  console.log(response);
})();

```
Response:
```js
{
  stdout: '',
  stderr: 'Command failed: DENO_DIR=/tmp/deno_dir /opt/amz-deno --allow-net --allow-read /tmp/mod.tsx\n' +
    'Compile file:///tmp/mod.tsx\n' +
    `\u001b[1;31merror<span style="font-weight:normal;opacity:1;color:#fff;background:#000;"><span style="font-weight:bold;"> TS2322</span>: Type '"1"' is not assignable to type 'number'.\n` +
    '\n' +
    '► \u001b[38;5;14mfile:///tmp/mod.tsx</span>:\u001b[38;5;11m2<span style="font-weight:normal;opacity:1;color:#fff;background:#000;">:\u001b[38;5;11m11</span>\n' +
    '\n' +
    '\u001b[47;30m2<span style="font-weight:normal;opacity:1;color:#fff;background:#000;">     const x: number = "1";\n' +
    '\u001b[47;30m </span> <span style="color:#ff0000;">          ^<span style="font-weight:normal;opacity:1;color:#fff;background:#000;">\n' +
    '\n' +
    '</span></span>',
  ms: 1848
}
```
