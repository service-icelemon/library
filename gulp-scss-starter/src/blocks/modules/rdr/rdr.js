pannellum.viewer('rd_scene', {
    "autoLoad": true,
    "showControls": false,
    "compass": false,
    "default": {
        "firstScene": "fst",
    },

    "scenes": {
        "fst": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/1.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 365,
                    "type": "scene",
                    "text": "Next spot",
                    "sceneId": "scnd"
                }
            ]
        },
        "scnd": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/2.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Prev spot",
                    "sceneId": "fst"
                },
                {
                    "pitch": 350,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Next spot",
                    "sceneId": "thrd"
                }
            ]
        },
        "thrd": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/3.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 220,
                    "type": "scene",
                    "text": "Prev spot",
                    "sceneId": "scnd"
                },
                {
                    "pitch": 0,
                    "yaw": 50,
                    "type": "scene",
                    "text": "Next spot",
                    "sceneId": "frth"
                }
            ]
        },
        "frth": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/4.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 145,
                    "type": "scene",
                    "text": "Prev spot",
                    "sceneId": "thrd"
                },
                {
                    "pitch": 0,
                    "yaw": 78,
                    "type": "scene",
                    "text": "Next spot",
                    "sceneId": "ffth"
                }
            ]
        },
        "ffth": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/5.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 118,
                    "type": "scene",
                    "text": "Prev spot",
                    "sceneId": "frth"
                }
            ]
        }
    }
});