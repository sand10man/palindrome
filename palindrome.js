const isPalindrome = (input)=> {
  const sortedWord = input.replace(' ','').toLowerCase().split('')
  const isReversed = sortedWord.reverse()

  console.log(sortedWord === isReversed)

}
isPalindrome('anna')
