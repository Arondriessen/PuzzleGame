

// General

state = 0; // 0 = menu, 1 = levels, 2 = puzzle
uiLoaded = 0;
uiHover = 0;
uiSelected = "undefined";


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



function preload() {
  fontRegular = loadFont('assets/Lato-Regular.ttf');
  fontBold = loadFont('assets/Lato-Bold.ttf');
  arrowTopLeftIMG = loadImage('assets/arrowTopLeftIMG.svg');
  arrowTopRightIMG = loadImage('assets/arrowTopRightIMG.svg');
  arrowBottomLeftIMG = loadImage('assets/arrowBottomLeftIMG.svg');
  arrowBottomRightIMG = loadImage('assets/arrowBottomRightIMG.svg');
}


function setup() {

  // Set canvas to viewport size

  createCanvas(windowWidth, windowHeight);


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
  document.head.appendChild(script); // or something of the likes


  // Load UI data from js file

  var script = document.createElement('script');
  script.onload = function () {
    uiData = ui.slice();
    uiLoaded = 1;
  };
  script.src = 'ui.js';
  document.head.appendChild(script); // or something of the likes


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

                  // Rotate Puzzle Piece
                  for (let y = 0; y < puzzlePieces[i][2].length; y++) {
                    let pos = positionsRotation.indexOf(puzzlePieces[i][2][y]);
                    if (pos > 0) {
                      pos = max(1, (pos + 1) % 5);
                      puzzlePieces[i][2][y] = positionsRotation[pos];
                    }
                  }
                  useStep();
                  isSolved();

                  console.log()

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

                  // Move puzzle piece to selected tile
                  puzzlePieces[clickedPuzzlePiece][1] = selected[0];
                  puzzlePieces[clickedPuzzlePiece][0] = selected[1];
                  puzzlePieces[clickedPuzzlePiece][3] = 0;
                  clickedPuzzlePiece = -1;
                  clicked = 0;
                  useStep();
                  isSolved();
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
  pp = levelData[world - 1][level - 1][2];
  ep = levelData[world - 1][level - 1][3];

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

  for (i = 0; i < ep.length; i++) { // Cycle through puzzle pieces

    endPieces[i] = [4];

    for (y = 0; y < 4; y++) { // Cycle through piece parameters

      if (typeof ep[i][y] === "object") { // Is it an object? (array)

        endPieces[i][y] = ep[i][y].slice(); // If so make a copy of it

      } else { endPieces[i][y] = ep[i][y]; } // If not set it to the same value
    }
  }

  steps = levelData[world - 1][level - 1][4]; // Number of available steps for a puzzle

  tileData = []; // x, y, fill-opacity, original-pos
  tileIndexes = []; // x, y
  tileSpread = 1; // the size of a tile compared to the space it occupies (2 = half size)
  hoverGrowth = 1.12;

  tileSize = min(((height / 1.15) / tiles)  * tileSpread, 180); // the size a single tile occupies (tiles themselves can be smaller)
  selected = [];
  clicked = 0;
  clickTimer = 0;
  clickedPuzzlePiece = -1;
  clickX = 0;
  clickY = 0;
  dragAmount = 0;
  solved = 0;

  mid = floor(tiles / 2);
  offset = (mid * tileSize);
  tileW = sqrt(sq(tileSize) / 2);
  //cc = color(random(255), random(255), random(255));
  //cc = 120;

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
      tileData[i][y][2] = -1;
      tileData[i][y][3] = [i, y]; // Save original grid position to keep track of position changes
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

  levelLoaded = 1;
}


function isMovablePiece(piece, x, y) {

  let clickedOnMovablePiece = 1;
  if (piece > -1) {
    for (let i = 0; i < (endPieces.length); i++) {
      if ((puzzlePieces[piece][0] == (endPieces[i][0])) & (puzzlePieces[piece][1] == (endPieces[i][1]))) {
        clickedOnMovablePiece = 0;
      }
    }
  } else {
    for (let i = 0; i < (endPieces.length); i++) {
      if ((y == (endPieces[i][0])) & (x == (endPieces[i][1]))) {
        clickedOnMovablePiece = 0;
      }
    }
  }
  return clickedOnMovablePiece;
}


function useStep() {
  steps -= 1;

  if (steps < 1) {
    solved = -1;
  }
}


function isSolved() {

  /*
  // Check array of puzzle pieces against array of solutions (old / single-solution / manual)

  if (JSON.stringify(puzzlePieces) === JSON.stringify(puzzleSolution)) {

    solved = 1;
    level += 1;
    storeItem('level', level);
    nextLevel();
  }*/


  // New Method

  // Go from endpoint A to B.
  // Check ending side of endpoint A.
  // Cycle through puzzlepieces and check for contuing points (pathfinding)
  // If it ends at endpoint B it's solved, if it ends earlier it's not.

  aSize = puzzlePieces.length;
  pI = 0;

  console.log("//////////////// isSolved ////////////////");

  for (i = 0; i < aSize; i++) {

    console.log(aSize + " - Number of puzzle pieces");
    console.log(i + " - Main loop index ****************************");
    console.log(pI + " - Puzzle piece index");

    piece = puzzlePieces[pI]
    points = piece[2];
    exitMainLoop = 1;

    if (points.length == 2) {

      // Endpoints

      dir = firstNoMiddle(points);
      console.log("Endpoint - Type of piece");

    } else {

      // Regular Pieces

      console.log("Regular piece - Type of piece");
    }

    console.log(dir + " - Direction 1");

    for (y = 0; y < aSize; y++) {

      console.log(y + " - Secondary loop index -----------------");

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

        console.log("Piece is next to main piece");

        for (x = 0; x < points2.length; x++) { // Cycle through points

          if (points2[x] == dirOp(dir)) {

            console.log(dirOp(dir) + " - Direction 2");

            // Connection found

            console.log("Connection found (" + (i + 1) + "/" + (aSize - 1) + ")");

            pI = y; // Reassign index to restart loop with
            exitSecLoop = 1;
            exitMainLoop = 0;

            if (points2.length == 2) {

              console.log("//////////////// Level Finished! ////////////////");

              solved = 1;

              if (typeof levelData[world - 1][level] !== "undefined") { // Check if there is a next level

                levelData[world - 1][level][0] = 1;
                storeItem('level', level + 1);
                if ((level + 1) > unlockedLevel[world - 1]) { unlockedLevel[world - 1] += 1; storeItem('unlockedLevel', unlockedLevel); }
                uiData[state][1][0] = 1;
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

  level += 1;
  prepareLevelData();
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

  if (state == 2) { image(img, 0, 0); }

  uiHover = 0;

  if (uiLoaded == 1) { // Check if UI has loaded yet

    // Draw UI (Dynamic)

    for (s = 0; s < uiData[state].length; s++) { // Cycle through UI states (starting with the default one)

      aa = uiData[state][s]; // Load state

      if (aa[0] == 1) {

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

              xx = (a[1][2] - (a[1][6] * a[1][4])) - ((hNum - 1) * (xOff / 2)) - ((vNum - 1) * (xOff2 / 2)) + (xOff * h) + (xOff2 * v);
              yy = (a[1][3] - (a[1][7] * a[1][5])) - ((hNum - 1) * (yOff / 2)) - ((vNum - 1) * (yOff2 / 2)) + (yOff * h) + (yOff2 * v);


              if (a[3][0] == 1) { // Is it interactive?

                // Is the mouse on a UI element? (New)

                if ((mouseX > xx) && (mouseX < (xx + a[1][4]))) {

                  if ((mouseY > yy) && (mouseY < (yy + a[1][5]))) {

                    if (uiSelected != a) {

                      if (uiSelected != "undefined") {
                        if (uiSelected[3][2] != 0) {

                          uiSelected[3][2]();
                        }
                      }

                      uiHover = 1;
                      uiSelected = a;
                      uiSelectedIndex = ((v * hNum) + h + 1);

                      if (uiSelected[3][1] != 0) {

                        uiSelected[3][1]();
                      }
                    }
                  }
                }
              }


              if (a[1][0] == 1) { // Is box element active?

                fill(a[1][8], a[1][9]);

                if (a[0] == 2) { if (uiSelected == a) { fill(a[1][8], a[3][1]()); } }

                if (a[1][10] == 1) {

                  stroke(a[1][11], a[1][12]);
                  strokeWeight(a[1][13]);

                } else {

                  noStroke();
                }


                // Draw element box

                rectMode(CORNER);

                switch(a[1][1]) {

                  case 1: rect(xx, yy, a[1][4], a[1][5]);
                  break;

                  case 2: rect(xx, yy, a[1][4], a[1][5], min(a[1][4], a[1][5]) / 3.4);
                  break;

                  case 3: circle(xx + (a[1][4] / 2), yy + (a[1][5] / 2), a[1][4]);
                  break;

                  case 4: quad(xx + (a[1][4] / 2), yy - (a[1][5] * 0.5), xx + (a[1][4] * 1.5), yy + (a[1][5] / 2), xx + (a[1][4] / 2), yy + (a[1][5] * 1.5), xx - (a[1][4] * 0.5), yy + (a[1][5] / 2));
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

                let hA = ((a[1][4] * a[2][5]) - (textWidth(a[2][1]) * a[2][5])); // Horizontal aligning
                let vA =((a[1][5] * a[2][6]) - (a[2][2] * a[2][6])); // Vertical aligning
                let vC = -(a[2][2] / 7); // Small vertical correction for font height

                text(a[2][1], xx + hA, yy + vA + vC);
              }


              if (a[4] != undefined) {

                if (a[4][0] == 1) { // Is image element active?

                  let hA = ((a[1][4] * a[4][4]) - (a[4][2] / 2)); // Horizontal aligning
                  let vA = ((a[1][5] * a[4][5]) - (a[4][2] / 2)); // Vertical aligning

                  image(a[4][1], xx + hA, yy + vA, a[4][2], a[4][2]);
                }
              }
            }
          }
        }
      }
    }

    if (uiSelected != "undefined") { // Reset hover effect if not hovering on UI anymore

      if (uiHover == 0) {

        if (uiSelected[3][2] != 0) {

          uiSelected[3][2]();
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
              quad(posX, posY - ((tileSize / 2) / scale), posX + ((tileSize / 2) / scale), posY, posX, posY + ((tileSize / 2) / scale), posX - ((tileSize / 2) / scale), posY);
            }
          }
        }


        // Draw puzzle pieces
        noFill();
        stroke(cc);
        strokeWeight(8 / (tiles / 5));
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

        fill(255);
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


function shiftTileLine(row, column, dir) {

  // Move tiles

  dirNorm = Math.max(0, dir);
  dirRev = dir * -1;
  dirRevNorm = Math.max(0, dirRev);

  if (row != -1) {

    console.log("Moved Row");

    for (let y = ((tiles - 1) * dirNorm); y != ((tiles - 1) * dirRevNorm); y += dirRev) {

      if (tileData[row][y + dirRev][2] != -1) {

        console.log("Block " + y);

        tileData[row][y][2] = tileData[row][y + dirRev][2];
        tileData[row][y][3][0] = tileData[row][y + dirRev][3][0];
        tileData[row][y][3][1] = tileData[row][y + dirRev][3][1];

        tileIndexes[tileData[row][y][3][0]][tileData[row][y][3][1]][0] = row;
        tileIndexes[tileData[row][y][3][0]][tileData[row][y][3][1]][1] = y;

      } else {

        tileData[row][y][2] = -1;
      }
    }

    tileData[row][((tiles - 1) * dirRevNorm)][2] = -1;

  } else {

    console.log("Moved Column");

    for (let y = ((tiles - 1) * dirNorm); y != ((tiles - 1) * dirRevNorm); y += dirRev) {

      if (tileData[y + dirRev][column][2] != -1) {

        console.log("Block " + y);

        tileData[y][column][2] = tileData[y + dirRev][column][2];
        tileData[y][column][3][0] = tileData[y + dirRev][column][3][0];
        tileData[y][column][3][1] = tileData[y + dirRev][column][3][1];

        tileIndexes[tileData[y][column][3][0]][tileData[y][column][3][1]][0] = row;
        tileIndexes[tileData[y][column][3][0]][tileData[y][column][3][1]][1] = y;

      } else {

        tileData[y][column][2] = -1;
      }
    }

    tileData[((tiles - 1) * dirRevNorm)][column][2] = -1;

  }

  // Move puzzle pieces with tiles

  let lineType = row;
  let num = 1;

  if (row == -1) { lineType = column; num = 0; }

  for (let i = 0; i < puzzlePieces.length; i++) {

    if (puzzlePieces[i][num] == lineType) {

      puzzlePieces[i][Math.abs(num -1)] += dir;
    }
  }

  for (let i = 0; i < endPieces.length; i++) {

    if (endPieces[i][num] == lineType) {

      endPieces[i][Math.abs(num -1)] += dir;
    }
  }

  //useStep();
  //isSolved();
}


function shiftRight() {

  let row = 2;

  for (let y = (tiles - 1); y > 0; y--) {

    tileData[row][y][2] = tileData[row][y - 1][2];
    tileData[row][y][3][0] = tileData[row][y - 1][3][0];
    tileData[row][y][3][1] = tileData[row][y - 1][3][1];

    tileIndexes[tileData[row][y][3][0]][tileData[row][y][3][1]][0] = row;
    tileIndexes[tileData[row][y][3][0]][tileData[row][y][3][1]][1] = y;
  }

  // Move puzzle pieces with tiles

  for (let i = 0; i < puzzlePieces.length; i++) {

    if (puzzlePieces[i][1] == row) {

      puzzlePieces[i][0]++;
    }
  }

  for (let i = 0; i < endPieces.length; i++) {

    if (endPieces[i][1] == row) {

      endPieces[i][0]++;
    }
  }

  tileData[row][0][2] = -1;
  useStep();
  isSolved();
}
