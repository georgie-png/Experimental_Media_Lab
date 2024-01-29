# Experimental_Media_Lab_Practicles
The practicles for the experimental media lab module designed.

For this experimental_media_lab project, you will need to install the RGB Matrix Library on the Raspberry Pi.

The way to do this is by:

- First, make sure Raspberry Pi's operating system is up-to-date by running the following commands in the terminal: `sudo apt update' `sudo apt-upgrade' 
- Second, use `git` to clone the `rpi-rgb-led-matrix` repository from GitHub: `git clone https://github.com/hzeller/rpi-rgb-led-matrix.git  
- Third Step is go into RGB Matrix library folder: `cd rpi-rgb-led-matrix`
- Fourth step is once you in this folder we run the command `make build-python PYTHON=$(which python 3)'
- Fifth step is install python onto this folder by running this code `sudo make install-python`
- Then when in `rpi-rgb-led-matrix` folder run this command `cd bindings/python/samples`
- Once you in the samples folder run this command `sudo python3 runtext.py --led-cols=64 --led gpio-mapping=adafruit-hat --led-slowdown-gpio=4 --text="Hello World!"` This will run runtext.py which will now display on RGB Matrix screen. 
- Make sure you download the python dev tools for this to work!
- Follow this tutorial if stuck: https://www.youtube.com/watch?v=9UsElLk2qVY




