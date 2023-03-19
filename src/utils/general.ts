export function keysOf<TMap extends Record<string, unknown>>(
  map: TMap
): (keyof TMap)[] {
  return Object.keys(map);
}
