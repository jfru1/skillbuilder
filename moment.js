function checkTime(a){ //a is just the object in question, the post that was made.
    var timeNow = moment();
    var timeStamp = moment(a.created); //a.created is the stamp and can be changed to whatever it actually resolves to
    var hoursElapsed = timeNow.diff(timeStamp, 'h');
    if (hoursElapsed > 24){
        [Load up the components for entering in the new entry]
    } else {
        [Load up the box, greyed out]
    }
}
