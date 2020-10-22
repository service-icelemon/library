pannellum.viewer('train_scene', {
    "autoLoad": true,
    "showControls": false,
    "compass": false,
    "default": {
        "firstScene": "fsttrain",
    },

    "scenes": {
        "fsttrain": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/1.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 365,
                    "type": "scene",
                    "text": "Next spot",
                    "sceneId": "scndtrain"
                }
            ]
        },
        "scndtrain": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/2.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 0,
                    "type": "scene",
                    "text": "Prev spot",
                    "sceneId": "fsttrain"
                },
                {
                    "pitch": 350,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Next spot",
                    "sceneId": "thrdtrain"
                }
            ]
        },
        "thrdtrain": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/3.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 220,
                    "type": "scene",
                    "text": "Prev spot",
                    "sceneId": "scndtrain"
                },
                {
                    "pitch": 0,
                    "yaw": 50,
                    "type": "scene",
                    "text": "Next spot",
                    "sceneId": "frthtrain"
                }
            ]
        },
        "frthtrain": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/4.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 145,
                    "type": "scene",
                    "text": "Prev spot",
                    "sceneId": "thrdtrain"
                },
                {
                    "pitch": 0,
                    "yaw": 78,
                    "type": "scene",
                    "text": "Next spot",
                    "sceneId": "ffthtrain"
                }
            ]
        },
        "ffthtrain": {
            "type": "equirectangular",
            "panorama": "../img/rd-room/5.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 118,
                    "type": "scene",
                    "text": "Prev spot",
                    "sceneId": "frthtrain"
                }
            ]
        }
    }
});