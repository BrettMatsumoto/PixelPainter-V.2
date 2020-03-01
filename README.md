# PixelPainter-V.2

There are two goals of this project.

1) Have a color swath and grid that can be dynamically created with at least two buttons (one for erasing a color and one for clearing the entire canvas).

2) Implement Tupper's self-referential formula

# Challenges encountered

1) The first challenge encountered was being able to create a canvas that I could append the grid squares onto where the grid squares would stay within the borders of the canvas regardless of the screen size.
    -My first attempt to solve this issue was to dynamically populate rows by using window.getComputerStyle.