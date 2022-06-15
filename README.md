Blueprint Interactive Web Developer Skills Test: Exercise One

1. Randomize the order of the following number set: "44, 154, 32, 41, 7, 22, 17, 21, 9, 20"

2. Find the mean of the following number set: "22, 14, 3, 5, 667, 19, 2, 41, 9, 70"

3. Fetch and parse the json data at https://blueprintinteractive.com/test.json to produce the following table:

First Name Last Name Email Gender
John Doe j@example.com male
Sean Parker sean@example.com male
Tony Stark tony@example.com male
Sarah Smith sarah@example.com female

Bonus
Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence.

Problems:

[] - I had several issues with the 3rd question. I spent a lot of time troubleshooting the cors error when fetching the data. Generally cors issues are resolved on the server side. In this case, Blueprint Interactive's server did not allow me to access the data. Once I reached out to Nick, they were able to get the cors error fixed on their end. However, I was unable to parse the data into json. I could only convert the response to a text. Due to the time constraint, I opted to copy and paste the data into my own object. Then, I created the table with my own obj.
