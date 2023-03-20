export function keysOf<TMap extends Record<string, unknown>>(
  map: TMap
): (keyof TMap)[] {
  return Object.keys(map);
}

export function matchMap<
  TKey extends string,
  TMap extends Record<TKey, unknown>
>(key: TKey, map: TMap): TMap[keyof TMap] {
  return map[key];
}
