let isAlreadyGone = false;
const baseGoogleUrl = "https://www.google.co.kr/search?";

const gotoGoogle = function () {
  const cur = window.location.href;
  let toUrl;
  if (cur.includes("images")) {
    toUrl = `${baseGoogleUrl}udm=2&q=`;
  } else if (cur.includes("videos")) {
    toUrl = `${baseGoogleUrl}udm=7&q=`;
  } else if (cur.includes("news")) {
    toUrl = `${baseGoogleUrl}tbm=nws&q=`;
  } else {
    toUrl = `${baseGoogleUrl}q=`;
  }
  const searchVal = window.location.href.split("=")[1].split("&")[0];
  window.location.href = toUrl + searchVal;
};

setInterval(() => {
  const curUrl = window.location.href;
  if (curUrl.includes("search?q=") && !isAlreadyGone) {
    gotoGoogle();
    isAlreadyGone = true;
  }
}, 1);
