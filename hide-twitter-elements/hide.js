function hideElements(elements) {
  const MAX_COUNT = 50
  let count = 0
  const timer = setInterval(() => {
    console.log(`${++count}`)
    if (elements.length > 0) {
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
  hideElements(document.querySelectorAll("div[aria-label='タイムライン: トレンド']"))
  hideElements(document.querySelectorAll("div[aria-label='タイムライン: 速報']"))
  // Ad
  hideElements(
    Array.from(document.querySelectorAll("div[data-testid='placementTracking']"))
      .filter(e => e.children instanceof(HTMLCollection) && e.children.item(0).getAttribute("data-testid") !== "videoPlayer")
  )
}

const observer = new MutationObserver(hide);
observer.observe(document, {childList: true, subtree: true})
window.addEventListener("load", hide, false)
