var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "運動中心",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6602826933145618,
        "pitch": -0.043679034644052095,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 1.1465914899282854,
          "pitch": -0.6792730709749097,
          "title": "國旗<div><br></div>",
          "text": "中華民國國旗為代表中華民國的旗幟，是中華民國國家象徵之一。<div><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABqCAIAAADC5H8jAAALF0lEQVR4Ae2ce1AT1x7Hd/PawGiC1UHEESNYp1SqHV/VXsBOsS86bUc71koVRUeno1VnaOfqzG21M7X/tH/cTu+dbBJJAIGiiMClYlWeRRBGxUfVImCtyiMQwKQkIa/dk9tlnUyEuCVhcaZnT2b/2JxzNpvv73N+v/M752yCYZhaOMcU7N9DGAEwTAgHJhyuGKZGaKH1Y4QWoYUhYqOADAPFgKkDQovQ8ppISyQagtA+/QwOjbWTO9biuHrhwmMvvliE45N7o7FdB6HlweI4rn4SObGY3LevYf/+JpGIHGt9DHvihQEbB1WI0PKAVirVJCeX4XgAeHK5trq6q7HRKBYHqJVInnhhUBQDNkZo+UH7/fc33nrr1Fh+KlW+1ep2uajo6NxRni2RaFJSyjWaW6PKA3IKoRCh5QGtWEyuXXump8eellYplWr8MWRk1LhctMdDb95c5Q9eKtVs3Fh59+7Q+vVnEdqA85mgCidx8vPsswX9/Q6TaTg1tcJHVyQiDYZWmgYUBfT6VjZPxnG1RKJ5881Tvb3DPT32BQt+QGiDohiw8SSinTHDcOmSCQAwMODYvLmKTZoUiqzGRqPX66Vp0NzcGxGhxzCG64cfVg4OOgHwXrzYN20aUzgZBwrI/JiVILQ5ObdpGgDg7e0dXrfujEhEqlR5vb3DAHgBAA8fOmNijkqlmnfeOW0yDQMAaBocPdr2pMx54rARWn7QisXkxo2VFAW8Xq/bTZtMw2+8cWr27NwVK07Om5c/b17+qlUls2blpKZWGI12mmaauVxUenr1xBE+6RMQ2uDQhoXpUlLKY2Pzw8J0EonGN0ziuHrmzByr1f3HHy6d7tfVq8tmzsxZvbosI6MmM7Px008bt22rSUoqjYpiCnW6X4eG3AMDjjlzjvrAsGOwXK6dOzfv1Vf/Fxam81WFdoLQBodWJCLff/+s0Wi/cKF3794GlSpPqcwiCK1EopFINAUFHcnJZdOm6T/44FxHh8XloigKjLy8FAVcLqqtzbxhwzmlMuuVV8oMhtsj/YMkCK1CkRUTk7dzZ119fU9fHxPP/dNphDZg6uRfyE8aJZFotmyptlhcAHiHhz03bw4WF/+WmdkYF1egUGQtXXqitrabDbneQC+KAvX1PYsXFykUWbGx+Z98cv748TvXrw9YrW4AvHa7Z9OmKl7WnJHXBue1rANJpZqPNlWZzU6vl0mRKArcuze0aNHxxMTSzk4bO+IGwvqojKZBd7ft5ZdLliw5ce/eEEUxKRUAXrPZlfZRlX+cD81f2asQ2lDQYphaLteuXXvGYnHRNBNp9+w5Hxub395u+UuuLF4AQFubecGCHz7++OeRoO01m53r1p0lCK1v/J4IV/QATYhcWaMzkXlrjcXiqq7umjHDUFDQzhGHxzoxRYHCwg6lkpn7ms3OLVuqJZLHVrIQWv/RlPucn7HW3+IiEZmypnzDhnPx8YXs6DsWIUdJf78jIeHY5s3ViUmlvjUs/8+fyDkKyBNyXAxTi0SkXK77/POLgJmsBvdyu+lDhy7JZNqAu0YT4YoCcohcw8N10dG5y5YVf/11S1NT74wZ2Zcvm4KjOtKapsEvvwyEhemuXu3/9ttrL710Mjo6Nzxcxwtp5LXjoovjaplMq1TqX3/9x8OHW06fvt/ebnE4mGlrS4spKirHbHaFgNbrZWY7BKG7cWPQ46EdDqq93XLmzINvvrmamloREaGXyTQhY0Zox4mWfPvt0+fOdT54YHU4KI+H9oXfurpudlM2NLROJ6VU6hsbjWwKBgCzuOFwUF1dtrq67nff/SnkRWaEdlxoR550IdlFhtTUCoPh9sgSvxcA79WrA5GR2ewcNwS6drtHKtXeuvWQppnZrdnszM9vf++9n+LiCpTKrJBdFo214+XKZjQjz0CRYjEplWoUiqx/JJZmZjZqNDenTdM3NDCbd8G+Rjb7+ghCq9e3HjjQnJhYqlBkSaUasZjEcXKCE1zktcHR9c9acZzBLJfr5HLtZ59dCJYru0d04EATQWjZVeiQY6//t/KdI7QTQcvkVnv2nE9Pr46PLzQa7b4BeJyYu7pszz9fuH177a5d9XI5z88qI7Qhoh3JmTW7d593uaimpt7IyGy9vnWcq4wseIoChuzWiAh9S0u/w0Ht29fA76oFQhsiWoLQ7t/fzG7XuN30V19dnjkz5/Jl0/jXGpuaelWqvIMHL7GX/Lkc/cUXF3mMyQhtKGgJQrt3b4Pd7mH9DwCv0Whfvrw4IeH4tWsDf0l3JK/uf+GF4ytWFPvCOADAZvNkZjby5bsIbXBocVxNENqDBy9aLC63m7Za3TdvDh4+3LJyZckzzxgiIvQqVV5R0Z3h4UfURw26NA2cTqqo6M7cucwe/vTphhUrTh46dOnKlX6r1e10Ular+8svL/Ey7iK0waEVi8lt22qrqrpyc2/v3l2fkHBMKtWIRMxERSwmT5z4bevWmujo3LS0yrKy3+/dG7LbPQ4H5XBQdrvnzz3dkpK76ek1s2blZmTU5uW1sQhFImY2FR9fuGNHXXZ2a2Vl5/bttegpC+6tnlG1POz8TJlyJDxcNzLvfKxP4Lg6KirH46EpCly4YIyLyxeJSJlMq1Llr1lT/tprP6pU+TIZ85xNXFxBc3MfRQGbzT13bp5vrsKesF0kLEw3deqRUVXBvkVe+xih8Zgv4EqCREJmZNSwGTJFgb4+e3x8YWxswYEDTbt21e/a9fPBgxfnzMlbvLiou9vGDsYuF71zZ13AOwa8RcCWHIUIbdBoA1qTILSFhR3sczCdndalS4tFInL27Nz7960uF+10Uj099lmzciQSzZKlJzo7Gbo0DY4d65h44A34fdBCIz9cMUwdGZl95Uo/TYP+fseaNeUssKlTj9TX97C/HmhoMCqVWeyvB1JSyk0mB7trNH264UlsJliOvJYHujiufu65wsFB54MH1sTEUt/cFMdJrfYW+5sfkrwpkz1ab8JxdVJS2d3fh4xGJm7zEn7H9gOElge0YjG5aVOlxeJatqx4VIBNS6tkf6m3fv1Z/yocV69cVdLVZdu6tRqhHZXuhvCWhwx5rHNgGDPT/e6768nJZf7w2JYxMUcfPnTabO7IyJxRCMViMimp9D//vTGqPOAtQihEXsuD17JTGl8c9scgl2srKu5XVXWNpY5hzFR4/vyCiWzK+t9r1DlCywPaUTb1fysWkzt21O3Z0xAQvH9L3s8R2slFi2Hq+fMLFi48NklRl6NDILSTjlYsJvl9dpwDp38VQjvpaP3N/TTPEVqEFoZ/95usyc/T9MXx3wt5LfJa5LWT8z8x4/fCYFsKy2sXYf8SzrEc+6cDk4SwaPd3vAQzYgrhHH3YFA+G/x05hfCdYRhUQpAthEsQWmgtAK0wIfglt0aEFloLQCuMu0cLoRahhdYC0AoTgl9ya0RoobUAtMK4e7QQahFaaC0ArTAh+CW3RoQWWgtAK4y7RwuhFqGF1gLQChOCX3JrRGihtQC0wrh7tBBqEVpoLQCtMCH4JbdGhBZaC0ArjLtHC6EWoYXWAtAKE4JfcmtEaKG1ALTCuHu0EGoRWmgtAK0wIfglt0aEFloLQCuMu0cLoRahhdYC0AoTgl9ya0RoobUAtMK4e7QQahFaaC0ArTAh+CW3RoQWWgtAK4y7RwuhFqGF1gLQChOCX3JrRGihtQC0wrh7tBBqEVpoLQCtMCH4JbdGhBZaC0ArjLtHC6EWoYXWAtAKE4JfcmtEaKG1ALTCuHu0EGoRWmgtgAGRCB1QWgCjVq1CB5QW+D9Q/rGzmdoQbAAAAABJRU5ErkJggg==\" alt=\"\"></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
