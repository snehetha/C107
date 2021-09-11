function start(){
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    var classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sVlLrO6-O/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotresults);
}
dog=0;
cat=0;
function gotresults(error ,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}