# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
# Pseudo---->
# Create a block named word_search 
# Pass in an arr and letter paramater
# iterate over the array using select.
# use the include?() method to determine if the current value contains the letter being passed to the function
# This will return each value that meets the conditions
# print the method and pass in the array and letter paramater to see the result

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def word_search arr, letter

    arr.select{|value| value.include?(letter)}

end
p wordSearch beverages_array,letter_o
p wordSearch beverages_array,letter_t

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.
#Pseudo---->
# create a block named add_array
# pass in an array paramater named arr
# return the array sum using the .sum() method on the arr paramater
# print the method and the array paramater being passed to see the result in the terminal.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def add_array arr 
    arr.sum()
end
puts add_array nums_array1
puts add_array nums_array2


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

#Pseudo---->
# Create a class named Bike
# insert the attr_accessor and initilizer method
# add the model,wheels and speed in the initilizer and the attr_accessor.
# set the default of the wheel to 2 and thspeed to 0
# pass the model as a paramater in the initilize method.
# create a bike_info method that returns "The #{model} bike has #{wheels} wheels and is going #{speed} mph."
# create a pedal_faster method that passes in a num paramater
# return the speed equals speed plus the num paramater.
# create a brake method that passes in a num paramater.
# set speed to the number being passed minus the speed.
# create an if conditional statement that compares if speed is less than zero then return the speed is equal to zero.
# else the speed is the current positive number
# create a new instance of the class named my_bike and pass the model as 'Trek'.
# print the my_bike instance invoking each new method and pass in a num paramater as needed.

class Bike 
    attr_accessor :model, :wheels, :speed
    def initialize model
        @model = model
        @wheels = 2
        @speed = 0
        
    end

    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{speed} mph."
    end

    def pedal_faster num
        @speed += num
    end

    def brake num
        @speed -= num
        if @speed <= 0
            @speed = 0
        else
            @speed
        end

    end

end

my_bike = Bike.new('Trek')
puts my_bike.bike_info
puts my_bike.pedal_faster(10)
puts my_bike.pedal_faster(18)
puts my_bike.brake(5)
puts my_bike.brake(25)