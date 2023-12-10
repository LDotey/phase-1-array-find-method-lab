


// function superbowlWin(record){
//     if (record.result === "W"){
//     return record.year;
//     }
// }
//     const broncosWin = record.find((superbowlWin) => superbowlWin === "W");
//     console.log (broncosWin);
    function superbowlWin(record) {
        const broncosWin = record.find(obj => obj.result === "W");
        if (broncosWin) {
          return broncosWin.year;
        }
      }
