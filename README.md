# LibreOne Launchpad Widget
A common widget for all LibreTexts applications to use to easily navigate users to the LibreOne Launchpad page

## Usage
- Create a div element in the desired location with the id "widget-parent"
- Import the widget script from the CDN. Make sure to add the "defer" attribute to the script tag, as we need to wait for the DOM content to load in order to atttach to the "widget-parent" element.

## Example
```
<!DOCTYPE html>

<html>
<head>
    <title>Test</title>
    <script src="./dist/libreone-launchpad-widget.min.js" type="text/javascript" defer></script>
</head>
<body>
    <div id="widget-parent">

    </div>
</body>
</html>
```