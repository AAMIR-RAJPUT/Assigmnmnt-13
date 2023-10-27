//? q1
// def power(a, b):
//     result = 1

//     for _ in range(b):
//         result *= a

//     return result

//? q2
// def is_leap_year(year):
//     if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
//         return True
//     else:
//         return False

// # You can test the function like this:
// year = int(input("Enter a year: "))
// if is_leap_year(year):
//     print(f"{year} is a leap year.")
// else:
//     print(f"{year} is not a leap year.")
//? q3

// def calculate_semi_perimeter(a, b, c):
//     S = (a + b + c) / 2
//     return S

// def calculate_triangle_area(a, b, c):
//     S = calculate_semi_perimeter(a, b, c)
//     area = (S * (S - a) * (S - b) * (S - c)) ** 0.5
//     return area

// # Example usage:
// a = 5
// b = 6
// c = 7

// area = calculate_triangle_area(a, b, c)
// print(f"The area of the triangle with sides {a}, {b}, and {c} is {area:.2f}")

//? q4
// def calculate_average(subject1, subject2, subject3):
//     return (subject1 + subject2 + subject3) / 3

// def calculate_percentage(subject1, subject2, subject3, total_marks=300):
//     obtained_marks = subject1 + subject2 + subject3
//     return (obtained_marks / total_marks) * 100

// def main_function():
//     subject1 = float(input("Enter marks for subject 1: "))
//     subject2 = float(input("Enter marks for subject 2: "))
//     subject3 = float(input("Enter marks for subject 3: "))
    
//     average = calculate_average(subject1, subject2, subject3)
//     percentage = calculate_percentage(subject1, subject2, subject3)
    
//     print(f"Average marks: {average:.2f}")
//     print(f"Percentage: {percentage:.2f}%")

// # Call the main function to start the program
// main_function()

//? q5
// def custom_index_of(input_string, target_char):
//     for index, char in enumerate(input_string):
//         if char == target_char:
//             return index
//     return -1  # Return -1 if the character is not found in the string

// # Example usage:
// input_string = "Hello, World"
// target_char = 'o'

// index = custom_index_of(input_string, target_char)
// if index != -1:
//     print(f"The character '{target_char}' is found at index {index}.")
// else:
//     print(f"The character '{target_char}' is not in the string.")

//? q6

// def remove_vowels(sentence):
//     # Define a string containing all vowels in both uppercase and lowercase
//     vowels = "AEIOUaeiou"
    
//     # Initialize an empty string to store the result
//     result = ""
    
//     # Iterate through each character in the sentence
//     for char in sentence:
//         # Check if the character is not a vowel and add it to the result
//         if char not in vowels:
//             result += char
    
//     return result

// # Example usage:
// sentence = "This is a sample sentence without vowels."
// new_sentence = remove_vowels(sentence)
// print(new_sentence)

//? q7

// def count_successive_vowels(text):
//     text = text.lower()  # Convert the text to lowercase for case-insensitivity
//     vowels = "aeiou"
//     count = 0

//     for i in range(len(text) - 1):
//         # Check if the current and next characters are both vowels
//         if text[i] in vowels and text[i + 1] in vowels:
//             count += 1

//     return count

// # Example usage:
// text = "In the sentence, there are a few occurrences of successive vowels."
// result = count_successive_vowels(text)
// print(f"Number of successive vowels in the text: {result}")

//? q8

// def km_to_meters(distance_km):
//     return distance_km * 1000

// def km_to_feet(distance_km):
//     return distance_km * 3280.84

// def km_to_inches(distance_km):
//     return distance_km * 39370.1

// def km_to_centimeters(distance_km):
//     return distance_km * 100000

// def convert_and_print_distances(distance_km):
//     distance_meters = km_to_meters(distance_km)
//     distance_feet = km_to_feet(distance_km)
//     distance_inches = km_to_inches(distance_km)
//     distance_centimeters = km_to_centimeters(distance_km)

//     print(f"Distance in meters: {distance_meters} m")
//     print(f"Distance in feet: {distance_feet} ft")
//     print(f"Distance in inches: {distance_inches} in")
//     print(f"Distance in centimeters: {distance_centimeters} cm")

//? q9

// def calculate_overtime_pay(hours_worked):
//     standard_hours = 40  # Standard 40 hours per week
//     overtime_rate = 12.00  # Overtime pay rate per hour

//     if hours_worked <= standard_hours:
//         return 0  # No overtime pay if hours worked are within or equal to the standard hours
//     else:
//         overtime_hours = hours_worked - standard_hours
//         overtime_pay = overtime_hours * overtime_rate
//         return overtime_pay

// # Example usage:
// hours_worked = int(input("Enter the total hours worked: "))
// overtime_pay = calculate_overtime_pay(hours_worked)

// print(f"Overtime pay: Rs. {overtime_pay:.2f}")


//? q10
// def calculate_currency_notes(amount_in_hundreds):
//     # Constants for denominations
//     denominations = [100, 50, 10]

//     # Initialize variables to count the number of each denomination
//     notes_100 = 0
//     notes_50 = 0
//     notes_10 = 0

//     # Calculate the number of each denomination
//     remaining_amount = amount_in_hundreds * 100  # Convert to actual amount
//     for denomination in denominations:
//         count, remaining_amount = divmod(remaining_amount, denomination)
//         if denomination == 100:
//             notes_100 = count
//         elif denomination == 50:
//             notes_50 = count
//         elif denomination == 10:
//             notes_10 = count

//     return notes_100, notes_50, notes_10

// # Example usage:
// amount_in_hundreds = int(input("Enter the amount to be withdrawn in hundreds: "))
// notes_100, notes_50, notes_10 = calculate_currency_notes(amount_in_hundreds)

// print(f"Number of 100-rupee notes: {notes_100}")
// print(f"Number of 50-rupee notes: {notes_50}")
// print(f"Number of 10-rupee notes: {notes_10}")

