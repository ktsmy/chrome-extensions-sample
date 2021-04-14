const MAX_COUNT = 50

function hideTrend() {
  let count = 0
  const timer = setInterval(() => {
    console.log(`${++count}`)
    const trend = document.querySelector("div[aria-label='タイムライン: トレンド']")
    if (trend) {
      console.log("hide trend")
      trend.setAttribute("style", "display: none")
      clearInterval(timer)
    } else if (count > MAX_COUNT) {
      console.log("count over")
      clearInterval(timer)
    }
  }, 100)
}

window.addEventListener("load", hideTrend, false);
window.addEventListener("click", hideTrend, false);