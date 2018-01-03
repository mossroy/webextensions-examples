# HTTP Response parser inside a WebExtension

## What it does

This is a fork of https://github.com/mdn/webextensions-examples/tree/master/http-response intended to show the current WebRequest API can not modify data for requests within the extension (i.e. with a moz-extension:// scheme)

Be aware that this extension alters all the HTTP(S) traffic of your browser session, and breaks the non-text contents.
Please use it in a test Firefox profile if you don't want to break your regular browsing.

## What it shows

After installing this extension, if you click on its pencil icon, it will open a local HTML page with 2 iframes :
- one pointing to https://example.com
- another one pointing to a local copy of the same HTML content

I would expect that both requests coming from the iframes would trigger the webRequest listener, and have their content modified.
But only the first one is affected (i.e. strings "Example" replaced by "WebExtension Example").


Icon is from: https://www.iconfinder.com/icons/763339/draw_edit_editor_pen_pencil_tool_write_icon#size=128
