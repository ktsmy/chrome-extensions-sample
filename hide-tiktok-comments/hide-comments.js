function hideTikTokComments() {
  const MAX_COUNT = 50
  let count = 0
  const timer = setInterval(() => {
    console.log(`${++count}`)
    comments = document.querySelectorAll("div[class*='DivCommentItemContainer']")
    if (comments.length > 0) {
      console.log("hide comment")
      comments.forEach(c => c.setAttribute("style", "display: none"))
      search_comment = document.querySelector("div[class*='DivCommentTop']")
      if (search_comment) {
        search_comment.setAttribute("style", "display: none")
      }
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
