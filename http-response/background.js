function listener(details) {
  console.debug("Listener triggered", details);
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = event => {
    let str = decoder.decode(event.data, {stream: true});
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension Example');
    filter.write(encoder.encode(str));
    filter.disconnect();
  };

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["<all_urls>"]},
  ["blocking"]
);
console.debug("WebRequest Listener registered");

browser.browserAction.onClicked.addListener(handleClick);

function handleClick(event) {
    browser.tabs.create({
        url: browser.runtime.getURL('index.html')
    });
}