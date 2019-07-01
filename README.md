# Software Studio 2018 Spring Assignment 01 Web Canvas

## Web Canvas
<img src="example01.gif" width="700px" height="500px"></img>

## Todo
1. **Fork the repo ,remove fork relationship and change project visibility to public.**
2. Create your own web page with HTML5 canvas element where we can draw somethings.
3. Beautify appearance (CSS).
4. Design user interaction widgets and control tools for custom setting or editing (JavaScript).
5. **Commit to "your" project repository and deploy to Gitlab page.**
6. **Describing the functions of your canvas in REABME.md**

## Scoring (Check detailed requirments via iLMS)

| **Item**                                         | **Score** |
| :----------------------------------------------: | :-------: |
| Basic components                                 | 60%       |
| Advance tools                                    | 35%       |
| Appearance (subjective)                          | 5%        |
| Other useful widgets (**describe on README.md**) | 1~10%     |

## Reminder
* Do not make any change to our root project repository.
* Deploy your web page to Gitlab page, and ensure it works correctly.
    * **Your main page should be named as ```index.html```**
    * **URL should be : https://[studentID].gitlab.io/AS_01_WebCanvas**
* You should also upload all source code to iLMS.
    * .html or .htm, .css, .js, etc.
    * source files
* **Deadline: 2018/04/05 23:59 (commit time)**
    * Delay will get 0 point (no reason)
    * Copy will get 0 point
    * "屍體" and 404 is not allowed

---

## Put your report below here

### Basic components
| **Component**           | V | **icon**                                                             |
| :---------------------: |:-:| :------------------------------------------------------------------: |
| Brush                   | V |  <img src="ex/marker-solid.png" width="12px" height="12px"></img>    |
| Eraser                  | V |  <img src="ex/eraser-solid.png" width="12px" height="12px"></img>    |
| Brush size              | V |                                                                      |
| Text input              | V |  <img src="ex/keyboard-solid.png" width="12px" height="12px"></img>  |
| Font face & Font size   | V |                                                                      |
| Cursor icon             | V |                                                                      |
| Refresh                 | V |  <img src="ex/trash-alt-solid.png" width="12px" height="12px"></img> |

### Advanced tools
| **Component**           | V | **icon**                                                             |
| :---------------------: |:-:| :------------------------------------------------------------------: |
| Circle                  | V |  <img src="ex/circle-solid.png" width="12px" height="12px"></img>    |
| Rectangle               | V |  <img src="ex/square-solid.png" width="12px" height="12px"></img>    |
| Triangle                | V |  <img src="ex/play-solid.png" width="12px" height="12px"></img>      |
| Redo                    | V |  <img src="ex/redo-alt-solid.png" width="12px" height="12px"></img>  |
| Undo                    | V |  <img src="ex/undo-alt-solid.png" width="12px" height="12px"></img>  |
| Upload image            | V |  <img src="ex/upload-solid.png" width="12px" height="12px"></img>    |
| Download as .png        | V |  <img src="ex/download-solid.png" width="12px" height="12px"></img>  |

### Other useful widgets
| **Component**           | V | **icon**                                                             |
| :---------------------: |:-:| :------------------------------------------------------------------: |
| Rainbow                 | V |  <img src="ex/rainbow-solid.png" width="12px" height="12px"></img>   |
| Line                    | V |  <img src="ex/minus-solid.png" width="12px" height="12px"></img>     |
| Face stamp              | V |  <img src="ex/laugh-regular.png" width="12px" height="12px"></img>   |
| poopoo pen              | V |  <img src="ex/poo-solid.png" width="12px" height="12px"></img>       |

Note:
* Maximum redo steps = 30.
* If you click trash can(refresh), all the redo, undo record will be deleted.
* You can text on the top right input box, and click the keyboard button to draw on canvas.
* You can click upload button to upload images, and directly click canvas to draw.
* You can change the color by clicking the top left button.
* I use some bootstrap including dropdown and tooltip to make the page more beautiful.

### Reference:

Images:
* https://fontawesome.com/

Functions:
* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider
* https://www.w3cplus.com/canvas/drawing-arc-and-circle.html
* https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
* https://stackoverflow.com/questions/11112321/how-to-save-canvas-as-png-image
* https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_tooltip_pos&stacked=h
* https://medium.freecodecamp.org/javascript-functions-af6f9186a553
* https://stackoverflow.com/questions/12368910/html-display-image-after-selecting-filename