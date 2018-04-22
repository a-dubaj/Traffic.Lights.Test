function dodaj(a, b) {
  return b
}

function test_dodaj() {
  var wynik = dodaj1(2,2)

  if(wynik === 4){
    console.log('ok')
  } else {
    console.error('wynik powinien byc 4 a jest', wynik)
  }
}

function test_dodaj2() {
  var wynik = dodaj(0,2)

  if(wynik === 2){
    console.log('ok')
  } else {
    console.error('wynik powinien byc 2 a jest', wynik)
  }
}

function test_dodaj3() {
  var wynik = dodaj(-1,-1)

  if(wynik === -2){
    console.log('ok')
  } else {
    console.error('wynik powinien byc -2 a jest', wynik)
  }
}

function test_dodaj4() {
  var wynik = dodaj(0,0)

  if(wynik === 0){
    console.log('ok')
  } else {
    console.error('wynik powinien byc 0 a jest', wynik)
  }
}

test_dodaj1()
test_dodaj2()
test_dodaj3()
test_dodaj4()
