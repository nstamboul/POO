function killcount(counselors, jasonIntelligence) {
    return counselors.filter(([name, intelligence]) => intelligence < jasonIntelligence).map(([name]) => name);
}

const counselers = [["Tchad", 2], ["Tommy", 9]]
const jason = 7



console.log(killcount(counselers, jason));
console.log(killcount([['Tiffany', 4], ['Jack', 6], ['Megan', 7], ['Tyler', 3]], 6));