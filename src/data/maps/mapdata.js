import store from "../../config/store";
import { setTimeout } from "timers";
const map1 = {
  tiles: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 9, 0, 0],
    [0, 0, 1, 0, 0]
  ],
  interact: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, "it's a rock", 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, "it's a rock", 0, 0]
  ],
  exit: ["RIGHT"],
  playerPos: [[0, 0], [0, 0]],
  rules: function() {
    if (true) {
      store.dispatch({
        type: "CHANGE_ZONE",
        payload: {
          ...store.getState().zone,
          conditionMet: true
        }
      });
    }
  }
};
let firstTime = false;
function helloPlayer() {
  store.dispatch({
    type: "CHANGE_TEXT",
    payload: {
      ...store.getState().textbox,
      text:
        "OH, hi there. So this game isn't done. I've got some work to do. But feel free to roam around.",
      display: true
    }
  });
  store.dispatch({
    type: "CHANGE_ZONE",
    payload: {
      ...store.getState().zone,
      conditionMet: true
    }
  });
}
const map2 = {
  tiles: [
    [0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 9, 0, 0, 0]
  ],
  interact: [
    [
      0,
      0,
      "You found a tree. You wonder why it's here, and why you're here as well.",
      0,
      0
    ],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ],
  exit: ["DOWN"],
  playerPos: [[2, 3], [2, 3]],
  rules: function(key, interact) {
    const interactedList = store.getState().player.interacted;
    if (
      !firstTime &&
      interactedList.includes(2) &&
      !store.getState().textbox.display
    ) {
      firstTime = true;
      setTimeout(helloPlayer, 1000);
    }
    if (interact != undefined && key === 13) {
      const interactionSpot = store.getState().map.tiles[interact[1]][
        interact[0]
      ];
      interactedList.push(interactionSpot);
      store.dispatch({
        type: "INTERACTED",
        payload: {
          ...store.getState().player,
          interacted: interactedList
        }
      });
    } else if (interact === undefined && key === 13) {
      interactedList.push("WALL");
      store.dispatch({
        type: "INTERACTED",
        payload: {
          ...store.getState().player,
          interacted: interactedList
        }
      });
    }
  }
};

const map3 = {
  tiles: [
    [3, 0, 0, 0, 1],
    [3, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 9],
    [4, 3, 1, 3, 0]
  ],
  interact: [
    ["Bush.", 0, 0, 0, "Yep, it's a rock."],
    ["It's a bush.", 0, 0, 0, "Can you smell what I'm cooking?"],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [
      "A traffic cone? Where's the traffic?",
      "It's a bush.",
      "Still just a rock.",
      "George W.",
      0
    ]
  ],
  exit: ["RIGHT"],
  playerPos: [[1, 0], [4, 3]],
  rules: function() {
    if (true) {
      store.dispatch({
        type: "CHANGE_ZONE",
        payload: {
          ...store.getState().zone,
          conditionMet: true
        }
      });
    }
  }
};

const map4 = {
  tiles: [
    [1, 3, 0, 0, 3],
    [4, 0, 0, 0, 0],
    [4, 4, 4, 0, 0],
    [8, 0, 4, 0, 0],
    [4, 9, 4, 0, 0]
  ],
  interact: [
    [
      "rock lobster",
      "ANOTHER SHRUBBERY!",
      0,
      0,
      'Is this what the "knights who say ni" wanted?'
    ],
    ["Too many cones.", 0, 0, 0, 0],
    ["why are there cones here?", "Traffic cones.", "More cones.", 0, 0],
    [0, 0, "More cones.", 0, 0],
    ["It's a cone.", 0, "More cones.", 0, 0]
  ],
  exit: ["DOWN", "LEFT"],
  playerPos: [[0, 3], [1, 4]],
  rules: function() {
    if (true) {
      store.dispatch({
        type: "CHANGE_ZONE",
        payload: {
          ...store.getState().zone,
          conditionMet: true
        }
      });
    }
  }
};
const map5 = {
  tiles: [
      [4, 8, 4, 9, 4],
      [4, 0, 0, 0, 4],
      [4, 4, 4, 4, 4],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    interact: [
        ["Just follow the cones.", 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    exit: ["UP", "UP"],
    playerPos: [[1,0],[3, 0]],
    rules: function() {
        if (true) {
          store.dispatch({
            type: "CHANGE_ZONE",
            payload: {
              ...store.getState().zone,
              conditionMet: true
            }
          });
        }
      }
};
const map6 = {
    tiles: [
        [4, 6, 4, 4, 4],
        [4, 0, 0, 0, 4],
        [4, 0, 4, 0, 4],
        [4, 0, 0, 0, 4],
        [4, 4, 4, 8, 4],
      ],
      interact: [
          [0, "A whole heckin` lot of cones eh?", 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
      ],
      exit: ["UP", "DOWN"],
      playerPos: [[3,4],[3, 0]],
      rules: function() {
          if (true) {
            store.dispatch({
              type: "CHANGE_ZONE",
              payload: {
                ...store.getState().zone,
                conditionMet: true
              }
            });
          }
        }
  };
export const mapArray = [
  {
    ...map1
  },
  {
    ...map2
  },
  {
    ...map3
  },
  {
    ...map4
  },
  {
      ...map5
  },
  {
      ...map6
  }
];
