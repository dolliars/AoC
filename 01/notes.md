## Day 1 challenge notes

Seems like for this problem we need 3 tools:
- adder
- validator
- multiplier

The data is given as 1 number per line, so it's trivial to turn that into an
array. Just add a comma at the end of each line, save for the last line, and put
that in square brackets.

We'll have 2 inputs that can vary:
- the array of numbers
- and the number they need to sum up

Right now we know that we have:
- 200 inputs, and
- the sum will be 2020

These are the most likely to change: "oh sorry, we gave you the wrong data set",
"oops. we need it for 2021 actually". These seem like real scenarios.

It's always a good idea to run tests, so let's add that into the mix. We'll
assume only integers but let's add negative numbers for kicks.

So at first for the `testAdder` I was going to write something like:

`if (adder(1,2)  === 3) console.log('PASS: 2 + 1');`

However! This is actually a great time to use a ternary operator! Something like
this instead:

`adder(1,2)  === 3  ? console.log('Test 1: PASS:  2 + 1') : console.log('Test 1: FAIL');`

This could be written better. It should be refactored so that the conditional
expression isn't a direct call to the function and the validation of the sum.
Instead it should probably be a variable, something like `isSumCorrect`, that
stores the BOOlean and where we'd return a string that says `PASS` or `FAIL` and
assuming wherever we print it will have the tested equation.

I almost skipped doing this testing part because I live in a pressurized cabin
and I can't get out!

No, but for real. Seems like every time I start something I want to push to get
it done and out of the way as opposed to slowing down a bit and being more
thoughtful about it. Doing this reminded me how much I love ternary operators!!
They're so great! When readable that is. I could definetly be clearer but I see
the path to refactoring so I think it's okay to pause it here. I'm glad I wrote
them.

Oh. And we could write the test so that it works with the multiplication as
well. I won't add it but this could also be done in the futur. We could add that
to a list so we can keep track of these type of things that are really great to
have and that we should do.

-----------------------------------

Getting more into the crux of the problem, I'm wondering about other potential
cases.

There could be a circumstance where you start by filtering things out of your
data set. If you know what your lowest number is, then you can check the
difference between that and your objective sum. Or if you have a lot of numbers
that are above your target, you could just skip those.

In any case, here we're assuming:
- the numbers are not in order
- all the numbers are below the target sum

The most obvious way to solve this is by nesting loops. And that's what I did
for both part 1 and 2. 

Asymptotic efficiency of part 1: O(n²)
Asymptotic efficiency of part 2: O(n³)

So we've got a quadratic algorithm, and a cubic algorithm.

------------------------------------

TODO
- Refactor `testAdder` to:
  - Be more general so that it works with addition, substraction, division, and
    multiplication
  - remove conditional expression out of function
  - Return only `PASS` or `FAIL` string as oppose to having the console in it

------------------------------------

Ok so at this point, we know that the algorithm is **super** inefficient. Bad
for part 1, and even worse for part 2. The separation of concerns, i.e. adder,
multiplier, and tests are mostly useful for getting those parts out of my brain
but aren't necessary.

So how can we make this more efficient? Moving it from quadratic time to linear?
We can try with a hash table. I wasn't sure how to go about it but after having
some discussions, it was brought up to me that you could generate a hash table
using the expression that's found in the inner loop.

Generally what we're looking for is: `x + y = 2020`. But that is the same as
saying `2020 - x = y`.

After this was made apparent, I still struggled though. I've managed to come to
a solution that works for part 1 but it returns the result twice. Still, the
time complexity goes from O(n²) to O(2n), which I *believe* just turns in O(n).
I think it's because we're just interested in what it generally means, and in
this case it just means the complexity is linear.

