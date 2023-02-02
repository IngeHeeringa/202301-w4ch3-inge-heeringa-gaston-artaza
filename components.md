# DATA

## DATA LAYER

- Phone number
- Is calling (boolean)

## DATA MODIFICATIONS

- Add digit to phone number
- Clear phone number
- Set 'Is calling' (true)
- Set 'Is calling' (false)

# COMPONENTS

## PROVIDER (CONTEXT)

- Contains the function to add a number
- Contains the function to clear the whole number
- Contains the function to call
- Contains the function to hang up

## APP

## INFO

- Receives the 'is calling' status
- Shows the 'is calling' status

## DISPLAY

- Receives phone number
- Receives the result of the 'add a number' function
- Receives the result of the 'clear the number' function
- Shows the phone number

## ACTIONS

- Receives 'Is calling' status
- Shows 'Is calling' or not
- One of the 'Action' components takes the function to call
- One of the 'Action' components takes the function to hung up

## KEYBOARD

- Receives 'Is calling' status

### KEY

- Takes the function to add a number
- Takes the function to clear the whole number
