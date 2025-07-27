function hideElements(selector) {
  const MAX_COUNT = 50
  let count = 0
  const timer = setInterval(() => {
    console.log(`${++count}`)
    const elements = document.querySelectorAll(selector)
    if (elements.length > 0) {
      console.log(`hide ${selector}`)
      elements.forEach(e => e.setAttribute("style", "display: none"))
      clearInterval(timer)
    } else if (count > MAX_COUNT) {
      console.log("count over")
      clearInterval(timer)
    }
  }, 100)
}

function hide() {
  // Trend
  hideElements("div[aria-label='タイムライン: トレンド']")
  hideElements("div[aria-label='タイムライン: 速報']")
  // Ad
  hideElements("div[data-testid='placementTracking']")
}

const observer = new MutationObserver(hide);
observer.observe(document, {childList: true, subtree: true})
window.addEventListener("load", hide, false)
