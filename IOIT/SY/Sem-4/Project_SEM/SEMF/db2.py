from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

# Secret key for session management
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'static/img/'  # Folder for uploaded images
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

# User Model for Authentication
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    health_condition = db.Column(db.String(100), nullable=False)

# Recipe Model for storing recipes
class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    ingredients = db.Column(db.Text, nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    precautions = db.Column(db.Text, nullable=True)
    health_condition = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(200), nullable=True)

# User Loader for Flask-Login
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# Home Route
@app.route('/')
def home():
    return render_template('tc.html')

# Signup Route
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        health_condition = request.form['healthCondition']
        
        # Check if username or email exists
        if User.query.filter_by(username=username).first():
            flash('Username already exists!', 'danger')
            return redirect(url_for('signup'))
        
        if User.query.filter_by(email=email).first():
            flash('Email already exists!', 'danger')
            return redirect(url_for('signup'))

        # Hash the password before storing
        hashed_password = generate_password_hash(password, method='sha256')
        
        # Create new user
        new_user = User(username=username, email=email, password=hashed_password, health_condition=health_condition)
        
        db.session.add(new_user)
        db.session.commit()

        flash('Account created!', 'success')
        login_user(new_user)
        return redirect(url_for('dashboard'))

    return render_template('signup.html')

# Login Route
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        user = User.query.filter_by(username=username).first()

        if user and check_password_hash(user.password, password):  # Check hashed password
            login_user(user)
            return redirect(url_for('dashboard'))
        
        flash('Login failed! Check your credentials.', 'danger')
    return render_template('login.html')

# Dashboard Route (Protected)
@app.route('/dashboard')
@login_required
def dashboard():
    return render_template('dashboard.html')

# Logout Route
@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

# Recipe Display Page
@app.route('/recipes', methods=['GET'])
def recipes():
    health_condition_filter = request.args.get('health_condition', '')
    meal_type_filter = request.args.get('meal_type', '')
    difficulty_filter = request.args.get('difficulty', '')

    filters = []
    if health_condition_filter:
        filters.append(Recipe.health_condition == health_condition_filter)
    if meal_type_filter:
        filters.append(Recipe.name.like(f"%{meal_type_filter}%"))
    if difficulty_filter:
        filters.append(Recipe.name.like(f"%{difficulty_filter}%"))

    recipes = Recipe.query.filter(*filters).all()
    return render_template('recipes.html', recipes=recipes)

# Add Recipe Route
@app.route('/add_recipe', methods=['GET', 'POST'])
@login_required
def add_recipe():
    # Check if the file is allowed
    def allowed_file(filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

    if request.method == 'POST':
        name = request.form['recipeName']
        description = request.form['recipeDescription']
        ingredients = request.form['recipeIngredients']
        instructions = request.form['recipeInstructions']
        precautions = request.form['recipePrecautions']
        health_condition = current_user.health_condition  # Use user's health condition
        image_file = request.files.get('recipeImage')  # Handle file upload
        
        image_url = None
        if image_file and allowed_file(image_file.filename):
            filename = secure_filename(image_file.filename)
            image_file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            image_url = os.path.join(app.config['UPLOAD_FOLDER'], filename)

        new_recipe = Recipe(
            name=name,
            description=description,
            ingredients=ingredients,
            instructions=instructions,
            precautions=precautions,
            health_condition=health_condition,
            image_url=image_url
        )
        
        db.session.add(new_recipe)
        db.session.commit()

        flash('Recipe added successfully!', 'success')
        return redirect(url_for('recipes'))

    return render_template('add_recipe.html')

if __name__ == '__main__':
    app.run(debug=True)
