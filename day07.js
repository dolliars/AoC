data = [
['dim silver bags contain 3 posh fuchsia bags.'],
['wavy olive bags contain 1 striped olive bag, 1 dull cyan bag.'],
['dull coral bags contain 1 dim olive bag, 5 muted violet bags, 2 dark gray bags.'],
['bright olive bags contain 3 light indigo bags, 3 dark coral bags.'],
['clear lavender bags contain 1 dark olive bag.'],
['dim lime bags contain 3 dotted red bags.'],
['drab indigo bags contain 5 striped coral bags, 2 muted bronze bags.'],
['striped orange bags contain 5 wavy fuchsia bags, 5 clear red bags, 3 plaid red bags.'],
['dotted indigo bags contain 2 plaid white bags, 1 wavy gold bag, 1 plaid silver bag.'],
['posh plum bags contain 2 drab turquoise bags, 4 bright fuchsia bags, 4 drab indigo bags.'],
['posh violet bags contain 3 plaid olive bags, 2 posh teal bags, 1 posh purple bag.'],
['pale beige bags contain 4 wavy crimson bags, 5 shiny gold bags.'],
['shiny turquoise bags contain 5 dark gray bags, 4 clear brown bags.'],
['dark magenta bags contain 3 vibrant orange bags, 1 dull lime bag, 1 dim plum bag.'],
['light silver bags contain 2 posh coral bags.'],
['drab gold bags contain 5 mirrored gold bags, 1 bright blue bag.'],
['dull fuchsia bags contain 3 pale blue bags.'],
['muted brown bags contain 4 drab fuchsia bags, 4 plaid bronze bags.'],
['bright coral bags contain 2 dull crimson bags.'],
['clear black bags contain 5 striped brown bags.'],
['mirrored coral bags contain 2 striped brown bags, 4 clear coral bags.'],
['dull purple bags contain 1 plaid green bag, 5 shiny gold bags.'],
['drab brown bags contain 4 striped coral bags, 1 muted magenta bag, 4 faded red bags.'],
['faded plum bags contain 5 shiny orange bags.']];

let goldContainerL1 = ['vibrant maroon ', 'drab plum ', 'vibrant orange ', 'dark olive ', 'pale blue ', 'dull tomato ', 'dull purple ', 'pale beige ', 'shiny orange bags'];

function splitString(data){
  const spliter = 'contain';
  let firstHalf = [];
  let secondHalf = [];

  data.forEach(string => {
    const indexOfSpliter = string[0].indexOf(spliter);
    firstHalf = string[0].substring(0, indexOfSpliter);
    secondHalf = string[0].substring(indexOfSpliter);
    console.log(firstHalf);
    console.log(secondHalf);
  })
}


splitString(data);
