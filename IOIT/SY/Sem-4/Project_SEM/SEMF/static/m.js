document.addEventListener('DOMContentLoaded', function() {

    // Show Signup form
    function showSignupForm() {
        document.getElementById("authPage").style.display = "none";
        document.getElementById("signupForm").style.display = "block";
        document.getElementById("loginForm").style.display = "none";
    }

    // Show Login form
    function showLoginForm() {
        document.getElementById("authPage").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("signupForm").style.display = "none";
    }

    // Signup functionality
    document.getElementById("signupFormElement").addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const healthCondition = document.getElementById("healthCondition").value;

        if (password.length < 8 || password.length > 16) {
            alert("Password must be between 8 to 16 characters.");
            return;
        }

        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const alphabetRegex = /[a-zA-Z]/;

        if (!specialCharRegex.test(password) || !alphabetRegex.test(password)) {
            alert("Password must contain at least one special character and one alphabet.");
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("healthCondition", healthCondition);

        alert("Account created successfully!");
        document.getElementById("signupForm").style.display = "none";
        document.getElementById("recipesPage").style.display = "block";
        document.getElementById("feedbackFormSection").style.display = "block";
        document.getElementById("logoutBtn").style.display = "block";
        showRecipePage(healthCondition);
    });

    // Login functionality
    document.getElementById("loginFormElement").addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");
        const healthCondition = localStorage.getItem("healthCondition");

        if (username === savedUsername && password === savedPassword) {
            alert("Login successful!");
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("recipesPage").style.display = "block";
            document.getElementById("feedbackFormSection").style.display = "block";
            document.getElementById("logoutBtn").style.display = "block";
            showRecipePage(healthCondition);
        } else {
            alert("Invalid username or password.");
        }
    });

    // Logout functionality
    function logout() {
        document.getElementById("recipesPage").style.display = "none";
        document.getElementById("feedbackFormSection").style.display = "none";
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("authPage").style.display = "block";
        alert("Logged out successfully.");
    }

    // Recipe data
    const recipes = [
        {
            name: "Veg Biryani",
            description: "A fragrant and spicy rice dish made with vegetables, aromatic spices, and herbs. Served with Raita",
            calories: "Approx. 350 calories per serving",
            caution: "People with Acidity should avoid eating Biryani",
            healthCondition: "Diabetes",
            image: "/static/img/biryani.PNG",
            mealType: "lunch",
            Difficulty: "Intermediate",
            ingredients: ["Rice", "Mixed Vegetables", "Spices", "Herbs", "Yogurt"],
            steps: [
                "Step 1: Steam cook the rice for 15-20 minutes.",
                "Step 2: Fry the vegetables with spices.",
                "Step 3: Add rice to the cooked vegetables.",
                "Step 4: Let the flavors blend together. Serve with Yogurt."
            ]
        },
        {
            name: "Chocolate Cake",
            description: "A delicious, moist chocolate cake made with cocoa powder and dark chocolate, topped with cream and cherry.",
            calories: "Approx. 550 calories per serving",
            caution: "People with diabetes should eat only 250 calories of cake",
            image: "/static/img/cake.PNG",
            mealType: "dessert",
            Difficulty: "Beginner",
            personalisation: "Migraine",
            ingredients: ["Cocoa powder", "Flour", "Eggs (optional)", "Butter", "Chocolate"],
            steps: [
                "Step 1: Preheat the oven to 350°F (175°C).",
                "Step 2: Mix all dry ingredients and wet ingredients separately.",
                "Step 3: Combine the wet and dry ingredients.",
                "Step 4: Pour the batter into a greased pan and bake for 30 minutes.",
                "Step 5: Cool the cake. Add a layer of cream and top it with cherry."
            ]
        }
    ];

    // Function to display recipes
    function displayRecipes(filteredRecipes) {
        const recipeListElement = document.getElementById("recipeList");
        recipeListElement.innerHTML = "";

        filteredRecipes.forEach((recipe, index) => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");

            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <p><strong>Calories:</strong> ${recipe.calories}</p>
                <p><strong>Caution:</strong> ${recipe.caution || 'No specific cautions'}</p>
                <button onclick="viewRecipeDetails(${index})">View Recipe</button>
                <div id="recipe-details-${index}" class="recipe-details">
                    <h4>Ingredients:</h4>
                    <ul>
                        ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <h4>Steps:</h4>
                    <ol>
                        ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            `;
            recipeListElement.appendChild(recipeCard);
        });
    }

    // Function to show recipe page with health condition
    function showRecipePage(healthCondition) {
        document.getElementById("recipesPage").style.display = "block";
        document.getElementById("feedbackFormSection").style.display = "block";

        let filteredRecipes = recipes;
        if (healthCondition) {
            document.getElementById("mealFilterpersonalisation").value = healthCondition;
            filterRecipes();
        } else {
            displayRecipes(recipes);
        }
    }

    // Function to filter recipes
    function filterRecipes() {
        const mealType = document.getElementById("mealFilterType").value;
        const difficulty = document.getElementById("mealFilterDifficulty").value;
        const personalisation = document.getElementById("mealFilterpersonalisation").value;

        let filteredRecipes = recipes.filter(recipe => {
            const matchesMealType = mealType === "" || recipe.mealType === mealType;
            const matchesDifficulty = difficulty === "" || recipe.Difficulty === difficulty;
            const matchesPersonalisation = personalisation === "" || recipe.personalisation === personalisation;

            return matchesMealType && matchesDifficulty && matchesPersonalisation;
        });

        displayRecipes(filteredRecipes);
    }

    // Function to view recipe details
    function viewRecipeDetails(index) {
        const recipeDetails = document.getElementById(`recipe-details-${index}`);
        recipeDetails.style.display = recipeDetails.style.display === "none" ? "block" : "none";
    }

    // Function to add a new recipe
    const addBtn = document.getElementById('addRecipeBtn');
    const modal = document.getElementById('recipeModal');
    const closeModal = document.getElementById('closeModal');
    const recipeForm = document.getElementById('recipeForm');
    const imageInput = document.getElementById('recipeImage');
    const imagePreview = document.getElementById('imagePreview');

    addBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal when X is clicked
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        recipeForm.reset();
        imagePreview.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            recipeForm.reset();
            imagePreview.style.display = 'none';
        }
    });

    // Show image preview
    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect form data
        const recipeData = {
            name: document.getElementById('recipeName').value,
            description: document.getElementById('recipeDescription').value,
            ingredients: [document.getElementById('recipeIngredients').value],
            steps: [document.getElementById('recipeInstructions').value],
            caution: document.getElementById('recipePrecautions').value,
            image: imagePreview.src || null,
        };

        recipes.push(recipeData);

        alert('Recipe added successfully!');

        modal.style.display = 'none';
        recipeForm.reset();
        imagePreview.style.display = 'none';
    });

    // Initial call to display all recipes
    displayRecipes(recipes);
});
