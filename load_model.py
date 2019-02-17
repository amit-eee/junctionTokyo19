#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Sun Feb 17 11:49:46 2019

@author: sezan92
"""
import sys
from keras.models import model_from_json

comment = sys.argv[1]
model = model_from_json('model_text.json')

model.save_weights('model_text.h5')

output = model.predict([comment], verbose=0, batch_size=1)
print(output[2])
sys.stdout.flush()