#!/bin/bash

# Install SDK Extensions
for sdk in /*_sdk_*; do
    slc signature trust --sdk "$sdk"

    ln -s $PWD/gecko_sdk_extensions "$sdk"/extension

    for ext in "$sdk"/extension/*/; do
        slc signature trust --sdk "$sdk" --extension-path "$ext"
    done
done