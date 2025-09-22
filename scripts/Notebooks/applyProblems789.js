// applyProblems789.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { problemsByPack789 } from "./problems789.js";

// Попробуем импортировать то, как у тебя экспортирован graphContent710.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.resolve(__dirname, "./graphContent710.js");

// Загружаем как модуль (ESM) или через eval текста, если это CJS
let graph;
const text = fs.readFileSync(targetPath, "utf8");

// Пытаемся вытащить объект из файла без исполнения побочных эффектов.
// Ожидаем export default или export const graphContent = { ... }.
function extractObject(jsText) {
  // Пробуем два типовых варианта экспорта
  const m1 = jsText.match(/export\s+default\s+(\{[\s\S]*\});?/);
  if (m1) return { code: m1[1], kind: "default" };
  const m2 = jsText.match(/export\s+const\s+graphContent\s*=\s*(\{[\s\S]*\});?/);
  if (m2) return { code: m2[1], kind: "named" };
  throw new Error("Не нашёл экспорт graphContent в graphContent710.js");
}

const { code: objectCode, kind } = extractObject(text);

// Безопасно парсим как JSON-подобный объект: через eval в песочнице
// (файл должен быть объектным литералом без функций)
const sandboxed = Function(`"use strict"; return (${objectCode});`);
graph = sandboxed();

// Рекурсивный обход любого дерева
function walk(node, visitor) {
  if (Array.isArray(node)) {
    node.forEach((x) => walk(x, visitor));
  } else if (node && typeof node === "object") {
    visitor(node);
    Object.values(node).forEach((v) => walk(v, visitor));
  }
}

// Проставляем problems по ключу пакета
let patchedCount = 0;
walk(graph, (obj) => {
  const key = obj.slug || obj.id || obj.key;
  if (key && problemsByPack789[key]) {
    obj.problems = problemsByPack789[key];
    patchedCount++;
  }
});

// Сериализация обратно в текст JS — вернём тем же способом экспорта
function toJS(obj) {
  const body = JSON.stringify(obj, null, 2)
    // необязательно, но приятно: trailing commas → нет
    ;
  if (kind === "default") return `export default ${body};\n`;
  return `export const graphContent = ${body};\n`;
}

const newText = toJS(graph);
fs.writeFileSync(targetPath, newText, "utf8");

console.log(`OK: обновил ${patchedCount} узлов с problems в graphContent710.js`);
