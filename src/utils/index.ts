// 缩放比
export function scale() {
  const designWidth = 1920;
  const designHeight = 1080;
  const scale =
    document.documentElement.clientWidth /
      document.documentElement.clientHeight <
    designWidth / designHeight
      ? document.documentElement.clientWidth / designWidth
      : document.documentElement.clientHeight / designHeight;
  return scale;
}
