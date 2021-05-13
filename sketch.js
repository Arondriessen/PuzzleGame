

// General Puzzle Geometry Data

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


function setup() {
  createCanvas(windowWidth, windowHeight);


  // Load progression data
  level = max(1, getItem('level'));


  // Load all level data from js file
  var script = document.createElement('script');
  script.onload = function () {
    levelData = levels;
    prepareLevelData();
  };
  script.src = 'levels.js';
  document.head.appendChild(script); //or something of the likes

}


function mousePressed() {

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


function mouseReleased() {

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
    puzzlePieces[clickedPuzzlePiece][3] = 0;
    clickedPuzzlePiece = -1;
    clicked = 0;
  }
}


function prepareLevelData() {
  puzzlePieces = levelData[level - 1][0];
  puzzleSolution = levelData[level - 1][1];
  endPieces = levelData[level - 1][2];
  tiles = levelData[level - 1][3]; // squared = total number of tiles

  tilePos = [[], [], []]; // x, y, selected
  steps = 8; // Number of available steps for a puzzle
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
  cc = color(random(255), random(255), random(255));
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
  if (JSON.stringify(puzzlePieces) === JSON.stringify(puzzleSolution)) {
    solved = 1;

    level += 1;
    storeItem('level', level);
    nextLevel();
  }
}

function nextLevel() {
  prepareLevelData();
}


function draw() {

  background(cc);
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
    quad(centX, centY - offs2, centX + offs2, centY, centX, centY + offs2, centX - offs2, centY);
    quad(centX, centY - offs, centX + offs, centY, centX, centY + offs, centX - offs, centY);

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



    // Draw UI

    textSize(100);
    textAlign(LEFT, CENTER);
    fill(0, 50);
    text("Level " + level, tileSize, 1.2 * tileSize);

    textSize(100);
    textAlign(CENTER, CENTER);
    fill(0, 50);
    if (solved < 1) {
      text(steps, (width / 2) - ((mid + 1.4) * tileSize), height / 2);
    } else {
      text("Yay!", (width / 2) - ((mid + 1.4) * tileSize), height / 2);
    }
  }

}
