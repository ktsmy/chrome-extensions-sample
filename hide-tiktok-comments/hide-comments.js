function hideTikTokComments() {
  const MAX_COUNT = 50
  let count = 0
  const timer = setInterval(() => {
    console.log(`${++count}`)
    const comment = document.querySelector("div[class*='DivCommentListContainer']")
    if (comment) {
      console.log("hide comment")
      comment.setAttribute("style", "display: none")
      clearInterval(timer)
    } else if (count > MAX_COUNT) {
      console.log("count over")
      clearInterval(timer)
    }
  }, 100)
}

let href = ''
const observer = new MutationObserver(_ => {
  if (href != location.href) {
    hideTikTokComments()
  }
  href = location.href
});
observer.observe(document, {childList: true, subtree: true})
