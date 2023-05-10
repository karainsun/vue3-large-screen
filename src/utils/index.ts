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

export function keepFit(designWidth = 1920, designHeight = 1080, renderDom: any) {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  let scale = 1;
  if (clientWidth / clientHeight < designWidth / designHeight) {
    scale = clientWidth / designWidth;
    document.querySelector(renderDom).style.height = `${
      clientHeight / scale
    }px`;
  } else {
    scale = clientHeight / designHeight;
    document.querySelector(renderDom).style.width = `${clientWidth / scale}px`;
  }
  document.querySelector(renderDom).style.transform = `scale(${scale})`;
}
