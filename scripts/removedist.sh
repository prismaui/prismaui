#!/bin/bash
cd ..;
find . -type d \( -name "loader" -o -name "dist-storybook" -o -name "generated" -o -name "dist" \) -exec rm -rf {} +