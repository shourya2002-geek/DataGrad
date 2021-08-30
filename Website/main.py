import pandas as pd
from sklearn import neighbors, datasets
from numpy.random import permutation
import matplotlib.pyplot as plt
import numpy as np
import string
from sklearn import svm
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_recall_fscore_support
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from similarity.cosine import Cosine
import random
from flask import Flask
from flask_cors import CORS,cross_origin
from flask import request,make_response,jsonify
import itertools    



app = Flask(__name__)
CORS(app)

def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response
def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

def course_difficulty(level,df):
    data = df.copy().loc[df['Difficulty Level']==level]
    data['index'] = np.arange(0, data.shape[0])
    return data

def remove_punctuations(text):
    text = str(text) 
    for punctuation in string.punctuation:
        text = text.replace(punctuation, '')
    return text

def recommender_system(skill,data):
    cosine = Cosine(2)
    data["skill"] = skill
    data["p0"] = data["skill"].apply(lambda s: cosine.get_profile(s)) 
    data["p1"] = data["new_column"].apply(lambda s: cosine.get_profile(s)) 
    data["cosine_sim"] = [cosine.similarity_profiles(p0,p1) for p0,p1 in zip(data["p0"],data["p1"])]
    data.drop(["p0", "p1"], axis=1,inplace =  True)
    return data

def medium_recommender_system(skill):
    cosine = Cosine(2)
    medium["skill_provided"] = skill
    medium["p0"] = medium["skill_provided"].apply(lambda s: cosine.get_profile(s)) 
    medium["p1"] = medium["Skills"].apply(lambda s: cosine.get_profile(s)) 
    medium["cosine_sim"] = [cosine.similarity_profiles(p0,p1) for p0,p1 in zip(medium["p0"],medium["p1"])]
    medium.drop(["p0", "p1"], axis=1,inplace =  True)
    return medium




@app.route('/', methods=['GET'])
def hello():
    return jsonify({"response":"This is Sentiment Application"})



@app.route('/predict',methods=['POST'])
@cross_origin()
def predict():


    if request.method == 'POST':

        user = request.get_json(force=True)

        skill  = user['skill']
        level = user['level']
        

        
        df = pd.read_csv("https://raw.githubusercontent.com/Ayush-Batra/Hackathon_/main/combine.csv?token=AR6BG7TH4CVTNV4UHXJEOZDBGJZUA",encoding='cp1252')
        

        data = course_difficulty(level,df)


        data['final'] = data['all_skill'] + data['Course Description'] + data['Course Name']
        data['new_column'] = data['final'].apply(remove_punctuations)

        final = recommender_system(skill,data)

        data = data.sort_values('cosine_sim', ascending = False)

        
        courses = list(data[0:5]['Course Name'])
        courses_links = list(data[0:5]['Course URL'])
        courses_levels = list(data[0:5]['Difficulty Level'])
        courses_orgs = list(data[0:5]['University / Industry Partner Name'])
        courses_desc = list(data[0:5]['Course Description'])


        final = []


        one  = list(itertools.chain(courses, courses_links))
        two =  list(itertools.chain(courses_levels, courses_orgs))

        final = list(itertools.chain(one, two))


        


        





            

            
        return (jsonify(final))















if __name__ == "__main__":
    app.run(debug=True)



