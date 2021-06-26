

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
  cc = color(random(360), 100, 100);
  colorMode(RGB);

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
            if (puzzlePieces[i][0] == (selected[1] + 1)) {
              if (puzzlePieces[i][1] == (selected[0] + 1)) {

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
            if (puzzlePieces[i][0] == (selected[1] + 1)) {
              if (puzzlePieces[i][1] == (selected[0] + 1)) {

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
            if ((puzzlePieces[clickedPuzzlePiece][0] != (selected[1] + 1)) || (puzzlePieces[clickedPuzzlePiece][1] != (selected[0] + 1))) {

              // Is the dragged piece marked as "being moved" ? (otherwise it's a non-movable piece)
              if (puzzlePieces[clickedPuzzlePiece][3] == 1) {

                // Is the currently selected puzzle piece a movable piece? (or an empty tile)
                if (isMovablePiece(-1, selected[0] + 1, selected[1] + 1) == 1) {

                  // Move puzzle piece to selected tile
                  puzzlePieces[clickedPuzzlePiece][1] = (selected[0] + 1);
                  puzzlePieces[clickedPuzzlePiece][0] = (selected[1] + 1);
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
        puzzlePieces[clickedPuzzlePiece][3] = 0; // Gives non-critical error (cannot set property after finishing level) **to_do**
        clickedPuzzlePiece = -1;
        clicked = 0;
      }
    }
  }
}


function prepareLevelData() {

  tiles = levelData[world - 1][level - 1][1]; // squared = total number of tiles
  puzzlePieces = levelData[world - 1][level - 1][2];
  pp = levelData[world - 1][level - 1][2];

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

  endPieces = levelData[world - 1][level - 1][3];
  steps = levelData[world - 1][level - 1][4]; // Number of available steps for a puzzle

  tilePos = [[], [], []]; // x, y, selected
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
    tilePos[0][i] = [];
    tilePos[1][i] = [];
    tilePos[2][i] = [];
    for (let y = 0; y < tiles; y++) {
      tilePos[0][i][y] = (width / 2) + (y * (tileSize / 2)) - ((tileSize / 2) * i);
      tilePos[1][i][y] = (height / 2) + (y * (tileSize / 2)) - offset + ((tileSize / 2) * i);
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

  background(cc);
  textFont(fontRegular);

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

          if (a[0] == 2) { // Is it a list item?

            limit = a[1][14]();
            //hNum = Math.min(a[1][15], limit);
            hNum = Math.min(a[1][15], limit);
            vNum2 = Math.ceil(limit / a[1][15]);
            vNum = Math.max(vNum2, a[1][16]);
            xOff = a[1][17];
            yOff = a[1][18];
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

              xx = (a[1][2] - (a[1][6] * a[1][4])) - ((hNum - 1) * (xOff / 2)) + (xOff * h);
              yy = (a[1][3] - (a[1][7] * a[1][5])) - ((vNum - 1) * (yOff / 2)) + (yOff * v);

              if (a[1][0] == 1) { // Is box element active?

                fill(a[1][8], a[1][9]);

                if (a[1][10] == 1) {

                  stroke(a[1][11], a[1][12]);
                  strokeWeight(a[1][13]);

                } else {

                  noStroke();
                }


                // Draw element box

                rectMode(CORNER);

                if (a[1][1] == 1) {

                  rect(xx, yy, a[1][4], a[1][5]);

                } else if (a[1][1] == 2) {

                  rect(xx, yy, a[1][4], a[1][5], 28);

                } else if (a[1][1] == 3) {

                  circle(xx + (a[1][4] / 2), yy + (a[1][5] / 2), a[1][4]);
                }

              } else {

                noFill();
                noStroke();
              }

              if (a[3][0] == 1) { // Is it interactive?

                // Is the mouse on a UI element? (New)

                if ((mouseX > xx) && (mouseX < (xx + a[1][4]))) {

                  if ((mouseY > yy) && (mouseY < (yy + a[1][5]))) {

                    uiHover = 1;
                    uiSelected = a;
                    uiSelectedIndex = ((v * hNum) + h + 1);

                    if (uiSelected[3][1] != 0) {

                      uiSelected[3][1]();
                    }
                  }
                }
              }

              if (a[2][0] == 1) { // Is text element active?


                // Draw element text

                textSize(a[2][2]);
                if (a[2][4] != -1) { fill(a[2][3], a[2][4]); } else { fill(a[2][3]); }
                noStroke();
                textAlign(LEFT, TOP);

                hA = ((a[1][4] * a[2][5]) - (textWidth(a[2][1]) * a[2][5])); // Horizontal aligning
                vA =((a[1][5] * a[2][6]) - (a[2][2] * a[2][6])); // Vertical aligning
                vC = -(a[2][2] / 7); // Small vertical correction for font height

                text(a[2][1], xx + hA, yy + vA + vC);
              }
            }
          }
        }
      }
    }

    if (uiSelected != "undefined") {

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
          if (dragAmount > 0){
            if (isMovablePiece(clickedPuzzlePiece, 0, 0) == 1) {
              puzzlePieces[clickedPuzzlePiece][3] = 1;
            }
          }
        }

        rectMode(CENTER);
        fill(0, 15);
        let centX = tilePos[0][mid][mid];
        let centY = tilePos[1][mid][mid];
        let offs = (height / 0.8);
        let offs2 = ((mid + 3) * tileSize) * round(tiles / 5);
        //quad(centX, centY - offs2, centX + offs2, centY, centX, centY + offs2, centX - offs2, centY);
        //quad(centX, centY - offs, centX + offs, centY, centX, centY + offs, centX - offs, centY);

        selected.length = 0;

        // Cycle through the tile grid
        for (let i = 0; i < tiles; i++) {
          for (let y = 0; y < tiles; y++) {

            posX = tilePos[0][i][y];
            posY = tilePos[1][i][y];

            op = 0;

            distX = abs(tilePos[0][mid][mid] - tilePos[0][i][y]);
            distY = abs(tilePos[1][mid][mid] - tilePos[1][i][y]);
            distance = max(distX, distY);

            // Check for mouse selection
            if ((abs(mouseX - posX) + abs(mouseY - posY)) < (tileSize / 2)) {
              tilePos[2][i][y] = 1;
              selected = [i, y];
            } else {
              tilePos[2][i][y] = 0;
            }

            // If cursor is on a tile do stuff
            if (tilePos[2][i][y] == 1) {
              op = tileSpread * hoverGrowth;
            } else { op = tileSpread; }

            // Draw tiles
            strokeWeight(0);
            fill(0, ((255 - map(dist(centX, centY, tilePos[0][i][y], tilePos[1][i][y]), 0, mid * tileSize, 120, 240))) + op);
            quad(posX, posY - ((tileSize / 2) / op), posX + ((tileSize / 2) / op), posY, posX, posY + ((tileSize / 2) / op), posX - ((tileSize / 2) / op), posY);
          }
        }


        // Draw puzzle pieces
        noFill();
        stroke(cc);
        strokeWeight(8 / (tiles / 5));
        strokeCap(SQUARE);

        for (let i = 0; i < puzzlePieces.length; i++) {

          let posX = tilePos[0][puzzlePieces[i][1] - 1][puzzlePieces[i][0] - 1];
          let posY = tilePos[1][puzzlePieces[i][1] - 1][puzzlePieces[i][0] - 1];

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
          let posX = tilePos[0][endPieces[i][1] - 1][endPieces[i][0] - 1];
          let posY = tilePos[1][endPieces[i][1] - 1][endPieces[i][0] - 1];
          quad(posX, posY - (tileSize / 8), posX + (tileSize / 8), posY, posX, posY + (tileSize / 8), posX - (tileSize / 8), posY);
        }
      }
    }
  }
}
