        // Define the data for dropdowns
        const options = {
            leftFrontDoor: ["Window Frame", "Outer Window Support", "Door Inner", "Upper Hinge", "Lower Hinge", "Hinge Cover", "Inner Window Support", "Inner Support"],
            leftRearDoor: ["Window Frame", "Upper Hinge", "Lower Hinge", "Hinge Cover", "Door Inner", "Y support", "Inner Support", "Door Outer"],
            hood: ["Surface", "inner support", "left hinge", "right hinge", "latch", "pholder1", "pholder2", "pholder3"],
            rightFrontDoor: ["Window Frame", "Outer Window Support", "Door Inner", "Upper Hinge", "Lower Hinge", "Hinge Cover", "Inner Window Support", "Inner Support"],
            rightRearDoor: ["Window Frame", "Upper Hinge", "Lower Hinge", "Hinge Cover", "Door Inner", "Y support", "Inner Support", "Door Outer"],
            luggage: ["Left Combo Light", "Right Combo Light", "Left Hinge Bracket", "Right Hinge Bracket", "Nut retainer", "Left nut retainer cover", "Right nut retainer cover", "Latch nut retainer", "Upper", "Camera and smartkey bracket", "Lower", "Inner"]
        };

        function updateDropdown2() {
            const dropdown1 = document.getElementById("dropdown1");
            const dropdown2 = document.getElementById("dropdown2");
            const selectedCategory = dropdown1.value;

            // Clear the second dropdown
            dropdown2.innerHTML = '<option value="">--Choose--</option>';

            // Populate the second dropdown based on the first dropdown's selection
            if (options[selectedCategory]) {
                options[selectedCategory].forEach(item => {
                    const optionElement = document.createElement("option");
                    optionElement.value = item.toLowerCase();
                    optionElement.textContent = item;
                    dropdown2.appendChild(optionElement);
                });
            }
        }