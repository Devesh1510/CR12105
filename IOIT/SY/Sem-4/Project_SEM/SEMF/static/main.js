 // Function to show Signup form
        window.showLoginForm = function() {
    document.getElementById("authPage").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";

    if (authPage) authPage.style.display = "none";
    if (loginForm) loginForm.style.display = "block";
    if (signupForm) signupForm.style.display = "none";
    };

    window.showSignupForm = function() {
    const authPage = document.getElementById("authPage");
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    
     console.log({ authPage, signupForm, loginForm });
     
    if (authPage) authPage.style.display = "none";
    if (signupForm) signupForm.style.display = "block";
    if (loginForm) loginForm.style.display = "none";
};

// Function to handle the toggle when the button is clicked
function toggleRecipeDetails(event) {
    // 1. Get the target ID from the button's data attribute
    const targetId = event.currentTarget.getAttribute('data-target');
    const detailsElement = document.getElementById(targetId);

    if (detailsElement) {
        // 2. Toggle the display style
        if (detailsElement.style.display === 'none') {
            detailsElement.style.display = 'block';
            event.currentTarget.textContent = 'Hide Details'; // Change button text
        } else {
            detailsElement.style.display = 'none';
            event.currentTarget.textContent = 'View Details'; // Change button text back
        }
    }
}
    document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signupBtn");
    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            alert("Signup button clicked!");
            showSignupForm();
        });
    }
        // 3. Find all buttons with the class 'view-details-btn'
    const detailButtons = document.querySelectorAll('.view-details-btn');

    // 4. Attach the event listener to each button
    detailButtons.forEach(button => {
        button.addEventListener('click', toggleRecipeDetails);
    });

    const loginBtn = document.getElementById("loginBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            alert("Login button clicked!");
            showLoginForm();
        });
    }
});



        // Signup functionality
        // Signup functionality
        // document.getElementById("signupFormElement").onsubmit = function(event) {
        //     event.preventDefault();
        //     const username = document.getElementById("signupUsername").value;
        //     const email = document.getElementById("signupEmail").value;
        //     const password = document.getElementById("signupPassword").value;
        //     const healthCondition = document.getElementById("healthCondition").value;

        //     // Check if password is between 8 to 16 characters
        //     if (password.length < 8 || password.length > 16) {
        //         alert("Password must be between 8 to 16 characters.");
        //         return;
        //     }

        //     // Check if password contains at least one alphabet and one special character
        //     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
        //     const alphabetRegex = /[a-zA-Z]/;

        //     if (!specialCharRegex.test(password) || !alphabetRegex.test(password)) {
        //         alert("Password must contain at least one special character and one alphabet.");
        //         return;
        //     }

        //     localStorage.setItem("username", username);
        //     localStorage.setItem("email", email);
        //     localStorage.setItem("password", password);
        //     localStorage.setItem("healthCondition", healthCondition);

        //     alert("Account created successfully!");
        //     document.getElementById("signupForm").style.display = "none";
        //     document.getElementById("recipesPage").style.display = "block";
        //     document.getElementById("feedbackFormSection").style.display = "block";
        //     document.getElementById("logoutBtn").style.display = "block";
        //     showRecipePage(healthCondition);
        // };


        // // Login functionality
        // document.getElementById("loginFormElement").onsubmit = function(event) {
        //     event.preventDefault();
        //     const username = document.getElementById("loginUsername").value;
        //     const password = document.getElementById("loginPassword").value;

        //     const savedUsername = localStorage.getItem("username");
        //     const savedPassword = localStorage.getItem("password");
        //     const healthCondition = localStorage.getItem("healthCondition");

        //     if (username === savedUsername && password === savedPassword) {
        //         alert("Login successful!");
        //         document.getElementById("loginForm").style.display = "none";
        //         document.getElementById("recipesPage").style.display = "block";
        //         document.getElementById("feedbackFormSection").style.display = "block";
        //         document.getElementById("logoutBtn").style.display = "block";
        //         showRecipePage(healthCondition);
        //     } else {
        //         alert("Invalid username or password.");
        //     }
        // };

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
                description: "A delicious, moist chocolate cake made with cocoa powder and dark chocolate, topped with cream ad cherry.",
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
            },
            {
                name: "Dosa",
                description: "A crispy and savory South Indian pancake made from fermented rice and lentil batter. Often served with Sambhar and chutneys.",
                calories: "Approx. 200 calories per serving",
                image: "/static/img/dosa.PNG",
                mealType: "breakfast",
                Difficulty: "Expert",
                personalisation: "Migraine",
                ingredients: ["Rice", "Urad Dal (Black Gram)", "Toor Dal", "Fenugreek", "Salt"],
                steps: [
                    "Step 1: Soak rice and urad dal separately for 6-8 hours.",
                    "Step 2: Grind the soaked ingredients to a smooth batter.",
                    "Step 3: Let the batter ferment for 8-12 hours.",
                    "Step 4: Heat a pan and pour the batter over it, spreading the batter thin.",
                    "Step 5: Cook until crispy and serve with Sambhar and chutneys."
                ]
            },
            {
                name: "Gulab Jamun",
                description: "Soft, round, and golden-brown Indian sweets soaked in aromatic sugar syrup.",
                calories: "Approx. 300 calories per serving",
                caution: "People with diabetes should avoid this ",
                image: "/static/img/jamun.PNG",
                mealType: "dessert",
                Difficulty: "Intermediate",
                personalisation: "Migraine",
                ingredients: ["Milk powder", "Flour", "Baking soda", "Ghee", "Sugar", "Cardamom", "Rosewater"],
                steps: [
                    "Step 1: Mix milk powder, flour, and baking soda to make dough.",
                    "Step 2: Make small balls.Fry the balls until golden brown.",
                    "Step 3: Prepare sugar syrup with sugar, Rosewater, and cardamom, then soak the fried balls."
                ]
            },
            {
                name: "Multigrain Pakoda",
                description: "Crunchy , healthy and golden Indian spicy savory.",
                calories: "Approx. 200 calories per serving",
                caution: "People with High BP and allergic to Chickpeas must avoid eating this. ",
                image: "/static/img/pakodas.jpg",
                mealType: "snacks",
                Difficulty: "Intermediate",
                personalisation: "Diabetes",
                ingredients: ["Water", "Multigrain Flour", "Spices (Powdered)", "Oil", "Salt"],
                steps: [
                    "Step 1: Mix the flour , water and Spices with salt to make a thick paste.",
                    "Step 2: Make small balls.Fry the balls until golden brown.",
                    "Step 3: Serve hot with pudina and tamarind chutneys."
                ]
            },
            {
                name: "Palak Paneer",
                description: "A rich and creamy curry made with spinach and paneer.",
                calories: "Approx. 300 calories per serving",
                caution: "People with milk and spinach allergy should refrain from eating this ",
                image: "/static/img/palak.PNG",
                mealType: "lunch",
                Difficulty: "Intermediate",
                personalisation: "Hypertension",
                ingredients: ["Spinach", "Paneer", "Cream", "Spices"],
                steps: [
                    "Step 1: Cook spinach gravy with spices.",
                    "Step 2: Add paneer and cook until soft. Serve with roti/Chapati"
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
                    <p><strong>Caution:</strong> <span class="caution-value">${recipe.caution || 'No specific cautions'}</span></p>
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

        // Function to filter recipes

    function filterRecipes() {
    const mealType = document.getElementById("mealFilterType").value;
    const difficulty = document.getElementById("mealFilterDifficulty").value;
    const personalisation = document.getElementById("mealFilterpersonalisation").value;

    const filteredRecipes = recipes.filter(recipe => {
        const matchesMealType = mealType === "" || recipe.mealType === mealType;
        const matchesDifficulty = difficulty === "" || recipe.Difficulty === difficulty;
        const matchesPersonalisation = personalisation === "" || recipe.personalisation === personalisation;

        // All conditions must be true for the recipe to be included
        return matchesMealType && matchesDifficulty && matchesPersonalisation;
    });

    displayRecipes(filteredRecipes);
}

        // Function to show recipe page with health condition
        function showRecipePage(healthCondition) {
            document.getElementById("recipesPage").style.display = "block";
            document.getElementById("feedbackFormSection").style.display = "block";
            
            // Filter recipes based on health condition if needed
            let filteredRecipes = recipes;
            if (healthCondition) {
                document.getElementById("mealFilterpersonalisation").value = healthCondition;
                filterRecipes();
            } else {
                displayRecipes(recipes);
            }
        }

        

        // Function to view recipe details
        function viewRecipeDetails(index) {
            const recipeDetails = document.getElementById(`recipe-details-${index}`);
            recipeDetails.style.display = recipeDetails.style.display === "none" ? "block" : "none";
        }

        const addBtn = document.getElementById('addRecipeBtn');
        const modal = document.getElementById('recipeModal');
        const closeModal = document.getElementById('closeModal');
        const recipeForm = document.getElementById('recipeForm');
        const imageInput = document.getElementById('recipeImage');
        const imagePreview = document.getElementById('imagePreview');

        if (addBtn && modal) {
    addBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
}

        // Close modal when X is clicked
        if (closeModal && modal && recipeForm && imagePreview) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        recipeForm.reset();
        imagePreview.style.display = 'none';
    });
}

       if (modal && recipeForm && imagePreview) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            recipeForm.reset();
            imagePreview.style.display = 'none';
        }
    });
}

        // Show image preview
        if (imageInput && imagePreview) {
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
}
        if (recipeForm && modal && imagePreview) {
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
                mealType: document.getElementById('recipeMealType').value || "",
                Difficulty: document.getElementById('recipeDifficulty').value || "", 
                personalisation: document.getElementById('recipePersonalisation').value || "",
            };
            
            // Here you would typically send this data to a server or save it locally
            console.log('Recipe data:', recipeData);

            recipes.push(recipeData);

            
            // For demonstration, alert the user
            alert('Recipe added successfully!');
            
            // Close the modal and reset the form
            modal.style.display = 'none';
            recipeForm.reset();
            imagePreview.style.display = 'none';
        });
        // Initial call to display all recipes
        displayRecipes(recipes);
    }