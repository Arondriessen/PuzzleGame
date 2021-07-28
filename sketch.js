

// General

state = 0; // 0 = menu, 1 = levels, 2 = puzzle, 3 = settings, 4 = level-gen
uiLoaded = 0;
uiHover = 0;
uiHover2 = "";
uiSelected = "undefined";
uiScale = 1;
designMode = 0;
activeUIAnims = [];


// Menu Data

menuState = 0; // 0 = no hover, 1 = hover on "Play", 2 = hover on "Levels", 3 = hover on "Settings"


// Puzzle Geometry Data

levelData = [];
puzzlePieces = [];
puzzleSolution = [];
endPieces = [];
positions = [];
positionsRotation = [
  "Middle",
  "Left",
  "Top",
  "Right",
  "Bottom"
];

positions["Middle"] = [0, 0];
positions["Left"] = [-1, -1];
positions["Top"] = [1, -1];
positions["Right"] = [1, 1];
positions["Bottom"] = [-1, 1];

cc = 255;
levelLoaded = 0;


// Animation Variables

btFill = 0;
//btStr = 25;
btStr = 20;

//btFillHov = 30;
btFillHov = 20;
//btStrHov = 75;
btStrHov = 0;

btHovInSpd = 5;
btHovOutSpd = 5;

btTxtSize = 36;


document.addEventListener('contextmenu', event => event.preventDefault());


function preload() {
  fontRegular = loadFont('assets/Lato-Regular.ttf');
  fontBold = loadFont('assets/Lato-Bold.ttf');
  arrowTopLeftIMG = loadImage('assets/arrowTopLeftIMG3.svg');
  arrowTopRightIMG = loadImage('assets/arrowTopRightIMG3.svg');
  arrowBottomLeftIMG = loadImage('assets/arrowBottomLeftIMG3.svg');
  arrowBottomRightIMG = loadImage('assets/arrowBottomRightIMG3.svg');
  menuIconIMG = loadImage('assets/menuIconIMG.svg');
  rotCornerTop = loadImage('assets/rotCornerTop.svg');
  rotCornerRight = loadImage('assets/rotCornerRight.svg');
  rotCornerBottom = loadImage('assets/rotCornerBottom.svg');
  rotCornerLeft = loadImage('assets/rotCornerLeft.svg');
}


function setup() {

  // Set canvas to viewport size

  createCanvas(windowWidth, windowHeight);


  // Set UI scale based on resolution

  uiScale = min(width, height) / 1300;
  btTxtSize =  btTxtSize * uiScale;


  // Load progression data

  level = max(1, getItem('level'));
  world = max(1, getItem('world'));
  unlockedLevel = getItem('unlockedLevel');
  if (unlockedLevel == null) { unlockedLevel = [1, 1]; }


  // Load level data from js file

  var script = document.createElement('script');
  script.onload = function () {
    levelData = levels.slice();

    // Unlock all levels upto saved level

    for (i = 0; i < (unlockedLevel.length); i++) {

      for (y = 0; y < (unlockedLevel[i]); y++) {

        levelData[i][y][0] = 1;
      }
    }

    prepareLevelData();
  };
  script.src = 'levels.js';
  document.head.appendChild(script);


  // Load UI data from js file

  var script = document.createElement('script');
  script.onload = function () {
    uiData = ui.slice();
    uiLoaded = 1;
  };
  script.src = 'ui.js';
  document.head.appendChild(script);


  // Set backround colour

  //cc = color(random(255), random(255), random(255));
  colorMode(HSB);
  cc = color(random(360), 80, 60);
  colorMode(RGB);
  ccbg = color("#25252b");

  bgSaved = 0;

  textFont(fontRegular);
}


function mouseClicked() {

  if (uiLoaded == 1) { // Check if UI has loaded yet

    if (uiHover == 1) { // Is mouse on UI element?

      if (uiSelected[3][0] == 1) { // Does the element have a click function?

        uiSelected[3][3]();
        uiHover = 0;
      }
    }
  }
}


function mousePressed() {

  if (uiLoaded == 1) { // Check if UI has loaded yet

    // Puzzle

    if (state == 2) {

      // Is the puzzle still unsolved? If not you shouldn't be able to move the pieces anymore.
      if (solved == 0) {

        // Is the cursor on a tile?
        if (selected.length != 0) {
          for (let i = 0; i < puzzlePieces.length; i++) {

            // Is there a puzzle piece on the selected tile?
            if (puzzlePieces[i][0] == (selected[1])) {
              if (puzzlePieces[i][1] == (selected[0])) {

                // Initiate clicked sequence!
                clicked = 1;
                clickedPuzzlePiece = i;
                clickX = mouseX;
                clickY = mouseY;
                dragAmount = 0;
              }
            }
          }
        }
      }
    }
  }
}


function mouseReleased() {

  if (uiLoaded == 1) { // Check if UI has loaded yet

    // Main Menu

    if (state == 0) {

      //
    }


    // Levels Menu

    if (state == 1) {

      //
    }


    // Puzzle

    if (state == 2) {

      // Has a puzzle piece been clicked?
      if (clicked == 1) {

        // Is the cursor on a tile?
        if (selected.length != 0) {

          // Cycle through puzzle pieces to make some checks
          for (let i = 0; i < puzzlePieces.length; i++) {

            // Is there a puzzle piece on the currently selected tile?
            if (puzzlePieces[i][0] == (selected[1])) {
              if (puzzlePieces[i][1] == (selected[0])) {

                // If its a click...
                if (dragAmount == 0) {

                  if (mouseButton === LEFT) {

                    if (levelData[world - 1][level - 1][5][0]) {

                      // Rotate Puzzle Piece
                      rotatePuzzlePiece(i);
                      useStep();
                      isSolved();
                    }

                  } else {

                    if (designMode) {

                      if (mouseButton === RIGHT) {

                        event.preventDefault();
                        puzzlePieces.splice(i, 1);
                      }
                    }
                  }

                // If its a drag...
                } else {

                  // Prevent dropping piece back on its og place
                  if (clickedPuzzlePiece != i) {

                    // Is the dragged piece marked as "being moved" ? (otherwise it's a non-movable piece)
                    if (puzzlePieces[clickedPuzzlePiece][3] == 1) {

                      // Is the currently selected puzzle piece a movable piece?
                      if (isMovablePiece(i, 0, 0) == 1) {

                        // Move selected piece to dragged piece's og position
                        puzzlePieces[i][0] = puzzlePieces[clickedPuzzlePiece][0];
                        puzzlePieces[i][1] = puzzlePieces[clickedPuzzlePiece][1];
                      }
                    }
                  }
                }
              }
            }
          }

          // If it's a drag
          if (dragAmount > 0) {

            // Prevent dropping piece back on its og place
            if ((puzzlePieces[clickedPuzzlePiece][0] != (selected[1])) || (puzzlePieces[clickedPuzzlePiece][1] != (selected[0]))) {

              // Is the dragged piece marked as "being moved" ? (otherwise it's a non-movable piece)
              if (puzzlePieces[clickedPuzzlePiece][3] == 1) {

                // Is the currently selected puzzle piece a movable piece? (or an empty tile)
                if (isMovablePiece(-1, selected[0], selected[1]) == 1) {

                  // Update tile data
                  tileIndexes[selected[0]][selected[1]] = [selected[0], selected[1]];
                  tileData[selected[0]][selected[1]][4] = clickedPuzzlePiece;
                  tileData[puzzlePieces[clickedPuzzlePiece][1]][puzzlePieces[clickedPuzzlePiece][0]][4] = -1;

                  // Move puzzle piece to selected tile
                  puzzlePieces[clickedPuzzlePiece][1] = selected[0];
                  puzzlePieces[clickedPuzzlePiece][0] = selected[1];
                  puzzlePieces[clickedPuzzlePiece][3] = 0;
                  clickedPuzzlePiece = -1;
                  clicked = 0;
                  useStep();
                  isSolved();

                  // If we're in design mode, update endpoints too

                  updateEndpoints();
                }
              }
            }
          }
        }
        puzzlePieces[clickedPuzzlePiece][3] = 0; // Gives non-critical error (cannot set property after finishing level) ***** FIX *****
        clickedPuzzlePiece = -1;
        clicked = 0;
      }
    }
  }
}


function prepareLevelData() {

  tiles = levelData[world - 1][level - 1][1] + 2; // squared = total number of tiles
  puzzlePieces = levelData[world - 1][level - 1][2];
  let pp = levelData[world - 1][level - 1][2];
  let ep = levelData[world - 1][level - 1][3];

  // Create COPY of (not reference to) the levelData array to avoid modifying it

  puzzlePieces = [pp.length];

  for (i = 0; i < pp.length; i++) { // Cycle through puzzle pieces

    puzzlePieces[i] = [4];

    for (y = 0; y < 4; y++) { // Cycle through piece parameters

      if (typeof pp[i][y] === "object") { // Is it an object? (array)

        puzzlePieces[i][y] = pp[i][y].slice(); // If so make a copy of it

      } else { puzzlePieces[i][y] = pp[i][y]; } // If not set it to the same value
    }
  }

  endPieces = [ep.length];

  endPieces[0] = ep[0].slice();
  endPieces[1] = ep[1].slice();

  steps = levelData[world - 1][level - 1][4]; // Number of available steps for a puzzle

  tileData = []; // x, y, fill-opacity, scale
  tileIndexes = []; // x, y
  tileSpread = 1; // the size of a tile compared to the space it occupies (2 = half size)
  hoverGrowth = 1.12;

  let smallerDimension = min(width, height);
  tileSize = min(((smallerDimension / 1.15) / tiles)  * tileSpread, smallerDimension / 7); // the size a single tile occupies (tiles themselves can be smaller)
  selected = [];
  clicked = 0;
  clickTimer = 0;
  clickedPuzzlePiece = -1;
  clickX = 0;
  clickY = 0;
  dragAmount = 0;
  solved = 0;
  puzzlePieceColour = cc;
  puzzlePieceOp = [255];
  endPieceOp = [255];

  mid = floor(tiles / 2);
  offset = (mid * tileSize);
  tileW = sqrt(sq(tileSize) / 2);

  levelCompleteAnim = [ 0, 0, 255, 0 ];

  // Assign tile positions based on number of tiles and defined spread

  for (let i = 0; i < tiles; i++) {

    tileData[i] = [];
    tileIndexes[i] = [];

    for (let y = 0; y < tiles; y++) {

      tileData[i][y] = [];
      tileIndexes[i][y] = [i, y]; // Save index of tile in indexes array

      // Set tile positions

      tileData[i][y][0] = (width / 2) + (y * (tileSize / 2)) - ((tileSize / 2) * i);
      tileData[i][y][1] = (height / 2) + (y * (tileSize / 2)) - offset + ((tileSize / 2) * i);
      tileData[i][y][2] = -1; // Opacity
      tileData[i][y][3] = 1; // Scale
      tileData[i][y][4] = -1; // Puzzle Piece Id (-1 = no piece on tile)
      //tileData[i][y][3] = [i, y]; // Save original grid position to keep track of position changes
    }
  }

  // Cycle through the tile grid again and genereate tile opacity values based on distance from centre tile

  for (let i = 1; i < (tiles - 1); i++) {
    for (let y = 1; y < (tiles - 1); y++) {

      let posX = tileData[i][y][0]; // Store x position
      let posY = tileData[i][y][1]; // Store y position

      let distX = abs(tileData[mid][mid][0] - posX);
      let distY = abs(tileData[mid][mid][1] - posY);
      let distance = max(distX, distY);
      let centX = tileData[mid][mid][0];
      let centY = tileData[mid][mid][1];

      tileData[i][y][2] = ((255 - map(dist(centX, centY, posX, posY), 0, mid * tileSize, 120, 240)));
    }
  }

  for (let i = 0; i < pp.length; i++) {

    tileData[puzzlePieces[i][1]][puzzlePieces[i][0]][4] = i;
  }

  storeItem('level', level);
  storeItem('world', world);

  levelLoaded = 1;
}


function isMovablePiece(piece, x, y) {

  let clickedOnMovablePiece = 1;

  if (piece > -1) {

    for (let i = 0; i < (endPieces.length); i++) {

      if ((puzzlePieces[piece][0] == (endPieces[i][0])) & (puzzlePieces[piece][1] == (endPieces[i][1]))) {

        if (designMode == 0) { clickedOnMovablePiece = 0; }
      }
    }

  } else {

    for (let i = 0; i < (endPieces.length); i++) {

      if ((y == (endPieces[i][0])) & (x == (endPieces[i][1]))) {

        if (designMode == 0) { clickedOnMovablePiece = 0; }
      }
    }
  }
  return clickedOnMovablePiece;
}


function useStep() {

  if (designMode == 0) {

    steps -= 1;

    if (steps < 1) {
      solved = -1;
    }
  }
}


function rotatePuzzlePiece(i) {

  for (let y = 0; y < puzzlePieces[i][2].length; y++) {
    let pos = positionsRotation.indexOf(puzzlePieces[i][2][y]);
    if (pos > 0) {
      pos = max(1, (pos + 1) % 5);
      puzzlePieces[i][2][y] = positionsRotation[pos];
    }
  }
}


function isSolved() {

  let debug = 0;

  if (designMode == 0) {

    // Go from endpoint A to B.
    // Check ending side of endpoint A.
    // Cycle through puzzlepieces and check for contuing points (pathfinding)
    // If it ends at endpoint B it's solved, if it ends earlier it's not.

    aSize = puzzlePieces.length;
    pI = 0;

    if (debug) { console.log("//////////////// isSolved ////////////////"); }

    for (i = 0; i < aSize; i++) {

      if (debug) {

        console.log(aSize + " - Number of puzzle pieces");
        console.log(i + " - Main loop index ****************************");
        console.log(pI + " - Puzzle piece index");
      }

      piece = puzzlePieces[pI]
      points = piece[2];
      exitMainLoop = 1;

      if (points.length == 2) {

        // Endpoints

        dir = firstNoMiddle(points);
        if (debug) { console.log("Endpoint - Type of piece"); }

      } else {

        // Regular Pieces

        if (debug) { console.log("Regular piece - Type of piece"); }
      }

      if (debug) { console.log(dir + " - Direction 1"); }

      for (y = 0; y < aSize; y++) {

        if (debug) { console.log(y + " - Secondary loop index -----------------"); }

        exitSecLoop = 0;

        piece2 = puzzlePieces[y];
        continueLoop = 0;

        // Is piece next to main piece?

        if (piece2[1] == piece[1]) {

          if (piece2[0] == (piece[0] - 1)) {

            // Left

            if (dir == "Left") { // Does the main piece connect to this piece?

              continueLoop = 1;
            }
          }

          if (piece2[0] == (piece[0] + 1)) {

            // Right

            if (dir == "Right") { // Does the main piece connect to this piece?

              continueLoop = 1;
            }
          }
        }

        if (piece2[0] == piece[0]) {

          if (piece2[1] == (piece[1] - 1)) {

            // Above

            if (dir == "Top") { // Does the main piece connect to this piece?

              continueLoop = 1;
            }
          }

          if (piece2[1] == (piece[1] + 1)) {

            // Below

            if (dir == "Bottom") { // Does the main piece connect to this piece?

              continueLoop = 1;
            }
          }
        }

        points2 = piece2[2];

        if (continueLoop == 1) {

          if (debug) { console.log("Piece is next to main piece"); }

          for (x = 0; x < points2.length; x++) { // Cycle through points

            if (points2[x] == dirOp(dir)) {

              if (debug) { console.log(dirOp(dir) + " - Direction 2"); }

              // Connection found

              if (debug) { console.log("Connection found (" + (i + 1) + "/" + (aSize - 1) + ")"); }

              pI = y; // Reassign index to restart loop with
              exitSecLoop = 1;
              exitMainLoop = 0;

              if (points2.length == 2) {

                if (debug) { console.log("//////////////// Level Finished! ////////////////"); }

                solved = 1;
                puzzlePieceColour = 255;

                animateUIElement([[puzzlePieceOp, 0], [endPieceOp, 0]], [30, 255], [0, 0], 20, 0);
                animateUIElement([[uiData[2][1][2][1], 4], [uiData[2][1][2][1], 5], [uiData[2][1][2][1], 9], [uiData[2][1][2][2], 4]], [300 * uiScale, 300 * uiScale, 0, 0], [420 * uiScale, 420 * uiScale, 5, 255], 15, 0);

                for (let x = 0; x < tiles; x++) {

                  for (let y = 0; y < tiles; y++) {

                    if (tileData[x][y][2] != -1) {

                      //animateUIElement([[tileData[x][y], 2], [tileData[x][y], 3]], [tileData[x][y][2], 1], [0, 3], Math.round(random(10, 60)), 0);
                      animateUIElement([[tileData[x][y], 2], [tileData[x][y], 3]], [tileData[x][y][2], 1], [0, 0], Math.round(random(5, 30)), 0);
                    }
                  }
                }

                if (typeof levelData[world - 1][level] !== "undefined") { // Check if there is a next level

                  levelData[world - 1][level][0] = 1;
                  storeItem('level', level + 1);
                  if ((level + 1) > unlockedLevel[world - 1]) { unlockedLevel[world - 1] += 1; storeItem('unlockedLevel', unlockedLevel); }
                }

                exitMainLoop = 1;

              } else {

                dir = points2[(((x - 1) * -1) + 1)];
              }

              break;
            }
          }
        }

        if (exitSecLoop == 1) { break; }
      }

      if (exitMainLoop == 1) { break; }
    }
  }
}


function firstNoMiddle(points) {

  for (m = 0; m < points.length; m++) {

    if (points[m] != "Middle") { return points[m]; }
  }
}


function dirOp(dir) {

  switch (dir) {

    case "Left":
    return "Right";
    break;

    case "Right":
    return "Left";
    break;

    case "Top":
    return "Bottom";
    break;

    case "Bottom":
    return "Top";
    break;
  }
}


function nextLevel() {

  if (levelData[world - 1][level] != undefined) {

    level += 1;
    prepareLevelData();

  } else {

    if (levelData[world] != undefined) {

      world++;
      level = 1;
      prepareLevelData();
    }
  }
}


function draw() {

  background(ccbg);

  if (bgSaved < 1) {

    // Draw background and save as image
    textFont(fontRegular);

    let s = max(width, height) * 1.2;
    let lerpNum = 0;

    for (let i = (s * 1); i > 0; i -= 10) {

      iN = i / s;
      lerpNum = 1 - (1 - iN) * (1 - iN);
      fill(lerpColor(cc, ccbg, lerpNum));
      noStroke();
      circle(width / 2, height / 2, i);
    }

    img = get();

    bgSaved = 1;
  }

  image(img, 0, 0);

  uiHover = 0;

  if (uiLoaded == 1) { // Check if UI has loaded yet


    // Run active animations
    if (activeUIAnims.length > 0) { animateUIElement(); }


    // Draw UI (Dynamic)

    for (s = 0; s < uiData[state].length; s++) { // Cycle through UI states (starting with the default one)

      aa = uiData[state][s]; // Load state

      let subStateEnabled = 0;

      if (typeof aa[0] === "function") { subStateEnabled = aa[0](); } else { subStateEnabled = aa[0]; }

      if (subStateEnabled) { // Check if state is enabled

        for (i = 1; i < aa.length; i++) { // Cycle through UI elements

          a = aa[i].slice(); // Load UI element (doesn't work without slice for some reason)

          limit = 2;
          hNum = 1;
          vNum = 1;
          vNum2 = 1;
          xOff = 0;
          yOff = 0;
          xOff2 = 0;
          yOff2 = 0;

          if (a[0] == 2) { // Is it a list item?

            limit = a[1][14]();
            hNum = Math.min(a[1][15](), limit);
            vNum2 = Math.ceil(limit / a[1][15]());
            vNum = Math.max(vNum2, a[1][16]());
            xOff = a[1][17]();
            yOff = a[1][18]();
            xOff2 = a[1][19]();
            yOff2 = a[1][20]();
          }

          for (v = 0; v < vNum2; v++) { // Cycle through rows

            for (h = 0; h < hNum; h++) { // Cycle through columns

              if (((v * hNum) + h) == limit) { break; }

              a = aa[i].slice(); // Reload UI element (doesn't work without slice for some reason)

              for (x = 1; x < a.length; x++) { // Cycle through UI parameter groups

                a[x] = a[x].slice();

                for (y = 0; y < a[x].length; y++) { // Cycle throug element parameters

                  if (typeof a[x][y] === "function") { // Check if parameter is a function

                    if (((x == 3) && ((y == 1) || (y == 2) || (y == 3))) == 0) { // Exclude hover/click functions which should stay functions

                      a[x][y] = a[x][y](); // If it is, store the function's return value
                    }
                  }
                }
              }

              // Variables for drawing UI elements

              boxW = a[1][4];
              boxH = a[1][5];
              boxOp = a[1][9];
              boxOutlineOp = a[1][12];
              if (a[4] != undefined) { imgOp = a[4][3]; }

              xx = (a[1][2] - (a[1][6] * boxW)) - ((hNum - 1) * (xOff / 2)) - ((vNum - 1) * (xOff2 / 2)) + (xOff * h) + (xOff2 * v);
              yy = (a[1][3] - (a[1][7] * boxH)) - ((hNum - 1) * (yOff / 2)) - ((vNum - 1) * (yOff2 / 2)) + (yOff * h) + (yOff2 * v);


              if (a[3][0] == 1) { // Is it interactive?

                // Is the mouse on a UI element? (New)

                let mouseIsOnElement = 0;

                if (a[1][1] < 4) { // Rectangular hitbox

                  if ((mouseX > xx) && (mouseX < (xx + boxW))) {

                    if ((mouseY > yy) && (mouseY < (yy + boxH))) {

                      mouseIsOnElement = 1;
                    }
                  }
                } else if  (a[1][1] == 4){ // Rotated Rectangular Hitbox

                  if ((abs(mouseX - (xx + (boxW / 2))) + abs(mouseY - (yy + (boxH / 2)))) < (boxW)) {

                    mouseIsOnElement = 1;
                  }
                }

                if (mouseIsOnElement) {

                  elementID = (str(s) + "-" + str(i) + "-" + str(v) + "-" + str(h));

                  if (uiHover2 != elementID) {

                    if (uiSelected != "undefined") {
                      if (uiSelected[3][2] != 0) {

                        uiSelected[3][2]();
                      }
                    }
                  }

                  uiHover = 1;
                  uiSelected = a;
                  uiSelectedIndex = ((v * hNum) + h + 1);

                  if (uiSelected[3][1] != 0) {

                    uiSelected[3][1]();
                  }

                  uiHover2 = elementID;
                }
              }


              if (a[1][0] == 1) { // Is box element active?

                fill(a[1][8], boxOp);

                //if (a[0] == 2) { if (uiSelected == a) { fill(a[1][8], a[3][1]()); } }

                if (a[1][10] == 1) {

                  stroke(a[1][11], boxOutlineOp);
                  strokeWeight(a[1][13]);

                } else {

                  noStroke();
                }


                // Draw element box

                rectMode(CORNER);

                switch(a[1][1]) {

                  case 1: rect(xx, yy, boxW, boxH);
                  break;

                  case 2: rect(xx, yy, boxW, boxH, min(boxW, boxH) / 3.4);
                  break;

                  case 3: circle(xx + (boxW / 2), yy + (boxH / 2), boxW);
                  break;

                  case 4:
                  quad(xx + (boxW / 2), yy - (boxH * 0.5), xx + (boxW * 1.5), yy + (boxH / 2), xx + (boxW / 2), yy + (boxH * 1.5), xx - (boxW * 0.5), yy + (boxH / 2));
                  break;
                }

              } else {

                noFill();
                noStroke();
              }


              if (a[2][0] == 1) { // Is text element active?


                // Draw element text

                textSize(a[2][2]);
                if (a[2][4] != -1) { fill(a[2][3], a[2][4]); } else { fill(a[2][3]); }
                noStroke();
                textAlign(LEFT, TOP);

                let hA = ((boxW * a[2][5]) - (textWidth(a[2][1]) * a[2][5])); // Horizontal aligning
                let vA =((boxH * a[2][6]) - (a[2][2] * a[2][6])); // Vertical aligning
                let vC = -(a[2][2] / 7); // Small vertical correction for font height

                text(a[2][1], xx + hA, yy + vA + vC);
              }


              if (a[4] != undefined) {

                if (a[4][0] == 1) { // Is image element active?

                  let hA = ((boxW * a[4][4]) - (a[4][2] / 2)); // Horizontal aligning
                  let vA = ((boxH * a[4][5]) - (a[4][2] / 2)); // Vertical aligning

                  image(a[4][1], xx + hA, yy + vA, a[4][2], a[4][2]);
                }
              }
            }
          }
        }
      }
    }


    if (uiHover == 0) {

      uiHover2 = "";
    }


    if (uiSelected != "undefined") { // Reset hover effect if not hovering on UI anymore

      if (uiHover == 0) {

        if (uiSelected[3][2] != 0) {

          uiSelected[3][2]();
          uiSelected = "undefined";
        }
      }
    }


    // Levels Menu

    if (state == 1) {

      //
    }


    // Puzzle

    if (state == 2) {

      noStroke();

      // Check if all level data is ready
      if (levelLoaded == 1) {

        if (clicked == 1) {

          if (levelData[world - 1][level - 1][5][1]) {

            // Has the mouse moved since clicking a puzzle piece?
            if ((mouseX != clickX) || (mouseY != clickY)) {
              dragAmount = 1;
            }

            // If so set piece state to 'being dragged'
            if (dragAmount > 0) {
              if (isMovablePiece(clickedPuzzlePiece, 0, 0) == 1) {
                puzzlePieces[clickedPuzzlePiece][3] = 1;
              }
            }
          }
        }


        // Draw level completed anim
        fill(levelCompleteAnim[2], levelCompleteAnim[3]);
        quad(width / 2, (height / 2) - (levelCompleteAnim[0] / 2), (width / 2) + (levelCompleteAnim[0] / 2), height / 2, width / 2, (height / 2) + (levelCompleteAnim[0] / 2), (width / 2) - (levelCompleteAnim[0] / 2), height / 2);


        rectMode(CENTER);
        fill(255, 50);

        selected.length = 0;

        for (let i = 0; i < tiles; i++) { // Cycle through tiles, check for mouse hover, and draw tiles
          for (let y = 0; y < tiles; y++) {

            if (tileData[i][y][2] != -1) { // Exclude outer ring tiles (empty tiles)

              // Check for mouse selection

              let posX = tileData[i][y][0]; // Store x position
              let posY = tileData[i][y][1]; // Store y position
              let scale = tileSpread;

              if ((abs(mouseX - posX) + abs(mouseY - posY)) < (tileSize / 2)) {

                scale = tileSpread * hoverGrowth; // If cursor is on tile resize it (hover effect)
                selected = [i, y]; // Save index of selected tile
                //selected = [tileIndexes[i][y][0], tileIndexes[i][y][1]]; // Save index of selected tile
                //selected = [tileData[i][y][3][0], tileData[i][y][3][1]]; // Save index of selected tile
              }

              // Draw tiles

              strokeWeight(0);
              fill(0, tileData[i][y][2]);
              quad(posX, posY - (((tileSize / 2) * tileData[i][y][3]) / scale), posX + (((tileSize / 2) * tileData[i][y][3]) / scale), posY, posX, posY + (((tileSize / 2) * tileData[i][y][3]) / scale), posX - (((tileSize / 2) * tileData[i][y][3]) / scale), posY);
            }
          }
        }


        // Draw puzzle pieces

        noFill();
        if (typeof(puzzlePieceColour) == "object") { stroke(puzzlePieceColour); } else { stroke(puzzlePieceColour, puzzlePieceOp[0]); }
        strokeWeight((8 / (tiles / 5)) * uiScale);
        strokeCap(SQUARE);

        for (let i = 0; i < puzzlePieces.length; i++) {

          let posX = tileData[puzzlePieces[i][1]][puzzlePieces[i][0]][0];
          let posY = tileData[puzzlePieces[i][1]][puzzlePieces[i][0]][1];

          if (puzzlePieces[i][3] == 1) {

            posX = mouseX + (posX - clickX);
            posY = mouseY + (posY - clickY);
          }

          beginShape();

          for (let y = 0; y < (puzzlePieces[i][2].length); y++) {

            vertex(posX + (positions[puzzlePieces[i][2][y]][0] * (tileSize / 4)), posY + (positions[puzzlePieces[i][2][y]][1] * (tileSize / 4)));
          }

          endShape();
        }

        // Draw end pieces

        fill(255, endPieceOp[0]);
        noStroke();

        for (let i = 0; i < (endPieces.length); i++) {

          let posX = tileData[endPieces[i][1]][endPieces[i][0]][0];
          let posY = tileData[endPieces[i][1]][endPieces[i][0]][1];

          quad(posX, posY - (tileSize / 8), posX + (tileSize / 8), posY, posX, posY + (tileSize / 8), posX - (tileSize / 8), posY);
        }
      }
    }
  }
}


function shiftTileLine(row, column, dir, animate) {

  // row = row number or -1 if moving a column
  // column = column number or -1 if moving a row
  // dir = direction of line movement (1 = right/down, -1 = left/up)
  // stepsToMove = steps to move in given direction ***multiple steps doesn't actually work rn***
  // toggle to animate the movement (0 = no, 1 = yes)

  let debug = 1;

  if (solved == 0) {

    // Move tiles

    let dirNorm = Math.max(0, dir);
    let dirRev = dir * -1;
    let dirRevNorm = Math.max(0, dirRev);
    let isGo = 0;
    let puzzlePiecesMoved = 1;

    if (row != -1) {

      if (tileData[row][((tiles - 1) * dirNorm)][2] == -1) { // Check if tiles have room to move (if not, cancel)

        if (debug) { console.log("Moved Row"); }

        for (let y = ((tiles - 1) * dirNorm); y != ((tiles - 1) * dirRevNorm); y += dirRev) {

          if (tileData[row][y + dirRev][2] != -1) {

            tileData[row][y][2] = tileData[row][y + dirRev][2];
            tileData[row][y][4] = tileData[row][y + dirRev][4];

            if (tileData[row][y][4] != -1) {

              puzzlePieces[tileData[row][y][4]][0] = y;
              puzzlePieces[tileData[row][y][4]][1] = row;
            }

            if (animate) { animateUIElement([[tileData[row][y], 0], [tileData[row][y], 1]], [tileData[row][y + dirRev][0], tileData[row][y + dirRev][1]], [tileData[row][y][0], tileData[row][y][1]], 1 + (Math.abs(((tiles - 1) * dirNorm) - y) * 3), 0); }

          } else {

            tileData[row][y][2] = -1;
            tileData[row][y][4] = -1;
          }
        }

        tileData[row][((tiles - 1) * dirRevNorm)][2] = -1;
        tileData[row][((tiles - 1) * dirRevNorm)][4] = -1;
        isGo = 1;
    }

    } else {

      if (tileData[((tiles - 1) * dirNorm)][column][2] == -1) { // Check if tiles have room to move (if not, cancel)

        if (debug) { console.log("Moved Column"); }

        for (let y = ((tiles - 1) * dirNorm); y != ((tiles - 1) * dirRevNorm); y += dirRev) {

          if (tileData[y + dirRev][column][2] != -1) {

            tileData[y][column][2] = tileData[y + dirRev][column][2];
            tileData[y][column][4] = tileData[y + dirRev][column][4];

            if (tileData[y][column][4] != -1) {

              puzzlePieces[tileData[y][column][4]][0] = column;
              puzzlePieces[tileData[y][column][4]][1] = y;
            }

            if (animate) { animateUIElement([[tileData[y][column], 0], [tileData[y][column], 1]], [tileData[y + dirRev][column][0], tileData[y + dirRev][column][1]], [tileData[y][column][0], tileData[y][column][1]], 1 + (Math.abs(((tiles - 1) * dirNorm) - y) * 3), 0); }

          } else {

            tileData[y][column][2] = -1;
            tileData[y][column][4] = -1;
          }
        }

        tileData[((tiles - 1) * dirRevNorm)][column][2] = -1;
        tileData[((tiles - 1) * dirRevNorm)][column][4] = -1;
        isGo = 1;
      }
    }

    if (isGo) { // Check if tiles have room to move (if not, cancel)

      updateEndpoints();
      useStep(); isSolved();
    }

    return [isGo, puzzlePiecesMoved];
  }
}


function rotateCornerTiles(cornerX, cornerY) {

  if (solved == 0) {

    let cornerTiles = (tiles - 1) / 2; // No. of tiles in a corner (diameter)
    let cX = Math.max(1, cornerX * cornerTiles); // x index of top-left piece in selected corner (start post of rotation)
    let cY = Math.max(1, cornerY * cornerTiles); // y index of top-left piece in selected corner (start post of rotation)
    let loops = (cornerTiles - 1) / 2; // No. of "circles" to rotate

    let a = [];
    let tC = [];
    let xx;
    let yy;
    let len;
    let off;

    for (let i = 0; i < loops; i++) {

      a.length = 0;
      xx = cX + i;
      yy = cY + i;
      len = cornerTiles - (i * 2);

      for (let y = 0; y < len; y++) {
        xx += Math.min(y, 1);
        a.push([yy, xx]);
      }

      for (let y = 0; y < (len - 1); y++) {
        yy++;
        a.push([yy, xx]);
      }

      for (let y = 0; y < (len - 1); y++) {
        xx--;
        a.push([yy, xx]);
      }

      for (let y = 0; y < (len - 2); y++) {
        yy--;
        a.push([yy, xx]);
      }

      tC = [a.length];

      for (let y = 0; y < a.length; y++) {
        let tD = tileData[a[y][0]][a[y][1]];
        tC[y] = [tD[0], tD[1], tD[2], tD[3], tD[4]];
      }

      for (let y = 0; y < a.length; y++) {

        off = (y + a.length - (len - 1)) % (a.length);
        tileData[a[y][0]][a[y][1]][2] = tC[off][2];
        tileData[a[y][0]][a[y][1]][3] = tC[off][3];
        tileData[a[y][0]][a[y][1]][4] = tC[off][4];

        if (tC[off][4] != -1) {

          puzzlePieces[tC[off][4]][0] = a[y][1];
          puzzlePieces[tC[off][4]][1] = a[y][0];
        }

        //off = (y + (len - 1)) % (a.length);
        animateUIElement([[tileData[a[y][0]][a[y][1]], 0], [tileData[a[y][0]][a[y][1]], 1]], [tC[off][0], tC[off][1]], [tileData[a[y][0]][a[y][1]][0], tileData[a[y][0]][a[y][1]][1]], 15, 0);
      }

      //console.log(a);
    }

    updateEndpoints();
    useStep();
    isSolved();
  }
}


function generateLevel() {

  let debug = 1;

  if (debug) { console.log("Generated Level"); }

  tileRots = 0;
  tileMoves = 0;
  tileSwitches = 0;
  shiftMoves = 1;
  shiftsDone = [];
  shiftsDone.length = 0;

  for (let i = 0; i < shiftMoves; i++) {

    shiftsDone.push(shiftRandomTileLine());
  }


  let rPieces = 8;

  puzzlePieces.length = 0;
  endPieces.length = 0;
  puzzlePieces = [rPieces];
  endPieces = [2];

  puzzlePiecesCopy = [];
  endPiecesCopy = [];
  puzzlePiecesCopy.length = 0;
  endPiecesCopy.length = 0;

  puzzlePiecesCopy2 = [];
  endPiecesCopy2 = [];
  puzzlePiecesCopy2.length = 0;
  endPiecesCopy2.length = 0;

  let x;
  let y;
  let prevX = -1;
  let prevY = -1;
  let rot1 = "Middle";
  let rot2 = "Middle";
  let startRot = Math.round(random(1, 4));
  let positionsPlaced = 0;
  let posPlaced = 0;

  while (positionsPlaced == 0) { // Loop for placing solved puzzle path

    let failed = 0;
    let loopCounter = 0;

    console.log("********** START PATHFINDING LOOP **********");

    for (let i = 0; i < rPieces; i++) { // Cycle through pieces that need to be generated

      posPlaced = 0;

      while (posPlaced == 0) { // Loop for placing single position in path

        console.log("*** START POSITION FINDING LOOP ***");

        if (i == 0) { // Find random starting position

          x = Math.round(random(tiles - 1));
          y = Math.round(random(tiles - 1));

        } else { // Find positions to continue path

          let add = (Math.round(random()) * 2) - 1;

          if (random() > 0.5) {

            x = add + (puzzlePieces[i - 1][0]);
            y = puzzlePieces[i - 1][1];
            rot1 = positionsRotation[(add * -1) + 2];
            rot2 = positionsRotation[add + 2];

          } else {

            x = puzzlePieces[i - 1][0];
            y = add + (puzzlePieces[i - 1][1]);
            rot1 = positionsRotation[(add * -1) + 3];
            rot2 = positionsRotation[add + 3];
          }
        }

        if (((x > -1) && (x < tiles)) && ((y > -1) && (y < tiles))) { // Check that position does not fall off grid

          if (tileData[y][x][2] != -1) { // Check if position is on a tile

            let notOnPrev = 1;

            for (let p = 0; p < i; p++) { // Loop through previous positions

              //console.log("Checking previous position: " + puzzlePieces[p][0] + "." + puzzlePieces[p][1] + " - " + x + "." + y);

              if ((x == puzzlePieces[p][0]) && (y == puzzlePieces[p][1])) { // Check if position is on top of pevious ones

                notOnPrev = 0;
              }
            }

            if (notOnPrev == 1) { // If not, place positions

              if (i > 0) {

                if (i < (rPieces - 1)) { // Normal Pieces

                  puzzlePieces[i] = [x, y, [rot1, "Middle", "Middle"], 0];
                  puzzlePiecesCopy[i] = [x, y, [rot1, "Middle", "Middle"], 0];
                  puzzlePiecesCopy2[i] = [x, y, [rot1, "Middle", "Middle"], 0];

                } else { // Last End Piece

                  puzzlePieces[i] = [x, y, ["Middle", rot1], 0];
                  puzzlePiecesCopy[i] = [x, y, ["Middle", rot1], 0];
                  puzzlePiecesCopy2[i] = [x, y, ["Middle", rot1], 0];

                  endPieces[0] = [puzzlePieces[0][0], puzzlePieces[0][1]];
                  endPieces[1] = [x, y];
                  endPiecesCopy[0] = [puzzlePieces[0][0], puzzlePieces[0][1]];
                  endPiecesCopy[1] = [x, y];
                  endPiecesCopy2[0] = [puzzlePieces[0][0], puzzlePieces[0][1]];
                  endPiecesCopy2[1] = [x, y];
                  positionsPlaced = 1;
                  console.log("Path Placed");
                }

                let pointIndex = 2;
                if (i == 1) { pointIndex = 1; }

                puzzlePieces[i - 1][2][pointIndex] = rot2;
                puzzlePiecesCopy[i - 1][2][pointIndex] = rot2;
                puzzlePiecesCopy2[i - 1][2][pointIndex] = rot2;

              } else { // First End Piece

                puzzlePieces[i] = [x, y, ["Middle", rot1], 0];
                puzzlePiecesCopy[i] = [x, y, ["Middle", rot1], 0];
                puzzlePiecesCopy2[i] = [x, y, ["Middle", rot1], 0];
              }

              posPlaced = 1;

              console.log("Position Placed: " + x + " - " + y);

            } else { console.log("Position is on previous one -" + x + " - " + y); }
          } else { console.log("Position is not on a Tile -" + x + " - " + y); }
        } else { console.log("Position Fell off Grid -" + x + " - " + y); }

        loopCounter++;
        if (loopCounter > 60) { failed = 1; console.log("************************ FAILED ************************"); break; }
      }

      if (failed) { break; }
    }
  }

}


function shiftRandomTileLine() {

  let debug = 1;

  // Shift a random row/column of tiles by 1 in a random direction

  let rLine = Math.round(random(1, (tiles - 2)));
  let rDir = (Math.round(random()) * 2) - 1;
  let count = 0;
  let result = [2];

  if (debug) { console.log(rLine + " - " + rDir); }

  if (random() > 0.5) {

    result = shiftTileLine(rLine, -1, rDir, 0);
    count = ((result[0] == 1) && (result[1] > 0));
    if (result[1] == 0) { if (debug) { console.log ("Undoing Row Shift"); } shiftTileLine(rLine, -1, rDir * -1, 0); }

    while (count == 0) {

      rLine = Math.round(random(1, (tiles - 2)));
      rDir = (Math.round(random()) * 2) - 1;
      result = shiftTileLine(rLine, -1, rDir, 0);
      count = ((result[0] == 1) && (result[1] > 0));
      if (result[1] == 0) { if (debug) { console.log ("Undoing Row Shift"); } shiftTileLine(rLine, -1, rDir * -1, 0); }
      if (debug) { console.log ("******* RETRY ROW SHIFT *******"); }
    }

    return [rLine, -1, rDir];

  } else {

    result = shiftTileLine(-1, rLine, rDir, 0);
    count = ((result[0] == 1) && (result[1] > 0));
    if (result[1] == 0) { if (debug) { console.log ("Undoing Column Shift"); } shiftTileLine(-1, rLine, rDir * -1, 0); }

    while (count == 0) {

      rLine = Math.round(random(1, (tiles - 2)));
      rDir = (Math.round(random()) * 2) - 1;
      result = shiftTileLine(-1, rLine, rDir, 0);
      count = ((result[0] == 1) && (result[1] > 0));
      if (result[1] == 0) { if (debug) { console.log ("Undoing Column Shift"); } shiftTileLine(-1, rLine, rDir * -1, 0); }
      if (debug) { console.log ("******* RETRY COLUMN SHIFT *******"); }
    }

    return [-1, rLine, rDir];
  }
}


function resetGenLevel() {

  // Resetting Level

  uiData[state][1][0] = 0;
  prepareLevelData();


  // Redoing Generating Tile Shifts

  steps = tileRots + tileMoves + tileSwitches + shiftMoves;

  for (let i = 0; i < shiftsDone.length; i++) {

    shiftTileLine(shiftsDone[i][0], shiftsDone[i][1], shiftsDone[i][2], 0);
  }


  // Redoing Generated Puzzle Piece Placements

  puzzlePieces.length = 0;
  endPieces.length = 0;

  ppC = puzzlePiecesCopy;
  epC = endPiecesCopy;

  puzzlePieces = [ppC.length];
  endPieces = [epC.length];

  for (let i = 0; i < ppC.length; i++) {

    puzzlePieces[i] = [4];

    for (y = 0; y < 4; y++) { // Cycle through piece parameters

      if (typeof ppC[i][y] === "object") { // Is it an object? (array)

        puzzlePieces[i][y] = ppC[i][y].slice(); // If so make a copy of it

      } else { puzzlePieces[i][y] = ppC[i][y]; } // If not set it to the same value
    }
  }

  endPieces[0] = epC[0].slice();
  endPieces[1] = epC[1].slice();


  // Undoing Generated Tile Shifts

  for (let i = (shiftsDone.length - 1); i > -1; i--) {

    shiftTileLine(shiftsDone[i][0], shiftsDone[i][1], shiftsDone[i][2] * -1, 0);
  }


  // Moving Puzzle Pieces

  for (let i = 0; i < tileMoves; i++) {

    let tileMoved = 0;

    while (tileMoved == 0) {

      let puzzleIndex = Math.round(random(1, puzzlePieces.length - 2));
      let newX = Math.round(random(1, tiles - 2));
      let newY = Math.round(random(1, tiles - 2));

      if ((newX != puzzlePieces[puzzleIndex][0]) && (newY != puzzlePieces[puzzleIndex][1])) {

        let isOnOtherPiece = 0;

        for (let y = 0; y < puzzlePieces.length; y++) {

          if ((newX == puzzlePieces[y][0]) && (newY == puzzlePieces[y][1])) {

            isOnOtherPiece = 1;
          }
        }

        if (isOnOtherPiece == 0) {

          puzzlePieces[puzzleIndex][0] = newX;
          puzzlePieces[puzzleIndex][1] = newY;
          tileMoved = 1;
        }
      }
    }
  }

  for (let i = 0; i < puzzlePieces.length; i++) {

    puzzlePiecesCopy2[i][0] = puzzlePieces[i][0];
    puzzlePiecesCopy2[i][1] = puzzlePieces[i][1];
  }

  endPiecesCopy2[0][0] = endPieces[0][0];
  endPiecesCopy2[0][1] = endPieces[0][1];
  endPiecesCopy2[1][0] = endPieces[1][0];
  endPiecesCopy2[1][1] = endPieces[1][1];


  // Rotating Puzzle Pieces

  for (let i = 0; i < tileRots; i++) {

    let puzzleIndex = Math.round(random(1, puzzlePieces.length - 2));

    for (let y = 0; y < 3; y++) { rotatePuzzlePiece(puzzleIndex); puzzlePiecesCopy2[puzzleIndex][2] = puzzlePieces[puzzleIndex][2].slice(); }
  }


  solved = 0;

  console.log("***** SOLUTION *****");
  console.log(shiftsDone);
  console.log("***** LEVEL DATA *****");
  console.log([puzzlePieces, endPieces]);
}


function retryGenLevel() {

  // Resetting Level

  uiData[state][1][0] = 0;
  prepareLevelData();


  // Redoing Generating Tile Shifts

  steps = tileRots + tileMoves + tileSwitches + shiftMoves;

  for (let i = 0; i < shiftsDone.length; i++) {

    shiftTileLine(shiftsDone[i][0], shiftsDone[i][1], shiftsDone[i][2], 0);
  }


  // Redoing Generated Puzzle Piece Placements (when solved)

  puzzlePieces.length = 0;
  endPieces.length = 0;

  let ppC = puzzlePiecesCopy;
  let epC = endPiecesCopy;

  puzzlePieces = [ppC.length];
  endPieces = [epC.length];

  for (let i = 0; i < ppC.length; i++) {

    puzzlePieces[i] = [4];

    for (y = 0; y < 4; y++) { // Cycle through piece parameters

      if (typeof ppC[i][y] === "object") { // Is it an object? (array)

        puzzlePieces[i][y] = ppC[i][y].slice(); // If so make a copy of it

      } else { puzzlePieces[i][y] = ppC[i][y]; } // If not set it to the same value
    }
  }

  endPieces[0] = epC[0].slice();
  endPieces[1] = epC[1].slice();


  // Undoing Generated Tile Shifts

  for (let i = (shiftsDone.length - 1); i > -1; i--) {

    shiftTileLine(shiftsDone[i][0], shiftsDone[i][1], shiftsDone[i][2] * -1, 0);
  }


  // Redoing Generated Puzzle Piece Placements (when scrambled)

  puzzlePieces.length = 0;
  endPieces.length = 0;

  let ppC2 = puzzlePiecesCopy2;
  let epC2 = endPiecesCopy2;

  puzzlePieces = [ppC2.length];
  endPieces = [epC2.length];

  for (let i = 0; i < ppC2.length; i++) {

    puzzlePieces[i] = [4];

    for (y = 0; y < 4; y++) { // Cycle through piece parameters

      if (typeof ppC2[i][y] === "object") { // Is it an object? (array)

        puzzlePieces[i][y] = ppC2[i][y].slice(); // If so make a copy of it

      } else { puzzlePieces[i][y] = ppC2[i][y]; } // If not set it to the same value
    }
  }

  endPieces[0] = epC2[0].slice();
  endPieces[1] = epC2[1].slice();


  solved = 0;
}


function saveLevelChanges() {

  let pp = puzzlePieces;
  let ep = endPieces;
  puzzlePiecesCopy2.length = 0;
  endPiecesCopy2.length = 0;
  puzzlePiecesCopy2 = [pp.length];
  endPiecesCopy2 = [ep.length];

  for (i = 0; i < pp.length; i++) { // Cycle through puzzle pieces

    puzzlePiecesCopy2[i] = [4];

    for (y = 0; y < 4; y++) { // Cycle through piece parameters

      if (typeof pp[i][y] === "object") { // Is it an object? (array)

        puzzlePiecesCopy2[i][y] = pp[i][y].slice(); // If so make a copy of it

      } else { puzzlePiecesCopy2[i][y] = pp[i][y]; } // If not set it to the same value
    }
  }

  endPiecesCopy2[0] = ep[0].slice();
  endPiecesCopy2[1] = ep[1].slice();
}


function animateUIElement(elements, start, end, time, reset, id) {

  if (elements != undefined) { // Add new anim

    let noDuplicate = 1;

    // Does fuck all for now (should prevent duplicate animations activating before the first one's ended)

    /*for (let i = 0; i < activeUIAnims.length; i++) {

      if (activeUIAnims[i][0][0] === elements[0]) { noDuplicate = 0; }
    }*/

    if (noDuplicate) {

      let spd = [end.length];

      for (let i = 0; i < end.length; i++) {

        spd[i] = (end[i] - start[i]) / time;
      }

      for (let y = 0; y < elements.length; y++) { // Cycle through elements (variables to animate in one batch)

        let elem = elements[y][0];
        let elemIndex = elements[y][1];

        elem[elemIndex] = start[y];
      }

      if (reset == 0) {

        activeUIAnims.push([elements, end, spd, time, end]);

      } else {

        activeUIAnims.push([elements, end, spd, time, start]);
      }
    }

  } else { // Continue active anims

    for (let i = 0; i < activeUIAnims.length; i++) { // Cycle through anims

      activeUIAnims[i][3]--; // Decrease time left for anim

      //console.log("***** ANIM *****");

      if (activeUIAnims[i][3] > 0) {

        for (let y = 0; y < activeUIAnims[i][0].length; y++) { // Cycle through elements (variables to animate in one batch)

          let elem = activeUIAnims[i][0][y][0];
          let elemIndex = activeUIAnims[i][0][y][1];

          elem[elemIndex] += activeUIAnims[i][2][y];

          //console.log(y + " : " + elem[elemIndex] + " + " + activeUIAnims[i][2][y]);
        }

      } else {

        for (let y = 0; y < activeUIAnims[i][0].length; y++) { // Cycle through elements (variables to animate in one batch)

          let elem = activeUIAnims[i][0][y][0];
          let elemIndex = activeUIAnims[i][0][y][1];

          elem[elemIndex] = activeUIAnims[i][4][y];
        }

        activeUIAnims.splice(i, 1);
      }
    }
  }
}


function updateEndpoints() {

  endPieces[0][0] = puzzlePieces[0][0];
  endPieces[0][1] = puzzlePieces[0][1];
  endPieces[1][0] = puzzlePieces[(puzzlePieces.length - 1)][0];
  endPieces[1][1] = puzzlePieces[(puzzlePieces.length - 1)][1];
}
