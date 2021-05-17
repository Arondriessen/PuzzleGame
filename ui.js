
// UI elements for each state

ui = [

  [   // /* 00 */ Main Menu

    [ // /* 00 */ Default State

      [ // /* 00 */ Play Button

        [ // /* 00 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) - 120, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 20, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 01 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Play", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 02 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { menuState = 1; }, // onHover event (0 = no event)
          /* 02 */ function() { state = 2; } // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Levels Button

        [ // /* 00 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2), // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 20, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 01 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Levels", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 02 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Settings Button

        [ // /* 00 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ width / 2, // x pos
          /* 03 */ (height / 2) + 120, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0.5, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0.5, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 20, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 01 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Settings", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 02 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ 0 // onClick event (0 = no event)
        ]
      ]
    ]
  ],

  [   // /* 01 */ Levels Menu

    [ // /* 00 */ Default State

      [],
      [],
      []
    ]
  ],

  [   // /* 02 */ Puzzle UI

    [ // /* 00 */ Default State

      [ // /* 00 */ Level Text

        [ // /* 00 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ 20, // x pos
          /* 03 */ 20, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 01 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return ("Level " + level); }, // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 02 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 01 */ Steps Text

        [ // /* 00 */ Box

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ function() { return ((width / 2) - ((mid + 1.4) * tileSize)); }, // x pos
          /* 03 */ height / 2, // y pos
          /* 04 */ 0, // width
          /* 05 */ 0, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 0, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 0, // alpha
          /* 10 */ 0, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 0, // outline-alpha
          /* 13 */ 0 // outline-width
        ],

        [ // /* 01 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ function() { return steps; }, // text
          /* 02 */ 100, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 02 */ Button Events

          /* 00 */ 0, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ 0 // onClick event (0 = no event)
        ]
      ],

      [ // /* 02 */ Reset Button

        [ // /* 00 */ Box

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 1, // type (1 = rect, 2 = circle)
          /* 02 */ 20, // x pos
          /* 03 */ height - 20, // y pos
          /* 04 */ 280, // width
          /* 05 */ 100, // height
          /* 06 */ 0, // h-align (0 = left, 0.5 = centre, 1 = right)
          /* 07 */ 1, // v-align (0 = top, 0.5 = centre, 1 = bottom)
          /* 08 */ 0, // colour
          /* 09 */ 10, // alpha
          /* 10 */ 1, // outline (0 = no, 1 = yes)
          /* 11 */ 0, // outline-colour
          /* 12 */ 10, // outline-alpha
          /* 13 */ 3 // outline-width
        ],

        [ // /* 01 */ Text

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ "Reset", // text
          /* 02 */ 60, // text-size
          /* 03 */ 0, // text-colour
          /* 04 */ 50, // text-alpha
          /* 05 */ 0.5, // text-h-align
          /* 06 */ 0.5 // text-v-align
        ],

        [ // /* 02 */ Button Events

          /* 00 */ 1, // state (0 = off, 1 = on)
          /* 01 */ 0, // onHover event (0 = no event)
          /* 02 */ function() { prepareLevelData(); } // onClick event (0 = no event)
        ]
      ]
    ]
  ]

];
