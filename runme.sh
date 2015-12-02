#!/bin/bash
sudo docker build -t LoggingLibrary LoggingLibrary/.
sudo docker run --name LoggingLibrary -d -p 80:80 LoggingLibrary