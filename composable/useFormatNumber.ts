export function useFormatNumber() {
  const formatNum = (val: number): string => {
    if (val >= 1_000_000) {
      return (val / 1_000_000).toFixed(1).replace(/\.0$/, "") + "m";
    }
    if (val >= 1_000) {
      return (val / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return val.toString();
  };
  return { formatNum };
}
