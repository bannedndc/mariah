#!/bin/bash

source ../../.venvdjango/bin/activate
pip install -r requirements.txt
python manage.py runserver 0:8000
