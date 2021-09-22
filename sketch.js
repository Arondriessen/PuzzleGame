

// General

state = 0; // 0 = menu, 1 = levels, 2 = puzzle, 3 = settings, 4 = level-gen
gameState = 0; // 0 = pre-game-info, 1 = solving puzzle, 2 = puzzle solved, 3 = puzzle failed (ran out of steps)
uiLoaded = 0;
uiHover = 0;
uiHover2 = "";
elementID = "";
uiSelected = "undefined";
uiScale = 1;
designMode = 0;
activeUIAnims = [];
lineShiftHover = [-1, -1, 0];
cornerRotHover = [-1, -1];
gameMechanicNames = [
  "Tile Rotation",
  "Tile Movement",
  "Line Shifting",
  "Corner Rotation"
];
worldColours = [];
puzzleAnimTimer = 0;


// Menu Data

menuState = 0; // 0 = no hover, 1 = hover on "Play", 2 = hover on "Levels", 3 = hover on "Settings"


// Puzzle Geometry Data

levelData = [];
puzzlePieces = [];
puzzleSolution = [];
endPieces = [];
positions = [];
posRotTab = [
  "TopLeft",
  "Top",
  "TopRight",
  "Right",
  "BottomRight",
  "Bottom",
  "BottomLeft",
  "Left"
];

positions["Mid"] = [0.5, 0.5];
positions["TopLeft"] = [0, 0];
positions["Top"] = [0.5, 0];
positions["TopRight"] = [1, 0];
positions["Right"] = [1, 0.5];
positions["BottomRight"] = [1, 1];
positions["Bottom"] = [0.5, 1];
positions["BottomLeft"] = [0, 1];
positions["Left"] = [0, 0.5];

cc = 255;
levelLoaded = 0;


// Menu UI Variables

bgTileSize = 460;
menuBTMargin = 15;
menuBTTxtSize = 28;
levelBTSize = 102;
levelBTOffset = 110;
menuTileSize = 0;


// Animation Variables

btFill = 0;
btStr = 20;
btStrWidth = 2;

btFillHov = 10;
btStrHov = 0;

btHovInSpd = 5;
btHovOutSpd = 5;

btTxtSize = 36;


document.addEventListener('contextmenu', event => event.preventDefault());


function preload() {
  fontRegular = loadFont('assets/Lato-Regular.ttf');
  fontBold = loadFont('assets/Lato-Bold.ttf');
  fontItalic = loadFont('assets/Lato-Italic.ttf');
  fontLight = loadFont('assets/Lato-Light.ttf');
  fontLightItalic = loadFont('assets/Lato-LightItalic.ttf');
  arrowLeftIcon = loadImage('assets/arrowLeftIcon.svg');
  arrowTopIcon = loadImage('assets/arrowTopIcon.svg');
  arrowBottomIcon = loadImage('assets/arrowBottomIcon.svg');
  arrowRightIcon = loadImage('assets/arrowRightIcon.svg');
  menuIconIMG = loadImage('assets/menuIconIMG.png');
  rotCorner = loadImage('assets/rotCorner.png');
  rotCornerTop = loadImage('assets/rotCornerTop.svg');
  rotCornerRight = loadImage('assets/rotCornerRight.svg');
  rotCornerBottom = loadImage('assets/rotCornerBottom.svg');
  rotCornerLeft = loadImage('assets/rotCornerLeft.svg');
  checkmarkIcon = loadImage('assets/checkmarkIcon.png');
  lockedIcon = loadImage('assets/lockedIcon.svg');
  arrowLeft = loadImage('assets/arrowLeft.svg');
  arrowRight = loadImage('assets/arrowRight.svg');
  arrowBottomLeft = loadImage('assets/arrowBottomLeft.svg');
  resetIcon = loadImage('assets/resetIcon.png');
  checkmarkCircle = loadImage('assets/checkmarkCircle.svg');
  xCircle = loadImage('assets/xCircle.svg');
  moveTileMechanic = loadImage('assets/moveTileMechanic.png');
  rotateTileMechanic = loadImage('assets/rotateTileMechanic.png');
  lineShiftingMechanic = loadImage('assets/lineShiftingMechanic.png');
  cornerRotationMechanic = loadImage('assets/cornerRotationMechanic.png');
  moveIcon = loadImage('assets/moveIcon.svg');
  gradientLineV = loadImage('assets/gradientLineV.svg');
  gradientLineH = loadImage('assets/gradientLineH.svg');
  rotateTileIcon = loadImage('assets/rotateTileIcon.svg');
  rotateTileIcon2 = loadImage('assets/rotateTileIcon2.svg');
  mountainscapeBG = loadImage('assets/mountainscapeBG.png');
  settingsIcon = loadImage('assets/settingsIcon.svg');
  playIcon = loadImage('assets/playIcon.svg');
  levelsIcon = loadImage('assets/levelsIcon.svg');
  nextLevelIcon = loadImage('assets/nextLevelIcon.png');
  xIcon = loadImage('assets/xIcon.png');

  gameMechanicIcons = [
    rotateTileMechanic,
    moveTileMechanic,
    lineShiftingMechanic,
    cornerRotationMechanic
  ];
}


function setup() {

  // Set canvas to viewport size

  createCanvas(windowWidth, windowHeight);


  // Set UI scale based on resolution

  uiScale = min(width, height) / 1300;
  btTxtSize =  btTxtSize * uiScale;
  menuTileSize = min(width / 11, 160);


  // Load progression data

  level = max(1, getItem('level'));
  world = max(1, getItem('world'));
  unlockedLevel = getItem('unlockedLevel');
  if (unlockedLevel == null) { unlockedLevel = [1, 1, 1, 1]; } // Level is unlocked for all worlds
  levelsWorld = world;

  // Load level data from js file

  var script = document.createElement('script');
  script.onload = function () {
    levelData = levels.slice();

    // Unlock all levels upto saved level

    for (i = 0; i < (unlockedLevel.length); i++) {

      for (y = 0; y < (unlockedLevel[i] - 1); y++) {

        levelData[i][y][0] = 1;
      }

      if (typeof levelData[i][unlockedLevel[i] - 1] !== "undefined") {

        levelData[i][unlockedLevel[i] - 1][0] = 1;
      }
    }

    // Set overall progress percentage

    let perc = 0;

    for (let i = 0; i < unlockedLevel.length; i++) {

      perc += ((unlockedLevel[i] - 1) / levelData[i].length);
    }

    let temp = ceil((perc * 100) / unlockedLevel.length);
    temp = temp.toString().split("");
    overallPerc = "";

    for (let i = 0; i < temp.length; i++) {

      overallPerc += temp[i] + " ";
    }
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

  //cc = color('rgba(153, 35, 31, 255)'); // Red
  //cc = color('rgba(153, 31, 49, 255)'); // Red 2
  //cc = color('rgba(153, 86, 31, 255)'); // Orange
  //cc = color('rgba(153, 63, 31, 255)'); // Orange
  //cc = color('rgba(90, 31, 153, 255)'); // Purple
  //cc = color('rgba(153, 94, 31, 255)'); // Yellow

  //cc = color("#ff9999"); // Light Red/Pink
  //cc = color('rgba(250, 255, 148, 1)'); // Yellow/Lime
  //cc = color('rgba(151, 213, 255, 1)'); // Light Blue
  //cc = color('rgba(146, 255, 185, 1)'); // Light Blue

  //ccbg = color("#25252b"); // Gray
  ccbg = color("#111114"); // Gray 2

  worldColours = [
    color("#ff9999"),
    color("#de97ff"),
    color("#faff94"),
    color("#94bdff")
  ];

  cc = worldColours[levelsWorld - 1];

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
      if (gameState == 1) {

        if (puzzleAnimTimer == 0) {

          // Is the cursor on a tile?
          if (selected.length != 0) {
            for (let i = 0; i < puzzlePieces.length; i++) {

              // Is there a puzzle piece on the selected tile?
              if (puzzlePieces[i][0] == (selected[0])) {
                if (puzzlePieces[i][1] == (selected[1])) {

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

        if (gameState == 1) {

          // Is the cursor on a tile?
          if (selected.length != 0) {

            // Cycle through puzzle pieces to make some checks
            for (let i = 0; i < puzzlePieces.length; i++) {

              // Is there a puzzle piece on the currently selected tile?
              if (puzzlePieces[i][0] == (selected[0])) {
                if (puzzlePieces[i][1] == (selected[1])) {

                  // If its a click...
                  if (dragAmount == 0) {

                    if (mouseButton === LEFT) {

                      if (levelData[world - 1][level - 1][5][0] || designMode) {

                        // Rotate Puzzle Piece
                        rotatePuzzlePiece(i, 1);
                        setTimeout(function() { useStep(); isSolved(); }, 200);
                        puzzleAnimTimer = 10;
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

                          animateUIElement([[tileData[puzzlePieces[clickedPuzzlePiece][0]][puzzlePieces[clickedPuzzlePiece][1]], 0], [tileData[puzzlePieces[clickedPuzzlePiece][0]][puzzlePieces[clickedPuzzlePiece][1]], 1]], [tileData[puzzlePieces[i][0]][puzzlePieces[i][1]][0], tileData[puzzlePieces[i][0]][puzzlePieces[i][1]]][1], [tileData[puzzlePieces[clickedPuzzlePiece][0]][puzzlePieces[clickedPuzzlePiece][1]][0], tileData[puzzlePieces[clickedPuzzlePiece][0]][puzzlePieces[clickedPuzzlePiece][1]][1]], 10, 0);

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
              if ((puzzlePieces[clickedPuzzlePiece][0] != (selected[0])) || (puzzlePieces[clickedPuzzlePiece][1] != (selected[1]))) {

                // Is the dragged piece marked as "being moved" ? (otherwise it's a non-movable piece)
                if (puzzlePieces[clickedPuzzlePiece][3] == 1) {

                  // Is the currently selected puzzle piece a movable piece? (or an empty tile)
                  if (isMovablePiece(-1, selected[0], selected[1]) == 1) {

                    // Update tile data
                    tileIndexes[selected[0]][selected[1]] = [selected[0], selected[1]];
                    tileData[selected[0]][selected[1]][4] = clickedPuzzlePiece;
                    tileData[puzzlePieces[clickedPuzzlePiece][0]][puzzlePieces[clickedPuzzlePiece][1]][4] = -1;

                    // Move puzzle piece to selected tile
                    puzzlePieces[clickedPuzzlePiece][0] = selected[0];
                    puzzlePieces[clickedPuzzlePiece][1] = selected[1];
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

              dragAmount = 0;
            }
          }

          if (clickedPuzzlePiece != -1) {

            puzzlePieces[clickedPuzzlePiece][3] = 0; // Gives non-critical error (cannot set property after finishing level) ***** FIX *****
            clickedPuzzlePiece = -1;
            clicked = 0;
          }
        }
      }
    }
  }
}


function prepareLevelData() {

  tiles = levelData[world - 1][level - 1][1]; // squared = total number of tiles
  puzzlePieces = levelData[world - 1][level - 1][2];

  let pp = levelData[world - 1][level - 1][2];
  let ep = levelData[world - 1][level - 1][3];

  // Create COPY of (not reference to) the levelData array to avoid modifying it

  puzzlePieces = [pp.length];
  finishedPuzzlePath = [pp.length];

  for (i = 0; i < pp.length; i++) { // Cycle through puzzle pieces

    puzzlePieces[i] = [7];
    puzzlePieces[i][5] = [];

    puzzlePieces[i][0] = pp[i][0] - 1;
    puzzlePieces[i][1] = pp[i][1] - 1;

    for (y = 2; y < 4; y++) { // Cycle through piece parameters

      if (typeof pp[i][y] === "object") { // Is it an object? (array)

        puzzlePieces[i][y] = pp[i][y].slice(); // If so make a copy of it

      } else { puzzlePieces[i][y] = pp[i][y]; } // If not set it to the same value
    }

    if (pp[i][4] != undefined) {

      puzzlePieces[i][4] = [pp[i][4].length];

      for (y = 0; y < pp[i][4].length; y++) {

        if (typeof pp[i][4][y] === "object") { // Is it an object? (array)

          puzzlePieces[i][4][y] = pp[i][4][y].slice();

        } else { puzzlePieces[i][4][y] = pp[i][4][y]; } // If not set it to the same value
      }

      puzzlePieces[i][6] = [];

    } else { puzzlePieces[i][4] = 0; }
  }

  updatePPPoints();

  endPieces = [ep.length];

  endPieces[0] = ep[0].slice();
  endPieces[1] = ep[1].slice();

  steps = levelData[world - 1][level - 1][4]; // Number of available steps for a puzzle

  tileData = []; // x, y, fill-opacity, scale
  tileIndexes = []; // x, y
  tileSpread = 1; // the size of a tile compared to the space it occupies (2 = half size)
  hoverGrowth = 1.12;

  let smallerDimension = min(width, height);
  //tileSize = min(((bgTileSize * uiScale) / 3) * 2, ((bgTileSize * uiScale) / (tiles - 2)) * 2); // the size a single tile occupies (tiles themselves can be smaller)
  tileSize = min((smallerDimension * 0.8) / (tiles + 2), (smallerDimension * 0.15));
  endPieceSize = min(50 * uiScale, tileSize / 4);
  selected = [];
  clicked = 0;
  clickTimer = 0;
  clickedPuzzlePiece = -1;
  clickX = 0;
  clickY = 0;
  dragAmount = 0;
  gameState = 1;
  cc = worldColours[world - 1];
  puzzlePieceColour = cc;
  puzzlePieceOp = [255];
  endPieceOp = [255];
  activeMechanics = [];

  for (let i = 0; i < levelData[world - 1][level - 1][5].length; i++) {

    if (levelData[world - 1][level - 1][5][i] == 1) {

      activeMechanics.push(i);
    }
  }

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

      tileData[i][y][0] = (((width / 2) - (((tiles / 2) + 0.5) * tileSize)) + (tileSize * (i + 1)));
      tileData[i][y][1] = (((height / 2) - (((tiles / 2) + 0.5) * tileSize)) + (tileSize * (y + 1)));
      tileData[i][y][2] = 0; // Opacity
      tileData[i][y][3] = 1; // Scale
      tileData[i][y][4] = -1; // Puzzle Piece Id (-1 = no piece on tile)
      //tileData[i][y][3] = [i, y]; // Save original grid position to keep track of position changes
    }
  }


  // Apply line shifts

  if (levelData[world - 1][level - 1][5][2]) {

    for (let i = 0; i < levelData[world - 1][level - 1][6].length; i++) {

      let levelPreShift = levelData[world - 1][level - 1][6][i];
      shiftTileLine(levelPreShift[0], levelPreShift[1], levelPreShift[2], 0, 0);
      console.log("Applied Pre-Shift");
      //steps++;
    }
  }

  // If level has corner rotation

  if (levelData[world - 1][level - 1][5][3]) {

    // Pre-calculate corner rotations and save tile posiiton changes to an array

    let diam = ((tiles + 1) / 2);
    cornerRotPositions = [[[], []], [[], []]];

    for (let i = 0; i < 2; i++) {

      for (let z = 0; z < 2; z++) {

        cornerRotPositions[i][z] = [diam];

        for (let x = 0; x < diam; x++) {

          cornerRotPositions[i][z][x] = [diam];
        }
      }
    }

    preCalcCornerRot(0, 0);
    preCalcCornerRot(1, 0);
    preCalcCornerRot(1, 1);
    preCalcCornerRot(0, 1);

    // Apply corner rotations

    for (let i = 0; i < levelData[world - 1][level - 1][7].length; i++) {

      let levelPreShift = levelData[world - 1][level - 1][7][i];
      rotateCornerTiles(levelPreShift[0], levelPreShift[1], 0);
      console.log("Applied Pre-Corner-Rotation");
      //steps++;
    }
  }

  for (let i = 0; i < pp.length; i++) { // Cycle through puzzle pieces and save piece id in the array of the tile it sits on

    tileData[puzzlePieces[i][0]][puzzlePieces[i][1]][4] = i;
  }

  storeItem('level', level);
  storeItem('world', world);

  levelLoaded = 1;
}


function updatePPPoints() {

  for (i = 0; i < puzzlePieces.length; i++) {

    puzzlePieces[i][5].length = 0;

    for (let y = 0; y < (puzzlePieces[i][2].length); y++) {

      puzzlePieces[i][5].push([positions[puzzlePieces[i][2][y]][0], positions[puzzlePieces[i][2][y]][1]]);
    }

    if (puzzlePieces[i][4] != 0) {

      puzzlePieces[i][6].length = 0;

      for (let y = 0; y < (puzzlePieces[i][4].length); y++) {

        if (puzzlePieces[i][4][y] != -1) {

          puzzlePieces[i][6].push([ [ positions[puzzlePieces[i][4][y][0]][0], positions[puzzlePieces[i][4][y][0]][1] ], [ positions[puzzlePieces[i][4][y][1]][0], positions[puzzlePieces[i][4][y][1]][1] ] ]);

        } else { puzzlePieces[i][6].push(-1); }
      }
    }
  }
}


function isMovablePiece(piece, x, y) {

  let clickedOnMovablePiece = 1;

  // Testing out movable endpoints (meaning everything is movable and this function would become obsolete)


  if (piece > -1) { // Checks provided puzzle piece

    for (let i = 0; i < 2; i++) {

      if ((puzzlePieces[piece][0] == (puzzlePieces[(puzzlePieces.length - 1) * i][0])) & (puzzlePieces[piece][1] == (puzzlePieces[(puzzlePieces.length - 1) * i][1]))) {

        if (designMode == 0) { clickedOnMovablePiece = 0; }
      }
    }

  } else { // Checks puzzle piece mouse is hovering over

    for (let i = 0; i < 2; i++) {

      if ((x == (puzzlePieces[(puzzlePieces.length - 1) * i][0])) & (y == (puzzlePieces[(puzzlePieces.length - 1) * i][1]))) {

        if (designMode == 0) { clickedOnMovablePiece = 0; }
      }
    }
  }

  return clickedOnMovablePiece;
}


function useStep() {

  if (gameState) {

    if (designMode == 0) {

      steps -= 1;

      if (steps < 1) {

        gameState = 3;
        animateUIElement([[uiData[2][0][19][1], 4], [uiData[2][0][19][1], 5], [uiData[2][0][19][1], 12]], [200 * uiScale, 200 * uiScale, 100], [360 * uiScale, 360 * uiScale, 0], 26, 0);
      }
    }
  }
}


function rotatePuzzlePiece(i, animate) {

  for (let y = 0; y < puzzlePieces[i][2].length; y++) {

    if (puzzlePieces[i][2][y] != "Mid") {

      let pos = posRotTab.indexOf(puzzlePieces[i][2][y]);

      pos = (pos + 2) % 8;
      puzzlePieces[i][2][y] = posRotTab[pos];

      if (animate) {

        animateUIElement([[puzzlePieces[i][5][y], 0]], [puzzlePieces[i][5][y][0]], [positions[posRotTab[pos]][0]], 10, 0);
        animateUIElement([[puzzlePieces[i][5][y], 1]], [puzzlePieces[i][5][y][1]], [positions[posRotTab[pos]][1]], 10, 0);

      } else { updatePPPoints(); }
    }
  }

  if (puzzlePieces[i][4] != 0) {

    for (let y = 0; y < puzzlePieces[i][4].length; y++) {

      if (puzzlePieces[i][4][y] != -1) {

        for (let z = 0; z < 2; z++) {

          if (puzzlePieces[i][4][y][z] != "Mid") {

            let pos = 0;

            pos = posRotTab.indexOf(puzzlePieces[i][4][y][z]);
            pos = (pos + 2) % 8;
            puzzlePieces[i][4][y][z] = posRotTab[pos];

            if (animate) {

              animateUIElement([[puzzlePieces[i][6][y][z], 0]], [puzzlePieces[i][6][y][z][0]], [positions[posRotTab[pos]][0]], 10, 0);
              animateUIElement([[puzzlePieces[i][6][y][z], 1]], [puzzlePieces[i][6][y][z][1]], [positions[posRotTab[pos]][1]], 10, 0);
            }
          }
        }
      }
    }
  }
}


function isSolved() {

  let debug = 0;

  if (gameState) {

    if (designMode == 0) {

      // Go from endpoint A to B.
      // Check ending side of endpoint A.
      // Cycle through puzzlepieces and check for contuing points (pathfinding)
      // If it ends at endpoint B it's solved, if it ends earlier it's not.

      if (debug) { console.log("//////////////// isSolved ////////////////"); }

      let aSize = puzzlePieces.length;
      finishedPuzzlePath.length = 0;
      finishedPuzzlePath = [0];
      let exitMainLoop = 0;
      let exitSecLoop = 0;

      let pI = 0; // Puzzle Piece index
      let allPiecesRequired = 0; // Toggle true to make it require all pieces to be used
      let prevPiecePoint = puzzlePieces[pI][5][puzzlePieces[pI][5].length - 1]; // Last point of the puzzle piece path we're checking against

      for (let i = 0; i < aSize; i++) { // Main Loop (goes as long as connections are found)

        exitMainLoop = 1;

        for (let y = 0; y < aSize; y++) { // Secondary Loop (looks for a single connection out of all puzzle pieces)

          exitSecLoop = 0;

          if (y != pI) { // Prevent it from checking itself as a connected puzzle piece

            let prevPosX = puzzlePieces[pI][0];
            let prevPosY = puzzlePieces[pI][1];
            let posX = puzzlePieces[y][0];
            let posY = puzzlePieces[y][1];
            let distX = posX - prevPosX;
            let distY = posY - prevPosY;

            //if (debug) { console.log("Looking for Neighbouring Piece"); }

            if ((abs(distX) < 2) && (abs(distY) < 2)) {

              if (debug) { console.log("Neighbouring Piece Found"); }

              let piecePoint1 = puzzlePieces[y][5][0]; // First point of the puzzle piece path we're checking
              let piecePoint2 = puzzlePieces[y][5][puzzlePieces[y][5].length - 1]; // Last point of the puzzle piece path we're checking

              let distX2 = abs(distX - ((prevPiecePoint[0] * 2) - 1));
              let distY2 = abs(distY - ((prevPiecePoint[1] * 2) - 1));

              let continueLoop = 0;
              let xMult = -1;
              let yMult = -1;

              if ((abs((prevPiecePoint[0] * 2) - 1) + abs((prevPiecePoint[1] * 2) - 1)) == 1) { // Point is on a side (one connected tile)

                if (debug) { console.log("Prev. Ending Point is on a Side"); }

                if ((distX2 + distY2) == 0) {

                  if (debug) { console.log("Potential Connection Found"); }

                  continueLoop = 1;
                }

              } else { // Point is on a corner (three connected tiles)

                if (debug) { console.log("Prev. Ending Point is on a Corner"); }

                if ((distX2 + distY2) < 2) {

                  if (debug) { console.log("Potential Connection Found"); }

                  if ((distX2 + distY2) == 1) { // Connected through side

                    xMult = -1 * abs(distX);
                    yMult = -1 * abs(distY);
                    if (xMult == 0) { xMult = 1; }
                    if (yMult == 0) { yMult = 1; }

                    continueLoop = 1;

                  } else { // Connected through corner

                    continueLoop = 1;
                  }

                }
              }

              if (continueLoop) {

                let connected = 0;

                if ((((piecePoint1[0] * 2) - 1) * xMult) == ((prevPiecePoint[0] * 2) - 1) && (((piecePoint1[1] * 2) - 1) * yMult) == ((prevPiecePoint[1] * 2) - 1)) { // Connected to beginning of path

                  if (debug) { console.log("Connected to beginning of path"); }

                  prevPiecePoint = piecePoint2; // Last point of the puzzle piece path we're checking against
                  connected = 1;

                } else if ((((piecePoint2[0] * 2) - 1) * xMult) == ((prevPiecePoint[0] * 2) - 1) && (((piecePoint2[1] * 2) - 1) * yMult) == ((prevPiecePoint[1] * 2) - 1)) { // Connected to end of path

                  if (debug) { console.log("Connected to end of path"); }

                  prevPiecePoint = piecePoint1; // Last point of the puzzle piece path we're checking against
                  connected = 2;
                }

                if (connected > 0) {

                  if (debug) { console.log("///////// Connections (" + (i + 1) + "/" + (aSize - 1) + ") /////////"); }

                  pI = y;
                  exitMainLoop = 0;
                  exitSecLoop = 1;
                  finishedPuzzlePath.push(y);

                  if (y == (aSize - 1)) { // Last endpoint (finished)

                    if (connected == 2) { // Has to be connected to the right end of the endpoint piece

                      if (debug) { console.log("///////// Puzzle Solved! /////////"); }

                      levelComplete();
                      exitMainLoop = 1;
                    }
                  }
                }
              }
            }

          }

          if (exitSecLoop) { if (debug) { console.log("Exiting Secondary Loop"); } break; }
        }

        if (exitMainLoop) { if (debug) { console.log("Exiting Main Loop"); } break; }
      }
    }
  }
}


function levelComplete() {

  let debug = 0;

  if (debug) { console.log("//////////////// Level Finished! ////////////////"); }

  gameState = 2;

  // Animate steps highlight circle

  //animateUIElement([[uiData[2][0][19][1], 4], [uiData[2][0][19][1], 5], [uiData[2][0][19][1], 12]], [200 * uiScale, 200 * uiScale, 100], [360 * uiScale, 360 * uiScale, 0], 26, 0);

  // Animate path

  for (let i = 0; i < finishedPuzzlePath.length; i++) {

    tX = puzzlePieces[finishedPuzzlePath[i]][0];
    tY = puzzlePieces[finishedPuzzlePath[i]][1];

    animateUIElement([[tileData[tX][tY], 2], [tileData[tX][tY], 3]], [0, 1.5], [12, 1], 16, 0, 7 * (i + 0));
    animateUIElement([[tileData[tX][tY], 2]], [12], [0], 72, 0, (6 * (i + 0)) + 36);
  }

  if (typeof levelData[world - 1][level] !== "undefined") { // Check if there is a next level

    levelData[world - 1][level][0] = 1;
    storeItem('level', level + 1);
  }

  if ((level + 1) > unlockedLevel[world - 1]) { unlockedLevel[world - 1] += 1; storeItem('unlockedLevel', unlockedLevel); }

  exitMainLoop = 1;
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

  let imgAR1 = 1600 / 1080;
  let imgAR2 = 1080 / 1600;

  let ww = max(width, height * imgAR1);
  let hh = max(height, width * imgAR2);

  //image(mountainscapeBG, (width / 2) - (ww / 2), (height / 2) - (hh / 2), ww, hh);


  uiHover = 0;

  if (uiLoaded == 1) { // Check if UI has loaded yet


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
          listHAlign =  0;
          listVAlign =  0;

          if (a[0] == 2) { // Is it a list item?

            limit = a[1][15]();
            hNum = Math.min(a[1][16](), limit);
            vNum2 = Math.ceil(limit / a[1][16]());
            vNum = Math.max(vNum2, a[1][17]());
            xOff = a[1][18]();
            yOff = a[1][19]();
            xOff2 = a[1][20]();
            yOff2 = a[1][21]();
            listHAlign =  a[1][22];
            listVAlign =  a[1][23];
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

                  } else if (typeof a[x][y] === "object") { // Check if parameter is an array

                    if (a[1][15] != undefined) {

                      if (a[x][y].length < a[1][15]()) {

                        let temp = a[x][y][1];
                        a[x][y].length = 0;

                        for (z = 0; z < (a[1][15]()); z++) {

                          a[x][y].push(temp);
                        }
                      }
                    }
                  }
                }
              }

              // Variables for drawing UI elements

              boxW = a[1][4];
              boxH = a[1][5];
              boxOp = a[1][9];
              if (typeof boxOp === "object") { boxOp = a[1][9][((v * hNum) + h)]; }
              if (typeof boxOp === "function") { boxOp = boxOp(); }
              boxOutlineOp = a[1][12];
              if (a[4] != undefined) { imgOp = a[4][3]; }


              // Moves drawing start position to top-left corner regardless of alignments

              xx = (a[1][2] - (a[1][6] * boxW)) - ((hNum - 1) * (xOff * listHAlign)) - ((vNum - 1) * (xOff2 * listHAlign)) + (xOff * h) + (xOff2 * v);
              yy = (a[1][3] - (a[1][7] * boxH)) - ((hNum - 1) * (yOff * listVAlign)) - ((vNum - 1) * (yOff2 * listVAlign)) + (yOff * h) + (yOff2 * v);

              hAlign = a[1][6];
              vAlign = a[1][7];


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

                  if ((abs(mouseX - (xx + (boxW * (1 - hAlign)))) + abs(mouseY - (yy + (boxH * (1 - vAlign))))) < (boxW)) {

                    mouseIsOnElement = 1;
                  }
                }

                elementID = (str(s) + "-" + str(i) + "-" + str(v) + "-" + str(h));

                if (mouseIsOnElement) {

                  if (uiHover2 != elementID) {

                    if (uiSelected != "undefined") {
                      if (uiSelected[3][2] != 0) {

                        uiSelected[3][2]();
                        //console.log("Hover Out 2");
                      }
                    }
                  }

                  uiHover = 1;
                  uiSelected = a;
                  uiSelectedIndex = ((v * hNum) + h + 1);

                  if (uiSelected[3][1] != 0) {

                    uiSelected[3][1]();
                    //if (uiHover2 != elementID) { console.log("Hover In"); }
                  }

                  uiHover2 = elementID;

                } else {

                  if (uiHover2 == elementID) {

                    uiHover2 = "";
                  }
                }
              }


              // Reset positions to take alignment into account

              xx = (a[1][2]) - ((hNum - 1) * (xOff * listHAlign)) - ((vNum - 1) * (xOff2 * listHAlign)) + (xOff * h) + (xOff2 * v);
              yy = (a[1][3]) - ((hNum - 1) * (yOff * listVAlign)) - ((vNum - 1) * (yOff2 * listVAlign)) + (yOff * h) + (yOff2 * v);


              push();
              translate(xx, yy);

              if (a[1][14] != 0) { // Apply rotation if applicable

                angleMode(DEGREES);
                rotate(a[1][14]);
              }


              if (a[1][0] == 1) { // Is box element active?

                let ccc = a[1][8];
                let cccc = ccc;

                if (typeof ccc === "object") {

                  cccc = color(ccc.levels[0], ccc.levels[1], ccc.levels[2], boxOp);

                } else {

                  cccc = color(ccc, ccc, ccc, boxOp);
                }

                fill(cccc);

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

                  case 1: rect(- (boxW * hAlign), - (boxH * vAlign), boxW, boxH);
                  break;

                  case 2: rect(- (boxW * hAlign), - (boxH * vAlign), boxW, boxH, min(boxW, boxH) / 3.4);
                  break;

                  case 3: circle(0, 0, boxW);
                  break;

                  case 4:
                  quad(- (boxW * hAlign) + (boxW * (1 - hAlign)), - ((boxH * 2) * vAlign),
                  ((boxW * 2) * (1 - hAlign)), - (boxH * vAlign) + (boxH * (1 - vAlign)),
                  - (boxW * hAlign) + (boxW * (1 - hAlign)), ((boxH * 2) * (1 - vAlign)),
                  - ((boxW * 2) * hAlign), - (boxH * vAlign) + (boxH * (1 - vAlign)));
                  break;
                }

              } else {

                noFill();
                noStroke();
              }


              if (a[2][0] == 1) { // Is text element active?


                // Draw element text

                let ccc = a[2][3];
                let cccc = ccc;

                if (typeof ccc === "object") {

                  cccc = color(ccc.levels[0], ccc.levels[1], ccc.levels[2], a[2][4]);

                } else {

                  cccc = color(ccc, ccc, ccc, a[2][4]);
                }

                fill(cccc);

                textFont(fontRegular);
                if (a[2][7] != undefined) { textFont(a[2][7]); }
                textSize(a[2][2]);
                //if (a[2][4] != -1) { fill(a[2][3], a[2][4]); } else { fill(a[2][3]); }
                noStroke();
                textAlign(LEFT, TOP);

                let hA = (((boxW * (1 + (a[1][1] == 4))) * a[2][5]) - (textWidth(a[2][1]) * a[2][5])); // Horizontal aligning
                let vA = (((boxH * (1 + (a[1][1] == 4))) * a[2][6]) - (a[2][2] * a[2][6])); // Vertical aligning
                let vC = -(a[2][2] / 7); // Small vertical correction for font height

                text(a[2][1], hA - ((boxW * (1 + (a[1][1] == 4))) * hAlign), vA + vC - ((boxH * (1 + (a[1][1] == 4))) * vAlign));

              }


              if (a[4] != undefined) {

                if (a[4][0] == 1) { // Is image element active?

                  let ww = a[4][2];
                  let hh = a[4][2];
                  if (a[4][3] != 0) { hh = a[4][3]; }
                  let hA = (((boxW * (1 + (a[1][1] == 4))) * a[4][4]) - (ww / 2)); // Horizontal aligning
                  let vA = (((boxH * (1 + (a[1][1] == 4))) * a[4][5]) - (hh / 2)); // Vertical aligning

                  image(a[4][1], hA - ((boxW * (1 + (a[1][1] == 4))) * hAlign), vA - ((boxH * (1 + (a[1][1] == 4))) * vAlign), ww, hh); // ***** Causes fatal error in firefox only *****
                }
              }


              pop(); // Reset translate/rotation
            }
          }
        }
      }
    }


    // Run active animations
    if (activeUIAnims.length > 0) { animateUIElement(); }


    // Main Menu

    if (state < 2) {

      let hNum = floor(width / menuTileSize);
      let vNum = floor(height / menuTileSize);
      hNum -= hNum % 2;
      vNum -= vNum % 2;
      let xOff = (width / 2) - (menuTileSize * ((hNum / 2) - 0.5));
      let yOff = (height / 2) - (menuTileSize * ((vNum / 2) - 0.5));

      for (let x = 0; x < hNum; x++) {

        let xx = xOff + (x * menuTileSize);

        image(gradientLineV, xx, yOff, 1, menuTileSize * (vNum - 1));
      }

      for (let y = 0; y < vNum; y++) {

        let yy = yOff + (y * menuTileSize);

        image(gradientLineH, xOff, yy, menuTileSize * (hNum - 1), 1);
      }
    }


    // Levels Menu

    if (state == 1) {

      //
    }


    // Puzzle

    if (state == 2) {

      if (gameState) {

        noStroke();

        // Check if all level data is ready
        if (levelLoaded == 1) {

          if (clicked == 1) {

            if (levelData[world - 1][level - 1][5][1] || designMode) {

              // Has the mouse moved since clicking a puzzle piece? ***** Why like this? Rework!
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

            stroke(255, 20);
            strokeWeight(1);
            noFill();

            // Draw background grid

            let len = 0;
            if (levelData[world - 1][level - 1][5][2] || levelData[world - 1][level - 1][5][3]) { len = 2; }
            let startX = (width / 2) - (((tiles + len) / 2) * tileSize);
            let startY = (height / 2) - (((tiles + len) / 2) * tileSize);

            if (i < (tiles - 1)) {

              image(gradientLineV, startX + (tileSize * (i + 1)), startY, 1, (tiles + len) * tileSize);
              image(gradientLineH, startX, startY + (tileSize * (i + 1)), (tiles + len) * tileSize, 1);

            } else {

              if (len == 2) {

                image(gradientLineV, startX + (tileSize * (i + 1)), startY, 1, (tiles + len) * tileSize);
                image(gradientLineH, startX, startY + (tileSize * (i + 1)), (tiles + len) * tileSize, 1);
                image(gradientLineV, startX + (tileSize * (i + 2)), startY, 1, (tiles + len) * tileSize);
                image(gradientLineH, startX, startY + (tileSize * (i + 2)), (tiles + len) * tileSize, 1);
              }
            }

            noStroke();

            for (let y = 0; y < tiles; y++) {

              fill(255, tileData[i][y][2]);

              // Check for mouse selection

              let posX = tileData[i][y][0]; // Store x position
              let posY = tileData[i][y][1]; // Store y position
              let scale = tileSpread;

              if (gameState == 1) {

                if ((abs(mouseX - posX) < (tileSize / 2)) && (abs(mouseY - posY) < (tileSize / 2))) {

                  //scale = tileSpread * hoverGrowth; // If cursor is on tile resize it (hover effect)
                  selected = [i, y]; // Save index of selected tile

                  fill(255, 8);
                  noStroke();
                }
              }

              // Draw tiles

              push();
              translate(posX, posY);

              rect(0, 0, ((tileSize * tileData[i][y][3]) / scale), ((tileSize * tileData[i][y][3]) / scale));

              translate(0, 0);
              pop();
            }
          }


          // Draw puzzle pieces

          strokeCap(ROUND);
          strokeJoin(ROUND);

          let ePDrawPos = [];

          for (let z = 1; z > -1; z--) { // First loop for move previews, second for normal pieces

            strokeWeight(6 * uiScale);

            for (let i = 0; i < puzzlePieces.length; i++) {

              let posX = tileData[puzzlePieces[i][0]][puzzlePieces[i][1]][0];
              let posY = tileData[puzzlePieces[i][0]][puzzlePieces[i][1]][1];

              if (puzzlePieces[i][3] == 1) {

                posX = mouseX + (posX - clickX);
                posY = mouseY + (posY - clickY);
              }


              push();
              translate(posX, posY);
              angleMode(DEGREES);
              //rotate(puzzlePieces[i][4]);

              let lerpNum = 0.9;
              let drawDot = 1;
              let drawRot = 0;
              let drawMov = 0;
              let drawX = 0;

              if ((puzzlePieces[i][0] == selected[0]) && (puzzlePieces[i][1] == selected[1])) { // If hovering over

                if (levelData[world - 1][level - 1][5][0]) { // If rotation is enabled

                  drawDot = 0;
                  drawRot = 1;
                }

                lerpNum = 0.5;
              }

              if (dragAmount > 0) { // If a piece is being dragged *** Needs a better treshold (also in mouse-release)

                if (i == clickedPuzzlePiece) { // If this piece being being dragged

                  if (isMovablePiece(i)) {

                    drawDot = 0;
                    drawMov = 1;
                  }

                } else if (lerpNum == 0.5) { // If another piece is being dragged onto this one

                  if (isMovablePiece(i) == 0) {

                    drawX = 1;
                  }
                }

                drawRot = 0;
              }

              if (drawDot) { // Draw tile centre dot

                fill(lerpColor(cc, ccbg, lerpNum));
                noStroke();
                circle(0, 0, tileSize / 8);
              }

              if (drawRot) {

                image(rotateTileIcon, - (tileSize / 3.2), - (tileSize / 3.2), tileSize / 1.6, tileSize / 1.6);
              }

              noFill();

              let offX = 0;
              let offY = 0;
              let lShiftHov = 0;
              let cRotHov = 0;
              let cT;

              if (cornerRotHover[0] != -1) {

                cT = (tiles + 1) / 2;

                if (abs((((cT + 1) / 2) + (((cT + 1) / 2) * cornerRotHover[0])) - (puzzlePieces[i][0] + 1)) <= ((cT) / 2)) { // If piece x is in range of corner

                  if (abs((((cT + 1) / 2) + (((cT + 1) / 2) * cornerRotHover[1])) - (puzzlePieces[i][1] + 1)) <= ((cT) / 2)) { // If piece y in range of corner

                    cRotHov = 1;
                  }
                }
              }

              if (lineShiftHover[2] != 0) {

                if (puzzlePieces[i][0] == lineShiftHover[1]) { // In selected column

                  if ((tileData[lineShiftHover[1]][(tiles - 1) * (Math.max(0, lineShiftHover[2]))][4]) == -1) { // If it's able to move

                    lShiftHov = 1;
                  }

                } else if (puzzlePieces[i][1] == lineShiftHover[0]) { // In selected row

                  if ((tileData[(tiles - 1) * (Math.max(0, lineShiftHover[2]))][lineShiftHover[0]][4]) == -1) { // If it's able to move

                    lShiftHov = 1;
                  }
                }
              }


              offX = 0;
              offY = 0;

              if (z == 0) { // Normal opacity and position

                if (typeof(puzzlePieceColour) == "object") { stroke(puzzlePieceColour); } else { stroke(puzzlePieceColour, puzzlePieceOp[0]); }

              } else { // Low opacity 2nd path for original position when moving piece

                //let ccc = color(cc.levels[0], cc.levels[1], cc.levels[2], 25);
                //stroke(ccc);
                stroke(lerpColor(cc, ccbg, 0.9));

                if (cRotHov) {

                  let temp = cornerRotPositions[cornerRotHover[0]][cornerRotHover[1]][puzzlePieces[i][0] - (cornerRotHover[0] * (cT - 1))][puzzlePieces[i][1] - (cornerRotHover[1] * (cT - 1))];

                  offX = tileData[temp[0]][temp[1]][0] - posX;
                  offY = tileData[temp[0]][temp[1]][1] - posY;

                } else if (lShiftHov) { // Line shift position projections

                  if (lineShiftHover[0] != -1) { offX = lineShiftHover[2] * tileSize; }
                  if (lineShiftHover[1] != -1) { offY = lineShiftHover[2] * tileSize; }

                } else { // Tile movement original position

                  offX = tileData[puzzlePieces[i][0]][puzzlePieces[i][1]][0] - posX;
                  offY = tileData[puzzlePieces[i][0]][puzzlePieces[i][1]][1] - posY;
                }
              }

              for (let y = 0; y < (puzzlePieces[i][5].length - 1); y++) {

                let x1 = offX - (tileSize / 2) + puzzlePieces[i][5][y][0] * tileSize;
                let y1 = offY - (tileSize / 2) + puzzlePieces[i][5][y][1] * tileSize;
                let x4 = offX - (tileSize / 2) + puzzlePieces[i][5][y + 1][0] * tileSize;
                let y4 = offY - (tileSize / 2) + puzzlePieces[i][5][y + 1][1] * tileSize;

                if (z) {

                  if (cRotHov) {

                    if (puzzlePieces[i][2][y] != "Mid") {

                      let pos = posRotTab.indexOf(puzzlePieces[i][2][y]);

                      pos = positions[posRotTab[(pos + 2) % 8]];

                      x1 = offX - (tileSize / 2) + pos[0] * tileSize;
                      y1 = offY - (tileSize / 2) + pos[1] * tileSize;
                    }

                    if (puzzlePieces[i][2][y + 1] != "Mid") {

                      let pos2 = posRotTab.indexOf(puzzlePieces[i][2][y + 1]);

                      pos2 = positions[posRotTab[(pos2 + 2) % 8]];

                      x4 = offX - (tileSize / 2) + pos2[0] * tileSize;
                      y4 = offY - (tileSize / 2) + pos2[1] * tileSize;
                    }
                  }
                }

                let drawBezier = 0;

                if (puzzlePieces[i][4] != 0) {

                  if (puzzlePieces[i][4][y] != undefined) {

                    if (puzzlePieces[i][4][y] != -1) {

                      drawBezier = 1;
                    }
                  }
                }

                if (drawBezier) {

                  let x2 = offX - (tileSize / 2) + puzzlePieces[i][6][y][0][0] * tileSize;
                  let y2 = offY - (tileSize / 2) + puzzlePieces[i][6][y][0][1] * tileSize;
                  let x3 = offX - (tileSize / 2) + puzzlePieces[i][6][y][1][0] * tileSize;
                  let y3 = offY - (tileSize / 2) + puzzlePieces[i][6][y][1][1] * tileSize;

                  if (z) {

                    if (cRotHov) {

                      if (puzzlePieces[i][2][y][0] != "Mid") {

                        let pos = posRotTab.indexOf(puzzlePieces[i][4][y][0]);

                        pos = positions[posRotTab[(pos + 2) % 8]];

                        x2 = offX - (tileSize / 2) + pos[0] * tileSize;
                        y2 = offY - (tileSize / 2) + pos[1] * tileSize;
                      }

                      if (puzzlePieces[i][2][y][1] != "Mid") {

                        let pos2 = posRotTab.indexOf(puzzlePieces[i][4][y][1]);

                        pos2 = positions[posRotTab[(pos2 + 2) % 8]];

                        x3 = offX - (tileSize / 2) + pos2[0] * tileSize;
                        y3 = offY - (tileSize / 2) + pos2[1] * tileSize;
                      }
                    }
                  }

                  //bezier(x1, y1, x1, y4, x1, y4, x4, y4);
                  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

                } else {

                  line(x1, y1, x4, y4);
                }

                if ((i == 0) || (i == (puzzlePieces.length - 1))) {

                  ePDrawPos.push([posX, posY, x1, y1]);
                }
              }

              if (drawMov) {

                image(moveIcon, - (tileSize / 3), - (tileSize / 3), tileSize / 1.5, tileSize / 1.5);
              }

              pop();
            }

            if (z) {

              let ccc = color(255);

              fill(lerpColor(ccc, ccbg, 0.9));
              stroke(ccbg);
              strokeWeight(3.6);

              circle(ePDrawPos[0][0] + ePDrawPos[0][2], ePDrawPos[0][1] + ePDrawPos[0][3], 24);
              circle(ePDrawPos[1][0] + ePDrawPos[1][2], ePDrawPos[1][1] + ePDrawPos[1][3], 24);
            }
          }


          // Draw end pieces

          for (let i = 0; i < 2; i++) {

            let ePI = (puzzlePieces.length - 1) * i;

            let posX = tileData[puzzlePieces[ePI][0]][puzzlePieces[ePI][1]][0];
            let posY = tileData[puzzlePieces[ePI][0]][puzzlePieces[ePI][1]][1];

            if (puzzlePieces[ePI][3] == 1) {

              posX = mouseX + (posX - clickX);
              posY = mouseY + (posY - clickY);
            }

            fill(cc, endPieceOp[0]);
            stroke(ccbg);
            strokeWeight(4);

            circle(posX - (tileSize / 2) + puzzlePieces[ePI][5][0][0] * tileSize, posY - (tileSize / 2) + puzzlePieces[ePI][5][0][1] * tileSize, 30);

            fill(255, endPieceOp[0]);
            stroke(ccbg);
            strokeWeight(4);

            circle(posX - (tileSize / 2) + puzzlePieces[ePI][5][0][0] * tileSize, posY - (tileSize / 2) + puzzlePieces[ePI][5][0][1] * tileSize, 15);
          }


          // Reduce puzzleAnimTimer by 1

          puzzleAnimTimer = max(0, puzzleAnimTimer - 1);
        }
      }
    }


    // Reset hover effect if not hovering on UI anymore

    if (uiHover == 0) {

      if (uiSelected != "undefined") {

        if (uiSelected[3][2] != 0) {

          uiSelected[3][2]();
          uiSelected = "undefined";

          //console.log("Hover Out 1");
        }
      }
    }
  }
}


function shiftTileLine(row, column, dir, animate, movePuzzlePieces) {

  // row = row number or -1 if moving a column
  // column = column number or -1 if moving a row
  // dir = direction of line movement (1 = right/down, -1 = left/up)
  // animate = toggle to animate the movement (0 = no, 1 = yes)
  // movePuzzlePieces = toggle to move the pieces on the tiles (0 = no, 1 = yes)

  let debug = 1;

  if (gameState < 2) {

    // Move tiles

    let dirNorm = Math.max(0, dir);
    let dirRev = dir * -1;
    let dirRevNorm = Math.max(0, dirRev);
    let isGo = 0;
    let puzzlePiecesMoved = 1;

    if (row != -1) {

      if (debug) { console.log("Attempting to move row" + row); }

      if ((tileData[(tiles - 1) * dirNorm][row][4]) == -1) {

        for (let i = ((tiles - 1) * dirNorm); i != ((tiles - 1) * dirRevNorm); i += dirRev) { // Loop through tiles in row

          tileData[i][row][4] = tileData[i + dirRev][row][4]; // Copy puzzle piece reference from the tile in the opposite side of the movement direction

          if (tileData[i][row][4] != -1) { // Check if there is a puzzle piece on this tile

            if (debug) { console.log("Moved Row " + row); }

            if (movePuzzlePieces) { // Check if puzzle pieces should be moved

              puzzlePieces[tileData[i][row][4]][0] = i;
              puzzlePieces[tileData[i][row][4]][1] = row;
            }

            if (animate) { animateUIElement([[tileData[i][row], 0], [tileData[i][row], 1]], [tileData[i + dirRev][row][0], tileData[i + dirRev][row][1]], [tileData[i][row][0], tileData[i][row][1]], 10, 0); }

            puzzlePiecesMoved++;
            isGo = 1;
          }
        }

        tileData[((tiles - 1) * dirRevNorm)][row][4] = -1;

      } else {

        if (debug) { console.log("Tiles do not have room to move"); }
      }

    } else {

      if (debug) { console.log("Attempting to move column" + column); }

      if ((tileData[column][(tiles - 1) * dirNorm][4]) == -1) {

        for (let i = ((tiles - 1) * dirNorm); i != ((tiles - 1) * dirRevNorm); i += dirRev) { // Loop through tiles in row

          tileData[column][i][4] = tileData[column][i + dirRev][4]; // Copy puzzle piece reference from the tile in the opposite side of the movement direction

          if (tileData[column][i][4] != -1) { // Check if there is a puzzle piece on this tile

            if (debug) { console.log("Moved Column " + column); }

            if (movePuzzlePieces) { // Check if puzzle pieces should be moved

              puzzlePieces[tileData[column][i][4]][0] = column;
              puzzlePieces[tileData[column][i][4]][1] = i;
            }

            if (animate) { animateUIElement([[tileData[column][i], 0], [tileData[column][i], 1]], [tileData[column][i + dirRev][0], tileData[column][i + dirRev][1]], [tileData[column][i][0], tileData[column][i][1]], 10, 0); }

            puzzlePiecesMoved++;
            isGo = 1;
          }
        }

        tileData[column][((tiles - 1) * dirRevNorm)][4] = -1;

      } else {

        if (debug) { console.log("Tiles do not have room to move"); }
      }
    }

    if (isGo) { // Check if tiles have room to move (if not, cancel)

      updateEndpoints();
      useStep(); isSolved();
    }

    //if (debug) { console.log("Tiles have room to move = " + isGo); console.log("Puzzle Pieces Affected = " + puzzlePiecesMoved); }

    return [isGo, puzzlePiecesMoved];
  }
}


function preCalcCornerRot(cornerX, cornerY) {

  if (gameState < 2) {

    let cornerTiles = (tiles + 1) / 2; // No. of tiles in a corner (diameter)
    let cX = cornerX * (cornerTiles - 1); // x index of top-left piece in selected corner (start post of rotation)
    let cY = cornerY * (cornerTiles - 1); // y index of top-left piece in selected corner (start post of rotation)
    let loops = Math.ceil(cornerTiles / 2); // No. of "circles" to rotate (center-piece is also handled as a circle which might not be the best solution)

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
        a.push([xx, yy]);
      }

      for (let y = 0; y < (len - 1); y++) {
        yy++;
        a.push([xx, yy]);
      }

      for (let y = 0; y < (len - 1); y++) {
        xx--;
        a.push([xx, yy]);
      }

      for (let y = 0; y < (len - 2); y++) {
        yy--;
        a.push([xx, yy]);
      }

      tC = [a.length];

      for (let y = 0; y < a.length; y++) {

        tC[y] = [a[y][0], a[y][1]];
      }

      for (let y = 0; y < a.length; y++) {

        off = (y + a.length + (len - 1)) % (a.length);

        //console.log(cornerRotPositions);

        cornerRotPositions[cornerX][cornerY][a[y][0] - cX][a[y][1] - cY] = [tC[off][0], tC[off][1]];
      }
    }
  }
}


function rotateCornerTiles(cornerX, cornerY, animate, movePuzzlePieces) {

  if (gameState < 2) {

    let anim = 0;
    if (animate != undefined) { anim = animate; }

    let cornerTiles = (tiles + 1) / 2; // No. of tiles in a corner (diameter)
    let cX = cornerX * (cornerTiles - 1); // x index of top-left piece in selected corner (start post of rotation)
    let cY = cornerY * (cornerTiles - 1); // y index of top-left piece in selected corner (start post of rotation)
    let xx = 0;
    let yy = 0;
    let tempA = [cornerTiles];
    let tD;
    let puzzlePiecesMoved = 0;

    for (let x = 0; x < cornerTiles; x++) {

      tempA[x] = [cornerTiles];

      for (let y = 0; y < cornerTiles; y++) {

        if (movePuzzlePieces) {

          xx = x + cX;
          yy = y + cY;

          newX = cornerRotPositions[cornerX][cornerY][x][y][0];
          newY = cornerRotPositions[cornerX][cornerY][x][y][1];

          tD = tileData[xx][yy];
          tD2 = tileData[newX][newY];
          tempA[x][y] = [tD[0], tD[1], tD2[0], tD2[1], tD[4]];
        }
      }
    }

    for (let x = 0; x < cornerTiles; x++) {

      for (let y = 0; y < cornerTiles; y++) {

        if (movePuzzlePieces) {

          xx = x + cX;
          yy = y + cY;

          newX = cornerRotPositions[cornerX][cornerY][x][y][0];
          newY = cornerRotPositions[cornerX][cornerY][x][y][1];

          tileData[newX][newY][4] = tempA[x][y][4];

          if (tileData[newX][newY][4] != -1) {

            puzzlePieces[tempA[x][y][4]][0] = newX;
            puzzlePieces[tempA[x][y][4]][1] = newY;
            puzzlePiecesMoved++;

            rotatePuzzlePiece(tempA[x][y][4], animate);

            if (animate) { animateUIElement([[tileData[newX][newY], 0], [tileData[newX][newY], 1]], [tempA[x][y][0], tempA[x][y][1]], [tempA[x][y][2], tempA[x][y][3]], 15, 0); }
          }
        }
      }
    }

    if (puzzlePiecesMoved > 0) {

      updateEndpoints();
      setTimeout(function() { useStep(); isSolved(); }, 200);
      puzzleAnimTimer = 15;
    }
  }
}


function generateLevel() {

  let debug = 0;

  if (debug) { console.log("Generated Level"); }

  rPieces = 7;

  tileRots = 0;
  tileMoves = 0;
  tileSwitches = 0; // not yet implemented
  shiftMoves = 0;
  cRotationMoves = 0;

  shiftsDone = [];
  cRotationsDone = [];
  shiftsDone.length = 0;
  cRotationsDone.length = 0;

  for (let i = 1; i < (tiles - 1); i++) {
    for (let y = 1; y < (tiles - 1); y++) {
      tileData[i][y][4] = -1; // Empty references to previous puzzle pieces
    }
  }


  // Scramble tiles by applying tile shifts and corner rotations

  for (let i = 0; i < shiftMoves; i++) {

    shiftsDone.push(shiftRandomTileLine());
  }

  for (let i = 0; i < cRotationMoves; i++) {

    cRotationsDone.push(rotateRandomCornerTiles());
  }


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


  // Generate the solved puzzle path

  while (positionsPlaced == 0) { // Loop for placing solved puzzle path

    let failed = 0;
    let loopCounter = 0;

    if (debug) { console.log("********** START PATHFINDING LOOP **********"); }

    for (let i = 0; i < rPieces; i++) { // Cycle through pieces that need to be generated

      posPlaced = 0;

      while (posPlaced == 0) { // Loop for placing single position in path

        if (debug) { console.log("*** START POSITION FINDING LOOP ***"); }

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

                  puzzlePieces[i] = [x, y, [rot1, "Middle", "Middle"], 0, 0];
                  puzzlePiecesCopy[i] = [x, y, [rot1, "Middle", "Middle"], 0, 0];
                  puzzlePiecesCopy2[i] = [x, y, [rot1, "Middle", "Middle"], 0, 0];
                  tileData[y][x][4] = i; // Save new puzzle piece's id in the array of the tile it sits on

                } else { // Last End Piece

                  puzzlePieces[i] = [x, y, ["Middle", rot1], 0, 0];
                  puzzlePiecesCopy[i] = [x, y, ["Middle", rot1], 0, 0];
                  puzzlePiecesCopy2[i] = [x, y, ["Middle", rot1], 0, 0];
                  tileData[y][x][4] = i; // Save new puzzle piece's id in the array of the tile it sits on

                  endPieces[0] = [puzzlePieces[0][0], puzzlePieces[0][1]];
                  endPieces[1] = [x, y];
                  endPiecesCopy[0] = [puzzlePieces[0][0], puzzlePieces[0][1]];
                  endPiecesCopy[1] = [x, y];
                  endPiecesCopy2[0] = [puzzlePieces[0][0], puzzlePieces[0][1]];
                  endPiecesCopy2[1] = [x, y];
                  positionsPlaced = 1;
                  if (debug) { console.log("Path Placed"); }
                }

                let pointIndex = 2;
                if (i == 1) { pointIndex = 1; }

                puzzlePieces[i - 1][2][pointIndex] = rot2;
                puzzlePiecesCopy[i - 1][2][pointIndex] = rot2;
                puzzlePiecesCopy2[i - 1][2][pointIndex] = rot2;

              } else { // First End Piece

                puzzlePieces[i] = [x, y, ["Middle", rot1], 0, 0];
                puzzlePiecesCopy[i] = [x, y, ["Middle", rot1], 0, 0];
                puzzlePiecesCopy2[i] = [x, y, ["Middle", rot1], 0, 0];
                tileData[y][x][4] = i; // Save new puzzle piece's id in the array of the tile it sits on
              }

              posPlaced = 1;

              if (debug) { console.log("Position Placed: " + x + " - " + y); }

            } else { if (debug) { console.log("Position is on previous one -" + x + " - " + y); } }
          } else { if (debug) { console.log("Position is not on a Tile -" + x + " - " + y); } }
        } else { if (debug) { console.log("Position Fell off Grid -" + x + " - " + y); } }

        loopCounter++;
        if (loopCounter > 60) { failed = 1; if (debug) { console.log("************************ FAILED ************************"); } break; }
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


function rotateRandomCornerTiles() {

  let debug = 1;

  if (debug) { console.log("Rotating Random Corner"); }


  // Rotate a random corner

  let count = 0;
  let loopCount = 1;
  let rC = [2];

  while (count == 0) {

    rC = [Math.round(random(1)), Math.round(random(1))];
    if (debug) { console.log("First try: " + rC); }

    for (let i = 0; i < puzzlePieces.length; i++) {

      if (puzzlePieces[i][0] >= (((tiles + 1) / 2) * rC[0])) {

        if (puzzlePieces[i][1] >= (((tiles + 1) / 2) * rC[0])) {

          count = 1;
        }
      }
    }
  }

  rotateCornerTiles(rC[0], rC[1], 0);

  return [rC[0], rC[1]];
}


function resetGenLevel() {

  // Resetting Level

  uiData[state][1][0] = 0;
  prepareLevelData();


  // Set number of steps

  steps = tileRots + tileMoves + tileSwitches + shiftMoves + cRotationMoves;


  // Redoing Generating Tile Shifts

  for (let i = 0; i < shiftsDone.length; i++) {

    shiftTileLine(shiftsDone[i][0], shiftsDone[i][1], shiftsDone[i][2], 0, 1);
  }


  // Redoing Generating Corner Rotations

  for (let i = 0; i < cRotationsDone.length; i++) {

    rotateCornerTiles(cRotationsDone[i][0], cRotationsDone[i][1], 0);
  }


  // Redoing Generated Puzzle Piece Placements

  puzzlePieces.length = 0;
  endPieces.length = 0;

  ppC = puzzlePiecesCopy;
  epC = endPiecesCopy;

  puzzlePieces = [ppC.length];
  endPieces = [epC.length];

  for (let i = 0; i < ppC.length; i++) {

    puzzlePieces[i] = [5];

    for (y = 0; y < 5; y++) { // Cycle through piece parameters

      if (typeof ppC[i][y] === "object") { // Is it an object? (array)

        puzzlePieces[i][y] = ppC[i][y].slice(); // If so make a copy of it

      } else { puzzlePieces[i][y] = ppC[i][y]; } // If not set it to the same value
    }
  }

  endPieces[0] = epC[0].slice();
  endPieces[1] = epC[1].slice();

  updatePuzzlePieceIDsInTileData();


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
          tileData[newY][newX][4] = puzzleIndex; // Save new puzzle piece's id in the array of the tile it sits on
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


  // Undoing Generated Corner Rotations

  for (let i = (cRotationsDone.length - 1); i > -1; i--) {

    let rots = 0;
    while (rots < 3) {
      rotateCornerTiles(cRotationsDone[i][0], cRotationsDone[i][1], 0);
      rots++;
    }
  }


  // Undoing Generated Tile Shifts

  for (let i = (shiftsDone.length - 1); i > -1; i--) {

    shiftTileLine(shiftsDone[i][0], shiftsDone[i][1], shiftsDone[i][2] * -1, 0, 1);
  }


  // Rotating Puzzle Pieces

  for (let i = 0; i < tileRots; i++) {

    let puzzleIndex = Math.round(random(1, puzzlePieces.length - 2));

    for (let y = 0; y < 3; y++) { rotatePuzzlePiece(puzzleIndex); puzzlePiecesCopy2[puzzleIndex][2] = puzzlePieces[puzzleIndex][2].slice(); }
  }


  gameState = 1;

  console.log("***** SOLUTION *****");

  console.log("Line Shifts:");
  console.log(shiftsDone);

  console.log("Corner Rotations:");
  console.log(cRotationsDone);

  console.log("***** LEVEL DATA *****");
  console.log([puzzlePieces, endPieces]);
}


function retryGenLevel() {

  // Resetting Level

  uiData[state][1][0] = 0;
  prepareLevelData();


  // Redoing Generating Tile Shifts

  steps = tileRots + tileMoves + tileSwitches + shiftMoves + cRotationMoves;

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

    puzzlePieces[i] = [5];

    for (y = 0; y < 5; y++) { // Cycle through piece parameters

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

    puzzlePieces[i] = [5];

    for (y = 0; y < 5; y++) { // Cycle through piece parameters

      if (typeof ppC2[i][y] === "object") { // Is it an object? (array)

        puzzlePieces[i][y] = ppC2[i][y].slice(); // If so make a copy of it

      } else { puzzlePieces[i][y] = ppC2[i][y]; } // If not set it to the same value
    }
  }

  endPieces[0] = epC2[0].slice();
  endPieces[1] = epC2[1].slice();

  updatePuzzlePieceIDsInTileData();

  gameState = 1;
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


function animateUIElement(elements, start, end, time, reset, delay) {

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

      if (delay == undefined) { delay = 0; }

      if (reset == 0) {

        activeUIAnims.push([elements, end, spd, time, start, end, delay]);

      } else {

        activeUIAnims.push([elements, end, spd, time, start, start, delay]);
      }
    }

  } else { // Continue active anims

    for (let i = 0; i < activeUIAnims.length; i++) { // Cycle through anims

      if (activeUIAnims[i][6] < 1) { // If delay is over

        activeUIAnims[i][3]--; // Decrease anim time left

        if (activeUIAnims[i][6] == 0) {

          for (let y = 0; y < activeUIAnims[i][0].length; y++) { // Cycle through elements (variables to animate in one batch)

            let elem = activeUIAnims[i][0][y][0];
            let elemIndex = activeUIAnims[i][0][y][1];

            elem[elemIndex] = activeUIAnims[i][4][y]; // Set starting state

             activeUIAnims[i][6]--; /* Decrease delay time left */
          }
        }

        if (activeUIAnims[i][3] > 0) { // If anima has time left

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

            elem[elemIndex] = activeUIAnims[i][5][y];
          }

          activeUIAnims.splice(i, 1);
        }

      } else { activeUIAnims[i][6]--; /* Decrease delay time left */ }
    }
  }
}


function updateEndpoints() {

  endPieces[0][0] = puzzlePieces[0][0];
  endPieces[0][1] = puzzlePieces[0][1];
  endPieces[1][0] = puzzlePieces[(puzzlePieces.length - 1)][0];
  endPieces[1][1] = puzzlePieces[(puzzlePieces.length - 1)][1];
}


function updatePuzzlePieceIDsInTileData() {

  for (let i = 1; i < (tiles - 1); i++) {
    for (let y = 1; y < (tiles - 1); y++) {
      tileData[i][y][4] = -1; // Empty references to previous puzzle pieces
    }
  }

  for (let i = 0; i < puzzlePieces.length; i++) { // Cycle through puzzle pieces and save piece id in the array of the tile it sits on

    tileData[puzzlePieces[i][1]][puzzlePieces[i][0]][4] = i;
  }
}
