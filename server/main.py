from flask import Flask

app = Flask(__name__)
@app.route('/api/base', methods=['GET'])
def main():
    return "Hello World"
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8082, debug=True)
