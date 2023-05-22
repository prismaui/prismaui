#!/bin/bash
cd ..;
find . -type d \( -name "node_modules" -prune \) -o \( -type d -a \( -name "loader" -o -name "dist-storybook" -o -name "generated" -o -name "dist" \) -exec rm -rf {} + \)
