from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS



app = Flask(__name__)

CORS(app, supports_credentials=True)
cors = CORS(app, resources={r"/profanity-score": {"origins": "*"}})

classifier = pipeline("sentiment-analysis", model="tarekziade/pardonmyai-tiny")

@app.route('/profanity-score', methods=['POST'])
def process_text():
    if request.is_json:
        data = request.get_json()  # Extract data from POST request
        processed_data = predict_profanity([data['text']])  # Your data manipulation function
        return jsonify({
            "original": data['text'],
            "processed": processed_data
        }), 200
    else:
        return jsonify({"error": "Request must be JSON"}), 400


@app.route("/demo")
def demo():
    return "<p> You are a retard. I hate you. I hate the fact you exist. You are scum. You are an absolute fucking douchebag. You are a lowlife piece of human garbage. You absolute fucking retard cunt. You are a waste of a human being. You've done ABSOLUTELY NOTHING that's important. You dumb cunt, you piece of shit. You're not even a son of a bitch, that's too dignified a term for what you are. You know, you're not even human. You don't deserve the word human because you are that much of a fucking disgrace to people all around the globe, worldwide. It's a dishonor to put you in the same sentence with that word, you asshole. Are you fucking proud of yourself? Are you proud of having accomplished absolutely nothing in your life? You have only done bad things in this world. You do not deserve to live, you shit. You are a terrible excuse for a human being. You are an ABSOLUTE cunt. You are nothing but a faggot brainlet. You sleazy two-faced bastard. You slimy sluggish asshole. You TRIFLING motherfucker. </p>"


def predict_profanity(text):
    output = classifier(text)
    return output[0]['label']

if __name__ == '__main__':
    app.run(debug=True)
