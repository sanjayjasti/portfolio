# Apple Stock Price Prediction using Deep Learning (LSTM)

## Project Overview

This project predicts the next day's Apple stock price using a Long Short-Term Memory (LSTM) neural network. Live stock market data is fetched from Yahoo Finance and processed to generate future price predictions with interactive visualizations through a Flask web application.

## Features

* **Live Apple stock data** from Yahoo Finance (2-year historical data)
* **LSTM-based next-day stock price prediction** with 60-day sequence modeling
* **Interactive web interface** with real-time predictions
* **Actual vs Predicted stock price visualization** with matplotlib graphs
* **Current stock price display** with next-day prediction
* **Direction indicator** (📈 Up / 📉 Down) for predicted price movement
* **Recent 30-day data table** showing actual vs predicted comparisons

## Technologies Used

### Deep Learning
* **TensorFlow** - Deep learning framework
* **Keras** - High-level neural networks API
* **LSTM Neural Networks** - For sequence prediction

### Backend
* **Python** - Core programming language
* **Flask** - Web application framework
* **NumPy** - Numerical computations
* **Pandas** - Data manipulation and analysis
* **Scikit-learn** - Data preprocessing and scaling

### Frontend
* **HTML/CSS** - User interface styling
* **JavaScript** - Interactive web functionality
* **Matplotlib** - Data visualization and chart generation

### Data Source
* **Yahoo Finance (yfinance)** - Real-time stock market data

## Project Structure

```
apple-stock-price-prediction/
│
├── app.py                 # Main Flask application
├── model.keras           # Pre-trained LSTM model
├── scaler.pkl           # MinMaxScaler for data normalization
├── requirements.txt     # Project dependencies
├── runtime.txt         # Python version specification
├── prediction.png      # Sample prediction visualization
│
├── static/             # Static web assets
│   ├── style.css      # Application styling
│   ├── script.js      # JavaScript functionality
│   └── *.png          # Generated charts and graphs
│
└── templates/          # HTML templates
    └── index.html     # Main web interface
```

## Model Architecture

The LSTM model uses:
- **Sequence length**: 60 days of historical data
- **Input features**: Close price (scaled using MinMaxScaler)
- **Model type**: Sequential LSTM network
- **Output**: Next-day stock price prediction

## Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd apple-stock-price-prediction-main
```

2. **Create virtual environment** (recommended)
```bash
python -m venv .venv
```

3. **Activate virtual environment**
```bash
# Windows
.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate
```

4. **Install dependencies**
```bash
pip install -r requirements.txt
```

5. **Run the application**
```bash
python app.py
```

6. **Access the application**
Open your browser and navigate to `http://localhost:5000`

## Usage

1. **Launch the application** using the steps above
2. **View current Apple stock price** on the main dashboard
3. **See next-day prediction** with direction indicator
4. **Analyze the prediction graph** showing actual vs predicted prices
5. **Review recent performance** in the data table

## Model Performance

The LSTM model:
- Uses **60-day sequences** for pattern recognition
- Processes **2 years of historical data** for predictions
- Provides **real-time predictions** updated on each page refresh
- Includes **data normalization** using MinMaxScaler for better performance

## API Endpoints

- **`GET /`** - Main dashboard with predictions and visualizations

## Dependencies

```
Flask==3.1.0
tensorflow==2.20.0
numpy==2.4.6
pandas==3.0.3
matplotlib==3.10.0
scikit-learn==1.6.1
yfinance==0.2.65
keras==3.13.2
gunicorn
```

## Deployment

The application is ready for deployment on platforms like Heroku, with:
- **Gunicorn** server for production
- **runtime.txt** specifying Python version
- **Environment variables** support for PORT configuration

## Important Notes

⚠️ **Disclaimer**: This application is for educational and research purposes only. Stock price predictions are inherently uncertain and should not be used as the sole basis for investment decisions.

## Future Enhancements

- Multiple stock ticker support
- Extended prediction horizons (weekly/monthly)
- Additional technical indicators
- Model comparison dashboard
- User authentication and portfolio tracking

## License

This project is open source and available under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ using Python, TensorFlow, and Flask**

