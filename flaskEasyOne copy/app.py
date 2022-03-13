from flask import Flask, request, render_template
import pandas as pd
import joblib

import model

app = Flask(__name__)
app.config.from_object(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/result', methods=['POST'])
def result():
    model.train()
    clf = joblib.load("regr.pkl")
    age = request.form.get("age", type=int)
    weight = request.form.get("weight", type=int)
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    return render_template('result.html', entry=prediction)


if __name__ == '__main__':
    app.run(debug=True)
