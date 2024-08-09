<template>
    <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
        <img src="https://pro.formkit.com/logo.svg" alt="FormKit Logo" width="244" height="50" class="mx-auto mb-8 w-48" />
        <FormKit type="form" #default="{ value }" @submit="submit">
            <!-- Non-pro inputs -->
            <FormKit type="text" name="name" label="Name" help="What do people call you?" />
            <FormKit
                type="select"
                name="stateFilter"
                placeholder="Filter by State"
                open-on-focus
                open-on-remove
                selection-removable
                :options="stateOptions"
            />
            <FormKit
                type="checkbox"
                name="flavors"
                label="Favorite ice cream flavors"
                :options="{
                    vanilla: 'Vanilla',
                    chocolate: 'Chocolate',
                    strawberry: 'Strawberry',
                    'mint-chocolate-chip': 'Mint Chocolate Chip',
                    'rocky-road': 'Rocky Road',
                    'cookie-dough': 'Cookie Dough',
                    pistachio: 'Pistachio',
                }"
                validation="required|min:2"
            />
            <FormKit type="button" label="Checkout my label" help="You can use the label prop." />
            <FormKit type="color" value="#00FF00" label="Select a color" help="Select your favorite color." />
            <FormKit
                type="date"
                value="1999-01-01"
                label="Birthday"
                help="Enter your birth day"
                validation="required|date_before:2010-01-01"
                validation-visibility="live"
            />
            <FormKit type="datetime-local" label="End of the world" help="When will the end of the world take place?" />
            <FormKit
                type="email"
                label="Student email address"
                help="Please enter your student email address."
                validation="required|email|ends_with:.edu"
                validation-visibility="live"
                placeholder="vikas@school.edu"
            />
            <FormKit
                type="file"
                label="Documents"
                accept=".pdf,.doc,.docx,.xml,.md,.csv"
                help="Select as many documents as you would like."
                multiple="true"
            />
            <FormKit type="number" help="What temperature should the house be?" label="Thermostat" name="temperature" value="25" step="1" />
            <FormKit
                type="password"
                name="password"
                value="super-secret"
                label="Password"
                help="Enter a new password"
                validation="required"
                validation-visibility="live"
            />
            <FormKit
                type="radio"
                label="Preferred transportation"
                :options="['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']"
                help="How do you like to get around?"
            />
            <FormKit type="range" label="Volume" min="0" max="11" help="Select your volume level." />
            <FormKit type="search" placeholder="Search..." label="Search" value="Apple Cider" />
            <FormKit
                type="tel"
                label="Phone number"
                placeholder="xxx-xxx-xxxx"
                validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                :validation-messages="{
                    matches: 'Phone number must be in the format xxx-xxx-xxxx',
                }"
                validation-visibility="dirty"
            />
            <FormKit type="text" label="Your username" value="calypso" help="Pick a username people will remember!" />
            <FormKit
                type="textarea"
                name="instructions"
                label="Your Essay"
                placeholder="Remember to write in complete sentences."
                validation="length:0,120"
                validation-visibility="live"
                :validation-messages="{
                    length: 'Instructions cannot be more than 120 characters.',
                }"
            />
            <FormKit type="time" label="Time" value="23:15" help="What time will go home today?" />
            <FormKit
                type="url"
                label="Favorite website"
                placeholder="https://www.example.com..."
                validation="required|url"
                help="What is your favorite website?"
            />
            <FormKit type="checkbox" name="agree" label="I agree FormKit is the best form authoring framework." />

            <!-- Each of the following FormKit fields cause the memory issue. It appears to be all pro inputs. -->
			
            <!-- <FormKit type="repeater" name="invitees" label="Invitees" help="Who else should we invite to FormKit?">
                <FormKit type="text" name="email" label="Email" validation="required|email" />
            </FormKit> -->
            <!-- <FormKit
				type="autocomplete"
				name="stateFilter"
				placeholder="Filter by State"
				open-on-focus
				open-on-remove
				selection-removable
				:options="stateOptions"
            /> -->
            <!-- <FormKit
				type="dropdown"
				name="stateFilter"
				placeholder="Filter by State"
				open-on-focus
				open-on-remove
				selection-removable
				:options="stateOptions"
            /> -->
            <!-- <FormKit
				type="colorpicker"
				inline
				value="hsla(240, 75%, 35%, 0.75)"
				label="An inline colorpicker input"
				help="Shows the colorpicker inline."
            /> -->
            <!-- <FormKit
				type="datepicker"
				name="date"
				label="Appointment date"
				placeholder="Select a date"
				help="Select a date to book your appointment."
				overlay
				popover
			/> -->
            <!-- <FormKit type="mask" name="phone" mask="+1 (###) ###-####" label="Phone number" help="Please enter a phone number" /> -->
            <!-- <FormKit
				type="rating"
				name="rating"  
				label="Did we provide good service?"
			/> -->
            <!-- <FormKit type="currency" name="currency" value="12345678.90" /> -->
            <!-- <FormKit type="slider" label="A very basic slider" help="Out of the box I'm not much different than a range input." /> -->
            <!-- <FormKit
                type="taglist"
                name="car_brands"
                label="Search for your favorite car brands"
                popover
                :options="['honda', 'toyota']"
            /> -->
            <!-- <FormKit
				type="toggle"
				name="toggle"
				label="Airplane mode"
			/> -->
            <!-- <FormKit
				type="togglebuttons"
				name="shirt_size"
				label="T-shirt Size"
				:options="{
					sm: 'Small',
					md: 'Medium',
					lg: 'Large',
					xl: 'X-Large',
				}"
			/> -->
            <!-- <FormKit
                type="transferlist"
                label="Choose VIPs for the party"
                source-label="Guests"
                target-label="VIPs"
                source-empty-message="No guests found"
                target-empty-message="No VIPs selected"
                :options="guests"
            /> -->

            <pre class="font-mono text-sm p-4 bg-slate-100 mb-4">{{ value }}</pre>
        </FormKit>
    </div>
</template>

<script setup lang="ts">
async function submit() {
    await new Promise((r) => setTimeout(r, 1000));
    alert("Submitted! 🎉");
}

const guests = [
    "Monica Baker",
    "Marion Blanchard",
    "Bilal Cline",
    "Harmony Mcdowell",
    "Ellen Dunlap",
    "Anish Ruiz",
    "Edward Mcpherson",
    "Lulu Cabrera",
    "Faizan Donnelly",
    "Jonty Wilkins",
    "Jaime Gibbons",
    "Rhonda Pugh",
    "Mathilda Elliott",
    "Wilbur Chavez",
    "Barnaby Gray",
    "Rachael Bright",
    "Vincent Sherman",
    "Tina Doherty",
    "Lara Robinson",
    "Nathanael Duffy",
    "Millicent Gibbs",
    "Kye Crosby",
    "Martin Michael",
    "Randy Howard",
    "Fraser York",
    "Warren Hoffman",
    "Nannie Savage",
    "Samira Keller",
    "Ioan Hardy",
    "Markus Hanson",
    "Aiza Alvarez",
    "Chelsey Dawson",
    "Aine Bean",
    "Steffan Sullivan",
    "Meghan Ramirez",
    "Tom Parsons",
    "Fleur Franco",
    "Eileen Beltran",
    "Danny Combs",
    "Thomas Barrett",
    "Shreya Pena",
    "Harold Matthams",
    "Lilian Odling",
    "Ismaeel Byrne",
    "Clyde Solis",
    "Wilson Hebert",
    "Libbie Jensen",
    "Ida Dickson",
    "Theodore Eaton",
    "Velma Rivers",
    "Julie Foley",
    "Eloise Potts",
    "Blanche Perez",
    "Candice Howe",
    "Myah Mcmillan",
    "Lyra Fuller",
    "Alastair Rice",
    "Hannah Horton",
    "Sally Chen",
    "John Copeland",
    "Miranda Swanson",
    "Gladys Nichols",
    "Erika Newman",
    "Albie Davenport",
    "Haris Carson",
    "Minnie Perry",
    "Beatrice Connolly",
    "Halle Whitaker",
    "Damien Miles",
    "Damian Blackwell",
    "Hamish Fuentes",
    "Lisa Mcgee",
    "Keanu Bonner",
    "Jaxson Marks",
    "Umair Buckley",
    "Natalie Gentry",
    "Emre Finch",
    "Maddison Ellis",
    "Esme Long",
    "Gareth Stevenson",
    "Beth Mckee",
    "Autumn Todd",
    "Lucie Bonilla",
    "Grace Suarez",
    "Cecil Edwards",
    "Leena Blake",
    "Anya Beck",
    "Flora Benton",
    "Aleena Mcmahon",
    "Caiden Stein",
    "Mario Flores",
    "Cara Nielsen",
    "Leanne Hodges",
    "Inaya Tapia",
    "Hasnain Waller",
    "Serena Pineda",
    "Wojciech Mercado",
    "Jose Gallagher",
    "Zachary Bridges",
    "Ariana Wang",
];

const stateOptions = [
    "National",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "Washington D.C.",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
];
</script>
