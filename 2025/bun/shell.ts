import { $ } from "bun";

// https://bun.com/docs/runtime/shell

const response = await fetch("https://example.com");

await $`cat < ${response} | wc -c`; // 1256
