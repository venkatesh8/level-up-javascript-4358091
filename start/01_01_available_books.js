// Write your code here
class Book{
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies
  }

  getAvalilability(){
    if(this.numCopies === 0){
      return "Out of Stock"
    }else if(this.numCopies <10){
      return "Restocking needed"
    }else{
      return "In Stock"
    }
  }

  get status(){
    return this.getAvalilability()
  }

  sell(numCopiesSold = 1){
    this.numCopies -= numCopiesSold
  }

  restock(numCopiesRestocked = 5){
    this.numCopies += numCopiesRestocked
  }
}

const HungerGames = new Book('Hunger Games', 'Venkatesh Badiger', 124122, 4)

HungerGames.sell(17)
HungerGames.getAvalilability()

HungerGames.restock(17)
HungerGames.getAvalilability()
