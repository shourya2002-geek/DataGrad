# DataGrad

## Vision
With the availability of numerous paid and free resources on the internet, it becomes overwhelming for students to
learn new skills. AlphaGrad aims to bridge the gap between top MOOCs like Coursera, Udacity, EdX, medium article tutorials, 
and students eager to learn new skills. One only has to enter their level and the skill they want to learn, and AlphaGrad presents the Top 5 relevant courses and medium 
articles carefully picked from various sites to them. The application will be beneficial for college students learning new skills, working professionals trying to upskill, 
and women on career breaks to revise concepts before re-joining. 

## Model Description
### User-End:
The model takes the skill the user wants to learn and their level as input and presents the Top 5 relevant courses and medium articles to them as output.

### Recommender System:
A content-based [recommender system](/Recommender&#32;System/final.ipynb) built using the Python libraries - [NumPy](/https://numpy.org/), [Pandas](/https://pandas.pydata.org/), 
and [strsim](/https://pypi.org/project/strsim/). The model works on the concept of cosine similarity between the skill 
input by the user and the [database](/Recommender&#32;System/combine.csv) cleaned using Microsoft Excel and filtered based on the level of course/ article required. The modular approach makes it easier to deploy the model.

### Website:
Built using [HTML](/https://devdocs.io/html/), [CSS](/https://devdocs.io/css/), [ReactJS](/https://reactjs.org/docs/getting-started.html), and [Bootstrap](/https://getbootstrap.com/) on the frontend and 
[Flask](/https://flask.palletsprojects.com/en/2.0.x/) on the backend, the website plays a significant role in the UI/UX experience. 
[ParticleJS](/https://vincentgarreau.com/particles.js/) is used to add animations that are pleasing to the eye.

## TechStack
### For the Machine Learning Model:
***Data Wrangling:***

Microsoft Excel

***Data Manipulation:***

[NumPy](/https://numpy.org/) &nbsp; [Pandas](/https://pandas.pydata.org/)

***Recommender System:***

[strsim](/https://pypi.org/project/strsim/)

### For the Website:

***Front-End:***

[HTML](/https://devdocs.io/html/) &nbsp; [CSS](/https://devdocs.io/css/) &nbsp; [Bootstrap](/https://getbootstrap.com/) &nbsp; [ReactJS](/https://reactjs.org/docs/getting-started.html) &nbsp; [ParticleJS](/https://vincentgarreau.com/particles.js/)


***Back-End:***

[Flask](/https://flask.palletsprojects.com/en/2.0.x/)

